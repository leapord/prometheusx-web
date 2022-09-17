<template>
	<el-card shadow="never" header="个人信息">
		<el-form
			ref="form"
			:model="form"
			label-width="120px"
			style="margin-top: 20px"
		>
			<el-form-item label="账号">
				<el-input v-model="form.loginName" disabled></el-input>
				<div class="el-form-item-msg">
					账号信息用于登录，系统不允许修改
				</div>
			</el-form-item>
			<el-form-item label="姓名">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="邮箱">
				<el-input v-model="form.email"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary">保存</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: "administrator@scuiadmin.com",
					loginName: "Sakuya",
					email: "",
				},
			};
		},
		created() {
			var userInfo = JSON.parse(this.$TOOL.data.get("USER_INFO"));
			this.form.name = userInfo.Name;
			this.form.loginName = userInfo.LoginName;
			this.form.email = userInfo.Email;
		},
		methods() {},
	};
</script>

<style>
</style>
