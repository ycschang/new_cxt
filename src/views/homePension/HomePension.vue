<template>
    <div>
        <service-introduction class="service-introduction" :introductionData="introductionData" :showTab="showTab"/>

        <div class="middle-content">
            <div class="content">
                <div class="left">
                    <div class="home-name">{{serviceCirculateData.title}}</div>
                    <div class="home-introduction"><p v-html="serviceCirculateData.message"></p></div>
                </div>
                <div class="right">
                  <div class="right-image" :style="serviceCirculateDataImage"></div>
                </div>
            </div>
        </div>

        <div class="bottom-grid">
            <div class="container">
                <div class="item item-1"></div>
                <div class="item item-2"><p v-html="serviceContentData.contentData[0].service"/></div>
                <div class="item item-3"><p v-html="serviceContentData.contentData[1].service"/></div>
                <div class="item item-4"><p v-html="serviceContentData.contentData[2].service"/></div>

                <div class="item item-5"><p v-html="serviceContentData.contentType[0]"/></div>

                <div class="item item-6"><p v-html="serviceContentData.contentData[0].overlayObject"/></div>
                <div class="item item-7"><p v-html="serviceContentData.contentData[1].overlayObject"/></div>
                <div class="item item-8"><p v-html="serviceContentData.contentData[2].overlayObject"/></div>

                <div class="item item-9"><p v-html="serviceContentData.contentType[1]"/></div>

                <div class="item item-10"><p v-html="serviceContentData.contentData[0].serviceMode"/></div>
                <div class="item item-11"><p v-html="serviceContentData.contentData[1].serviceMode"/></div>
                <div class="item item-12"><p v-html="serviceContentData.contentData[2].serviceMode"/></div>

                <div class="item item-13"><p v-html="serviceContentData.contentType[2]"/></div>

                <div class="item item-14"><p v-html="serviceContentData.contentData[0].serviceContent"/></div>
                <div class="item item-15"><p v-html="serviceContentData.contentData[1].serviceContent"/></div>
                <div class="item item-16"><p v-html="serviceContentData.contentData[2].serviceContent"/></div>
            </div>
        </div>
	</div>
</template>

<script>
    import ServiceIntroduction from "../../components/companyService/ServiceIntroduction";

    export default {
        name: "HomePension",
        components: {ServiceIntroduction},
        data() {
            return {
              serviceCirculateDataImage: {
                backgroundImage: "url(" + require("@/assets/images/homePension-img/circulate.png") + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                width: "100%",
                height: "100%"
              },
                showTab: false,
                introductionData: {
                    image: require('@/assets/images/homePension-img/introduction_home.png'),
                    title: '居家养老',
                    message: '椿熙堂居家板块融合了爱心、关心、暖心、细心、耐心的“五心”服务理，结合了专业的服务技能，积极创新上门服务商业模式与应用场景，' +
                        '完善品服务矩阵。在智慧化与标准化的基础上，输出椿熙特色的康护服务体系,赋能生态链伙伴，逐渐向品牌化、规模化、连锁化的方向发展。以标准化' +
                        '为基础，智慧化为手段，专业化为常态，医养相结合为特色的服务模式和经营理念，以养老机构为支撑，以社区养老为依托，为各地区居民提供专业的上门' +
                        '服务项目。居家板块将持续研发“平台+硬件+特色服务”的产品服务体系，丰富并完善产品应用场景。',
                    color: '#19548E'
                },
                serviceCirculateData: {
                    image: require('@/assets/images/homePension-img/circulate.png'),
                    title: '居家养老服务',
                    message: '以标准化为基础，智慧化为手段，专业化为常态，医养相结合为特色的服务模式和经营理；以养老机构为支撑，以社区养老为依托，为各地区居民提供' +
                        '专业的上门服务项目。居家极圳持续研发“平台+硬件+特色服务”的产品服务体系，丰富并完善产品应用场景。</br></br>椿熙堂居家上门服务网点覆盖上海市，浙江省嘉兴' +
                        '市本级、桐乡、海宁、平湖、嘉善，海非江苏省南京市、苏州市、无锡市、常州市、温州市。累计服务超过250000余人次。</br></br>依托养老智慧管理平台，开发了针对' +
                        '居家上门服务的智慧养老信息系统，便于部门管理、人管理、照护服务管理等，实现最大意义数字化管理功能。',
                },
                serviceContentData: {
                    contentType: ['覆盖对象', '服务方式', '服务内容'],
                    contentData: [
                        {
                            service: '长期护理保险',
                            overlayObject: '1.参加本市职工基本医疗保险或城乡居民基本医疗保险的因未满足长护险政策但有需求的人员，可根据各地政府需' +
                                '<br/>2.经长期护理保险失能等级评定出生活自理能力中度/重度求提供针对性的居家上门服务。依赖的人员，可享受长期护理保险待遇。' +
                                '对居家上门服务人员的专业性及服务内容的优质性有更?要求，可为有付费能力的人员提供升级服务。',
                            serviceMode: '定期上门护理，每月服务10-19次，每次服务1-2小时定期上门护理，每月服务1-6次，每次服务1-2小时（实长期整合照' +
                                '护或短时上门照护服务（具体服务频次和时间（实际视政策和养老服务公司调动）。际视政策和养老服务公司调动）。按需定制化提供）。',
                            serviceContent: '服务内容涵盖生活照护、清洁照护、排泄照护、医护照护、卫生照护、安全照护、饮食照护、风险防范、健康管理、康复服务等42项居家照料服务。'
                        },
                        {
                            service: '政府养老补贴',
                            overlayObject: '因未满足长护险政策但有需求的人员，可根据各地政府需求提供针对性的居家上门服务。',
                            serviceMode: '定期上门护理，每月服务1-6次，每次服务1-2小时（实际视政策和养老服务公司调动）。',
                            serviceContent: '公司开发了各具特色的增值服务包，如颐养贴心清理包、颐养贴心护理包、高龄智能呵护包、幸福高龄关怀包、温馨乐享助浴包' +
                                '等十几款增值服务包，提供健康管理、生活关怀、家政服务、生活照料、康复照护、医疗护理、应急救助服务等65项居家照料服务。'
                        },
                        {
                            service: '椿享家护',
                            overlayObject: '对家庭上门服务人员的专业和服务质量内容有较高的要求，可以为有支付能力的人员提供升级服务。',
                            serviceMode: '长期综合护理或短期家庭护理服务(按需定制的特定服务频率和时间)。',
                            serviceContent: '内容涵盖生活照料、专业护理、养生保健、安全护理、饮食护理、风险防范、健康管理、康复服务、陪护服务、老年保健品(辅助器具、电子产品)' +
                                '十大板块，共计93项服务。为不愿去机构养老的居家老人提供基本服务套餐+个性化可选增值服务菜单等多层次的养老服务。'
                        }
                    ]
                }
            }
        },
        methods: {}
    }
</script>

<style scoped>

    .middle-content {
        width: 50%;
        margin: 0 auto;
        padding-top: 30px;
    }

    .content {
        width: 100%;
        height: 220px;
        display: flex;
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .right {
        width: 40%;
        height: 220px;
    }

    .right-image {
        margin-left: 20px;
    }

    .left {
        width: 60%;
        height: 220px;
        position: relative;
    }

    .home-name {
        font-size: 16px;
        color: #635E5A;
    }

    .home-introduction {
        margin-right: 20px;
        margin-top: 20px;
        font-size: 12px;
        color: #635E5A;
    }

    .bottom-grid {
        width: 70%;
        margin: 0 auto;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .container {
        display: grid;
        grid-template-columns: 80px 2fr 2fr 2fr;
    }

    .item {
        font-size: 12px;
        border: 1px solid #e5e4e9;
        padding: 5px;
        color: white;
    }

    .item-1, .item-2, .item-3, .item-4 {
        text-align: center;
    }

    .item-1, .item-5, .item-9, .item-13 {
        background-color: #82A6CA;
    }

    .item-2, .item-6, .item-10, .item-14 {
        background-color: #618BBD;
    }

    .item-3, .item-7, .item-11, .item-15 {
        background-color: #517FB1;
    }

    .item-4, .item-8, .item-12, .item-16 {
        background-color: #8FC8BF;
    }

</style>
