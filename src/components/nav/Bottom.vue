<template>
	<div class="bottom">
    <div class="my-bt-img-class">
      <div class="bt-content-class">
        <div class="bt-left-class">
          <h1>长 期 照 护 专 业 养 老 品 牌</h1>
          <div style="height: 190px;">
            <div class="column-class">
              <div class="column-title-class">
                首页
              </div>
            </div>
            <div class="column-class">
              <div class="column-title-class">
                走进椿熙堂
              </div>
            </div>
            <div class="column-class">
              <div class="column-title-class">
                椿熙业务
                <ul>
                  <li @click='forward("/Company/Community");'>社区养老</li>
                  <li @click='forward("/Company/HomePension");'>居家养老</li>
                  <li @click='forward("/Company/InstitutionalPension");'>机构养老</li>
                  <li @click='forward("/Company/SmartPension");'>智慧养老</li>
                </ul>
              </div>
            </div>
            <div class="column-class">
              <div class="column-title-class">
                椿享家护
<!--                <ul>-->
<!--                  <li>服务板块</li>-->
<!--                  <li>服务体系</li>-->
<!--                </ul>-->
              </div>
            </div>
            <div class="column-class">
              <div class="column-title-class">
                养老动态
              </div>
            </div>
            <div class="column-class">
              <div class="column-title-class">
                联系我们
              </div>
            </div>
          </div>
          <div>
            <div class="domain-name-class">浙ICP备20003103号</div>
            <div class="network-security-class">
                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33048302000612" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
                  <img src="@/assets/images/bottom-img/watb.png" style="float:left;"/>
                  <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">浙公网安备 33048302000612号</p>
                </a>
            </div>
          </div>
        </div>
        <div class="bt-right-class">
          <div class="we-chat-img-class"></div>
          <div class="we-char-title-class text-right">官方微信公众号</div>
          <div class="text-right text-size">400-1576606</div>
          <div class="text-right text-size"><span class="time-img-class"></span>08:30 - 17:30</div>
          <div class="text-right">上海椿祺集养老服务有限公司</div>
          <div class="text-right">浙江椿熙堂养老服务管理有限公司</div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
export default {
  name: "Bottom",
  methods: {
    forward(activeIndex) {
      this.$router.push({path: "/Company", query: {activeIndex: activeIndex}});
    }
  }
}
</script>
<style scoped>
  .time-img-class{
    background-image: url("../../assets/images/bottom-img/time-img.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: 23px;
    height: 20px;
    display: inline-block;
    padding-left: 10px;
  }
  .we-chat-img-class{
    background-image: url("../../assets/images/bottom-img/weChat-img.jpeg");
    background-repeat: no-repeat;
    background-size: 150px 150px;
    width: 310px;
    height: 150px;
    background-position-x: right;
  }
  .we-char-title-class{
    letter-spacing:2px;
  }
  .text-right{
    text-align: right;
    padding: 4px;
    color: #65635d;
  }
  .text-size{
    font-size: 23px;
  }
</style>
<style scoped>
  .domain-name-class{
    padding: 4px;
    color: #65635d;
    letter-spacing:3px;
    font-size: 13px;
  }
  .network-security-class{
    padding: 4px;
    color: #65635d;
    letter-spacing:3px;
    font-size: 13px;
  }
  .column-class{
    width: 130px;
    float: left;
  }
  .column-title-class{
    width: 130px;
  }
</style>
<style scoped>
	.bottom{
		padding:0px;
		margin:0px;
    width: 100%;
    height: auto;
	}
  .my-bt-img-class{
    background-image: url("../../assets/images/bottom-img/bottom-background-img.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 400px;
  }
  .bt-content-class{
    width: 100%;
    height: auto;
    justify-content: center;/*子元素水平居中*/
    align-items: center;/*子元素垂直居中*/
    display: -webkit-flex;
  }
  .bt-left-class{
    width: 55%;
    height: auto;
  }
  .bt-right-class{
    width: 315px;
    height: auto;
  }
  h1{
    padding: 20px 0px;
    letter-spacing:4px;
    color: #65635d;
  }
  ul{
    padding: 0;
  }
  li{
    list-style: none;
    text-align: left;
    color: #65635d;
    font-size: 14px;
    padding: 5px;
    cursor: pointer;
  }
</style>
