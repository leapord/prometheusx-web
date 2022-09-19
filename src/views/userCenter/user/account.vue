<template>
	<el-card shadow="never" header="个人信息">
		<el-form ref="form" :model="form" label-width="120px" style="margin-top: 20px">
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
			<el-form-item label="联系电话">
				<el-input v-model="form.phoneNumber"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" v-on:click="save">保存</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script>
export default {
	data() {
		return {
			form: {
				id: -1,
				name: "Leapord",
				loginName: "leapord",
				email: "leapord@foxmail.com",
				phoneNumber: ""
			},
		};
	},
	created() {
		var userInfo = JSON.parse(this.$TOOL.data.get("USER_INFO"));
		this.form.id = userInfo.id
		this.form.name = userInfo.name;
		this.form.loginName = userInfo.loginName;
		this.form.email = userInfo.email;
		this.form.phoneNumber = userInfo.phoneNumber;
	},
	methods: {
		async save() {
			this.$API.user.update.post({
				id: this.form.id,
				name: this.form.name,
				email: this.form.email,
				loginname: this.form.loginName,
				phoneNumber: this.form.phoneNumber
			}).then(res => {
				if (res.code == 0) {
					this.$message({
						type: "info",
						message: "修改成功，请退出重新登录"
					})
				} else {
					this.$message({
						type: "error",
						message: res.message
					})
				}
			})
		}
	},
};
</script>

<style>

</style>
