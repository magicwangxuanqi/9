import React, { Component } from "react";
import "./index.scss";
import Item from "./Item/index";

class Container extends Component {
  render() {
    return (
      <div className="Container">
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <div key={index}>
              <header>
                <h1 className="title">二手好房</h1>
                <div className="subTitle">
                  <span className="left">好房源那么多，我们为你精选</span>
                  <span className="right">更多北京二手房</span>
                </div>
              </header>
              <section className="item-box">
                {[1, 2, 3, 4].map((item, index) => {
                  return <Item key={index} />;
                })}
              </section>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Container;
