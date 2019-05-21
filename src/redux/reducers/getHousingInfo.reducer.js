import moment from "moment";
import { GETHOUSINGINFO, DELETEHOUSINGINFO } from "../creator_name";

const initState = {
  count: 0,
  loading: true,
  result: [
    {
      houseType: "",
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
        direction: "",
        fitment: "",
        elevator: ""
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
      // 委托人
      issuer: {
        name: '',
        phone: ''
      }
    }
  ]
};

export default (state = initState, action) => {
  switch (action.type) {
    case GETHOUSINGINFO:
      return {
        ...action.data,
        loading: action.loading
      };
    case DELETEHOUSINGINFO:
      return {
        ...state,
        loading: action.loading
      }
    default:
      return state;
  }
};
