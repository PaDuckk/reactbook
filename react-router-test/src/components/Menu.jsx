import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Menu = () => {
  const activeStyle = {
    color: "green",
    fontSize: "2rem"
  };
  return (
    <div>
      <ul>
        <li>
          <NavLink exact activeStyle={activeStyle} to="/">
            홈
          </NavLink>
        </li>
        <li>
          <NavLink exact activeStyle={activeStyle} to="/about">
            소개
          </NavLink>
        </li>
        <li>
          <NavLink exact activeStyle={activeStyle} to="/about/react">
            React 소개
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/posts">
            포스트 목록
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Menu);
