<template>
	<div>
		<div 
			id="map"  
			:style="getStyle()">
		</div>
		<br>

		<slot v-if="loading" name="loader"></slot>

		<div v-else>
			<span v-for="(route, index) in routes" :key="index">
				<input type="checkbox" 
				v-model="check[index]" 
				:change="activeLayer(index)">
				<label> {{ route.name }} </label>
			</span>
		</div>
	</div>
</template>
<script>
import Api from '@/service/api'

export default {
	props:{
		style:{},
		width:{},
		height:{},
		routes:{
			type: Array		
		}
	},

  data() {
    return {
      map:null,
			OSMUrl:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			layerGroup:null,
			jsonLayer:null,
			layers:[],
			loading: true,
			check:[],
			// routers:[
			// 	{name:"Unidades de Conservação", point:"uc"},
			// 	{name:"Zonas de Amortecimento", point:"zonas"}
			// ]
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
			
			this.getLayers()
			
		
	},

	methods:{
		getStyle(){
			let style = "";
			if(this.width){
				style += `width:${this.width}px;`
			}
			if(this.height){
				style += `height:${this.height}px;`
			}
			if(this.style){
				style += this.style
			} 
			return style
		},
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
			for(const [i,route] of this.routes.entries()){
				let response = await Api().get(`${route.point}`)
				this.layers[i] = new this.L.GeoJSON(response.data)
			}
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
<style scoped>
	#map{
		width:500px;
		height:400px;
	}
</style>