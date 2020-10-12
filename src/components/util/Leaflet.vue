<template>
  <div 
		id="map" 
		class="map"  
		:style="{width: `${width}px`, height: `${height}px`}"></div>
</template>
<script>
import Api from '@/service/api'

export default {
	props:['width', "height"],

  data() {
    return {
      map: null,
			OSMUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			geojson:null,
    };
	},
	
	methods:{
		async setGeoJson()  {
			let response = await Api().get('/uc')
			let test = this.L.geoJSON(response.data).addTo(this.map);
			console.log(test)
		}
	},

  mounted() {
    this.map = this.L.map('map').setView([-19.3194400, -40.3377800], 7);
		this.L.tileLayer(this.OSMUrl, {}).addTo(this.map);

		var info = this.L.control();
		var divs = this.L.DomUtil.create('div', 'info'); // create a div with a class "info"
		
		info.onAdd = function (map) {
				this._div = divs
				this.update();
				return this._div;
		};

		// method that we will use to update the control based on feature properties passed
		info.update = function (properties) {
			console.log(properties)
				this._div.innerHTML = '<h4>US Population Density</h4>' +  (properties ?
						'<b>' + properties.NOME_UC1 + '</b><br />' + properties.Area_km2 + ' people / mi<sup>2</sup>'
						: 'Hover over a state');
		};

		info.addTo(this.map);




		this.setGeoJson()
	}
};
</script>
<style lang="less">

</style>