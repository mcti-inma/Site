<template>
	<div>
		<br>
		<center>
			<Leaflet width="800" height="600" :routes="$config.request.routes"/>
		</center>
		<br>
	</div>
</template>

<script>
import Leaflet from '@/components/util/Leaflet.vue'

export default {
	components:{
		Leaflet
	},

	mounted(){
		// console.log( this.$config.request.routes )
	}
}
</script>

<style>

</style>