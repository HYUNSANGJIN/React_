import React, { Component } from "react";

class TOC extends Component {
  // 1. render() 이전에 shouldComponentUpdate가 실행된다.
  // 2. shouldComponentUpdate의 return값이 true면 render()가 호출된다
  // 3. shouldComponentUpdate의 return값이 false면 render()는 호출되지 않도록 약속되어있음
  // 4. shouldComponentUpdate는 새롭게 바뀐값과 이전 값에 접근할 수 있다.
  shouldComponentUpdate(newProps, newState) {
    console.log(
      "===>TOC render shouldComponentUpdate",
      newProps.data,
      this.props.data
    );
    if (this.props.data === newProps.data) {
      return false;
    }
    return true;
  }
  render() {
    console.log("===>TOC render");
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      // lists.push(<li><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
      // ㄴ 이렇게 작성하면 consol창에 에러메시지 뜬다.
      // ㄴ Warning: Each child in a list should have a unique "key" prop.

      // 여러개의 목록을 자동으로 생성할땐
      // 각각의 목록을 다른것들과 구분할수 있는 식별자를 key값안에 적어준다.
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
