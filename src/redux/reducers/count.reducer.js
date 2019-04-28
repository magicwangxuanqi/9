import {
    COUNTATTENTION
} from "../creator_name";
const initState = {
    count: []
};

export default (state = initState, action) => {
    switch (action.type) {
        // 查询关注数量
        case COUNTATTENTION:
            return {
                ...state,
                count: action.count
            };
        default:
            return state;
    }
};