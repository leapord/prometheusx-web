# Promtheusx-web

> 本项目基于 SCUI1.6.6 开发
> 
> SCUI请参考 [SCUI (gitee.io)](https://lolicode.gitee.io/scui-doc/) 官方介绍

本项目 组件介绍

views

    rules  -- 规则管理

    group  -- 分组管理

    node   -- 节点管理

    alert  -- 告警管理

    config -- 系统配置   

api 

    model

        system.js -- 页面菜单，本项目采用静态配置方式，可改造成远程动态连接

        alert.js 告警相关api

        group.js 分组相关api

        node.js  节点相关api

        rules.js 规则相关api

        config.js配置相关api



* 开发工具

    nodejs >=16.0

    vscode / webstorm



* 启动

```shell
# 首先需要启动 prometheusx https://github.com/leapord/prometheusx
git clone https://github.com/leapord/prometheusx
cd prometheusx && go run main.go

# 安装依赖
npm i
npm run serve
```
