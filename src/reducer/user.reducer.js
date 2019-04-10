const initaState = {
    registerStatus: false, // 注册状态
    loginStatus: false, // 登陆状态
    logoutStatus: false // 退出状态
}

export default (state = initaState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                loginStatus: action.loginFlag
            };
            break;
        case 'REGISTER':
            return {
                ...state,
                registerStatus: action.registerFlag
            }
        default:
            return state;
            break;
    }
};