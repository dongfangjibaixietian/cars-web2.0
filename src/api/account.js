import service from "../utils/request";
/**
 * 获取验证码
 */
export function GetCode(data){
    return service.request({
        method: "post",
        url: "/account/code/",
        data
    })
}

/**
 * 登录
 */
export function Register(data){
    return service.request({
        method: "post",
        url: `/register/`,
        data
    })
}