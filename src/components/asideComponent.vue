<template>

    <div class="aside-list">
        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" 
>
            <!-- 折叠 -->
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px" @click="myfun">
                <!-- 展开，点击合上 -->
                <el-radio-button :value="true" v-show="!isCollapse" @click="myfun"><el-icon :size="30">
                    <Fold />
                </el-icon></el-radio-button>
                <el-radio-button :value="false" v-show="isCollapse"  ><el-icon :size="30">
                        <Expand />
                    </el-icon></el-radio-button>
                
            </el-radio-group>
            <!-- <el-icon ><Expand /></el-icon> -->
            <!-- 不含有子菜单 -->
            <el-menu-item  v-for="item in menuData" :key="item.name" :index="item.name">
                <!-- 动态获取标签 -->
                <!-- <i :class="`el-icon-${item.icon}`"></i> -->
                <el-icon :size="30">
                    <component :is="item.icon"></component>
                </el-icon>
                <!-- 获取名称 -->
                <span slot="title">{{ item.label }}</span>
            </el-menu-item>
            <!-- <el-menu-item index="1">
            <el-icon><House /></el-icon>
            <template #title>首页</template>
        </el-menu-item>
        <el-menu-item index="2">
            <el-icon><OfficeBuilding /></el-icon>
            <template #title>酒店</template>
        </el-menu-item>
        <el-menu-item index="3">
            <el-icon><ForkSpoon /></el-icon>
            <template #title>美食</template>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon><Ship /></el-icon>
            <template #title>船票</template>
        </el-menu-item>
        <el-menu-item index="5">
            <el-icon><Avatar /></el-icon>
            <template #title>个人中心</template>
        </el-menu-item> -->

        </el-menu>
    </div>
</template>
<script>
    // import { ref } from 'vue'
    // 导入图标
    import { House, OfficeBuilding, ForkSpoon, Ship, Avatar, Bicycle } from '@element-plus/icons-vue'
    export default {
        data() {
            return {

                isCollapse: false,
                menuData: [
                    {
                        // path: "/home", 
                        name: "home",
                        label: "首页",
                        icon: House,//图标
                        // url: "Home/Home",
                    },
                    {
                        // path: "/mall",
                        name: "hotel",
                        label: "酒店",
                        icon: OfficeBuilding,//图标
                        // url: "MallManage/MallManage",
                    },
                    {
                        // path: "/mall",
                        name: "food",
                        label: "美食",
                        icon: ForkSpoon,//图标
                        // url: "MallManage/MallManage",
                    },
                    {
                        // path: "/mall",
                        name: "ship",
                        label: "船票",
                        icon: Ship,//图标
                        // url: "MallManage/MallManage",
                    },
                    {
                        // path: "/mall",
                        name: "tourism",
                        label: "旅游",
                        icon: Bicycle,//图标
                        // url: "MallManage/MallManage",
                    },
                    {
                        // path: "/mall",
                        name: "avater",
                        label: "个人中心",
                        icon: Avatar,//图标
                        // url: "MallManage/MallManage",
                    },


                ]
            }
        },
        methods:{
            myfun(){
                console.log(this.isCollapse)
                // 在子组件中通过$emit方法定义事件发射，第一个参数为事件名，第二个参数为数据
                this.$emit('box-click5', this.isCollapse)
            }

        }
    }

</script>

<style>
    .aside-list {

        /* 固定定位 */
        position: fixed;
        left: 0;
        width: 200px;
        --el-transition-duration: 0;
    }

    .el-menu {
        height: 100vh;
    }

    .el-radio-button__inner {
        border: none;

    }
    .el-menu-item{
        color:rgb(54, 163, 253);
        font-size: 18px;
        font-weight: 500;

    }
</style>