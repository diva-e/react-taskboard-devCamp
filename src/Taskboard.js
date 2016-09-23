import React from 'react';
import Story from './Story.js';
import UID from './UID.js';

class Taskboard extends React.Component{


  constructor(props){
    super(props);
    this.state={stories:[]};
  }

  add=()=>{
    var key=UID.create();
    var title='Story';
    var newStory={
      key:key,
      title:title,
      tasks:[]
    };
    var newStories=this.state.stories.concat(newStory);

    this.setState({stories:newStories});
  }

  onRemove(story){
    var newStories=this.state.stories.filter(function(element){
        return (story.key!==element.key);
    });

    this.setState({stories:newStories});
  }

  render(){
    var stories=this.state.stories.map(function(story){
        return (<Story onRemove={this.onRemove.bind(this,story)} key={story.key} title={story.title} tasks={story.tasks}/>);
    },this);

    return (
      <div className="taskboard">
        <div id="title"> {this.props.title} </div>
        <div className="area header">
            <div className="column column-one">Story</div>
            <div className="column">planned</div>
            <div className="column">in progress</div>
            <div className="column">done</div>
        </div>
        {stories}
        <div className="area footer">
            <div className="column column-one">
             <span className="icon-plus" onClick={this.add}></span>
             </div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
        </div>

      </div>
    );
  }
}

export default Taskboard;
