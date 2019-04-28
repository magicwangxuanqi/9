import {
    ITEMATTENTION,
    ATTENTION,
    RMATTENTION
} from "../creator_name";
const initState = {
    result: ''
};

export default (state = initState, action) => {
    switch (action.type) {
        // 根据用户获取的关注房源信息
        case ITEMATTENTION:
            return {
                ...state,
                result: action.data
            };
            // 关注房源
        case ATTENTION:
            return {
                ...state
            }
            // 取消关注
        case RMATTENTION:
            return {
                ...state
            }
        default:
            return state;
    }
};