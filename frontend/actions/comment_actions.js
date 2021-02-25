import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_CHECKIN_COMMENT = "RECEIVE_CHECKIN_COMMENT";
export const REMOVE_CHECKIN_COMMENT = "REMOVE_CHECKIN_COMMENT";


const receiveCheckinComment = (comment) => ({
  type: RECEIVE_CHECKIN_COMMENT,
  comment
});

const removeCheckinComment = (deletedComment) => ({
  type: REMOVE_CHECKIN_COMMENT,
  deletedComment
});

export const createComment = comment => dispatch => CommentAPIUtil.createComment(comment)
  .then(newComment => dispatch(receiveCheckinComment(newComment)));

export const updateComment = comment => dispatch => CommentAPIUtil.updateComment(comment)
  .then(updatedComment => dispatch(receiveCheckinComment(updatedComment)));

export const deleteComment = commentId => dispatch => CommentAPIUtil.deleteComment(commentId)
  .then(deletedComment => dispatch(removeCheckinComment(deletedComment)));