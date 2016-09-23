import React from 'react';
import Task from './Task.js';
import UID from './UID.js';

class Story extends React.Component{


  constructor(props){
    super(props);
    this.state={tasks: []};
  }


  getTasks(type){
    var tasksWithState= [];

    this.state.tasks.forEach(function(task){
      if(task.type === type){
        tasksWithState.push(<Task type={task.type} onMoveLeft={this.onMoveLeft.bind(this, task)} onMoveRight={this.onMoveRight.bind(this, task)} onRemove={this.onRemove.bind(this, task)} title={task.title} key={task.key}/>);
      }
    },this);

    return tasksWithState;
  }

  remove(task){
    return this.state.tasks.filter(function(element){
      return (task.key !== element.key);
    });
  }

  onMoveRight(task){
    var reducedTasks=this.remove(task);

    var newTask=null;
    if(task.type==="planned"){
      newTask=this.new("inProgress");
    }else if(task.type==="inProgress"){
      newTask=this.new("done");
    }

    var newTasks=reducedTasks.concat(newTask);
    this.setState({tasks:newTasks});
  }

  onMoveLeft(task){
    var reducedTasks=this.remove(task);

    var newTask=null;
    if(task.type==="inProgress"){
      newTask=this.new("planned");
    }else if(task.type==="done"){
      newTask=this.new("inProgress");
    }

    var newTasks=reducedTasks.concat(newTask);
    this.setState({tasks:newTasks});
  }

new(type){
  var key=UID.create();
  var task={
    title:'Task',
    type:type,
    key:key
  };

  return task;
}
  add(type){
    var newTask=this.new(type);

    var newTasks=this.state.tasks.concat(newTask);
    this.setState({tasks:newTasks});
  }


  onRemove(task){
    var reducedTasks=this.remove(task);
   this.setState({tasks:reducedTasks});
  }

  render(){
    return (
      <div className="area story" >
        <div className="column column-one">
          <div className="task">
            <div className="options">
                <span className="icon icon-cross" onClick={this.props.onRemove}></span>
            </div>
            <span className="title" >{this.props.title}</span>
          </div>
        </div>
        <div className="column">
          {this.getTasks("planned")}
           <span className="icon icon-plus" onClick={this.add.bind(this, 'planned')}></span>
        </div>
        <div className="column">
          {this.getTasks("inProgress")}
        </div>
        <div className="column">
          {this.getTasks("done")}
        </div>
      </div>
      );
  }
}

export default Story;
