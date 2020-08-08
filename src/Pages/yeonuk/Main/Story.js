import React from "react";

class Story extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="bigAvatar">
            <img alt="avatarOfYeonuk" src="/images/yeonuk/avatarOfYeonuk.jpg" />
          </div>
          <div className="myInfo">
            <span className="authorName">yeonukHwang</span>
            <span className="description">황연욱 / 개발자</span>
          </div>
        </header>
        <div className="storyContainer">
          <div className="storyheader">
            <span className="storyname">스토리</span>
            <span className="seeAll">모두 보기</span>
          </div>
          <ul className="storyList">
            <li className="story">
              <div className="avatar">
                <img alt="avatar" src="/images/yeonuk/storypp1.jpg" />
              </div>
              <div className="friendsName">
                <span className="authorName">James</span>
                <span className="description">16분전</span>
              </div>
            </li>
            <li className="story">
              <div className="avatar">
                <img alt="avatar" src="/images/yeonuk/storypp2.jpg" />
              </div>
              <div className="friendsName">
                <span className="authorName">Jane</span>
                <span className="description">32분전</span>
              </div>
            </li>
            <li className="story">
              <div className="avatar">
                <img alt="avatar" src="/images/yeonuk/storypp3.jpg" />
              </div>
              <div className="friendsName">
                <span className="authorName">John</span>
                <span className="description">1시간 전</span>
              </div>
            </li>
            <li className="story">
              <div className="avatar">
                <img alt="avatar" src="/images/yeonuk/storypp4.jpg" />
              </div>
              <div className="friendsName">
                <span className="authorName">Nick</span>
                <span className="description">2시간 전</span>
              </div>
            </li>
            <li className="story">
              <div className="avatar">
                <img alt="avatar" src="/images/yeonuk/storypp5.jpg" />
              </div>
              <div className="friendsName">
                <span className="authorName">sala</span>
                <span className="description">2시간 전</span>
              </div>
            </li>
            <li className="story">
              <div className="avatar">
                <img alt="avatar" src="/images/yeonuk/logo.png" />
              </div>
              <div className="friendsName">
                <span className="authorName">Instagram</span>
                <span className="description">3시간 전</span>
              </div>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Story;
