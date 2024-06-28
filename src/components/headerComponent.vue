<template>

    <div class="headernav">
        <div class="header-logo">
            <img src="../assets/logo1.jpg" alt="">

        </div>
        <div class="header-search">
            <el-input type="text" clearable v-model="input" style="max-width: 600px" placeholder="搜索任何旅游相关"
                class="input-with-select">
                <template #append>
                    <el-button />
                    <el-icon>
                        <Search />
                    </el-icon>
                </template>
            </el-input>
        </div>
        <div class="header-right">
            <el-link>
                <el-icon class="el-icon--left">
                    <UserFilled />
                </el-icon>请登入
                <!-- <el-icon class="el-icon--left"></el-icon> -->
            </el-link>
            <el-link href="" target="_blank">注册</el-link>
            <el-dropdown>
                <span class="el-dropdown-link">
                    我的订单
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item v-for="item in mymenuData" :key="item.id">{{item.title}}</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>

    </div>

</template>
<script>
    import { Search, } from '@element-plus/icons-vue'
    import { ref } from 'vue'
    export default {
        data() {
            return {
                // icon:'' ,
                input:'',
                // 我的订单数据
                mymenuData: [
                    {
                        id: 1,
                        title: "酒店订单",
                    },
                    {
                        id: 2,
                        title: "火车票订单",
                    },
                    {
                        id: 3,
                        title: "美食订单",
                    },
                    {
                        id: 4,
                        title: "船票订单",
                    },
                    {
                        id: 5,
                        title: "旅游订单",
                    },
                    {
                        id: 6,
                        title: "全部订单",
                    },
                ]
            }
        }

    }

</script>

<style>
    .el-header {
        /* 设置一个滚动条，当页面小于这个值就出现 */
        min-width: 1280px;
        padding: 0;
    }

    .headernav {
        display: flex;
        /* 水平两端对齐 */
        justify-content: space-between;
        /* 垂直方向居中 */
        align-items: center;
        /* height: 70px; */
        height: 100px;
        width: 1250px;
        /* 固定定位，当往下滑时，头部不动 */
        position: fixed;
        top: 0;
        background-color: #fff;
        z-index: 999;
    }

    .headernav img {
        width: 150px;
        height: 100px;
    }

    /* 按钮颜色 */
    .headernav .el-input-group__append {
        background-color: rgb(64, 143, 233);
        color: #fff;
    }

    .header-search {
        /* 当父容器还有剩余空间就占满 */
        flex: 1;
        margin: 0 2rem;
    }

    .header-right .el-link {
        margin: 0 20px;

    }

    .el-dropdown-link {
        margin-top: 5px;
    }

    .el-dropdown-link:focus {
        outline: none;


    }
</style>