<template>
    <div class="service-introduction">
        <div class="left">
            <div class="left-image"
                 :style="{'background-image': 'url('+introductionData.image+')','width':'100%','height':'100%','background-size':'cover','background-repeat':'no-repeat','background-position':'center'}"/>
        </div>
        <div class="right">
            <div class="introduction-name">{{introductionData.title}}</div>
            <div class="line" :style="{'background-color':''+introductionData.color+''}"></div>
            <div class="introduction-message">{{introductionData.message}}</div>
            <div class="tab" v-if="showTab">
                <div class="tab-item" v-for="(item,index) in introductionData.tab" :key="index">
                    <img class="tab-icon" :src="item.image">
                    <div class="tab-name">{{item.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ServiceIntroduction",
        data() {
            return {}
        },
        props: {
            introductionData: Object,
            showTab: {
                type: Boolean,
                default() {
                    return true
                }
            }
        }
    }
</script>

<style scoped>
    .service-introduction {
        width: 50%;
        height: 265px;
        margin: 0 auto;
        display: flex;
        box-shadow: 2px 2px 5px #888888;
    }

    .left {
        width: 50%;
        height: 265px;
        background: aqua;
    }

    .right {
        width: 50%;
        height: 265px;
        position: relative;
    }

    .introduction-name {
        font-weight: bold;
        margin-left: 10px;
        margin-top: 10px;
        letter-spacing: 10px;
    }

    .introduction-message {
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 12px;
        color: #777171;
    }

    .line {
        height: 1.5px;
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .tab {
        display: flex;
        flex-flow: wrap;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .tab-item {
        flex: 1;
        text-align: center;
    }

    .tab-icon {
        width: 25px;
        height: 25px;
    }

    .tab-name {
        font-size: 12px;
        transform: scale(0.95);
        margin-bottom: 10px;
        color: #777171;
    }
</style>
