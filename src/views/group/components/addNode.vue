<template>
    <el-drawer v-model="show" :before-close="closeDrawer" :size="'40%'">
        <template #header>
            <h4>{{title}}</h4>
        </template>
        <template #default>
            <el-form :model="form" label-width="120px">
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
            title: "添加分组",
            show: false,
            form: {
                name: "",
                identification: ""
            }
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
            this.$API.group.add.put({
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
            this.$parent.showAddDrawer = false
            this.form.name = ""
            this.form.identification = ""
        }
    },
    created() {
    }
}
</script>

<style>

</style>