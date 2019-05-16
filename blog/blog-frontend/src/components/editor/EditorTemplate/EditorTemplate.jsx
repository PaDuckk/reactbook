import React, { PureComponent } from "react";
import styles from "./EditorTemplate.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class EditorTemplate extends PureComponent {
  state = {
    leftPercentage: 0.5
  };

  handleMouseMove = e => {
    this.setState({
      leftPercentage: e.clientX / window.innerWidth
    });
  };

  handleMouseUp = e => {
    document.body.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);
  };

  handleSeparatorMouseDown = e => {
    document.body.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("mouseup", this.handleMouseUp);
  };
  render() {
    const { header, editor, preview } = this.props;
    const { leftPercentage } = this.state;
    const { handleSeparatorMouseDown } = this;

    const leftStyle = {
      flex: leftPercentage
    };

    const rightStyle = {
      flex: 1 - leftPercentage
    };

    const separatorStyle = {
      left: `${leftPercentage * 100}%`
    };
    return (
      <div className={cx("editor-template")}>
        {header}
        <div className={cx("panes")}>
          <div style={leftStyle} className={cx("pane", "editor")}>
            {editor}
          </div>
          <div style={rightStyle} className={cx("pane", "preview")}>
            {preview}
          </div>
          <div
            className={cx("separator")}
            style={separatorStyle}
            onMouseDown={handleSeparatorMouseDown}
          />
        </div>
      </div>
    );
  }
}

export default EditorTemplate;
