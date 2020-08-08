import React from "react";

class Recommend extends React.Component {
  render() {
    return (
      <div className="storyContainer">
        <div className="storyheader">
          <span className="storyname">회원님을 위한 추천</span>
          <span className="seeAll">모두 보기</span>
        </div>
        <ul className="storyList">
          <li className="story">
            <div className="avatar">
              <img alt="avatar" src="/images/yeonuk/wecodeimg.png" />
            </div>
            <div className="friendsName">
              <span className="authorName">Wecode-bootcamp</span>
              <span className="description">
                wecode님 외 39명이 좋아합니다.
              </span>
            </div>
            <button>팔로우</button>
          </li>
          <li className="story">
            <div className="avatar">
              <img alt="avatar" src="/images/yeonuk/javacsript.png" />
            </div>
            <div className="friendsName">
              <span className="authorName">Front-End</span>
              <span className="description">백엔드 외 25명이 좋아합니다.</span>
            </div>
            <button>팔로우</button>
          </li>
          <li className="story">
            <div className="avatar">
              <img alt="avatar" src="/images/yeonuk/backend.jpg" />
            </div>
            <div className="friendsName">
              <span className="authorName">Back-End</span>
              <span className="description">
                프론트엔드 외 14명이 좋아합니다
              </span>
            </div>
            <button>팔로우</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Recommend;
