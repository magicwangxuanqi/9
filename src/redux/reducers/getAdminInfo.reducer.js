import { ADMINGETADMININFO, ADMINDEL } from "../creator_name";

const initState = {
  loading: true,
  result: [
    {
      _id: '',
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
    // 获取所有用户信息
    case ADMINGETADMININFO:
      return {
        loading: action.loading,
        result: [...action.data]
      };
    // 删除用户信息
    case ADMINDEL:
      return state
    default:
      return state;
  }
};
