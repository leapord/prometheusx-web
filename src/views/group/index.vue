<template>
    <el-header>
        <div class="left-panel">
            <el-button type="primary" icon="el-icon-plus" v-on:click="showAddNodeDrawer"></el-button>
            <el-button type="danger" disabled plain icon="el-icon-delete"></el-button>
        </div>
    </el-header>
    <el-main class="nopadding">
        <scTable ref="table" :apiObj="list.apiObj" row-key="id" stripe>
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column label="分组" prop="name" width="150"></el-table-column>
            <el-table-column label="标识" prop="identification" width="150"></el-table-column>
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
                </template>
            </el-table-column>
        </scTable>
    </el-main>
    <AddNode :showAddDrawer="showAddDrawer" />
    <EditNode :showEditDrawer="showEditDrawer" :id="editId" />
</template>

<script lang="js">
import AddNode from './components/addNode.vue'
import EditNode from './components/editNode.vue'
export default {
    name: "groupList",
    components: {
        AddNode,
        EditNode
    },
    data() {
        return {
            showAddDrawer: false,
            showEditDrawer: false,
            editId: -1,
            list: {
                apiObj: this.$API.group.list,
            },
        };
    },
    methods: {
        edit(id) {
            this.editId = id
            this.showEditDrawer = true
        },
        remove(id) {
            this.$API.group.remove.delete(id).then(res => {
                if (res.code == 0) {
                    this.refreshTable()
                } else {
                    this.$message({
                        type: "error",
                        message: res.message
                    })
                }
            });
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
<style>

</style>