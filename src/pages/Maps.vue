:routes="$config.request.routes"
<template>
	<div>
		<br>
		<center>
			<Leaflet width="600px" height="660px" 
				:routes="$config.request.routes"
				:init="{
				center: [-19.7, -40.6],
				zoom: 8,
				minZoom: 4,
				maxZoom: 20,
			}">
				<loader slot="loader"
					size="50" borderSize="6" time="0.9" 
					:colors="['#49BF4C','#49BF4C']"
				/>
			</Leaflet>
		</center>
		<br>
	</div>
</template>

<script>
import Leaflet from '@/components/util/Leaflet.vue'
import loader from '@/components/template/loader.vue'

export default {
	components:{
		Leaflet,
		loader
	},

	mounted(){
		// console.log( this.$config.request.routes )
	}
}
</script>

<style>

</style>