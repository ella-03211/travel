<template>
    <div>
        <div class="searchlist">
            <div class="searchlist-item">
                <div class="search-box">
                    <label for="hotel-name">目的地/酒店名称</label>
                    <input type="text" name="" id="hotel-name" placeholder="景德镇">
                </div>
            </div>
            <div class="searchlist-item">
                <div class="search-box">
                    <label for="enter-time">入住时间/退房时间</label>
                    <el-date-picker id="enter-time" v-model="value1" range-separator="To" start-placeholder="Start time"
                        end-placeholder="End time" type="datetimerange" />
                </div>
            </div>
            <div class="searchlist-item">
                <div class="search-box">
                    <label for="room-price">房间及价格</label>
                    <input type="text" name="" id="room-price" placeholder="1间/1位">
                </div>
            </div>
            <div class="searchlist-item">
                <div class="search-box">
                    <label for="key-word">关键词（选填）</label>
                    <input type="text" name="" id="key-word" placeholder="火车/酒店名称或区域">
                </div>
            </div>
            <div class="searchlist-item">
                <el-button type="primary" >
                    <el-icon><Search /></el-icon>
                </el-button>
            </div>
        </div>
    </div>
</template>
<script>
    import { Search, } from '@element-plus/icons-vue'
    export default {

    }
</script>

<style>
    .searchlist {
        /* 网格布局 */
        width: 1200px;
        display: grid;
        /* 设置5列 */
        grid-template-columns: repeat(5, auto);
    }

    .searchlist .searchlist-item {
        border: 1px solid #dadada;
        margin-left: -1px;
    }

    .search-box {
        padding: 8px 10px;
    }

    .search-box label {
        /* 转换为块级元素，上下结构 */
        display: block;
        color: #999;
    }

    .search-box input {
        /* 未点击不需要边框 */
        border: none;
        /* 点击后不需要边框 */
        outline: none;
        font-size: 16px;
        font-weight: 700;
        padding-top: 10px;
    }

    /* 伪类选择器 当元素获得焦点时，能够控制父元素*/
    .searchlist-item:focus-within {
        border-bottom: 2px solid rgb(64, 143, 233);
    }

    /*  */
    .search-box .el-date-editor.el-input__wrapper {
        box-shadow: none;
    }
    .searchlist-item .el-button{
        width: 100%;
        height: 100%;
        /* 圆角 */
        border-radius: 0;
    } 
    .searchlist-item .el-button .el-icon{
        font-size: 20px;
    }
</style>