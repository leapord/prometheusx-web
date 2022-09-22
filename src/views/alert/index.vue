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
            <el-table-column label="groupKey" prop="groupKey" width="150"></el-table-column>
            <el-table-column label="状态" prop="status" width="100"></el-table-column>
            <el-table-column label="内部地址" prop="externalUrl" width="150"></el-table-column>
            <el-table-column label="labels" prop="labels" width="250">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <pre>
                            {{JSON.stringify(scope.row.labels,null,1)}}
                        </pre>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="annotations" prop="annotations" width="250">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <pre>
                            {{JSON.stringify(scope.row.annotations,null,1)}}
                        </pre>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="startsAt" prop="startsAt" width="150"> </el-table-column>
            <el-table-column label="endsAt" prop="endsAt" width="150"> </el-table-column>
            <el-table-column label="generatorUrl" prop="generatorUrl" width="150"></el-table-column>
            <el-table-column label="fingerprint" prop="fingerprint" width="150"></el-table-column>
            <el-table-column label="createTime" prop="createTime" width="150"></el-table-column>
        </scTable>
    </el-main>
</template>

<script lang="js">
export default {
    name: "alertList",
    components: {
    },
    data() {
        return {
            list: {
                apiObj: this.$API.alert.list,
            },
        };
    },
    methods: {
        refreshTable() {
            this.$refs["table"].getData();
        },
    },
}
</script>
<style>

</style>