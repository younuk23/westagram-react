import React from "react";
import "./Feed.scss";

class Comment extends React.Component {
  render() {
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
            src="/images/yeonuk/heart.png"
          />
          <img
            className="commentDeleteBtn"
            alt="deletebutton"
            src="/images/yeonuk/del.png"
          />
        </div>
      </li>
    );
  }
}

class Feed1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInfo: this.props.feedInfo.comments,
      commentInput: "",
    };
  }

  isItEnter = (e) => {
    if (e.key === "Enter" && e.target.value.length > 1) {
      return true;
    } else {
      return false;
    }
  };

  commentAppending = (e) => {
    this.state.commentInfo.push({
      author: "yeonuk",
      contents: this.state.commentInput,
    });
    this.setState({ commentInput: "" });
  };

  render() {
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
                src="/images/yeonuk/heart.png"
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
              {this.state.commentInfo.map((el, index) => {
                return <Comment key={index} commentInfo={el} />;
              })}
            </ul>
          </div>
          <span className="timeToLastComment">42분 전</span>
          <div className="writeComment">
            <form>
              <textarea
                name="comment"
                className="comment Writing Area"
                value={this.state.commentInput}
                onChange={(e) => {
                  this.setState({ commentInput: e.target.value });
                }}
                onKeyDown={(e) => {
                  if (this.isItEnter(e)) {
                    this.commentAppending();
                  }
                }}
                placeholder="댓글 달기..."
              ></textarea>
              <button
                className="commentWriteBtn"
                type="button"
                onClick={(e) => this.commentAppending(e)}
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

export default Feed1;
