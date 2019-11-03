<template >
    <div id="layout">
        <el-container>
            <el-header>
                <v-head></v-head>
            </el-header>
            <el-container>
                <el-aside :width="side_width">
                    <v-nav></v-nav>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>    
</template>

<script>
    import nav from "@/common/layout/nav"
    import head from "@/common/layout/head"
    import {mapState} from "vuex"
    export default {
        name: 'layoutVue',
        components:{
            "v-nav":nav,
            "v-head":head
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        computed:{
            ...mapState(['side_width'])
        }
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
        padding: 0;
    }
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        /* line-height: 200px; */
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    body > .el-container {
        margin-bottom: 40px;
    }
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }
    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>