import React from 'react';

class Task extends React.Component{




  render(){
    var arrowLeft=null;
    var arrowRight=null;
    if(this.props.type==="done" || this.props.type==="inProgress"){
      	arrowLeft=<span className="icon icon-arrow-left" onClick={this.props.onMoveLeft}></span>;
    }
    if(this.props.type==="planned" || this.props.type==="inProgress"){
      	arrowRight= <span className="icon icon-arrow-right" onClick={this.props.onMoveRight}></span>
    }

    return(
      <div className="task">
        <div className="options">
           {arrowLeft}
           {arrowRight}
           <span className="icon icon-cross" onClick={this.props.onRemove}></span>
        </div>
        <span className="title" >{this.props.title}</span>
      </div>
    );
  }
}

export default Task;
