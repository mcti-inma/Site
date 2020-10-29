<template>
	<div>
		<slot v-if="loading" name="loader"></slot>
		
		<div v-else>
			<span v-for="(route, index) in routes" :key="index">
				<input class="check" type="checkbox" 
					v-model="check[index]" 
					:change="activeLayer(index)">
				<label> {{ route.name }} </label>
			</span>
		</div>
		<br>
		<div id="map" :style="getStyle()"></div>

		<div id="legend">
			<div id="mydivheader">Mover</div>
			<img src="http://200.137.88.3:8081/geoserver/rima/wms?service=WMS&version=1.1.0&REQUEST=GetLegendGraphic&FORMAT=image/png&WIDTH=30&HEIGHT=20&layer=rima:pontos_fauna" alt="legenda">
		</div>

	</div>
</template>

<style scoped>
	.check{
		margin-left: 20px;
	}
	#map{
		width:800px;
		height:500px;
	}
	#legend {
		position: absolute;
		z-index: 999;
		top:450px;
		left:20%
	}

	#mydivheader {
		cursor: move;
		z-index: 10;
		background-color: #49BF4C;
		color: #fff;
	}
</style>

<script>
import Api from '@/service/api'

export default {
	props:["init",'width', 'height', 'routes'],

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
		this.dragElement(document.getElementById("legend"));

		// var grayscale = this.L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		// 	maxZoom: 20,
		// 	attribution: '  Instituto Nacional da Mata Atlântica <a href="www.inma.gov.br">INMA</a>' + ' Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		// 		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		// 		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		// 	id: 'mapbox.light'
		// });

		// var streets = this.L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		// 	maxZoom: 20,
		// 	attribution: '  Instituto Nacional da Mata Atlântica <a href="www.inma.gov.br">INMA</a>' + ' Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		// 		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		// 		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		// 	id: 'mapbox.streets'
		// });

		// var wms_arcgis = this.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
		// 	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
		// })

		// var baseLayers = {
		// 	"OSM-Ruas": streets,
		// 	"OSM-Tons de Cinza": grayscale,
		// 	"ESRI Arcgis base": wms_arcgis,
		// };

		// this.init.layers = [grayscale, streets]
		
		//init map
    this.map = new this.L.map('map', this.init)
		this.L.tileLayer(this.OSMUrl, {}).addTo(this.map)
		// this.L.control.layers(baseLayers).addTo(this.map)

		//layers
		this.layerGroup = new this.L.LayerGroup()
		this.layerGroup.addTo(this.map)
		this.getLayers()
	},

	methods:{
		getStyle(){
			let style = "";
			if(this.width){
				style += `width:${this.width};`
			}
			if(this.height){
				style += `height:${this.height};`
			}
			// if(this.style){
			// 	style += this.style
			// } 
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
				if(route.type == 'geojson'){
					let response = await Api().get(`${route.point}`)
					this.layers[i] = new this.L.GeoJSON(response.data)
				}else if(route.type == 'wms'){
					this.layers[i] = new this.L.tileLayer.wms(route.url, route.param)
				}
			}
			this.loading = false
		},


		dragElement(elmnt) {
			var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
			if (document.getElementById(elmnt.id + "header")) {
				/* if present, the header is where you move the DIV from:*/
				document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
			} else {
				/* otherwise, move the DIV from anywhere inside the DIV:*/
				elmnt.onmousedown = dragMouseDown;
			}

			function dragMouseDown(e) {
				e = e || window.event;
				e.preventDefault();
				// get the mouse cursor position at startup:
				pos3 = e.clientX;
				pos4 = e.clientY;
				document.onmouseup = closeDragElement;
				// call a function whenever the cursor moves:
				document.onmousemove = elementDrag;
			}

			function elementDrag(e) {
				e = e || window.event;
				e.preventDefault();
				// calculate the new cursor position:
				pos1 = pos3 - e.clientX;
				pos2 = pos4 - e.clientY;
				pos3 = e.clientX;
				pos4 = e.clientY;
				// set the element's new position:
				elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
				elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
			}

			function closeDragElement() {
				/* stop moving when mouse button is released:*/
				document.onmouseup = null;
				document.onmousemove = null;
			}
		}



	},

};
</script>
