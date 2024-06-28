<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="`${a}px`">
        <asideComponent @box-click5="boxclick5"></asideComponent>
      </el-aside>

      <el-container>
        <el-header>
          <headerComponent></headerComponent>
        </el-header>
        <el-main>
          <!-- //body内容1搜索列表 -->
          <searchlistComponent></searchlistComponent>
          <!-- 筛选 -->
          <topfilterComponent></topfilterComponent>
          <!-- 推荐酒店 -->
          <recommendComponent></recommendComponent>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  // @ is an alias to /src
  import asideComponent from '../components/asideComponent.vue'
  import headerComponent from '../components/headerComponent.vue'
  import searchlistComponent from '../components/searchlistComponent.vue'
  import topfilterComponent from '../components/topfilterComponent.vue'
  import recommendComponent from '../components/recommendComponent.vue'
  export default {
    //引入组件
    components: {
      asideComponent, //左侧菜单组件
      headerComponent,//头部导航
      searchlistComponent,//body内容1搜索列表
      topfilterComponent,//筛选
      recommendComponent,//推荐
    },
    data() {
      return {
        // data1: false,
        a: 200
      }
    },
    // 父组件中定义接收事件发射的方法
    methods: {
      boxclick5(data) {
        console.log('true/false:' + data)
        console.log("aa前" + this.a)
        if (data) {
          this.a = 200
          
        }
        else {
          this.a = 80                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        }
        console.log("aa后" + this.a)



      }
    },


  }
</script>

<style>
  .el-main {
    --el-main-padding: 40px;
    min-height: 1000px;
    /* margin-left: 200px; */
  }

  /* .box{
    margin-left: 200px;

  } */
</style>