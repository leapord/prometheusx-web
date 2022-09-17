import config from "@/config"
import http from "@/utils/request"

export default {
	list: {
		url: `${config.API_URL}/user/page`,
        name: "用户列表",
		get: async function(params){
			return await http.post(this.url, params);
		}
	},
}