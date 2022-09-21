<template>
    <el-drawer v-model="show" :before-close="closeDrawer" :size="'40%'">
        <template #header>
            <h4>{{title}}</h4>
        </template>
        <template #default>
            <el-form :model="form" label-width="120px">
                <el-form-item label="分组名称" prop="groupName" :rules="[
                  { required: true, message: '请填写分组名称' }
                ]">
                    <el-input v-model="form.groupName" class="w-50 m-2" clearable placeholder="请填写分组名称">
                    </el-input>
                </el-form-item>
                <el-form-item label="分组类型" prop="type" :rules="[
                  { required: true, message: '请填写分组类型' }
                ]">
                    <el-select v-model="form.type" placeholder="请选择规则类型" @change="typeChange">
                        <el-option :key="'alert'" :label="'alert'" :value="'alert'" />
                        <el-option :key="'record'" :label="'record'" :value="'record'" />
                    </el-select>
                </el-form-item>
                <el-form-item label="分组内容" prop="host" :rules="[
                  { required: true, message: '请填写主机地址' }
                ]">
                    <YamlEditor v-model="form.content" mode="yaml" style="height: 200px" :lint="true" :readonly="false">
                    </YamlEditor>
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
import YamlEditor from './yamlEditor.vue'
export default {
    components: {
        YamlEditor
    },
    data() {
        return {
            title: "添加规则",
            show: false,
            form: {
                groupName: "",
                type: "",
                content: ""
            },
            alertContent: "alert:\nexpr:\nfor:\nlabels:\n\nannotations:\n summary: ${value}",
            recordContent: "record:\nexpr:\n"
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
        typeChange(val) {
            if (val === 'alert') {
                this.form.content = this.alertContent
            } else if (val === 'record') {
                this.form.content = this.recordContent
            }
        },
        cancelClick() {
            this.closeDrawer()
        },
        submitClick() {
            this.$API.rules.add.put({
                "groupName": this.form.groupName,
                "type": this.form.type,
                "content": this.form.content,
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
            this.form.groupName = ""
            this.form.type = ""
            this.form.content = ""
        }
    },
    created() {
    }
}
</script>

<style>

</style>