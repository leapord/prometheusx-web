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
	list: {
		url: `${config.API_URL}/group/page`,
		name: "分组列表",
		get: async function (params) {
			return await http.post(this.url, params);
		}
	},
    add: {
		url: `${config.API_URL}/group/add`,
        name: "添加分组",
		put: async function(params){
			return await http.put(this.url,params);
		}
	},
	update:{
		url: `${config.API_URL}/group/update`,
        name: "修改分组",
		post: async function(params){
			return await http.post(this.url,params);
		}
	},
	detail:{
		url: `${config.API_URL}/group/detail`,
        name: "查询分组详情",
		get: async function(params){
			return await http.get(this.url+"/"+params);
		}
	},
	remove:{
		url: `${config.API_URL}/group/remove`,
        name: "删除分组",
		delete: async function(params){
			return await http.delete(this.url+"/"+params);
		}
	}
}