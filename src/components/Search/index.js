import React from "react";
import { Select, Input } from "antd";

import "./index.scss";

class Search extends React.Component {
  constructor(props) {
    super();
    const TYPE = props.history.location.pathname.slice(1);
    // 价格
    let price = [
      "100万以下",
      "100-200万",
      "200-400万",
      "400-600万",
      "600-800万",
      "800-1000万",
      "1000万以上"
    ];
    // 装修
    let decorate = ["精装修", "普通装修", "毛坯房"];
    // 面积
    let area = ["50以下", "50-100", "100-150", "150-200", "200以上"];
    if (TYPE === "rent") {
      price = [
        "1500元以下",
        "1500-2000元",
        "2000-2500元",
        "2500-3000元",
        "3000-3500元",
        "3500-4000元",
        "4000元以上"
      ];
      area = ["20以下", "20-40", "40-60", "60-100", "100以上"];
    }
    this.state = {
      price,
      decorate,
      area,
      searchMsg: props.searchVal ? decodeURI(props.searchVal) : ""
    };
  }
  render() {
    const { price, decorate, area, searchMsg } = this.state;
    const { history, path } = this.props;
    return (
      <div className="search">
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
            value={searchMsg}
            onChange={e => this.setState({ searchMsg: e.target.value })}
            onSearch={value => {
              history.push(`${path}?search=${value}`);
            }}
            enterButton
          />
        </div>
      </div>
    );
  }
}

export default Search;
