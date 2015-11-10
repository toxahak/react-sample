import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
  render() {
    var commentNodes = this.props.data.map(function (comment, index) {
      return (
        <Comment author={comment.author} key={index} >
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}

export default CommentList;
