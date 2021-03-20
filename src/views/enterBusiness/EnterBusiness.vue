<template>
	<div class="enter-business-class">
		<Navbar></Navbar>
		<div class="enter-business">
      <HeadCard class="head-card-1" :simpleName="'企业品牌'" :english-name="'ENTERPRISE BRAND'"></HeadCard>
			<brand-part class="brand"></brand-part>
			<head-card class="head-card-2" :simpleName="'发展历程'" :english-name="'SERVICE FILED'" />
      <DevelopmentHistory></DevelopmentHistory>
		</div>
		<Bottom></Bottom>
	</div>
</template>

<script>
	import HeadCard from "../../components/enterBusiness/HeadCard";

	import BrandPart from "../../components/enterBusiness/BrandPart";
	import DevelopmentHistory from "../../components/enterBusiness/DevelopmentHistory";
	import Navbar from "@/components/nav/Navbar";
	import Bottom from "@/components/nav/Bottom";

	export default {
		name: "EnterBusiness",
		components: {
			Navbar,
			Bottom,
			HeadCard,
			BrandPart,
			DevelopmentHistory
		}
	}
</script>

<style scoped>
	.head-card-1 {
    display: inline-block;
    padding: 30px;
	}

	.head-card-2 {
		padding: 30px;
	}

  .enter-business-class{
    width: 100%;
    height: auto;
  }

	.enter-business{
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
	}
</style>
