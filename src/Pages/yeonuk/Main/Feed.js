import React from "react";
import Comment from "./Comment";
import "./Feed.scss";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInfo: props.feedInfo.comments,
      commentInput: "",
      isItLiked: false,
    };
  }

  deleteComment = (index) => {
    const deletedComment = [...this.state.commentInfo];
    deletedComment.splice(index, 1);
    this.setState({ commentInfo: deletedComment });
  };

  iLikeIt() {
    this.setState({
      isItLiked: !this.state.isItLiked,
    });
  }

  isItEnter = (e) => {
    if (e.key === "Enter" && e.target.value.length >= 1) {
      return true;
    } else {
      return false;
    }
  };

  commentAppending = () => {
    this.state.commentInfo.push({
      author: "yeonuk",
      contents: this.state.commentInput,
    });
  };

  clearCommentWriteArea = () => {
    this.setState({
      commentInput: "",
    });
  };

  render() {
    const { commentInfo, commentInput, isItLiked } = this.state;
    return (
      <article className="Feed">
        <div className="feedHeader">
          <div className="avatar">
            <img alt="avatar" src="/images/yeonuk/avatarOfYeonuk.jpg" />
          </div>
          <div className="friendsName">
            <div className="names">
              <span className="authorName">
                {this.props.feedInfo.authorName}
              </span>
              <span className="location">{this.props.feedInfo.location}</span>
            </div>
            <button className="menuBtn">
              <img alt="menubutton" src="/images/yeonuk/threedots.png" />
            </button>
          </div>
        </div>
        <div className="feedImg">
          <img alt="feed image" src={this.props.feedInfo.imageUrl} />
        </div>
        <div className="feedBottom">
          <div className="feedBottomIconList">
            <div className="leftIcon">
              <img
                className="icon heartIcon"
                alt="heart"
                onClick={this.iLikeIt.bind(this)}
                src={
                  isItLiked
                    ? "./images/yeonuk/redheart.png"
                    : "./images/yeonuk/heart.png"
                }
              />
              <img
                className="icon"
                alt="comment bubble"
                src="/images/yeonuk/commentbubble.png"
              />
              <img
                className="icon"
                alt="share"
                src="/images/yeonuk/share.png"
              />
            </div>
            <div className="rightIcon">
              <img
                className="icon"
                alt="bookmark"
                src="/images/common/bookmark.png"
              />
            </div>
          </div>
          <div className="likeArea">
            <img
              alt="avatar of who click like"
              src={this.props.feedInfo.avatarOfWhoLike}
            />
            <a href="" className="authorName">
              {this.props.feedInfo.whoLike}
            </a>
            <span>님&nbsp;</span>
            <a href="" className="likeList">
              외&nbsp;{this.props.feedInfo.likeCount}명
            </a>
            <span>이 좋아합니다</span>
          </div>
          <div className="commentArea">
            <div className="description">
              <a href="" className="authorName">
                {this.props.feedInfo.authorName}
              </a>
              <span>&nbsp;{this.props.feedInfo.description}</span>
              <span>
                ...<button>더 보기</button>
              </span>
            </div>
            <ul className="commentList">
              {commentInfo.map((el, index) => {
                return (
                  <Comment
                    key={index}
                    commentInfo={el}
                    iLikeIt={this.iLikeIt}
                    deleteComment={this.deleteComment}
                    index={index}
                  />
                );
              })}
            </ul>
          </div>
          <span className="timeToLastComment">42분 전</span>
          <div className="writeComment">
            <form>
              <textarea
                name="comment"
                className="comment Writing Area"
                value={commentInput}
                onChange={(e) => {
                  this.setState({ commentInput: e.target.value });
                }}
                onKeyDown={(e) => {
                  if (this.isItEnter(e)) {
                    this.commentAppending();
                    this.clearCommentWriteArea();
                  }
                }}
                onKeyUp={(e) => {
                  if (this.isItEnter(e)) {
                    this.clearCommentWriteArea();
                  }
                }}
                //엔터로 댓글 작성 시 엔터를 누를 경우 onChange가 일어난 것으로 인식되어서 state값에 포함되어서 다음 댓글앞에 하나의 빈칸이 들어가는 것 해결하기 위해서 onKeyUp에 clearCommentWrtingArea 추가
                placeholder="댓글 달기..."
              ></textarea>
              <button
                className="commentWriteBtn"
                type="button"
                onClick={() => {
                  this.commentAppending();
                  this.clearCommentWriteArea();
                }}
              >
                게시
              </button>
            </form>
          </div>
        </div>
      </article>
    );
  }
}

export default Feed;
