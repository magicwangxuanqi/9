import moment from "moment";
import { ENTRUST } from "../creator_name";

const initState = {
  houseType: "二手房",
  houseTitle: "",
  images: [],
  region: {
    name: "",
    pattern: {
      room: 1,
      hail: 0,
      toilet: 0
    },
    area: "",
    direction: "正东",
    fitment: "普通装修",
    elevator: true
  },
  //   楼层数量
  floor: {
    //当前楼层
    current: "",
    // 总楼层
    all: ""
  },
  //   关注人数
  attention_number: 0,
  //   创建时间
  time: moment().format("YYYY-MM-DD HH:mm:ss"),
  //   价格
  price: "",
  // 称呼
  appellation: "",
  //   手机号
  phone: "",
  // 接单状态
  accept: {
    name: '',
    status: false
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    // 发布房源信息
    case ENTRUST:
      console.log(action.formData);
      return {
        ...state,
        ...action.formData,
        // images: [],
        region: {
          ...state.region,
          ...action.formData.region,
          pattern: {
            ...state.region.pattern,
            ...action.formData.region.pattern
          }
        },
        floor: {
          ...state.floor,
          ...action.formData.floor
        },
        time: moment().format("YYYY-MM-DD HH:mm:ss"),
        accept: {
          ...state.accept,
          ...action.formData.accept
        }
      };
    default:
      return state;
  }
};
