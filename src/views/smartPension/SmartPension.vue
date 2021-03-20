<template>
    <div>
        <service-introduction class="service-introduction" :introductionData="introductionData" :showTab="showTab"/>

        <div class="suitable">
            <div class="suitable-content">
                <div class="suitable-content-left">
                    <div class="suitable-content-name">
                        <div class="suitable-content-spname">{{smartEquipmentsData.title}}</div>
                        <div class="suitable-content-egname">{{smartEquipmentsData.egtitle}}</div>
                    </div>
                    <div class="suitable-content-introduction"><p v-html="smartEquipmentsData.message"></p></div>
                </div>
                <div class="suitable-content-middle">
                    <div class="suitable-content-right-image"
                         :style="{'background-image': 'url('+smartEquipmentsData.image1+')',
                         'width':'100%','height':'100%','background-size':'contain',
                         'background-repeat':'no-repeat','background-position':'center'}"/>
                </div>
                <div class="suitable-content-right">
                    <div class="suitable-content-right-image2"
                         :style="{'background-image': 'url('+smartEquipmentsData.image2+')',
                         'width':'100%','height':'100%','background-size':'contain',
                         'background-repeat':'no-repeat','background-position':'center'}"/>
                </div>
            </div>
        </div>
        <!--上传图200*200-->
        <equipment-swiper :items="equipmentItems"/>

        <div class="integrated">
            <div class="integrated-content">
                <div class="integrated-icon">
                    <div class="integrated-icon-item"
                         v-for="(item,index) in integratedData" :key="index" :style="{'background': 'url('+item.image+')',
                         'width':'100%','height':'80px','background-repeat':'no-repeat','background-size':'contain','background-position':'center'}">
                    </div>
                </div>
                <div class="integrated-line-left">
                    <div class="line-style">
                        <div class="dashed-line">
                            <div class="line-item"></div>
                        </div>
                        <div class="circle">
                            <div class="circle-item"></div>
                            <div class="circle-item"></div>
                            <div class="circle-item"></div>
                            <div class="circle-item"></div>
                            <div class="circle-item"></div>
                        </div>
                    </div>
                </div>
                <div class="integrated-message">
                    <div class="integrated-message-item" v-for="(item,index) in integratedData" :key="index">
                        <div class="integrated-message-item-text">
                            {{item.message}}
                        </div>
                    </div>
                </div>
                <div class="integrated-line-right">
                    <div class="line-style">
                        <div class="dashed-line">
                            <div class="line-item"></div>
                        </div>
                        <div class="circle">
                            <div class="circle-item"></div>
                            <div class="circle-item"></div>
                            <div class="circle-item"></div>
                            <div class="circle-item"></div>
                            <div class="circle-item"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="integrated-image">
            <div :style="{'background-image': 'url('+this.igImage+')',
                         'width':'100%','height':'100%','background-repeat':'no-repeat','background-size':'contain','background-position':'center'}"></div>
        </div>
    </div>
</template>

<script>
    import ServiceIntroduction from "../../components/companyService/ServiceIntroduction";
    import EquipmentSwiper from "../../components/smartPension/EquipmentSwiper";

    export default {
        name: "SmartPension",
        components: {
            ServiceIntroduction,
            EquipmentSwiper
        },
        data() {
            return {
                showTab: false,
                introductionData: {
                    image: require('@/assets/images/smartPension-img/introduction_smart.jpg'),
                    title: '智慧养老',
                    message: '椿熙堂自主研发了“智慧养老平台”，结合国外成熟养老信息化管理经验，将“线上+线下”的模式进行本土化落地开发，' +
                        '利用云计算、互联网、物联网等先进技术，实现“互联网+”养老服务的智慧养老运营模式，为地方民政部门提供“协助监管、整合资源、' +
                        '提升服务”的专业化运营管理服务。通过互联网平台、互联网应用、物联网设备，实现社区集中照料、居家上门服务、机构专业照护的信息一体化管理。',
                    color: '#19548E'
                },
                smartEquipmentsData: {
                    image1: require('@/assets/images/smartPension-img/snowflake.jpg'),
                    image2: require('@/assets/images/smartPension-img/smart_equipments.jpg'),
                    title: '适Ι老Ι化Ι产Ι品',
                    egtitle: 'SHI LAO HUA CHAN PIN',
                    message: '椿享家护通过互联网平台、互联网应用、物联网设备，实现社区集中照料、居家上门服务、机构专业照护的信息一体化管理。' +
                        '依托智慧养老服务的优势，线上通过智慧健康养老信息平台为长者提供应急救助服务和健康监测服务，线下通过专业服务团队和智能服务' +
                        '终端为长者提供专业化养老服务。',
                },
                equipmentItems: [
                    {name: '爱牵挂智能照护手环', image: require('@/assets/images/smartPension-img/equip_1.png')},
                    {name: '远程智护睡眠监测带', image: require('@/assets/images/smartPension-img/equip_2.png')},
                    {name: '若菲儿智能机器人', image: require('@/assets/images/smartPension-img/equip_3.png')},
                    {name: '智能居家照护设备', image: require('@/assets/images/smartPension-img/equip_4.png')}
                ],
                integratedData: [
                    {
                        image: require('@/assets/images/smartPension-img/one_platform.png'),
                        message: '建立平台与社区、居家、机构的lo T物联终端信息互通，提供安全监测和健康监护的智能服务'
                    },
                    {
                        image: require('@/assets/images/smartPension-img/one_terminal.png'),
                        message: '建立养老信息服务平台，整合为老服务社会资源，对接养老服务需求与供给，形成养老服务交互与信息类共享'
                    },
                    {
                        image: require('@/assets/images/smartPension-img/one_standard.png'),
                        message: '建立养老服务标准化管理，统一服务流程、服务质量、服务监控等规范。通过信息化、智能化方式加以固化'
                    },
                    {
                        image: require('@/assets/images/smartPension-img/one_card.png'),
                        message: '建立为老服务一卡通，整合市民卡、社保卡、老年卡等信息，实现评估、补贴、服务、收费、评价等环节统一管理'
                    },
                    {
                        image: require('@/assets/images/smartPension-img/one_archives.png'),
                        message: '建立老年人个人家庭、健康。医疗信息档案。实现老年人服务信息、健康信息无缝对接'
                    },
                ],
                igImage: require('@/assets/images/smartPension-img/integrated_image.jpg'),
                smDot: require('@/assets/images/smartPension-img/smdot.png')
            }
        }
    }
</script>

<style scoped>
    .suitable {
        width: 50%;
        margin: 0 auto;
        padding-top: 30px;
    }

    .suitable-content {
        width: 100%;
        height: 220px;
        display: flex;
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .suitable-content-right {
        width: 28%;
        height: 220px;
        margin-left: 2px;
    }

    .suitable-content-middle {
        width: 28%;
        height: 220px;
    }

    .suitable-content-left {
        width: 44%;
        height: 220px;
        position: relative;
    }

    .suitable-content-name {
        border-left: 6px solid #1278CA;
        padding-left: 20px;
    }

    .suitable-content-spname {
        font-size: 18px;
        color: #635E5A;
        letter-spacing: 2px;
    }

    .suitable-content-egname {
        font-size: 12px;
    }

    .suitable-content-introduction {
        margin-right: 20px;
        margin-top: 26px;
        font-size: 12px;
        color: #635E5A;
        margin-left: 24px;
    }

    .integrated {
        width: 100%;
        height: 450px;
        margin: 0 auto;
        background-color: #9FB9D0;
    }

    .integrated-content {
        width: 50%;
        height: 400px;
        margin: 0 auto;
        display: flex;
        font-size: 12px;
        padding-top: 25px;
    }

    .integrated-icon {
        height: 100%;
        width: 10%;
    }

    .integrated-icon-item {
        height: 80px;
        width: 100%;
    }

    .integrated-line-left {
        height: 100%;
        width: 5%;
        display: flex;
    }

    .integrated-line-right {
        height: 100%;
        width: 5%;
    }

    .integrated-message {
        height: 100%;
        width: 80%;
    }

    .integrated-message-item {
        height: 80px;
        width: 100%;
        color: white;
        display: flex;
        align-items: center;
        text-align: left;
    }

    .line-style {
        height: 100%;
        width: 50px;
        position: relative;
    }

    .dashed-line {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 10%;
    }

    .line-item {
        border-right: 1px dashed white;
        height: 80%;
        width: 1px;
        margin: 0 auto;
        text-align: center;
    }

    .circle {
        height: 100%;
        width: 100%;
        position: absolute;
    }

    .circle-item {
        height: 80px;
        width: 100%;
        background-image: url("../../assets/images/smartPension-img/smdot.png");
        background-repeat: no-repeat;
        background-position: center;
    }

    .integrated-image {
        width: 100%;
        height: 500px;
        margin: 0 auto;
    }
</style>
