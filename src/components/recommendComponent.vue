<template>
    <div class="recommend">
        <div class="recommend-left">
            <h2>推荐酒店</h2>
            <recommentList></recommentList>
        </div>
        <div class="recommend-right">
            <recommentBanner></recommentBanner>

        </div>
    </div>
</template>

<script>
    import recommentBanner from './recommentBanner.vue'
    import recommentList from './recommentList.vue'
    export default {
        //引入组件
        components: {
            recommentList,//酒店推荐
            recommentBanner,//轮播图 
            

        }


    }
</script>
<style>
    .recommend {
        width: 1200px;
        display: flex;
        /* 行间距0，列间距20px */
        gap: 0 20px;
        padding: 10px 0;
    }

    .recommend-left {
        width: 850px;
    }
.recommend-left h2{
    padding: 0;
    padding-top: 5px;
    margin: 0;
    /* margin-block-start: 0; */
    /* margin-block-end: 0; */
}
    .recommend-right {
        width: 350px;
    }
</style>