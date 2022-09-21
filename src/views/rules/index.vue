<template>
    <el-header>
        <div class="left-panel">
            <el-button type="primary" icon="el-icon-plus" v-on:click="showAddNodeDrawer"></el-button>
            <el-button type="success" plain v-on:click="generateRuleFile">生成配置文件</el-button>
        </div>
    </el-header>
    <el-main class="nopadding">
        <scTable ref="table" :apiObj="list.apiObj" row-key="id" stripe>
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column label="规则组名称" prop="groupName" width="150"></el-table-column>
            <el-table-column label="规则类型" prop="type" width="150"></el-table-column>
            <el-table-column label="规则内容" prop="content" width="550"></el-table-column>
            <el-table-column label="是否启用" prop="active" width="150"></el-table-column>
            <el-table-column label="创建时间" prop="createTime" width="150"></el-table-column>
            <el-table-column fixed="right" label="Operations" width="200">
                <template #default="scope">
                    <el-button type="primary" circle v-on:click="edit(scope.row.id)">
                        <el-icon>
                            <Edit />
                        </el-icon>
                    </el-button>
                    <el-button type="danger" circle v-on:click="remove(scope.row.id)">
                        <el-icon>
                            <Delete />
                        </el-icon>
                    </el-button>
                    <el-button type="success" v-if="scope.row.active === 0" circle
                        v-on:click="active(scope.row.id,true)">
                        <el-icon>
                            <Upload />
                        </el-icon>
                    </el-button>
                    <el-button type="warning" v-if="scope.row.active === 1" circle
                        v-on:click="active(scope.row.id,false)">
                        <el-icon>
                            <Download />
                        </el-icon>
                    </el-button>
                </template>
            </el-table-column>
        </scTable>
    </el-main>
    <AddRules :showAddDrawer="showAddDrawer" />
    <EditRules :showEditDrawer="showEditDrawer" :id="editId" />
</template>

<script lang="js">
import AddRules from './components/addRules.vue'
import EditRules from './components/editRules.vue'
export default {
    name: "rulesList",
    components: {
        AddRules,
        EditRules
    },
    data() {
        return {
            showAddDrawer: false,
            showEditDrawer: false,
            editId: -1,
            list: {
                apiObj: this.$API.rules.list,
            },
        };
    },
    methods: {
        generateRuleFile(){
            this.$API.rules.generatedRuleFile.get().then(res=>{
                if (res.code == 0){
                    this.$message({
                        type:"success",
                        message:"生成成功"
                    })
                }else{
                    this.$message({
                        type:"error",
                        message:res.message
                    })
                }
            })
        },
        edit(id) {
            this.editId = id
            this.showEditDrawer = true
        },
        remove(id) {
            this.$API.rules.remove.delete(id)
            this.refreshTable()
        },
        active(id, status) {
            this.$API.rules.active.post({ "id": id, "active": status }).then(res => {
                if (res.code == 0) {
                    this.refreshTable()
                } else {
                    this.$message({
                        type: "error",
                        message: res.message
                    })
                }
            }).catch()

        },
        refreshTable() {
            this.$refs["table"].getData();
        },
        showAddNodeDrawer() {
            this.showAddDrawer = true;
        }
    },
}
</script>
<style scope>
.el-table .cell {
    white-space: pre-wrap;
}
</style>