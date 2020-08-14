import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
  state = {
    iconData: [
      {
        alt: "compass icon",
        src: "/images/common/compass.png",
      },
      {
        alt: "heart icon",
        src: "/images/common/heart.png",
      },
      {
        alt: "profile icon",
        src: "/images/common/myPage.png",
      },
    ],
  };

  render() {
    const { iconData } = this.state;
    return (
      <nav className="Nav">
        <div className="navContents">
          <div className="logoContainer">
            <div className="imgLogo">
              <img src="/images/common/logo.png" alt="Instagram logo" />
            </div>
            <div className="hline"></div>
            <div className="textLogo">
              <img
                src="/images/common/textLogo.png"
                alt="Instagram text logo"
              />
            </div>
          </div>
          <input className="search" type="text" placeholder="검색" />
          <ul className="iconLists">
            {iconData.map((el) => {
              return (
                <li className="icon">
                  <img alt={el.alt} src={el.src} />
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}
export default Nav;
