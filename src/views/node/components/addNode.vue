<template>
    <el-drawer v-model="show" :before-close="closeDrawer" :size="'40%'">
        <template #header>
            <h4>{{title}}</h4>
        </template>
        <template #default>
            <el-form :model="form" label-width="120px">
                <el-form-item label="group" prop="group" :rules="[
                  { required: true, message: '请填选择分组' }
                ]">
                    <el-select v-model="form.group" class="w-50 m-2" placeholder="Select" size="large">
                        <el-option v-for="item in groups" :key="item.identification" :label="item.name"
                            :value="item.identification" />
                    </el-select>
                </el-form-item>
                <el-form-item label="job组" prop="jobName" :rules="[
                  { required: true, message: '请填写job组' }
                ]">
                    <el-input v-model="form.jobName" class="w-50 m-2" clearable placeholder="请输入监控主机job组名">
                    </el-input>
                </el-form-item>
                <el-form-item label="Host" prop="host" :rules="[
                  { required: true, message: '请填写主机地址' }
                ]">
                    <el-input v-model="form.host" class="w-50 m-2" clearable placeholder="请输入监控主机地址 Host 或者 IP">
                    </el-input>
                </el-form-item>
                <el-form-item label="Port" prop="port" :rules="[
                  { required: true, message: '请填写端口号' }
                ]">
                    <el-input v-model="form.port" class="w-50 m-2" clearable placeholder="请输入监控主机 port ">
                    </el-input>
                </el-form-item>
                <el-form-item label="Owner" prop="owner" :rules="[
                  { required: true, message: '请填写负责人' }
                ]">
                    <el-input v-model="form.owner" class="w-50 m-2" clearable placeholder="请输入监控主机 负责人">
                    </el-input>
                </el-form-item>
                <el-form-item label="labels">
                    <el-input v-model="form.labels" :size="'large'" rows="5" type="textarea" class="w-50 m-2" clearable
                        placeholder="请输入监控主机 配置属性，必须是json内容">
                    </el-input>
                </el-form-item>
            </el-form>
        </template>
        <template #footer>
            <div style="flex: auto">
                <el-button @click="cancelClick">取消</el-button>
                <el-button type="primary" @click="submitClick">提交</el-button>
            </div>
        </template>
    </el-drawer>
</template>

<script lang="js">
export default {
    data() {
        return {
            title: "添加节点",
            show: false,
            form: {
                group: "",
                jobName: "",
                host: "",
                port: "",
                owner: "",
                labels: ""
            },
            groups: []
        }
    },
    props: {
        showAddDrawer: { type: Boolean, default: false }
    },
    watch: {
        showAddDrawer() {
            this.show = this.showAddDrawer
        }
    },
    methods: {
        cancelClick() {
            this.closeDrawer()
        },
        submitClick() {
            this.$API.node.add.put({
                "group": this.form.group,
                "jobName": this.form.jobName,
                "host": this.form.host,
                "port": this.form.port,
                "owner": this.form.owner,
                "labels": this.form.labels,
            }).then(res => {
                if (res.code == 0) {
                    this.closeDrawer()
                    this.$parent.refreshTable()
                } else {
                    this.$message({
                        type: "error",
                        message: res.message
                    });
                }
            }).catch(error => {
                this.$message({
                    type: "error",
                    message: error
                });
            })
        },
        closeDrawer() {
            this.$parent.showAddDrawer = false
            this.form.group = ""
            this.form.jobName = ""
            this.form.host = ""
            this.form.port = ""
            this.form.owner = ""
            this.form.lables = ""
        }
    },
    created() {
        this.$API.group.listAll.get().then(res => {
            if (res.code == 0) {
                this.groups = res.data.models
            } else {
                this.$message({
                    type: "error",
                    message: res.message
                })
            }
        });

    }
}
</script>

<style>

</style>