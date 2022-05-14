import React from "react";
import PostListItem from "../post-list-item";
import "../post-list-item/post-list-item.css";

const PostList = () => {
  return (
    <ul className="app-list list-group">
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </ul>
  );
};

export default PostList;
