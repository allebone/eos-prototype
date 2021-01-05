<template lang="html">
	
	<statistics-card-line icon="UsersIcon" statistic="92.6k" statisticTitle="Subscribers Gained" :chartData="data.subscribersGained" type='area'></statistics-card-line>

</template>

<script>
import analyticsData from '../../../../../src/views/ui-elements/card/analyticsData.js'

export default {
	data() {
		return {
			data: analyticsData
		}
	}
}	


</script>