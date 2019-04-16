import React, { Component } from "react";
import "./index.scss";

class Item extends Component {
  render() {
    return (
      <div className="Item">
        <aside className="image">
          <img
            src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=161628519,706624966&fm=202&mola=new&crop=v1"
            alt=""
          />
        </aside>
        <aside className="name">
          <p>东城·永定门</p>
          <p>定安里</p>
        </aside>
        <aside className="info">
          2室1厅·63.24平米
          <span className="price">378万</span>
        </aside>
      </div>
    );
  }
}
export default Item;
