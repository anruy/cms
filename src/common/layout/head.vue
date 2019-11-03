<template >
    <div id="head">
        <div class="lefts" :style="{width:side_width}">
            {{isCollapse?'CMS':'内容管理系统'}}
        </div>
        <div class="centers">
            <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="isFold"></i>
            <!-- <span @click="change('136px')">收缩</span>
            <span @click="isFold()">展开</span> -->
        </div>
        <div class="rights">
            <!-- <span>欢迎您:</span> -->
            <el-menu
                :default-active="active"
                :style="{width:side_width}"
                class="el-head-menu"
                :collapse="isCollapse"
                mode="vertical"
                @select="handleSelect"
                background-color="#409EFF"
                text-color="#fff"
                active-text-color="#409EFF">
                <el-submenu index="1">
                    <template slot="title">欢迎您:{{user}}</template>
                    <el-menu-item index="1-1">首页</el-menu-item>
                    <el-menu-item index="1-2">配置</el-menu-item>
                    <el-menu-item index="1-3">退出</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        <div class="last"></div>
    </div>
</template>
<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
export default {
    name:'v-head',
    data(){
        return {
            active : '1',
            user : '王琴',
            cnName:'内容管理系统',
            enName:'CMS'
        }
    },
    computed:{
        ...mapState([
            'isCollapse','side_width'
        ])  
    },
    methods:{
        ...mapMutations(['isFold']),
        handleSelect(key,keypath){
             console.log(key, keyPath);
        }
    }
}
</script>
<style lang="css">
    #head {
        margin:0;
        padding: 0;
        height:60px;
        background-color:#409EFF;
        /* position: relative; */
        /* overflow: hidden; */
    }
    .lefts {
        width: 200px;
        /* margin-left: -20px; */
        float:left;
        margin: 0;;
        background-color: #E8C04C;
    }
    .centers {
        margin-left: 2px;
        width: 30px;
        font-size: 22px;
        float:left;
    }
    .rigthts {
        width: 150px;
        float:right;
        
    }
    .last {
        clear: both;
    }
    .el-head-menu{
        width:200px;
        float:right;
        margin-top:auto;
    }
</style>