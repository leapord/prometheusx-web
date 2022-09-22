import config from "@/config"
import http from "@/utils/request"

export default {
	list: {
		url: `${config.API_URL}/alert/page`,
		name: "告警列表列表",
		get: async function (params) {
			return await http.post(this.url, params);
		}
	}
}