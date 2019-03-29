import React from "react";

const Post = ({ location, match, history }) => {
  console.log({ location, match, history });
  const unblock = history.block("정말로떠나시겟습니까?");
  // unblock();
  return <p>포스트 #{match.params.id}</p>;
};

export default Post;
