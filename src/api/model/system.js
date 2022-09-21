import config from "@/config"
import http from "@/utils/request"

export default {
	menu: {
		myMenus: {
			"code": 200,
            "data": {
                "menu": [
					{
						"name": "home",
						"path": "/home",
						"meta": {
							"title": "首页",
							"icon": "el-icon-eleme-filled",
							"type": "menu"
						},
						"children": [
							{
								"name": "dashboard",
								"path": "/dashboard",
								"meta": {
									"title": "控制台",
									"icon": "el-icon-menu",
									"affix": true
								},
								"component": "home"
							},
							{
								"name": "userCenter",
								"path": "/usercenter",
								"meta": {
									"title": "帐号信息",
									"icon": "el-icon-user",
									"tag": "NEW"
								},
								"component": "userCenter"
							}
						]
                    },
                    {
						"name": "user",
						"path": "/user",
						"meta": {
							"title": "用户",
							"icon": "el-icon-setting",
							"type": "menu"
						},
						"children": [
							{
								"path": "/user/list",
								"name": "userList",
								"meta": {
									"title": "用户管理",
									"icon": "el-icon-tools",
									"type": "menu"
								},
								"component": "user/list"
							}
						]
					},
                    {
						"name": "监控",
						"path": "/monitor",
						"meta": {
							"title": "监控管理",
							"icon": "el-icon-setting",
							"type": "menu"
						},
						"children": [
							{
								"path": "/group/list",
								"name": "groupList",
								"meta": {
									"title": "分组管理",
									"icon": "el-icon-tools",
									"type": "menu"
								},
								"component": "group/index"
							},
							{
								"path": "/node/list",
								"name": "nodeList",
								"meta": {
									"title": "节点管理",
									"icon": "el-icon-tools",
									"type": "menu"
								},
								"component": "node/index"
							},
							{
								"path": "/rules/list",
								"name": "ruleList",
								"meta": {
									"title": "规则管理",
									"icon": "el-icon-tools",
									"type": "menu"
								},
								"component": "rules/index"
							}
						]
					},
					{
						"path": "/other/about",
						"name": "about",
						"meta": {
							"title": "关于",
							"icon": "el-icon-info-filled",
							"type": "menu"
						},
						"component": "other/about"
					}
				],
				"permissions": [
					"list.add",
					"list.edit",
					"list.delete",
					"user.add",
					"user.edit",
					"user.delete"
				]
			},
			"message": ""
		},
		list: {
			url: `${config.API_URL}/system/menu/list`,
			name: "获取菜单",
			get: async function(){
				return await http.get(this.url);
			}
		}
	},
	dic: {
		tree: {
			url: `${config.API_URL}/system/dic/tree`,
			name: "获取字典树",
			get: async function(){
				return await http.get(this.url);
			}
		},
		list: {
			url: `${config.API_URL}/system/dic/list`,
			name: "字典明细",
			get: async function(params){
				return await http.get(this.url, params);
			}
		},
		get: {
			url: `${config.API_URL}/system/dic/get`,
			name: "获取字典数据",
			get: async function(params){
				return await http.get(this.url, params);
			}
		}
	},
	role: {
		list: {
			url: `${config.API_URL}/system/role/list2`,
			name: "获取角色列表",
			get: async function(params){
				return await http.get(this.url, params);
			}
		}
	},
	dept: {
		list: {
			url: `${config.API_URL}/system/dept/list`,
			name: "获取部门列表",
			get: async function(params){
				return await http.get(this.url, params);
			}
		}
	},
	user: {
		list: {
			url: `${config.API_URL}/system/user/list`,
			name: "获取用户列表",
			get: async function(params){
				return await http.get(this.url, params);
			}
		}
	},
	app: {
		list: {
			url: `${config.API_URL}/system/app/list`,
			name: "应用列表",
			get: async function(){
				return await http.get(this.url);
			}
		}
	},
	log: {
		list: {
			url: `${config.API_URL}/system/log/list`,
			name: "日志列表",
			get: async function(params){
				return await http.get(this.url, params);
			}
		}
	},
	table: {
		list: {
			url: `${config.API_URL}/system/table/list`,
			name: "表格列管理列表",
			get: async function(params){
				return await http.get(this.url, params);
			}
		},
		info: {
			url: `${config.API_URL}/system/table/info`,
			name: "表格列管理详情",
			get: async function(params){
				return await http.get(this.url, params);
			}
		}
	},
	tasks: {
		list: {
			url: `${config.API_URL}/system/tasks/list`,
			name: "系统任务管理",
			get: async function(params){
				return await http.get(this.url, params);
			}
		}
	}
}
