import React from "react";
import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <nav>
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
            <li className="icon">
              <img alt="compass icon" src="/images/common/compass.png" />
            </li>
            <li className="icon">
              <img alt="heart icon" src="/images/common/heart.png" />
            </li>
            <li className="icon">
              <img alt="Profile icon" src="/images/common/myPage.png" />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Header;
