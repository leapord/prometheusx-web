import config from "@/config"
import http from "@/utils/request"

export default {
	list: {
		url: `${config.API_URL}/node/page`,
        name: "节点列表",
		get: async function(params){
			return await http.post(this.url, params);
		}
	},
	remove : {
		url: `${config.API_URL}/node/remove`,
        name: "删除节点",
		delete: async function(id){
            return await http.delete(this.url + "/" + id);
		}
	},
    active :{
        url: `${config.API_URL}/node/active`,
        name: "激活/停用节点",
		post: async function(params){
            return await http.post(this.url, params);
		}
    }
}