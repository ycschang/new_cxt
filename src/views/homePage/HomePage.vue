<template>
	<div>
		<Navbar></Navbar>
		<main>
			<div class="main">
				<div style="width:100%;height:auto;float:left;">
					<img :src="require('@/assets/homePage/03.jpg')" class="img" />
				</div>
				<div style="width:100%;height:auto;float:left;">
					<div style="position: absolute;width: 10%;height: 13%;margin-left: 27%;border-radius: 50%;margin-top: 11%;"
					 @click="enter(1)"></div>
					<div style="position: absolute;width: 10%;height: 13%;margin-left: 39%;border-radius: 50%;margin-top: 11%;"
					 @click="enter(2)"></div>
					<div style="position: absolute;width: 10%;height: 13%;margin-left: 51%;border-radius: 50%;margin-top: 11%;"
					 @click="enter(3)"></div>
					<div style="position: absolute;width: 10%;height: 13%;margin-left: 63%;border-radius: 50%;margin-top: 11%;"
					 @click="enter(4)"></div>
					<img :src="require('@/assets/homePage/business_01.jpg')" class="img" v-show="seen" />
					<img :src="require('@/assets/homePage/business_02.jpg')" class="img" v-show="seen1" />
					<img :src="require('@/assets/homePage/business_03.jpg')" class="img" v-show="seen2" />
					<img :src="require('@/assets/homePage/business_04.jpg')" class="img" v-show="seen3" />
				</div>
				<div style="width:100%;height:auto;padding-top:20px; display: flex;justify-content: center;align-items: center; ">
					<img :src="require('@/assets/homePage/02_14-1.jpg')" class="img4" v-show="seen" />
					<img :src="require('@/assets/homePage/03_14.jpg')" class="img4" v-show="seen1" />
					<img :src="require('@/assets/homePage/05_14.jpg')" class="img4" v-show="seen2" />
					<img :src="require('@/assets/homePage/02_14.jpg')" class="img4" v-show="seen3" />
				</div>
				<div style="width:100%;height:auto;float:left;">
					<img :src="require('@/assets/homePage/06.jpg')" class="img" />
				</div>
				<div style="width:100%;height:auto;float:left;">
					<img :src="require('@/assets/homePage/07.jpg')" class="img" />
				</div>
				<div style="width: 100%;height: auto;float:left">
					<img :src="require('@/assets/homePage/title.jpg')" class="img" />
				</div>
				<div style="width:58%;height: auto;float:left;padding-bottom: 10px;">
					<div style="width:100%;height:auto;float:left;position:relative ">
						<el-popover trigger="hover" title="" placement="center" class="img6">
							<img :src="require('@/assets/homePage/07_21.jpg')" class="img">
							<img slot="reference" :src="require('@/assets/homePage/07_21.jpg')" class="img">
						</el-popover>
						<div class="content">
							<span class="title">椿熙堂联合承担的国家级服务业标准化项目顺利通过验收！</span></br>
							<span class="small_title">2020-10</span>
						</div>
					</div>
					<div style="width:100%;height:auto;float:left;padding-top:1%;position:relative ">
						<el-popover trigger="hover" title="" placement="center" class="img6">
							<img :src="require('@/assets/homePage/07_25.jpg')" class="img">
							<img slot="reference" :src="require('@/assets/homePage/07_25.jpg')" class="img">
						</el-popover>
						<div class="content">
							<span class="title">海宁市政协一行考察海昌街道居家养老服务中心！</span></br>
							<span class="small_title">2020-10</span>
						</div>
					</div>
					<div style="width:100%;height:auto;float:left;padding-top:1%;position:relative ">
						<el-popover trigger="hover" title="" placement="center" class="img6">
							<img :src="require('@/assets/homePage/07_27.jpg')" class="img">
							<img slot="reference" :src="require('@/assets/homePage/07_27.jpg')" class="img">
						</el-popover>
						<div class="content">
							<span class="title">重阳特辑 | 爱在禾城暖银龄</span></br>
							<span class="small_title">2020-10</span>
						</div>
					</div>
					<div style="width:100%;height:auto;float:left;padding-top:1%;position:relative">
						<el-button size="mini" round>更 多</el-button>
					</div>
				</div>
				<div style="width:42%;height: auto;float:left;padding-bottom: 1%;position:relative ">
					<img :src="require('@/assets/homePage/02_21.jpg')" class="img7" />
				</div>
			</div>

		</main>
		<Bottom></Bottom>
	</div>
</template>

<script>
	import Navbar from "@/components/nav/Navbar";
	import Bottom from "@/components/nav/Bottom";

	export default {
		data() {
			return {
				seen: true,
				seen1: false,
				seen2: false,
				seen3: false,
			}
		},
		methods: {
			enter(index) {
				if (index == 1) {
					this.seen = true;
					this.seen1 = false;
					this.seen2 = false;
					this.seen3 = false;
				} else if (index == 2) {
					this.seen = false;
					this.seen1 = true;
					this.seen2 = false;
					this.seen3 = false;
				} else if (index == 3) {
					this.seen = false;
					this.seen1 = false;
					this.seen2 = true;
					this.seen3 = false;
				} else if (index == 4) {
					this.seen = false;
					this.seen1 = false;
					this.seen2 = false;
					this.seen3 = true;
				}
			}
		},
		components: {
			Navbar,
			Bottom
		},

	}
</script>

<style scoped>
	.title {
		font-size: 1vw;
		color: #000;
	}

	.small_title {
		font-size: 1vw;
		color: #969696;
		position: absolute;
		bottom: 8%;
		padding: 0px;
	}

	.img {
		width: 100%;
		height: auto;
	}

	main {
		overflow: auto;
		width: 100%;
	}

	main .main {
		width: 100%;
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		padding:0px 0px 20px 0px;
	}

	.img4 {
		width: 67%;
		height: auto;
	}

	.img6 {
		width: 20%;
		float: left;
		margin-left: 30%;
	}

	.img7 {
		width: 58%;
		height: auto;
	}

	.content {
		width: 48%;
		float: left;
		font-size: 10px;
		margin-left: 1%;
	}

	.el-button--mini {
		border: 1px solid #7d8ef4;
		color: #7d8ef4;
		position: absolute;
		right: 8%;
	}
</style>
