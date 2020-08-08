import React from "react";
import "./Main.scss";
import Header from "../../../Components/Header/Header";
import Story from "./Story";
import Recommend from "./Recommend";
import Footer from "./Footer";
import Data from "./Data";
import Feed from "./Feed";

class Main extends React.Component {
  render() {
    return (
      <div className="MainY">
        <Header />
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
