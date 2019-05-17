import React, { PureComponent } from "react";
import styles from "./MarkdownRender.scss";
import classNames from "classnames/bind";

import marked from "marked";

// prism
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-bash.min.js";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/components/prism-jsx.min.js";
import "prismjs/components/prism-css.min.js";

const cx = classNames.bind(styles);

class MarkdownRender extends PureComponent {
  state = {
    html: ""
  };

  renderMarkdown = () => {
    const { markdown } = this.props;

    if (!markdown) {
      this.setState({ html: "" });
      return;
    }
    this.setState({
      html: marked(markdown, {
        breaks: true, // 일반 엔터로 새 줄 입력
        sanitize: true // 마크 다운 내부 html 무시
      })
    });
  };

  constructor(props) {
    super(props);
    const { markdown } = props;
    // SSR을 위해 구현
    this.state = {
      html: markdown
        ? marked(props.markdown, { breaks: true, sanitize: true })
        : ""
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // markdown 값이 변경되면 renderMarkDown 호출
    if (prevProps.markdown !== this.props.markdown) {
      this.renderMarkdown();
    }

    if (prevState.html !== this.state.html) {
      Prism.highlightAll();
    }
  }

  render() {
    const { html } = this.state;

    const markup = {
      __html: html
    };
    return (
      <div className={cx("markdown-render")} dangerouslySetInnerHTML={markup} />
    );
  }
}

export default MarkdownRender;
