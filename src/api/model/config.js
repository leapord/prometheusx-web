import config from "@/config"
import http from "@/utils/request"

export default {
    update: {
        url: `${config.API_URL}/config/update`,
        name: "更新配置",
        post: async function (params) {
            return await http.post(this.url, params);
        }
    },
    detail: {
        url: `${config.API_URL}/config/detail`,
        name: "单个详情",
        get: async function (params) {
            return await http.get(this.url + "/" + params);
        }
    },
    add: {
        url: `${config.API_URL}/config/add`,
        name: "添加配置",
        put: async function (params) {
            return await http.put(this.url, params);
        }
    },
    name: {
        url: `${config.API_URL}/config/name`,
        name: "根据配置名臣查询",
        query: async function (params) {
            return await http.get(this.url + "/" + params);
        }
    }
}