<!-- =========================================================================================
	File Name: VxList.vue
	Description: list Component
	Component Name: VxList
	----------------------------------------------------------------------------------------
	Item Name: Vuexy Admin - Clean Vue.js Dashboard Admin Template
	Version: 1.0
	Author: Pixinvent
	Author URL: hhttp://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<ul class="list">
		<li class="list__item" v-for="(item, index) in list" :key="index">
			<feather-icon :icon="icon" class="w-5 h-5 mr-1" /><span v-html="item"></span>
		</li>
	</ul>
</template>

<script>
export default {
	name: "vx-list",
	props: {
		list: {
			type: Array,
			required: true,
		},
		icon: {
			type: String,
			default: "ChevronsRightIcon",
		},
	},
}
</script>

<style lang="scss">
@import "../../../../src/assets/scss/vuexy/components/vxList.scss";
.list {
	line-height: 1.2;
}
</style>
