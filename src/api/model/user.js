import config from "@/config"
import http from "@/utils/request"

export default {
	list: {
		url: `${config.API_URL}/user/page`,
		name: "用户列表",
		get: async function (params) {
			return await http.post(this.url, params);
		}
	},
	update: {
		url: `${config.API_URL}/user/update`,
		name: "更新用户",
		post: async function (params) {
			return await http.post(this.url, params);
		}
	},
	updatePassword: {
		url: `${config.API_URL}/user/updatePassword`,
		name: "更新密码",
		post: async function (params) {
			return await http.post(this.url, params);
		}
	}
}