import React, { Component } from "react";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import "./App.css";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "welcome",
      selected_content_id: 2,
      subject: { title: "WEB", sub: "World Wide Web!" },
      welcome: { title: "Welcome", desc: "Hello, React!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is information" },
        { id: 2, title: "CSS", desc: "CSS for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }
  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        // _title = data.title;
        // _desc = data.desc;
        return data;
        break;
      }
      i = i + 1;
    }
  }
  getContent() {
    console.log("App render");
    var _title,
      _desc,
      _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      var _content = this.getReadContent();
      _article = (
        <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
      );
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            // setState를 통해서 새로운 contents값을 추가
            // this.state.contents
            this.max_content_id = this.max_content_id + 1;

            // push : 기존에 있었던 컨텐츠 배열에 값을 추가하는 방식 ( 권장하지 않음 )
            /*
              var a = [1,2];
              a.push(3);
              console.log(a); -> [1,2,3]
            */
            // this.state.contents.push({
            //   id: this.max_content_id,
            //   title: _title,
            //   desc: _desc,
            // });

            var _contents = Array.from(this.state.contents);
            _contents.push({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            this.setState({
              contents: _contents,
            });

            // concat : 오리지널 데이터를 변경하지 않고, 새로운 데이터를 추가하는것(concate이 return하는 값을 담아야됨)
            /*
              var a = [1,2];
              var b = a.concat(3);
              console.log(a, b); -> a[1,2] , b[1,2,3]
            */
            var _contents = this.state.contents.concat({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            this.setState({
              contents: _contents,
              mode: "read",
              selected_content_id: this.max_content_id,
            });
            console.log(_title, _desc);
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode === "update") {
      _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function (_id, _title, _desc) {
            var _contents = Array.from(this.state.contents);
            var i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
              i = i + 1;
            }
            this.setState({
              contents: _contents,
              mode: "read",
            });
            console.log(_title, _desc);
          }.bind(this)}
        ></UpdateContent>
      );
    }
    return _article;
  }
  render() {
    return (
      <div className="App">
        {/* 
        <Subject>라는 Component에 
        onPageChange라는 이벤트를 만들었음.
        그 이벤트에 함수를 설치해주면, 그 이벤트가 발생되었을때
        props로 전달된 onPageChange라는 함수를 호출하면 된다.(Subject.js)
      */}
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>

        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>

        <Control
          onChangeMode={function (_mode) {
            if (_mode === "delete") {
              if (window.confirm("정말 삭제하시겠습니까?")) {
                var _contents = Array.from(this.state.contents);
                var i = 0;
                while (i < _contents.length) {
                  if (_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1);
                    break;
                  }
                  i = i + 1;
                }
                this.setState({
                  mode: "welcome",
                  contents: _contents,
                });
                alert("삭제되었습니다.");
              }
            } else {
              this.setState({
                mode: _mode,
              });
            }
          }.bind(this)}
        ></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
