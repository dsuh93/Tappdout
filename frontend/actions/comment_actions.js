import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_CHECKIN_COMMENT = "RECEIVE_CHECKIN_COMMENT";
export const RECEIVE_UPDATED_COMMENT = "RECEIVE_UPDATED_COMMENT";
export const REMOVE_CHECKIN_COMMENT = "REMOVE_CHECKIN_COMMENT";


const receiveCheckinComment = (checkinWithComment) => ({
  type: RECEIVE_CHECKIN_COMMENT,
  checkinWithComment
});

const receiveUpdatedComment = (updatedComment) => ({
  type: RECEIVE_UPDATED_COMMENT,
  updatedComment
})

const removeCheckinComment = (deletedComment) => ({
  type: REMOVE_CHECKIN_COMMENT,
  deletedComment
});

export const createComment = comment => dispatch => CommentAPIUtil.createComment(comment)
  .then(checkinWithComment => dispatch(receiveCheckinComment(checkinWithComment)));

export const updateComment = comment => dispatch => CommentAPIUtil.updateComment(comment)
  .then(updatedComment => dispatch(receiveUpdatedComment(updatedComment)));

export const deleteComment = commentId => dispatch => CommentAPIUtil.deleteComment(commentId)
  .then(deletedComment => dispatch(removeCheckinComment(deletedComment)));