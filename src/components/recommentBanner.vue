<template>
    <div class="banner">
        <el-carousel  height="550px">
            <el-carousel-item v-for="item in bannerimg" :key="item.id">
                <!--相对路径引用 webpack 帮我们解析时需要使用 require() 把图片路径包裹起来 -->
                <!-- 在public文件夹下是绝对路径，不需要经过webpack -->
                <img :src="require(`../assets/${item.img_url}`)" alt="">
                <!-- <img :src="`../assets/${item.img_url}`" alt=""> -->
                
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                bannerimg:[
                    {
                        id:1,
                        img_url:'banner-5.jpg'
                    },
                    {
                        id:2,
                        img_url:'banner-2.jpg'
                    },
                    {
                        id:3,
                        img_url:'banner-3.jpg'
                    },
                    {
                        id:4,
                        img_url:'banner-4.jpg'
                    },
                ]
            }
        }
    }
</script>
<style scoped>
    .banner{
        width: 350px;
        height: 550px;
        
    }
    img{
        /* height: 630px; */
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
</style>