const BASEURL = 'http://localhost:9093/';

// 用户注册
export const api_register = BASEURL + 'user/register';
// 用户登陆
export const api_login = BASEURL + 'user/login';
// 修改密码
export const api_changePwd = BASEURL + 'user/changePwd';
// 发布房源信息
export const api_rental = BASEURL + 'housing/rental';
// 获取房源信息
export const api_message = BASEURL + 'housing/message';
// 根据id删除房源信息
export const api_delserial = BASEURL + 'housing/delserial';
// 根据id获取房源信息
export const api_serial = BASEURL + 'housing/serial';
// 推荐房源
export const api_recommend = BASEURL + 'housing/recommend';
// 提交委托
export const api_entrust = BASEURL + 'entrust/issure';
export const api_info = BASEURL + 'entrust/info';
export const api_updateStatus = BASEURL + 'entrust/updateStatus';

// admin
export const api_admin_register = BASEURL + 'admin/register';
export const api_admin_login = BASEURL + 'admin/login';
export const api_admin_updateMsg = BASEURL + 'admin/updateMsg';
export const api_admin_getAdminInfo = BASEURL + 'admin/adminInfo';
export const api_admin_del = BASEURL + 'admin/del';

// 加关注
export const api_attention = BASEURL + 'attention/add';
// 取消关注
export const api_rm_attention = BASEURL + 'attention/rm';
// 获取关注信息
export const api_content_attention = BASEURL + 'attention/content';
// 根据id获取关注信息
export const api_item_attention = BASEURL + 'attention/item';
// 获取关注数量
export const api_count_attention = BASEURL + 'attention/count';




