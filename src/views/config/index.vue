<template>
    <el-card shadow="never" header="Prometheus配置信息">
        <el-form ref="form" :model="form" label-width="240px" style="margin-top: 20px">
            <el-form-item label="Prometheus规则配置文件目录">
                <el-input v-model="rulePath.value">
                    <template #append>
                        <el-button type="primary" @click="saveRulePath">保存</el-button>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item label="Prometheus检查工具全路径">
                <el-input v-model="toolPath.value">
                    <template #append>
                        <el-button type="primary" @click="saveToolPath">保存</el-button>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item label="Prometheus访问地址">
                <el-input v-model="adminUrl.value">
                    <template #append>
                        <el-button type="primary" @click="saveAdminUrl">保存</el-button>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item label="Prometheus配置文件全路径">
                <el-input v-model="configPath.value">
                    <template #append>
                        <el-button type="primary" @click="saveConfigPath">保存</el-button>
                    </template>
                </el-input>
            </el-form-item>
        </el-form>
    </el-card>
    <el-card shadow="never" header="邮件配置">
        <el-form ref="form" :model="form" label-width="240px" style="margin-top: 20px">
            <el-form-item label="STAMP 地址">
                <el-input v-model="stampAddress.value">
                    <template #append>
                        <el-button type="primary" @click="saveStampAddress">保存</el-button>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item label="STAMP PORT">
                <el-input v-model="stampPort.value">
                    <template #append>
                        <el-button type="primary" @click="saveStampPort">保存</el-button>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item label="STAMP ACCOUNT">
                <el-input v-model="stampAccount.value">
                    <template #append>
                        <el-button type="primary" @click="saveStampAccount">保存</el-button>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item label="STAMP Password">
                <el-input v-model="stampPassword.value">
                    <template #append>
                        <el-button type="primary" @click="saveStampPassword">保存</el-button>
                    </template>
                </el-input>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            rulePath: {
                id: -1,
                name: "PROMETHEUS_RULE_PATH",
                value: ""
            },
            toolPath: {
                id: -1,
                name: "PROMETHEUS_TOOL_PATH",
                value: ""
            },
            adminUrl: {
                id: -1,
                name: "PROMETHEUS_ADMIN_URL",
                value: ""
            },
            configPath: {
                id: -1,
                name: "PROMETHEUS_CONFIG_PATH",
                value: ""
            },
            stampAddress: {
                id: -1,
                name: "STAMP_SERVER_ADDRESS",
                value: ""
            },
            stampPort: {
                id: -1,
                name: "STAMP_SERVER_PORT",
                value: ""
            },
            stampAccount: {
                id: -1,
                name: "STAMP_SERVER_ACCOUNT",
                value: ""
            },
            stampPassword: {
                id: -1,
                name: "STAMP_SERVER_PASSWORD",
                value: ""
            },
        }
    },
    created() {
        this.loadInfo()
    },
    methods: {
        saveRulePath() {
            if (this.rulePath.id === -1) {
                this.$API.config.add.put({
                    name: this.rulePath.name,
                    value: this.rulePath.value
                }).then(res => {
                    if (res.code != 0) {
                        this.$message({
                            type: "error",
                            message: res.message
                        })
                    } else {
                        this.$message({
                            type: "success",
                            message: "保存成功"
                        })
                        this.loadInfo()
                    }
                })
            } else {
                this.$API.config.update.post({
                    id: this.rulePath.id,
                    name: this.rulePath.name,
                    value: this.rulePath.value
                }).then(res => {
                    if (res.code != 0) {
                        this.$message({
                            type: "error",
                            message: res.message
                        })
                    } else {
                        this.$message({
                            type: "success",
                            message: "保存成功"
                        })
                    }
                })
            }
        },
        saveToolPath() {
            if (this.toolPath.id === -1) {
                this.$API.config.add.put({
                    name: this.toolPath.name,
                    value: this.toolPath.value
                }).then(res => {
                    if (res.code != 0) {
                        this.$message({
                            type: "error",
                            message: res.message
                        })
                    } else {
                        this.$message({
                            type: "success",
                            message: "保存成功"
                        })
                        this.loadInfo()
                    }
                })
            } else {
                this.$API.config.update.post({
                    id: this.toolPath.id,
                    name: this.toolPath.name,
                    value: this.toolPath.value
                }).then(res => {
                    if (res.code != 0) {
                        this.$message({
                            type: "error",
                            message: res.message
                        })
                    } else {
                        this.$message({
                            type: "success",
                            message: "保存成功"
                        })
                    }
                })
            }
        },
        saveAdminUrl() {
            if (this.adminUrl.id === -1) {
                this.$API.config.add.put({
                    name: this.adminUrl.name,
                    value: this.adminUrl.value
                }).then(res => {
                    if (res.code != 0) {
                        this.$message({
                            type: "error",
                            message: res.message
                        })
                    } else {
                        this.$message({
                            type: "success",
                            message: "保存成功"
                        })
                        this.loadInfo()
                    }
                })
            } else {
                this.$API.config.update.post({
                    id: this.adminUrl.id,
                    name: this.adminUrl.name,
                    value: this.adminUrl.value
                }).then(res => {
                    if (res.code != 0) {
                        this.$message({
                            type: "error",
                            message: res.message
                        })
                    } else {
                        this.$message({
                            type: "success",
                            message: "保存成功"
                        })
                    }
                })
            }
        },
        saveConfigPath() {
            if (this.configPath.id === -1) {
                this.$API.config.add.put({
                    name: this.configPath.name,
                    value: this.configPath.value
                }).then(res => {
                    if (res.code != 0) {
                        this.$message({
                            type: "error",
                            message: res.message
                        })
                    } else {
                        this.$message({
                            type: "success",
                            message: "保存成功"
                        })
                        this.loadInfo()
                    }
                })
            } else {
                this.$API.config.update.post({
                    id: this.configPath.id,
                    name: this.configPath.name,
                    value: this.configPath.value
                }).then(res => {
                    if (res.code != 0) {
                        this.$message({
                            type: "error",
                            message: res.message
                        })
                    } else {
                        this.$message({
                            type: "success",
                            message: "保存成功"
                        })
                    }
                })
            }
        },
        saveStampAddress() {
            if (this.stampAddress.id === -1) {
                this.$API.config.add.put({
                    name: this.stampAddress.name,
                    value: this.stampAddress.value
                }).then(res => {
                    if (res.code != 0) {
                        this.$message({
                            type: "error",
                            message: res.message
                        })
                    } else {
                        this.$message({
                            type: "success",
                            message: "保存成功"
                        })
                        this.loadInfo()
                    }
                })
            } else {
                this.$API.config.update.post({
                    id: this.stampAddress.id,
                    name: this.stampAddress.name,
                    value: this.stampAddress.value
                }).then(res => {
                    if (res.code != 0) {
                        this.$message({
                            type: "error",
                            message: res.message
                        })
                    } else {
                        this.$message({
                            type: "success",
                            message: "保存成功"
                        })
                    }
                })
            }
        },
        saveStampPort() {
            if (this.stampPort.id === -1) {
                this.$API.config.add.put({
                    name: this.stampPort.name,
                    value: this.stampPort.value
                }).then(res => {
                    if (res.code != 0) {
                        this.$message({
                            type: "error",
                            message: res.message
                        })
                    } else {
                        this.$message({
                            type: "success",
                            message: "保存成功"
                        })
                        this.loadInfo()
                    }
                })
            } else {
                this.$API.config.update.post({
                    id: this.stampPort.id,
                    name: this.stampPort.name,
                    value: this.stampPort.value
                }).then(res => {
                    if (res.code != 0) {
                        this.$message({
                            type: "error",
                            message: res.message
                        })
                    } else {
                        this.$message({
                            type: "success",
                            message: "保存成功"
                        })
                    }
                })
            }
        },
        saveStampAccount() {
            if (this.stampAccount.id === -1) {
                this.$API.config.add.put({
                    name: this.stampAccount.name,
                    value: this.stampAccount.value
                }).then(res => {
                    if (res.code != 0) {
                        this.$message({
                            type: "error",
                            message: res.message
                        })
                    } else {
                        this.$message({
                            type: "success",
                            message: "保存成功"
                        })
                        this.loadInfo()
                    }
                })
            } else {
                this.$API.config.update.post({
                    id: this.stampAccount.id,
                    name: this.stampAccount.name,
                    value: this.stampAccount.value
                }).then(res => {
                    if (res.code != 0) {
                        this.$message({
                            type: "error",
                            message: res.message
                        })
                    } else {
                        this.$message({
                            type: "success",
                            message: "保存成功"
                        })
                    }
                })
            }
        },
        saveStampPassword() {
            if (this.stampPassword.id === -1) {
                this.$API.config.add.put({
                    name: this.stampPassword.name,
                    value: this.stampPassword.value
                }).then(res => {
                    if (res.code != 0) {
                        this.$message({
                            type: "error",
                            message: res.message
                        })
                    } else {
                        this.$message({
                            type: "success",
                            message: "保存成功"
                        })
                        this.loadInfo()
                    }
                })
            } else {
                this.$API.config.update.post({
                    id: this.stampPassword.id,
                    name: this.stampPassword.name,
                    value: this.stampPassword.value
                }).then(res => {
                    if (res.code != 0) {
                        this.$message({
                            type: "error",
                            message: res.message
                        })
                    } else {
                        this.$message({
                            type: "success",
                            message: "保存成功"
                        })
                    }
                })
            }
        },
        loadInfo() {
            // rulePath
            this.$API.config.name.query(this.rulePath.name).then(res => {
                if (res.code == 0) {
                    this.rulePath.value = res.data.model.value
                    this.rulePath.id = res.data.model.id
                }
            })
            // toolPath
            this.$API.config.name.query(this.toolPath.name).then(res => {
                if (res.code == 0) {
                    this.toolPath.value = res.data.model.value
                    this.toolPath.id = res.data.model.id
                }
            })
            // adminUrl
            this.$API.config.name.query(this.adminUrl.name).then(res => {
                if (res.code == 0) {
                    this.adminUrl.value = res.data.model.value
                    this.adminUrl.id = res.data.model.id
                }
            })
            // configPath
            this.$API.config.name.query(this.configPath.name).then(res => {
                if (res.code == 0) {
                    this.configPath.value = res.data.model.value
                    this.configPath.id = res.data.model.id
                }
            })
            // stamp address
            this.$API.config.name.query(this.stampAddress.name).then(res => {
                if (res.code == 0) {
                    this.stampAddress.value = res.data.model.value
                    this.stampAddress.id = res.data.model.id
                }
            })
            // stamp port
            this.$API.config.name.query(this.stampPort.name).then(res => {
                if (res.code == 0) {
                    this.stampPort.value = res.data.model.value
                    this.stampPort.id = res.data.model.id
                }
            })
            // stamp account
            this.$API.config.name.query(this.stampAccount.name).then(res => {
                if (res.code == 0) {
                    this.stampAccount.value = res.data.model.value
                    this.stampAccount.id = res.data.model.id
                }
            })
            // stamp password
            this.$API.config.name.query(this.stampPassword.name).then(res => {
                if (res.code == 0) {
                    this.stampPassword.value = res.data.model.value
                    this.stampPassword.id = res.data.model.id
                }
            })
        }
    }
}
</script>

<style>

</style>