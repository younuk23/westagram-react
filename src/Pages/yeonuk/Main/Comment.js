import React from "react";
import "./Comment.scss";
import { Link } from "react-router-dom";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isItLiked: false,
      iLikeIt: props.iLikeIt.bind(this),
      deleteComment: props.deleteComment,
      index: props.index,
    };
  }

  render() {
    const { isItLiked, iLikeIt, deleteComment, index } = this.state;
    const commentInfo = this.props.commentInfo;
    return (
      <li className="Comment">
        <div className="commentList__comments">
          <Link className="authorName">{commentInfo.author}</Link>
          {/* 추후에 ID클릭시, 해당 사람의 페이지로 이동하는 기능 추가구현 */}
          <span>&nbsp;{commentInfo.contents}</span>
        </div>
        <div className="commentListBtns">
          <img
            className="commentLikeBtn"
            alt="like-to-comment"
            onClick={iLikeIt}
            src={
              isItLiked
                ? "./images/yeonuk/redheart.png"
                : "./images/yeonuk/heart.png"
            }
          />
          <img
            className="commentDeleteBtn"
            alt="deletebutton"
            src="/images/yeonuk/del.png"
            onClick={() => {
              deleteComment(index);
            }}
          />
        </div>
      </li>
    );
  }
}

export default Comment;
