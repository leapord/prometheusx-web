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
            <el-table-column label="分组" prop="group" width="150"></el-table-column>
            <el-table-column label="job组" prop="jobName" width="150"></el-table-column>
            <el-table-column label="地址" prop="host" width="150"></el-table-column>
            <el-table-column label="端口号" prop="port" width="150"> </el-table-column>
            <el-table-column label="负责人" prop="owner" width="150"> </el-table-column>
            <el-table-column label="属性组" prop="labels" width="150"> </el-table-column>
            <el-table-column label="创建时间" prop="createTime" width="150"></el-table-column>
            <el-table-column fixed="right" label="Operations" width="200">
                <template #default="scope">
                    <el-button type="primary"  circle v-on:click="edit(scope.row.id)">
                        <el-icon><Edit /></el-icon>
                    </el-button>
                    <el-button type="danger" circle v-on:click="remove(scope.row.id)">
                        <el-icon><Delete /></el-icon>
                    </el-button>
                    <el-button type="success" v-if="scope.row.active === 0" circle v-on:click="active(scope.row.id,true)">
                        <el-icon><Upload /></el-icon>
                    </el-button>
                    <el-button type="warning" v-if="scope.row.active === 1" circle v-on:click="active(scope.row.id,false)">
                        <el-icon><Download /></el-icon>
                    </el-button>
                </template>
            </el-table-column>
        </scTable>
    </el-main>
</template>

<script lang="js">
export default {
    name: "userList",
    data() {
        return {
            list: {
                apiObj: this.$API.node.list,
            },
        };
    },
    methods: {
        edit(id) {
            console.log(id)
        },
        remove(id) {
            this.$API.node.remove.delete(id)
            this.refreshTable()            
        },
        active(id, status) {
            this.$API.node.active.post({ "id": id, "active": status })
            this.refreshTable()
        },
        refreshTable(){
            this.$refs["table"].getData();
        }
    },
}
</script>
<style>

</style>