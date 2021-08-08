import React, {Component} from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

class App extends Component{
  // 어떤 component가 실행될때 render()라는 함수보다 먼저 실행되면서 
  // 그 component를 초기화 시켜주고 싶은 코드는
  // constructor를 짜고 그대로 작성한다.
  constructor(props){
    super(props);
    this.state={
      subject:{title:'WEB', sub:'World Wide Web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText...'},
        {id:2, title:'CSS', desc:'CSS for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
 render() {
  return ( 
    <div className="App">

      {/* 하위 Component */}

      {/* 
        상위 component의 App의 상태를 하위 component로 전달하고 싶을땐
        상위 component의 state 값을
        하위 component의 props의 값으로 전달하는 것은 얼마든지 가능하다.
      */}
    <Subject 
    title={this.state.subject.title} 
    sub={this.state.subject.sub}>
    </Subject> 

    <TOC data={this.state.contents}></TOC>
    
    <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
  );
}
}

export default App;
