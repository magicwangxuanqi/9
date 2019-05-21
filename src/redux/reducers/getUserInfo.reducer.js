import { GETUSER, COMPLETEUSER, DELETEUSER } from "../creator_name";

const initState = {
  loading: true,
  result: [
    {
      _id: "",
      username: "",
      branch: "",
      company: "",
      email: "",
      id_number: "",
      phone_number: "",
      real_name: "",
      sex: "男"
    }
  ]
};

export default (state = initState, action) => {
  switch (action.type) {
    // 获取普通用户信息
    case GETUSER:
      return {
        ...state,
        loading: action.loading,
        result: action.result
      };
    // 完善普通用户信息
    case COMPLETEUSER:
      return {
        ...state,
        loading: action.loading
      };
    // 删除普通用户信息
    case DELETEUSER:
      return {
        ...state,
        loading: action.loading
      };
    default:
      return state;
  }
};
