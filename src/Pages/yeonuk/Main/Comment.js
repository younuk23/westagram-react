import React from "react";
import "./Comment.scss";

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
    return (
      <li className="Comment">
        <div className="commentList__comments">
          <a href="" className="authorName">
            {this.props.commentInfo.author}
          </a>
          <span>&nbsp;{this.props.commentInfo.contents}</span>
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
