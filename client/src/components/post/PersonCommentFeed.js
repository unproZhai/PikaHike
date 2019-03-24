import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PersonCommentItem from './PersonCommentItem';

class CommentFeed extends Component {
  render() {
    const { comments, postId } = this.props;

    return comments.slice(0,comments.length).reverse().map((comment,i) => (
      <PersonCommentItem key={comment._id} comment={comment} postId={postId} /> 
   ));
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired
};

export default CommentFeed;