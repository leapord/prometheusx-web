import config from "@/config"
import http from "@/utils/request"

export default {
	listAll: {
		url: `${config.API_URL}/group/list`,
        name: "分组列表",
		get: async function(){
			return await http.get(this.url);
		}
	},
    add: {
		url: `${config.API_URL}/group/add`,
        name: "添加分组",
		port: async function(params){
			return await http.post(this.url,params);
		}
	},
}