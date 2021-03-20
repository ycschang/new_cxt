<template>
	<div>
		<Navbar></Navbar>
		<div class="contact">
      <div style="width: 60%;">
        <div class="top-class">
          <div class="contact-p-class">
            <div class="contact-class">
              <p class="p-class" style="width: 65px;">联系我们</p>
            </div>
          </div>
          <div class="top-content-class">
            <div class="top-left-class"></div>
            <div class="top-right-class">
              <p class="span-icon-1">浙江省嘉兴市乌镇镇植材路608号植材苑5幢101</p>
              <p class="span-icon-2">0573-88713456</p>
              <p class="span-icon-3">400-1576606</p>
            </div>
          </div>
        </div>

        <div class="bottom-class">
          <div class="bottom-content-class">
            <div class="bottom-top-class">
              <div class="bottom-contacts-class"></div>
            </div>
            <div class="bottom-top-class1">
              <div>信息留言</div>
            </div>
            <div class="bottom-bottom-class">
              <div class="input-all-class">
                <!--
                <div><input type="text" id="name"  name="name" placeholder="请输入您的姓名" /></div>
                <div><input type="text" id="mobile"  name="mobile" placeholder="请输入您的手机号码" /></div>
                <div><input type="text" id="emil"  name="emil" placeholder="请输入您的邮箱" /></div>
                <div><input type="text" id="QQ"  name="QQ" placeholder="请输入您的QQ" /></div>
                <div><textarea class="memo-class"  id="memo" name="memo" placeholder="请输入您的留言内容"></textarea></div>
                -->
                <div><input type="text" id="name" v-model="name" name="name" placeholder="请输入您的姓名"  /></div>
                <div><input type="text" id="mobile" v-model="mobile" name="mobile" placeholder="请输入您的手机号码" /></div>
                <div><input type="text" id="emil" v-model="emil" name="emil" placeholder="请输入您的邮箱" /></div>
                <div><input type="text" id="QQ" v-model="QQ" name="QQ" placeholder="请输入您的QQ" /></div>
                <div><textarea class="memo-class" v-model="memo" id="memo" name="memo" placeholder="请输入您的留言内容"></textarea></div>
              </div>
            </div>
            <div class="button-class">
              <!--<button >提交留言</button>-->
              <button @click="onClick()">提交留言</button>
            </div>
          </div>
        </div>
      </div>
		</div>
    <Bottom></Bottom>
	</div>
</template>

<script>
import Navbar from "@/components/nav/Navbar";
import Bottom from "@/components/nav/Bottom"

export default {
      name: "Contact",
      components: {
          Navbar,
          Bottom
      },
      /*created() {
          axios.post('localhost:8080/public/addIMassageInfo',{},function(res){
              alert(6666);
          })
      },*/
      methods: {
          onClick(){
              let _this = this;
              let name=_this.name;
              //phone:_this.mobile,email:_this.emil,qq:_this.QQ,content:_this.memo}
              //使用这种方式传递参数
              let params = new URLSearchParams();
              params.append('name', name);
              params.append('phone', _this.mobile);
              params.append('email', _this.emil);
              params.append('qq', _this.QQ);
              params.append('content', _this.memo);
              /*axios.post('http://localhost:8080/public/addIMassageInfo',{name:_this.name,phone:_this.mobile,email:_this.emil,qq:_this.QQ,content:_this.memo})
                  .then(function(res){
                    alert(6666);
                  });*/
              //alert(_this.name);
              this.axios.post('http://localhost:8080/public/addIMassageInfo',params)
                  .then(function (res) {
                      //alert(JSON.stringify(res));
                      if(!res.data.success==true){
                          alert("提交失败");
                      } else {

                          alert("提交成功");
                          location.reload();
                      }
                  });
          }
      }
}
</script>

<style scoped>
	.contact {
		width: 100%;
		height: auto;
    justify-content: center;
    /*子元素水平居中*/
    align-items: center;
    /*子元素垂直居中*/
    display: -webkit-flex;
	}

	.top-class {
		height: 300px;
		width: 100%;
	}

	/*.contact-class {*/
	/*	justify-content: center;*/
	/*	!*子元素水平居中*!*/
	/*	align-items: center;*/
	/*	!*子元素垂直居中*!*/
	/*	display: -webkit-flex;*/
	/*}*/

	.contact-p-class {
		width: 100%;
		height: auto;
		justify-content: center;
		/*子元素水平居中*/
		align-items: center;
		/*子元素垂直居中*/
		display: -webkit-flex;
	}

	.p-class {
		text-align: center;
		color: #1aba7a;
		border-bottom: 2px solid #1aba7a;
	}

	.top-content-class {
		height: 200px;
		width: 60%;
		margin: 0 auto;
		padding-top: 30px;
		justify-content: center;
		/*子元素水平居中*/
		display: -webkit-flex;
	}

	.top-left-class {
		background-image: url("../../assets/images/contact-img/contact-left.png");
		background-repeat: no-repeat;
		background-size: contain;
		width: 200px;
		height: 200px;
		float: left;
		padding: 30px;
		margin: 10px;
	}

	.top-right-class {
		width: 350px;
		height: 200px;
		float: left;
		margin-left: 10px;
	}

	.span-icon-1 {
		background-image: url("../../assets/images/contact-img/contact-icon-1.png");
		background-repeat: no-repeat;
		background-size: 40px 40px;
		padding-left: 50px;
	}

	.span-icon-2 {
		background-image: url("../../assets/images/contact-img/contact-icon-2.png");
		background-repeat: no-repeat;
		background-size: 40px 40px;
		padding-left: 50px;
	}

	.span-icon-3 {
		background-image: url("../../assets/images/contact-img/contact-icon-3.png");
		background-repeat: no-repeat;
		background-size: 40px 40px;
		padding-left: 50px;
		color: #777171;
	}

	p {
		font-size: 13px;
		padding: 12px;
	}
</style>
<style scoped>
	.bottom-class {
		height: 430px;
		width: 100%;
	}

	.bottom-top-class {
		width: 100%;
		height: 50px;
		justify-content: center;
		/*子元素水平居中*/
		align-items: center;
		/*子元素垂直居中*/
		display: -webkit-flex;
	}

	.bottom-top-class1 {
		width: 100%;
		height: 50px;
		font-size: 13px;
		justify-content: center;
		/*子元素水平居中*/
		display: -webkit-flex;
	}

	.button-class {
		width: 100%;
		height: 30px;
		justify-content: center;
		/*子元素水平居中*/
		align-items: center;
		/*子元素垂直居中*/
		display: -webkit-flex;
		padding-bottom: 30px;
	}

	.bottom-contacts-class {
		background-image: url("../../assets/images/contact-img/contact-title.png");
		background-repeat: no-repeat;
		background-size: 185px 40px;
		width: 200px;
		height: 40px;
	}

	.bottom-bottom-class {
		width: 100%;
		height: 270px;
		justify-content: center;
		/*子元素水平居中*/
		display: -webkit-flex;
	}

	input {
		height: 25px;
		width: 400px;
		margin-top: 8px;
		border: 1px silver solid;
	}

	.memo-class {
		height: 90px;
		margin-top: 8px;
		border: 1px silver solid;
		width: 400px;
		resize: none;
	}

	button {
		width: 100px;
		height: 40px;
		color: #ffffff;
		background: #1aba7a;
		border: 0;
	}
</style>
