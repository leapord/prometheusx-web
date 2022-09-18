<template>
	<el-header>
		<div class="left-panel">
			<el-button type="primary" icon="el-icon-plus"></el-button>
			<el-button type="danger" plain icon="el-icon-delete"></el-button>
		</div>
	</el-header>
	<el-main class="nopadding">
		<scTable ref="table" :apiObj="list.apiObj" row-key="id" stripe>
			<el-table-column type="selection" width="50"></el-table-column>
			<el-table-column
				label="姓名"
				prop="name"
				width="150"
			></el-table-column>
			<el-table-column 
                label="登陆名" 
                prop="loginName" 
                width="150">
			</el-table-column>
			<el-table-column
				label="邮箱"
				prop="email"
				width="250"
			></el-table-column>
			<el-table-column
				label="联系电话"
				prop="phoneNumber"
				width="150"
				sortable
			></el-table-column>
			<el-table-column
				label="注册时间"
				prop="createTime"
				width="150"
				sortable
			></el-table-column>
		</scTable>
	</el-main>
</template>

<script>
	export default {
		name: "userList",
		data() {
			return {
				list: {
					apiObj: this.$API.user.list,
				},
			};
		},
		methods: {
		},
	};
</script>

<style>
</style>