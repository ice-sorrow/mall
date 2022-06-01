import request from "../utils/request";

//登录
export const login = (data)=>{
  return request({
    method:"post",
    url:'/api/users/login',
    data
  })
}

//验证码
export const sendSms = ()=>{
  return request({
    method:"get",
    url:'/api/user/sms',
  })
}
