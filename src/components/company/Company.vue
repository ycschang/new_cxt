<template>
  <div class="company">
    <Navbar></Navbar>
    <div class="table-class">
      <div class="div-img-class">
        <h2>智  慧  养  老</h2>
        <div class="div-title-class">
          <div class="title-class">长期照护专业养老品牌</div>
        </div>
        <div class="tabs-class">
          <el-menu :default-active="'/Company/Community'" class="el-menu-demo" mode="horizontal" active-text-color="#79a12b" text-color="#000" :router="true">
            <el-menu-item index="/Company/Community">社区养老</el-menu-item>
            <el-menu-item index="/Company/HomePension">居家养老</el-menu-item>
            <el-menu-item index="/Company/InstitutionalPension">机构养老</el-menu-item>
            <el-menu-item index="/Company/SmartPension">智慧养老</el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Navbar from "@/components/nav/Navbar";
import Bottom from "@/components/nav/Bottom";

export default {
  components: {
    Navbar,
    Bottom
  },
  name: "Company",
  data() {
    return {
      activeIndex: '1'
    }
  },
  created() {
    this.activeIndex =  this.$route.query.activeIndex;
  }
}
</script>

<style scoped>
  .tabs-class{
    width: 100%;
    height: auto;
    justify-content: center;
    /*子元素水平居中*/
    align-items: center;
    /*子元素垂直居中*/
    display: -webkit-flex;
  }
  .company{
    width: 100%;
    height: auto;
  }
  .el-menu-demo {
    border: 0;
    list-style: none;
    display: inline-block;
    background-color: rgba(255,255,0,0);
  }
  .el-menu-item:hover{
    background-color: rgba(255,255,0,0) !important;
  }
  .is-active{
    background-color: rgba(255,255,0,0) !important;
  }
  .table-class{
    width: 100%;
    height: auto;
    justify-content: center;
    /*子元素水平居中*/
    align-items: center;
    /*子元素垂直居中*/
    display: -webkit-flex;
    padding-top: 20px;
  }
  .div-img-class{
    width: 60%;
    height: 300px;
    background-image: url("../../assets/images/company/yewu-img.jpeg");
    background-repeat: no-repeat;
    background-size: 100% 400px;
    /*子元素水平居中*/
    align-items: center;
    padding-top: 20px;
  }
  .div-title-class{
    width: 100%;
    justify-content: center;
    /*子元素水平居中*/
    align-items: center;
    /*子元素垂直居中*/
    display: -webkit-flex;
    padding-bottom: 40px;
  }
  h2{
    text-align: center;
  }
  .title-class{
    text-align: center;
    width: 260px;
    color: #ffffff;
    background-color: #1278CA;
  }
  .myTabs .el-tabs__nav-wrap{
    width: 350px !important;
  }
</style>
