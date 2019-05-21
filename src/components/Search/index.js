import React from "react";
import { Select, Button } from "antd";

import "./index.scss";

class Search extends React.Component {
  constructor(props) {
    super();
    const TYPE = props.history.location.pathname.slice(1);
    // 价格
    let price = [
      "0-100000元",
      "100000-200000元",
      "200000-400000元",
      "400000-600000元",
      "600000-800000元",
      "800000-1000000元",
      "1000000元以上"
    ];
    // 装修
    let decorate = ["精装修", "普通装修", "毛坯房"];
    // 面积
    let area = ["0-50", "50-100", "100-150", "150-200", "200以上"];
    if (TYPE === "rent") {
      price = [
        "0-1500元",
        "1500-2000元",
        "2000-2500元",
        "2500-3000元",
        "3000-3500元",
        "3500-4000元",
        "4000元以上"
      ];
      area = ["0-20", "20-40", "40-60", "60-100", "100以上"];
    }
    this.state = {
      price,
      decorate,
      area,
      sectionObj: {
        price: "",
        fitment: "",
        area: ""
      }
    };
  }
  handleChange(value, key) {
    Object.keys(this.state.sectionObj).forEach(item => {
      if (item === key) {
        this.state.sectionObj[item] = decodeURI(value);
      }
    });
  }
  handleClick(e, type, sectionObj) {
    // 判断条件
    if (
      sectionObj.price === "" &&
      sectionObj.fitment === "" &&
      sectionObj.area === ""
    ) {
      this.props.getHousingInfo({ type });
    } else {
      let newSectionObj = {};
      Object.values(sectionObj).forEach((item, index) => {
        if (item !== "") {
          newSectionObj[Object.keys(sectionObj)[index]] = item;
        }
      });
      this.props.getHousingInfo({ type, sectionObj: newSectionObj });
    }
  }
  render() {
    const { price, decorate, area } = this.state;
    let type = "";
    switch (this.props.params) {
      case "secondary":
        type = "二手房";
        break;
      case "bridalChamber":
        type = "新房";
        break;
      case "rent":
        type = "租房";
        break;
    }
    return (
      <div className="search">
        <section className="search">
          <aside>
            <Select
              defaultValue="按价格"
              onChange={value => {
                this.handleChange(value, "price");
              }}
            >
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
            <Select
              defaultValue="按装修"
              onChange={value => {
                this.handleChange(value, "fitment");
              }}
            >
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
            <Select
              defaultValue="按面积(平)"
              onChange={value => {
                this.handleChange(value, "area");
              }}
              ref="a"
            >
              {area.map((item, index) => {
                return (
                  <Select.Option value={item} key={index}>
                    {item}
                  </Select.Option>
                );
              })}
            </Select>
          </aside>
          <Button
            type="primary"
            onClick={e => {
              this.handleClick(e, type, this.state.sectionObj);
            }}
          >
            按条件查询
          </Button>&nbsp;&nbsp;
          <Button
            type="dashed"
            onClick={() => this.props.getHousingInfo({ type })}
          >
            显示全部房源信息
          </Button>
        </section>
      </div>
    );
  }
}

export default Search;
