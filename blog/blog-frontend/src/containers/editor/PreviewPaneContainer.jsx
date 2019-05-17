import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PreviewPane from "components/editor/PreviewPane";

class PreviewPaneContainer extends PureComponent {
  render() {
    const { markdown, title } = this.props;
    return <PreviewPane title={title} markdown={markdown} />;
  }
}

export default connect(state => ({
  title: state.editor.get("title"),
  markdown: state.editor.get("markdown")
}))(PreviewPaneContainer);
