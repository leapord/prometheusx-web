import config from "@/config"
import http from "@/utils/request"

export default {
    list: {
        url: `${config.API_URL}/rule/page`,
        name: "规则列表",
        get: async function (params) {
            return await http.post(this.url, params);
        }
    },
    update: {
        url: `${config.API_URL}/rule/update`,
        name: "更新规则",
        post: async function (params) {
            return await http.post(this.url, params);
        }
    },
    detail: {
        url: `${config.API_URL}/rule/detail`,
        name: "单个详情",
        get: async function (params) {
            return await http.get(this.url + "/" + params);
        }
    },
    remove: {
        url: `${config.API_URL}/rule/remove`,
        name: "删除规则",
        delete: async function (params) {
            return await http.delete(this.url + "/" + params);
        }
    },
    add: {
        url: `${config.API_URL}/rule/add`,
        name: "添加规则",
        put: async function (params) {
            return await http.put(this.url, params);
        }
    },
    active: {
        url: `${config.API_URL}/rule/active`,
        name: "修改激活状态",
        post: async function (params) {
            return await http.post(this.url, params);
        }
    },
    generatedRuleFile: {
        url: `${config.API_URL}/rule/generatedFile`,
        name: "生成规则文件",
        get: async function () {
            return await http.get(this.url);
        }
    }
}