import React, { Component } from "react";
import LoginModalContainer from "containers/modal/LoginModalContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as baseActions from "store/modules/base";

class Base extends Component {
  initialize = async () => {
    const { BaseActions } = this.props;

    if (localStorage === "true") {
      BaseActions.tempLogin();
    }

    BaseActions.checkLogin();
  };

  componentDidMount() {
    this.initialize();
  }

  render() {
    return (
      <div>
        <LoginModalContainer />
        {/* 전역적 사용 컴포넌트 */}
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => ({ BaseActions: bindActionCreators(baseActions, dispatch) })
)(Base);
