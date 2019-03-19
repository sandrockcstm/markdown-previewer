import React, { Component } from "react";
import ReactFCCTest from "react-fcctest";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Marked from "marked";

class App extends Component {
  state = {
    markdown:
      "# This is an H1 \r\n## This is an H2 \r\n[Link] \r\n Below is a block of text \r\n -------------------\r\n> This is a \r\n> block of text \r\n - *Bullet Item 1* \r\n - **Bullet Item 2** \r\n \r\n Here is an Image: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1') \r\n \r\n Here is `inline code` \r\n \r\n And here is a block of code: \r\n```\r\nvar formula = 2 + 2 \r\nconsole.log(formula)\r\n```\r\n **Please feel free to change the code and play with Markdown!** \r\n \r\n [Link]: https://www.duckduckgo.com"
  };

  outputHandler = function(markdownInput) {
    this.setState({ markdown: markdownInput });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <ReactFCCTest />
        </div>

        <div className="container form-group">
          <textarea
            className="form-control"
            rows="6"
            placeholder="Enter markdown here."
            id="editor"
            value={this.state.markdown}
            onChange={event => this.outputHandler(event.target.value)}
          />
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
