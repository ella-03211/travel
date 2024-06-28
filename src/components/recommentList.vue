<template>
    <div class="recommend-list">
        <ul class="list-box">
            <li v-for="item in recommentlist " :key="item.id">
                <!-- 左边 -->
                <div class="list-left">
                    <div class="list-left-img">
                        <img :src="require(`../assets/${item.img_url}`)" alt="">
                    </div>
                    <div class="list-left-title">
                        <div class="list-left-titleandtag">
                            <h4>{{item.name}}</h4>
                            <img :src="require(`../assets/${item.starimg_url}`)" alt="">
                            <span class="bage-thub"></span>
                        </div>
                        <div class="list-left-transport">
                            <p>{{item.transport}}</p>
                        </div>
                        <div class="list-left-tag">
                            <el-tag type="danger" effect="plain" v-for="(k,i) in item.tag" :key="i">{{k}}</el-tag>
                        </div>
                    </div>
                </div>
                <!-- 右边 -->
                <div class="list-right">
                    <div class="list-right-comment">
                        <div class="list-right-describe">
                            <p>{{item.recomment}}</p>
                            <a href="">{{item.count}}</a>
                        </div>
                        <div class="list-right-score">{{item.score}}</div>
                    </div>

                    <div class="list-right-price">
                        <p>{{item.price}}</p>
                        <el-button type="primary">查看详情</el-button>
                    </div>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                recommentlist: [
                    {
                        id: 1,
                        name: '北京首都宾馆',
                        img_url: 'list-1.jpg',
                        starimg_url: 'star2.jpg',
                        transport: '天安门/王府井|距离市中心直线310米',
                        tag: ['网球场', '桌球室', '免费停车', '健身室', '商务中心'],
                        recomment:'好',
                        score:'4.5',
                        count:'1450条评论',
                        price:'￥323',

                    },
                    {
                        id: 2,
                        name: '北京高级宾馆',
                        img_url: 'list-3.jpg',
                        starimg_url: 'star2.jpg',
                        transport: '前门/天坛公园|距离市中心直线910米',
                        tag: ['网球场', '桌球室', '免费停车', '健身室', '商务中心'],
                        recomment:'棒',
                        score:'4.5',
                        count:'1150条评论',
                        price:'￥200',

                    },
                    {
                        id: 3,
                        name: '北京京伦饭店',
                        img_url: 'list-2.jpg',
                        starimg_url: 'star2.jpg',
                        transport: '前门/天坛公园|距离市中心直线910米',
                        tag: ['网球场', '桌球室', '免费停车', '健身室', '商务中心'],
                        recomment:'好',
                        score:'4.4',
                        count:'550条评论',
                        price:'￥180',


                    },
                    {
                        id: 4,
                        name: '北京新世界中心酒店',
                        img_url: 'list-4.jpg',
                        starimg_url: 'star2.jpg',
                        transport: '前门/天坛公园|距离市中心直线1.1公里',
                        tag: ['网球场', '桌球室', '免费停车', '健身室', '商务中心'],
                        recomment:'好',
                        score:'4.4',
                        count:'450条评论',
                        price:'￥250',


                    },
                    {
                        id: 5,
                        name: '北京大酒店',
                        img_url: 'list-5.jpg',
                        starimg_url: 'star2.jpg',
                        transport: '果园环岛/通州|距离市中心直线2.2公里',
                        tag: ['网球场', '桌球室', '免费停车', '健身室', '商务中心'],
                        recomment:'好',
                        score:'4.5',
                        count:'2150条评论',
                        price:'￥400',
                    },
                ]
            }
        }
    }
</script>

<style>
    .list-box {
        padding-inline-start: 0;
    }

    .list-box li {
        display: flex;
        background-color: hsla(0, 11%, 93%, 0.395);
        margin-bottom: 10px;
        padding: 10px;

    }

    /* 左边宽度是右边两倍 */
    .list-left {
        flex: 2;
        display: flex;
        height: 120px;
    }

    /* 右边 */
    .list-right {
        flex: 1;
        border-left: 1px solid hsla(0, 34%, 67%, 0.395);
        /* 文字右对齐 */
        text-align: right;
        display: flex;
        /* 上下 */
        flex-direction: column;
        /* 主轴两端对齐 */
        justify-content: space-between;
    }

    /* 图片 */
    .list-left-img {
        flex: 1;

    }

    .list-left-img img {
        width: 100%;
        height: 100%;
    }

    .list-left-title {
        margin-left: 20px;
        flex: 3;
    }

    /* biaoti */
    .list-left-titleandtag {
        font-size: 18px;
        line-height: 24px;
        display: flex;
        margin-bottom: 8px;
        /* 垂直对齐 */
        align-items: center;

    }

    .list-left-titleandtag h4 {
        margin-right: 18px;
        margin: 0;
    }

    .list-left-titleandtag img {
        height: 18px;
        width: auto;
        margin-left: 15px;
    }

    .list-left-transport {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin-bottom: 10px;
    }

    /* tag*/
    .list-left-tag .el-tag {
        margin-right: 5px;
    }

    /* 右边 */
    .list-right-comment {
        display: flex;
        justify-content: flex-end;
    }
    .list-right-describe p{
        color: rgb(54, 163, 253);
        font-size: 16px;
        font-weight: 700;

    }
    .list-right-describe a{
        color:#7a7979;
        /* 下划线 */
        text-decoration:none;
        font-size: 10px;    
    }
    .list-right-score{
        background-color:rgb(54, 163, 253);
        color: #ffffff;
        padding: 5px;
        margin: 5px 5px;
        font-size: 18px;
        font-weight: 700;
        border-radius: 5px;

    }
    .list-right-price p{
        font-size: 20px;
        font-weight: 700;
        color: rgb(54, 163, 253);
    }
</style>