<template>
    <div class="development-history">
        <div class="history-line">
            <div class="line"></div>
            <div class="history">
                <div class="history-item" v-for="(item,index) in dhData" :key="index" @mouseover="onMouseOver(index)" @mouseleave="onMouseLeave(index)">
                    <div class="item-content" v-show="item.historyItemIsShow">
                        <img class="item-image" :src="item.itemImage"/>
                        <div class="item-year">{{item.itemYear}}</div>
                        <span class="circle"/>
                        <div class="item-num">{{item.itemNum}}</div>
                    </div>
                    <div class="item-card" v-show="item.cardIsShow"
                         :style="{'background': 'url('+item.cardBackground+')','width':'126px','height':'254px','background-size':'100%'}">
                        <div class="item-card-title">{{item.cardTitle}}</div>
                        <div class="item-card-message"><p>{{item.cardMessage}}</p></div>
                    </div>
                </div>
            </div>
        </div>

<!--        <div class="history-card" v-show="false">-->
<!--            <div class="card">-->
<!--                <div class="card-item" v-for="(item,index) in dhData" :key="index" @mouseover="onMouseOver(index)"-->
<!--                     @mouseleave="onMouseLeave(index)">-->
<!--                    <div class="item-card"-->
<!--                         :style="{'background': 'url('+item.cardBackground+')','width':'126px','height':'254px','background-size':'100%'}">-->
<!--                        <div class="item-card-title" v-show="!item.cardIsShow">{{item.cardTitle}}</div>-->
<!--                        <div class="item-card-message" v-show="!item.cardIsShow"><p>{{item.cardMessage}}</p></div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script>
    export default {
        name: "DevelopmentHistory",
        data() {
            return {
                dhData: [
                    {
                        cardIsShow: false,
                        historyItemIsShow: true,
                        itemImage: require('../../assets/enterBusiness/icon-14.png'),
                        itemYear: '2014年',
                        itemNum: '01',
                        cardTitle: '椿熙元年',
                        cardMessage: '创立椿熙堂品牌，致力于学习国外在养老服务的先进理念在中国本土化的落实和实践。',
                        cardBackground: require('../../assets/enterBusiness/year-14.png')
                    },
                    {
                        cardIsShow: true,
                        historyItemIsShow: false,
                        itemImage: require('../../assets/enterBusiness/icon-15.png'),
                        itemYear: '2015年',
                        itemNum: '02',
                        cardTitle: '创立初期',
                        cardMessage: '椿熙堂开启了智慧养老服务的创新模式',
                        cardBackground: require('../../assets/enterBusiness/year-15.png')
                    },
                    {
                        cardIsShow: false,
                        historyItemIsShow: true,
                        itemImage: require('../../assets/enterBusiness/icon-16.png'),
                        itemYear: '2016年',
                        itemNum: '03',
                        cardTitle: '探索实践',
                        cardMessage: '椿熙堂运营服务的“乌镇智慧养老”模式列入桐乡市十三五规划推广的示范模式。',
                        cardBackground: require('../../assets/enterBusiness/year-16.png')
                    },
                    {
                        cardIsShow: false,
                        historyItemIsShow: true,
                        itemImage: require('../../assets/enterBusiness/icon-17.png'),
                        itemYear: '2017年',
                        itemNum: '04',
                        cardTitle: '积累创新',
                        cardMessage: '“乌镇智慧养老”综合养老服务运营模式入选国家发改委、民政部、老龄委的要老服务业发展典型案例。',
                        cardBackground: require('../../assets/enterBusiness/year-17.png')
                    },
                    {
                        cardIsShow: false,
                        historyItemIsShow: true,
                        itemImage: require('../../assets/enterBusiness/icon-18.png'),
                        itemYear: '2018年',
                        itemNum: '05',
                        cardTitle: '规模发展',
                        cardMessage: '荣获国家三部委联合颁发的“智慧健康养老应用试点示范企业”。椿熙堂运营的项目陆续获得全国智慧养老试点、示范街镇。',
                        cardBackground: require('../../assets/enterBusiness/year-18.png')
                    },
                    {
                        cardIsShow: false,
                        historyItemIsShow: true,
                        itemImage: require('../../assets/enterBusiness/icon-19.png'),
                        itemYear: '2019年',
                        itemNum: '06',
                        cardTitle: '稳步发展',
                        cardMessage: '完成验收国家级国标委社会管理与公共服务管理试点项目和省级标准化战略重大试点项目。',
                        cardBackground: require('../../assets/enterBusiness/year-19.png')
                    },
                    {
                        cardIsShow: false,
                        historyItemIsShow: true,
                        itemImage: require('../../assets/enterBusiness/icon-20.png'),
                        itemYear: '2020年',
                        itemNum: '07',
                        cardTitle: '全面发展',
                        cardMessage: '椿熙堂专业养老服务已形成“居家、社区、机构”三位一体养老服务模式品牌化、连锁化发展。',
                        cardBackground: require('../../assets/enterBusiness/year-20.png')
                    }
                ],
                existOver: false,
                existLeave: false
            }
        },
        methods: {
            onMouseOver(index) {
                this.existOver = true
                this.existLeave = false
                for (var i = 0; i < this.dhData.length; i++) {
                    this.dhData[i].cardIsShow = false
                    this.dhData[i].historyItemIsShow = true
                }
                this.dhData[index].cardIsShow = true
                this.dhData[index].historyItemIsShow = false
            },
            onMouseLeave(index) {
                this.existOver = false
                this.existLeave = false

                this.dhData[index].cardIsShow = false
                this.dhData[index].historyItemIsShow = true
            }
        }
    }
</script>

<style scoped>
    .development-history {
      padding-bottom: 90px;
      margin: 0 auto;
    }

    .history-line {
        width: 100%;
        height: 280px;
        margin: 0 auto;
    }

    .line {
        width: 100%;
        height: 0.1px;
        background-color: darkgrey;
        margin: 0 auto; /*水平居中*/
        position: relative;
        top: 68%; /*偏移*/
        transform: translateY(-50%);
    }

    .history {
        width: 860px;
        height: 280px;
        margin: 0 auto;
        text-align: center;
        display: flex;
        /*background: red;*/
    }

    .card {
        width: 880px;
        height: 340px;
        margin: 0 auto;
        display: flex;
        /*background: blue;*/
    }

    .history-card {
        width: 880px;
        height: 340px;
        margin: 0 auto;
        padding-top: 50px;
    }

    .circle {
        width: 6px;
        height: 6px;
        background-color: white;
        border-radius: 50px;
        border: medium double #1278CA;
        display: inline-block;
        vertical-align: middle;
        margin: 5px;
    }

    .history-item {
        width: 100px;
        height: 200px;
        margin: 0 auto; /*水平居中*/
        position: relative;
        top: 23.5%; /*偏移*/
    }

    .item-content {
        margin-left: 20px;
    }

    .item-year {
        font-weight: bold;
        margin-top: 10px;
        margin-bottom: 5px;
    }

    .item-num {
        margin-top: 20px;
        font-size: 25px;
        color: #1278CA;
    }

    .card-item {
        width: 100px;
        height: 200px;
        margin: 0 auto; /*水平居中*/
        position: relative;
    }

    .item-card {
        text-align: left;
    }

    .item-card-title {
        font-size: 14px;
        font-weight: bold;
        color: white;
        padding-top: 20px;
        text-align: center;
        padding-left: 5px;
    }

    .item-card-message {
        font-size: 13px;
        color: white;
        padding-top: 5px;
        padding-left: 20px;
        padding-right: 3px;
    }

    .item-image {
        width: 40px;
        height: 42px;
        text-align: center;
        margin-top: 30px;
    }

</style>
