import service from "../utils/request";

// 新增停车场接口
export function Parking(data = {}) {
    return service.request({
        method: "post",
        url: "/apiWeb/parking/",
        data
    })
}

