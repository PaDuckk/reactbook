import React, { Component } from "react";
import Header from "components/common/Header";
import { withRouter } from "react-router-dom";
import * as baseAction from "store/modules/base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class HeaderContainer extends Component {
  handleRemove = () => {
    const { BaseActions } = this.props;
    BaseActions.showModal("remove");
  };
  render() {
    const { handleRemove } = this;
    const { match, logged } = this.props;
    const { id } = match.params;

    return <Header postId={id} onRemove={handleRemove} logged={logged} />;
  }
}

export default connect(
  state => ({
    logged: state.base.get("logged")
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseAction, dispatch)
  })
)(withRouter(HeaderContainer));