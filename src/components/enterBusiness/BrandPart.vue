<template>
    <div class="brand-part">
        <div class="brand">
            <div class="item-1"><img class="image" src="../../assets/enterBusiness/brand-1.jpg"/></div>
            <div class="item-2">
                <div class="item-cn-title">价值观</div>
                <div class="item-eg-title">VALUES</div>
                <div class="item-message">让长者乐享生活</div>
            </div>
            <div class="item-3"><img class="image" src="../../assets/enterBusiness/brand-2.jpg"/></div>
            <div class="item-4">
                <div class="item-cn-title">服务理念</div>
                <div class="item-eg-title">CONCEPT</div>
                <div class="item-message">原居普惠型<br/>长期照护养老服务</div>
            </div>
            <div class="item-5"><img class="image" src="../../assets/enterBusiness/brand-3.jpg"/></div>
            <div class="item-6">
                <div class="item-cn-title">企业文化</div>
                <div class="item-eg-title">CULTURE</div>
                <div class="item-message">感恩 奋斗 快乐</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BrandPart"
    }
</script>

<style scoped>
    .brand-part {
        width: 870px;
        height: 340px;
        margin: 0 auto;
        box-shadow: 2px 2px 5px #888888;
    }

    .brand {
        display: grid;
        grid-template-columns: repeat(3, 290px);
        grid-template-rows: repeat(2, 170px);
    }

    .image {
        width: 290px;
        height: 170px;
    }

    .item-2, .item-4, .item-6 {
        background-color: white;
    }

    .item-cn-title {
        border-left: 3px solid #1278CA;
        color: #1278CA;
        font-weight: bold;
        font-size: 18px;
        padding-left: 20px;
        margin-top: 34px;
    }

    .item-eg-title {
        font-size: 14px;
        color: darkgrey;
        padding-left: 24px;
    }

    .item-message {
        font-size: 14px;
        color: darkgrey;
        padding-left: 24px;
        margin-top: 15px;
        padding-top: 10px;
    }
</style>