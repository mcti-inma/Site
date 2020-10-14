<template>
	<div>
		<h1 v-if="loading">Carregando Layrs...</h1>
		<div 
			id="map" 
			class="map"  
			:style="{width: `${width}px`, height: `${height}px`}">
		</div>
		<br>
		<span v-for="(route, index) in routers" :key="route.point">
			<input type="checkbox" :id="{index}" value="0" 
				v-model="check[index]" :change="activeLayer(index)">
			<label> {{ route.name }} </label>
		</span>
	</div>
</template>
<script>
import Api from '@/service/api'

export default {
	props:['width', "height"],

  data() {
    return {
      map:null,
			OSMUrl:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			layerGroup:null,
			jsonLayer:null,
			layers:[],
			loading: false,
			check:[],
			routers:[
				{name:"Unidades de Conservação", point:"uc"},
				{name:"Zonas de Amortecimento", point:"zonas"}
			]
    };
	},

  mounted() {
    this.map = new this.L.map('map').setView([-19.3194400, -40.3377800], 7);
		this.L.tileLayer(this.OSMUrl, {}).addTo(this.map);
		 
		// funciona 
		//this.jsonLayer = this.L.geoJSON().addTo(this.map);

			this.layerGroup = new this.L.LayerGroup();
			
			// var layerPostalcodes = 
			this.layerGroup.addTo(this.map);
			
			
			for(const route of this.routers){
				this.getLayers(route.point)
			}
		
	},

	methods:{
		isChecked(id){
			if(this.check[id]){
				return true
			} return false
		},
		activeLayer(id){
			if(this.isChecked(id)){
				this.enableLayer(id)
			}else{
				this.disableLayer(id)
			} 
		},
		enableLayer(id){
			if(this.layers[id]){
				this.layerGroup.addLayer(this.layers[id]);
			}
		},
		disableLayer(id){
			if(this.layers[id]){
				this.layerGroup.removeLayer(this.layers[id]);
			}
		},
		async getLayers(route)  {
			this.loading = true
			let response = await Api().get(`/${route}`)
			this.layers.push( new this.L.GeoJSON(response.data) )
			this.loading = false
	
			//functiona
			// this.layers.push( response.data )
			// this.jsonLayer.addData(this.layers[0]);

			// let test = this.L.geoJSON(response.data).addTo(this.map);
			// this.layers.push( this.L.geoJSON(response.data).addTo(this.map) )
		},
	},
};


		// var info = this.L.control();
		
		// var divs = this.L.DomUtil.create('div', 'info'); // create a div with a class "info"
		
		// info.onAdd = function (map) {
		// 		this._div = divs
		// 		this.update();
		// 		return this._div;
		// };

		// method that we will use to update the control based on feature properties passed
		// info.update = function (properties) {
		// 	console.log(properties)
		// 		this._div.innerHTML = '<h4>US Population Density</h4>' +  (properties ?
		// 				'<b>' + properties.NOME_UC1 + '</b><br />' + properties.Area_km2 + ' people / mi<sup>2</sup>'
		// 				: 'Hover over a state');
		// };

		// info.addTo(this.map);
</script>
<style lang="less">

</style>