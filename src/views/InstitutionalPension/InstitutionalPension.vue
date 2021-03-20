<template>
	<div>
		<service-introduction :introductionData="introductionData" :showTab="showTab" />
		<div class="line">
			<div class="longLine" />
			<div class="shortLine" />
		</div>
		<institutional-list :institutionalListData="institutionalListData" />
	</div>

</template>

<script>
	import ServiceIntroduction from "../../components/companyService/ServiceIntroduction";
	import InstitutionalList from "../../components/InstitutionalPension/InstitutionalList";
	export default {
		name: "InstitutionalPension",
		components: {
			ServiceIntroduction,
			InstitutionalList
		},
		data() {
			return {
				showTab: true,
				introductionData: {
					image: require('@/assets/images/institutionalPension-img/introduction_institutional.png'),
					title: '机构养老',
					message: '椿熙堂机构依托公司智能化、标准化的核心优势，内部严格执行总公司标准化运营规范要求，严格按照国家规范化护理制度的要求，' +
						'同时具有养老服务实践经验丰富的医疗、康复、护理、膳食营养、社工师、护理师、心理咨询师组成的专业团队，为院内长者提供包括医疗护理、' +
						'生活护理、清洁卫生护理、营养保健护理、心理护理在内的全方位、一站式、24小时持续的家院融合式养老照护服务。',
					color: 'orange',
					tab: [{
							image: require('@/assets/images/institutionalPension-img/institutional_icon_1.png'),
							name: '能力评估'
						},
						{
							image: require('@/assets/images/institutionalPension-img/institutional_icon_2.png'),
							name: '失智失能照护'
						},
						{
							image: require('@/assets/images/institutionalPension-img/institutional_icon_3.png'),
							name: '健康管理'
						},
						{
							image: require('@/assets/images/institutionalPension-img/institutional_icon_4.png'),
							name: '科学膳食'
						},
						{
							image: require('@/assets/images/institutionalPension-img/institutional_icon_5.png'),
							name: '生活照料'
						}
					]
				},
				institutionalListData: [{
						image: require('@/assets/images/institutionalPension-img/institutional_wuzhen.png'),
						name: '乌镇椿熙堂照护之家养护院',
						introduction: '采用日式精品标准的装修风格，四层，共96个床位，以“智慧+养老模式”“医养结合“失智失能症' +
							'专区”为特色，专为失智失能及家中无人照护老人，提供24小时全照料服务。引入专业评估设备，组建以医生为' +
							'主导的跨专业评估小组，为入住长者从日常生活能力、精神状态、感知觉与沟通、社会参与能力等方面进行入院评估，' +
							'从而确定护理等级，并制定个性化的服务方案。',
						telephone: '0573-88712922',
						bed: '96'
					},
					{
						image: require('@/assets/images/institutionalPension-img/institutional_zhouwangmiao.png'),
						name: '周王庙镇椿熙堂养老服务中心',
						introduction: '椿熙堂机构依托公司智能化、标准化的核心优势，内部严格执行总公司标准化运营规;要求，严格按照' +
							'国家规范化护理制度的要求，同时具有养老服务实践经验丰富的医疗、康复、护理、膳食营养、社工师、护理师、心理咨' +
							'询师组成的专业团队，为院内长者提供包括医疗护理、生活护理、清洁卫生护理、营养保健护理、心理护理在内的全方位,' +
							'一站式、24小时持续的家院融合式养老照护服务。',
						telephone: '0573-88712922',
						bed: '161'
					},
					{
						image: require('@/assets/images/institutionalPension-img/institutional_xincheng.png'),
						name: '新塍镇养老服务中心',
						introduction: '新塍镇养老服务中心设有床位210张，集养老、康复、娱乐为一体的养老机构。设有题活动室、阅览室、棋牌室、' +
							'洗衣房、影音室等配套设施；院内附设医务室，为老年友的身体健康保驾护航。采用先进的管理模式，提供专业的医生、护士、护工、' +
							'社工服务，为入住老年朋友提供一个颐养之家。',
						telephone: '0573-88712922',
						bed: '261'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.line {
		margin-top: 50px;
		margin-bottom: 10px;
		width: 100%;
		height: 50px;
		position: relative;
	}

	.longLine {
		height: 1px;
		width: 60%;
		background-color: darkgrey;
		position: absolute;
		top: 50%;
		left: 20%;
	}

	.shortLine {
		height: 3px;
		width: 10%;
		background-color: orange;
		position: absolute;
		top: 50%;
		left: 45%;
		margin-top: -1px;
	}
</style>
