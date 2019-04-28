import {
    CONTENTATTENTION
} from "../creator_name";
const initState = {
    count: 0,
    attentionStatus: false,
    result: [{
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
        time: '',
        //   价格
        price: "",
        // 称呼
        appellation: "",
        //   手机号
        phone: ""
    }]
};

export default (state = initState, action) => {
    switch (action.type) {
        // 根据用户获取的关注房源信息
        case CONTENTATTENTION:
            return {
                ...state,
                count: action.data.length,
                result: action.data
            };
        default:
            return state;
    }
};