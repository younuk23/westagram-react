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
            {STORY_DATA.map((el) => {
              return (
                <li className="story">
                  <div className="avatar">
                    <img alt="avatar" src={el.imgSrc} />
                  </div>
                  <div className="friendsName">
                    <span className="authorName">{el.name}</span>
                    <span className="description">{el.description}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

const STORY_DATA = [
  {
    imgSrc: "/images/yeonuk/storypp1.jpg",
    name: "James",
    description: "16분 전",
  },
  {
    imgSrc: "/images/yeonuk/storypp2.jpg",
    name: "Jane",
    description: "32분 전",
  },
  {
    imgSrc: "/images/yeonuk/storypp3.jpg",
    name: "John",
    description: "1시간전",
  },
  {
    imgSrc: "/images/yeonuk/storypp4.jpg",
    name: "Nick",
    description: "2시간 전",
  },
  {
    imgSrc: "/images/yeonuk/storypp5.jpg",
    name: "Sala",
    description: "2시간 전",
  },
  {
    imgSrc: "/images/yeonuk/storypp5.jpg",
    name: "Instagram",
    description: "3시간 전",
  },
];

export default Story;
