import React from "react";
import { Select, Input } from "antd";
import NavBar from "@/components/NavBar";

import "./index.scss";

class Search extends React.Component {
  state = {
    // 价格
    price: [
      "100万以下",
      "100-200万",
      "200-400万",
      "400-600万",
      "600-800万",
      "800-1000万",
      "1000万以上"
    ],
    // 装修
    decorate: ["精装修", "普通装修", "毛坯房"],
    // 面积
    area: ["50以下", "50-100", "100-150", "150-200", "200以上"]
  };
  render() {
    const { price, decorate, area } = this.state;
    return (
      <div className="search">
        <NavBar />
        <section className="search">
          <aside>
            <Select defaultValue="按价格">
              {price.map((item, index) => {
                return (
                  <Select.Option value={item} key={index}>
                    {item}
                  </Select.Option>
                );
              })}
            </Select>
          </aside>
          <aside>
            <Select defaultValue="按装修">
              {decorate.map((item, index) => {
                return (
                  <Select.Option value={item} key={index}>
                    {item}
                  </Select.Option>
                );
              })}
            </Select>
          </aside>
          <aside>
            <Select defaultValue="按面积(平)">
              {area.map((item, index) => {
                return (
                  <Select.Option value={item} key={index}>
                    {item}
                  </Select.Option>
                );
              })}
            </Select>
          </aside>
        </section>
        <div className="searchInput">
          <Input.Search
            placeholder="请输入查询条件找房"
            size="large"
            onSearch={value => console.log(value)}
            enterButton
          />
        </div>
      </div>
    );
  }
}

export default Search;
