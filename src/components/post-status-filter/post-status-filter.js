import React from "react";
import "./post-status-filter.css";
import { Button } from "reactstrap";

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <Button outline color="primary">
        Все
      </Button>
      <button type="button" className="btn btn-primary">
        Все
      </button>
      <button type="button" className="btn btn-outline-secondary id">
        Понравилось
      </button>
    </div>
  );
};

export default PostStatusFilter;
