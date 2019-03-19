import React, { Component } from "react";
import ReactFCCTest from "react-fcctest";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Marked from "marked";

var initMark =
  "# This is an H1 \r\n## This is an H2 \r\n[Link] \r\n Below is a block of text \r\n -------------------\r\n> This is a \r\n> block of text \r\n - *Bullet Item 1* \r\n - **Bullet Item 2** \r\n \r\n Here is an Image: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1') \r\n \r\n Here is `inline code` \r\n \r\n And here is a block of code: \r\n```\r\nvar formula = 2 + 2 \r\nconsole.log(formula)\r\n```\r\n **Please feel free to change the code and play with Markdown!** \r\n \r\n [Link]: https://www.duckduckgo.com";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: initMark
    };

    this.outputHandler = this.outputHandler.bind(this);
    this.clearBox = this.clearBox.bind(this);
    this.resetBox = this.resetBox.bind(this);
  }

  outputHandler = function(markdownInput) {
    this.setState({ markdown: markdownInput });
  };

  clearBox = function() {
    this.setState({ markdown: " " });
  };

  resetBox = function() {
    this.setState({ markdown: initMark });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar fixed-top navbar-dark bg-dark" id="title-box">
          <span className="navbar-brand mb-0 h1">Markdown Previewer</span>
        </nav>
        <div className="container form-group" id="editor-box">
          <textarea
            className="form-control"
            rows="6"
            placeholder="Enter markdown here."
            id="editor"
            value={this.state.markdown}
            onChange={event => this.outputHandler(event.target.value)}
          />
          <button className="btn btn-primary" onClick={this.clearBox}>
            Clear
          </button>
          <button className="btn btn-secondary" onClick={this.resetBox}>
            Reset
          </button>
          <div
            dangerouslySetInnerHTML={{ __html: Marked(this.state.markdown) }}
            id="preview"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
