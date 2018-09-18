import React from "react";
import "./index.css";


export class MainDisplay extends React.Component {
  render() {
    return(
      <div>
        <div className="editorWrap">
          <div className="title">Editor</div>
          <textarea onChange={this.props.updateInput} value={this.props.input} id="editor" />
        </div>
        <div className="previewWrap">
          <div className="title">Previewer</div>
          <div className="jumbotron">
            <div id="preview" dangerouslySetInnerHTML={this.props.markdown} />
          </div>
        </div>
      </div>
    );
  }
}
