<template>
    <el-drawer v-model="show" :before-close="closeDrawer" :size="'40%'">
        <template #header>
            <h4>{{title}}</h4>
        </template>
        <template #default>
            <el-form :model="form" label-width="120px">
                <input name="id" v-bind:value="form.id" type="hidden"/>
                <el-form-item label="分组名称" prop="name" :rules="[
                  { required: true, message: '请填写分组名称' }
                ]">
                    <el-input v-model="form.name" class="w-50 m-2" clearable placeholder="请输入组名">
                    </el-input>
                </el-form-item>
                <el-form-item label="唯一标识" prop="identification" :rules="[
                  { required: true, message: '请填唯一标识' }
                ]">
                    <el-input v-model="form.identification" class="w-50 m-2" clearable placeholder="请输入唯一标识">
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
                id: -1,
                name: "",
                identification: ""
            },
            groups: []
        }
    },
    props: {
        showEditDrawer: { type: Boolean, default: false },
        id: { type: Number, default: -1 }
    },
    watch: {
        showEditDrawer() {
            this.show = this.showEditDrawer
        },
        id() {
            this.form.id = this.id
            if (this.form.id !== -1) {
                this.loadNodeInfo()
            }
        }
    },
    methods: {
        cancelClick() {
            this.closeDrawer()
        },
        submitClick() {
            this.$API.group.update.post({
                "id": this.form.id,
                "name": this.form.name,
                "identification": this.form.identification
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
            this.$parent.showEditDrawer = false
            this.$parent.editId = -1
        },
        loadNodeInfo() {
            this.$API.group.detail.get(this.form.id).then(res => {
                if (res.code == 0) {
                    this.form = res.data.model
                } else {
                    this.$message({
                        type: "error",
                        message: res.message
                    })
                }
            }).catch()
        }
    },
    created() {
    }
}
</script>

<style>

</style>