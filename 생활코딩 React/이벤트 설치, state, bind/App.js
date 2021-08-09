import React, {Component} from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

class App extends Component{
  // 어떤 컴포넌트가 실행될 때 render보다 먼저 실행되면서 
  // 해당 컴포넌트를 초기화시켜주고 싶은 코드는 constructor안에 작성
  //                                  ㄴ 제일 먼저 실행되면서 초기화를 담당
  constructor(props){
    super(props);
    this.state={
      mode:'read',
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is information'},
        {id:2, title:'CSS', desc:'CSS for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
 render() { 
   // state 값이 바뀌면 state를 가지고 있는 component의 render함수가 다시 호출된다

// react에선 state값이 바뀌면 
// 그 state를 가지고 있는 component의 render()함수가 다시 호출된다
// 다시 호출됨에 따라 render()함수 하위에 있는 component들도 각자 싹~ 호출이 됨(화면이 다시 그려짐)
//                                      ㄴ 하위 component안에도 render()가 각자 있음

   console.log('App render');
   var _title, _desc = null;
   if(this.state.mode === 'welcome'){
    _title = this.state.welcome.title;
    _desc = this.state.welcome.desc;

   }else if(this.state.mode === 'read'){
    _title = this.state.contents[0].title;
    _desc = this.state.contents[0].desc;
   }

  return ( 
    <div className="App">
    {/* <Subject 
    title={this.state.subject.title} 
    sub={this.state.subject.sub}>
    </Subject>  */}
        <header>
          <h1>
            {/* react에선 onclick 을 onClick으로 표기 */}
            <a href="/" onClick={function(e){
             console.log(e);

            // e.preventDefault();  -> a태그의 기본적인 동작 방법을 금지시킨다 
            //                      -> 페이지가 전환되지 않는다.
             e.preventDefault(); 
            //  this.state.mode = 'welcome';
            // 함수 내부에서는 this에 아무 값도 설정되어 있지 않음 -> .bind(this)를 해서 this를 주입해주기
            // 동적으로 state의 값 변경시, state의 값이 바뀐걸 알려줘야 한다 -> setState를 통해 값이 변경된것 세팅
             this.setState({
               mode:'welcome'
             });
             }.bind(this)}> 
               {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header>

    <TOC data={this.state.contents}></TOC>
    
    <Content title={_title} desc={_desc}></Content>
    </div>
  );
}
}


export default App;
