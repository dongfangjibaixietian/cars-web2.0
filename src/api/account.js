import service from "../utils/request";
/**
 * 获取验证码
 */
export function GetCode(data){
    return service.request({
        method: "post",
        url: "/apiWeb/account/code/",
        data
    })
}

/**
 * 登录
 */
export function Register(data){
    return service.request({
        method: "post",
        url: "/apiWeb/account/register/",
        data
    })
}