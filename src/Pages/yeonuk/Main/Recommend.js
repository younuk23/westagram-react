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
          {RECOMMENDED_PEOPLE.map((el) => {
            return (
              <li className="story">
                <div className="avatar">
                  <img alt="avatar" src={el.imgSrc} />
                </div>
                <div className="friendsName">
                  <span className="authorName">{el.name}</span>
                  <span className="description">{el.description}</span>
                </div>
                <button>팔로우</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const RECOMMENDED_PEOPLE = [
  {
    imgSrc: "/images/yeonuk/wecodeimg.png",
    name: "Wecode-bootcamp",
    description: "wecode님 외 39명이 좋아합니다.",
  },
  {
    imgSrc: "/images/yeonuk/javacsript.png",
    name: "Front-End",
    description: "백엔드 외 25명이 좋아합니다",
  },
  {
    imgSrc: "/images/yeonuk/backend.jpg",
    name: "Back-End",
    description: "프론트엔드 외 14명이 좋아합니다.",
  },
];

export default Recommend;
