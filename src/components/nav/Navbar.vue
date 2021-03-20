<template>
    <div>
      <div class="head">
        <div class="head-c-class">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                   active-text-color="#79a12b" text-color="#000" :router="true">
              <el-menu-item index="/" class="img1"></el-menu-item>
              <el-menu-item index="1" @click="$router.push('/HomePage')">首页</el-menu-item>
              <el-menu-item index="2" @click="$router.push('/EnterBusiness')">走进椿熙堂</el-menu-item>
              <el-menu-item index="3" @click="$router.push('/Company')">椿熙业务</el-menu-item>
              <el-menu-item index="4" @click="$router.push('/HomeCare')">椿享家护</el-menu-item>
              <el-menu-item index="5" @click="$router.push('/PensionTrends')">养老动态</el-menu-item>
              <el-menu-item index="6" @click="$router.push('/Contact')">联系我们</el-menu-item>
              <el-menu-item index="/" class="img2"></el-menu-item>
          </el-menu>
        </div>
        <div style="margin-top: 60px;">
          <div v-if="imgurl" class="banner_kuang">
            <el-carousel :height="bannerHeight+'px'" :interval="5000" arrow="nerver">
              <el-carousel-item v-for="(item,index) in imgurl" :key="index">
                <img :src="item" @load="imageLoaded" ref="image" class="banner"/>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Element from 'element-ui'
    import 'element-ui/lib/theme-chalk/index.css'

    Vue.use(Element);

    export default {
        data() {
            return {
                activeIndex: '1',
                openeds: ['1', '2', '3', '4', '5', '6'],
                navConfig: {
                    'HomePage': '1',
                    'EnterBusiness': '2',
                    'Company': '3',
                    'HomeCare': '4',
                    'PensionTrends': '5',
                    'Contact': '6',
                },
                bannerHeight: 400,
                imgurl: [require('@/assets/homePage/banner_01.jpg'), require('@/assets/homePage/banner_02.jpg'), require(
                    '@/assets/homePage/banner_03.jpg'), require('@/assets/homePage/banner_04.jpg'), require('@/assets/homePage/banner_05.jpg')]
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            imageLoaded() {
                this.count++
                if (this.count == 1) {
                    this.$nextTick(() => {
                        console.log(this.$refs.image[0].height)
                        this.bannerHeight = this.$refs.image[0].height
                    })
                }
            }
        },
        mounted() {
          let href = window.location.href
          href = href.split('#')[1]
          href = href.split('/')[1]
          if(href==""){
            href="HomePage";
          }
          this.activeIndex = this.navConfig[href]
          window.addEventListener('resize', () => {
              this.bannerHeight = this.$refs.image[0].height
          }, false)
        }
    }
</script>

<style scoped>
    .head {
      width: 100%;
      top: 0;
      float: left;
      text-align: center;
      background-color: #fff;
    }
    .head-c-class{
      width: 100%;
      height: auto;
      position: fixed;
      top: 0;
      z-index: 100;
    }
    .img2 {
      background-image: url("../../assets/homePage/telephone.jpg");
      background-repeat: no-repeat;
      background-size: contain;
      width: 115px;
      height: 70px;
    }

   .img1 {
     background-image: url("../../assets/homePage/11_02.jpg");
     background-repeat: no-repeat;
     background-size: contain;
     width: 115px;
     height: 64px;
   }
    .el-menu-demo {
      border: 0;
      list-style: none;
      width: 100%;
      height: 60px;
      justify-content: center;
      align-items: center;
      display: -webkit-flex;
    }

    .banner_kuang {
      width: 100%;
    }

    .banner {
      width: 100%;
      height: 100%;
    }
</style>
