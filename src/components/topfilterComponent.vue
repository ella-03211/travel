<template>
    <div class="topfilter">
        <div>
            <h4>位置区域</h4>
        </div>

        <div class="topfilter-sx">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane :label="item.lable" :name="item.name" v-for="item in topfilterData" :key="item.id">
                    <el-button type="info" plain v-for="(k,i) in item.list" :key="i" size="small">{{k}}</el-button>
                    <!--(k,i)其中i表示数组下标，k表示数组值List[i]  -->
                </el-tab-pane>
                <!-- <el-tab-pane label="Task" name="fourth">Task</el-tab-pane> -->
            </el-tabs>
        </div>
        <div>
            <h4>星级价格</h4>
        </div>
        <div class="topfilter-price">
            <el-button type="info" plain size="small" v-for="(v,i) in pricelist" :key="i">{{v}}</el-button>
        </div>
        <div>
            <h4>高级筛选</h4>
        </div>
        <div class="topfilter-dropdown">
            <el-dropdown v-for="(v,i) in topfilterlist" :key="i">
                <span class="el-dropdown-link">
                    {{v.title}}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item v-for="(k,i) in v.list" :key="i">{{k}}</el-dropdown-item>
                        <!-- <el-dropdown-item disabled>Action 4</el-dropdown-item> -->
                        <!-- <el-dropdown-item divided>Action 5</el-dropdown-item> -->
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                topfilterData: [
                    {
                        id: 1,
                        name: 'first',
                        lable: '热门筛选',
                        list: ['天安门广场', '王府井', '北京大学']
                    },
                    {
                        id: 2,
                        name: 'second',
                        lable: '机场车站',
                        list: ['北京西站', '北京南站', '北京站']
                    },
                    {
                        id: 3,
                        name: 'third',
                        lable: '商业区',
                        list: ['三里屯', '国贸地区', '西直门']
                    },
                    {
                        id: 4,
                        name: 'fourth',
                        lable: '景点',
                        list: ['故宫', '紫荆城', '长城']
                    },
                ],

                pricelist: [
                    '五星(钻级)', '四星（钻级）', '三星（钻级）'
                ],
                topfilterlist:[
                    {
                        id:1,
                        title:'早餐',
                        list:['含早餐','不含早餐','单份','双份','三份']
                    },
                    {
                        id:2,
                        title:'支付方式',
                        list:['到店支付','微信支付','支付宝支付']
                    },
                    {
                        id:3,
                        title:'房型',
                        list:['标间','单间','双床房','大床房','三床房','特大床房']
                    },
                    {
                        id:4,
                        title:'酒店设施',
                        list:['免费停车','室内游泳']

                    }
                ]

            }
        }
    }

</script>

<style>
    .topfilter {
        /* 网格布局 首先定义width*/
        width: 1200px;
        padding-top: 20px;
        /* padding-bottom: 10px; */
        display: grid;
        /* 指定列数 */
        grid-template-columns: 100px 1fr;
        /* 行 */
        grid-template-rows: repeat(3, auto);
    }

    .topfilter>div {
        border-bottom: 1px solid #ddd;
    }

    .topfilter h4 {
        /* height: 40px; */
        line-height: 20px;
        text-align: center;
        /* padding-bottom: 10px; */

    }

    .topfilter .el-button {
        margin-bottom: 10px;
    }

    .topfilter .el-button:hover {
        background-color: rgb(150, 186, 245);
    }

    .topfilter-price .el-button {
        margin: 20px 3px;
    }
    /* 高级筛选 */
    .topfilter-dropdown .el-dropdown{
        margin: 10px 15px;
    }
</style>