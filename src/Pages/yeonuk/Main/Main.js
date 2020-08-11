import React from "react";
import Nav from "../../../Components/Nav/Nav";
import Story from "./Story";
import Recommend from "./Recommend";
import Footer from "./Footer";
import Feed from "./Feed";
import Data from "./Data";
import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
      <div className="MainY">
        <Nav />
        <main className="main">
          <section className="feedSection">
            {Data.feedData.map((el, index) => {
              return <Feed key={index} feedInfo={el} />;
            })}
          </section>
          <div className="asideSectionWrapper">
            <section className="asideSection">
              <Story />
              <Recommend />
              <Footer />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
