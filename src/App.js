import React, {Component} from 'react';
import './App.css';



class Subject extends Component{
  render(){ // class 안에 있는 함수는 function 생략
    return( // 컴포넌트 만들 경우 최상위 태그로 시작되어야 함 (여기서는 header)
      <header>
        <h1>{this.props.title}</h1>
       {this.props.sub}
      </header>
    );
  }
}
 
class TOC extends Component{
  render(){
    return(

      <nav>

        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ul>
    </nav>

    );
  }
}

class Content extends Component{
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}
// 컴포넌트 만드는 코드
// js가 아니다. jsx -> 알아서 js코드로 컨버팅해준다.
class App extends Component{ 
 render() {
  return ( 
    <div className="App">
    <Subject title="WEB" sub="world wide web!"></Subject>
    <Subject title="React" sub="For UI"></Subject>
    <TOC></TOC>
    <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
  );
}
}

export default App;
