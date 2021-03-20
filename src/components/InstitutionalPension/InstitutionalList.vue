 <template>
	<div>
		<div class="institutional-list">
			<div class="institutional-item" v-for="(item,index) in institutionalListData" :key="index">
				<div class="left">
					<div class="left-image" :style="{'background': 'url('+item.image+')','width':'100%','height':'100%','background-size':'cover','background-repeat':'no-repeat','background-position':'center'}" />
				</div>
				<div class="right">
					<div class="institutional-name">{{item.name}}</div>
					<div class="institutional-introduction">{{item.introduction}}</div>
					<div class="right-bottom">
						<div class="institutional-phone"><img src="../../assets/images/institutionalPension-img/institutional_icon_telephone.png">{{item.telephone}}
						</div>
						<div class="institutional-bed"><img src="../../assets/images/institutionalPension-img/institutional_icon_bed.png">{{item.bed}}床位
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "InstitutionalList",
		data() {
			return {
				image: require('../../assets/homePage/首页_05-2.jpg')
			}
		},
		props: {
			institutionalListData: {
				type: Array,
				default () {
					return []
				}
			}
		},
	}
</script>

<style scoped>
	.institutional-list {
		width: 50%;
		margin: 0 auto;
	}

	.institutional-item {
		width: 100%;
		height: 220px;
		display: flex;
		margin-top: 40px;
		margin-bottom: 40px;
	}

	.left {
		width: 40%;
		height: 220px;
	}

	.right {
		width: 60%;
		height: 220px;
		position: relative;
	}

	.institutional-name {
		font-size: 18px;
		letter-spacing: 10px;
		font-weight: bold;
		margin-left: 20px;
		color: #635E5A;
	}

	.institutional-introduction {
		margin-left: 20px;
		margin-top: 15px;
		font-size: 12px;
		color: #635E5A;
	}

	.right-bottom {
		margin-left: 16px;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.institutional-phone,
	.institutional-bed {
		height: 30px;
		line-height: 30px;
		color: #878787;
	}

	.institutional-phone img,
	.institutional-bed img {
		width: 20px;
		height: 20px;
		vertical-align: middle;
		margin-bottom: 4px;
		padding: 5px;
	}
</style>
