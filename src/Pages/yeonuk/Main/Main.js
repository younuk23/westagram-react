import React from "react";
import Nav from "../../../Components/Nav/Nav";
import Story from "./Story";
import Recommend from "./Recommend";
import Footer from "./Footer";
import Feed from "./Feed";
import "./Main.scss";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("/data/Data.json")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.feedData }));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="MainY">
        <Nav />
        <main className="main">
          <section className="feedSection">
            {data &&
              data.map((el, index) => {
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
