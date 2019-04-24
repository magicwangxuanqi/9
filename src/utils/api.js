const BASEURL = 'http://localhost:9093/';

// 用户注册
export const api_register = BASEURL + 'user/register';
// 用户登陆
export const api_login = BASEURL + 'user/login';
// 提交委托
export const api_rental = BASEURL + 'housing/rental';
// 获取房源信息
export const api_message = BASEURL + 'housing/message';
// 根据id获取房源信息
export const api_serial = BASEURL + 'housing/serial';
// 推荐房源
export const api_recommend = BASEURL + 'housing/recommend';