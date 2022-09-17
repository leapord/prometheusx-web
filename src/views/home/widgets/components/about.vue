<template>
	<div>
		<el-card shadow="hover" header="关于项目" class="item-background">
			<p>
				Prometheusx 是一款增强Prometheus
				监控项管理系统，提供基本的exporter配置和blackbox配置管理
			</p>
		</el-card>
	</div>
</template>

<script>
	export default {
		title: "关于项目",
		icon: "el-icon-setting",
		data() {
			return {};
		},
	};
</script>

<style scoped>
	.item-background p {
		color: #999;
		margin-top: 10px;
		line-height: 1.8;
	}
</style>
