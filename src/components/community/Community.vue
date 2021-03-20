<template>
    <div class="community">
        <service-introduction class="service-introduction" :introductionData="introductionData" :showTab="showTab"/>
        <div class="img-class">
            <div class="top-class">
                <!--        <img class="top-img" src="../../assets/images/community-img/top.jpeg">-->
            </div>
            <div class="middle-class">
                <!--        <img class="middle-img" src="../../assets/images/community-img/middle.jpeg">-->
            </div>
            <div class="bottom-class">
                <!--        <img class="bottom-img" src="../../assets/images/community-img/bottom.jpeg">-->
            </div>
        </div>
    </div>
</template>

<script>
    import ServiceIntroduction from "../../components/companyService/ServiceIntroduction";

    export default {
        name: "Community",
        components: {ServiceIntroduction},
        data() {
            return {
                showTab: true,
                introductionData: {
                    image: require('../../assets/images/homePension-img/introduction_home.png'),
                    title: '社区养老',
                    message: '以居家养老日间照料中心为载体，建立标准化服务体系；包含健康管理、社区文化、膳食餐饮、生活照料和专业照护等为老服务。依托智慧养老服务管理平台，实现智能化管理',
                    color: '#FFA500',
                    tab: [{
                        image: require('../../assets/images/institutionalPension-img/institutional_icon_1.png'),
                        name: '健康管理'
                    },
                        {
                            image: require('../../assets/images/institutionalPension-img/institutional_icon_2.png'),
                            name: '社区文化'
                        },
                        {
                            image: require('../../assets/images/institutionalPension-img/institutional_icon_3.png'),
                            name: '膳食餐饮'
                        },
                        {
                            image: require('../../assets/images/institutionalPension-img/institutional_icon_4.png'),
                            name: '生活照料'
                        },
                        {
                            image: require('../../assets/images/institutionalPension-img/institutional_icon_5.png'),
                            name: '专业照护'
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>
    .community {
        width: 100%;
        height: 100%;
    }

    .img-class {
        width: 80%;
        height: 100%;
        margin: 0 auto;
    }

    .top-class {
        background-image: url("../../assets/images/community-img/top.jpeg");
        background-repeat: no-repeat;
        background-size: contain;
        width: 80%;
        height: 760px;
        margin: 0 auto;
    }

    .middle-class {
        background-image: url("../../assets/images/community-img/middle.jpeg");
        background-repeat: no-repeat;
        background-size: contain;
        width: 80%;
        height: 263px;
        margin: 0 auto;
    }

    .bottom-class {
        background-image: url("../../assets/images/community-img/bottom.jpeg");
        background-repeat: no-repeat;
        background-size: contain;
        width: 80%;
        height: 600px;
        margin: 0 auto;
    }

    .service-introduction {
        margin-bottom: 20px;
    }

    /*.top-img{*/
    /*  width: 600px;*/
    /*  height: 600px;*/
    /*}*/
    /*.middle-img{*/
    /*  width: 600px;*/
    /*  height: 400px;*/
    /*}*/
    /*.bottom-img{*/
    /*  width: 600px;*/
    /*  height: 500px;*/
    /*}*/
</style>
