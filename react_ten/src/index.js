import React from 'react';
import ReactDOM from 'react-dom';
class HelloComponent extends React.Component{
    render(){
      return (
        <div>hello world,{this.props.name}</div>
      )
    }
   }
  
  ReactDOM.render(
    <div>
        <HelloComponent name="ten"/>
    </div>
    , document.getElementById("root"));