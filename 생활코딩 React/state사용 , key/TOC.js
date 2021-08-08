import React, {Component} from 'react';

class TOC extends Component{
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        // lists.push(<li><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
          // ㄴ 이렇게 작성하면 consol창에 에러메시지 뜬다.
          // ㄴ Warning: Each child in a list should have a unique "key" prop.

         // 여러개의 목록을 자동으로 생성할땐
         // 각각의 목록을 다른것들과 구분할수 있는 식별자를 key값안에 적어준다.
        lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
        i = i + 1;
      }
      return(
  
        <nav>
  
          <ul>
              {lists}
          </ul>
      </nav>
  
      );
    }
  }

  export default TOC;