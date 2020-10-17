/**
* @author Júlio César Lima Reis<juliolimareis@gmail.com>
* @file   location js/init-map.js
* Iniciando o mapa e sua instancias
*
*/

var map;
var OcupacaoTerraOverlay;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'),
  {
    zoom: 8,
    center: { lat: -19.3194400, lng: -40.3377800 }
  });
}

  //menu de Layers
  /*map.InfoWindow({
  content: '<div class="menu">Menu Layers</div>'
});*/

//anchor.set("position",null);
//menu.open(map);
//var data_layer = new google.maps.Data( {map: map} );
//data_layer.addGeoJson( Layer.id );
//var data_layer2 = new google.maps.Data({map:map});
//Load GeoJSON.
//map.data.loadGeoJson('geojson/Fitofisionomias.geojson');
//map.data.loadGeoJson('geojson/uc.geojson');

/*
data_layer.loadGeoJson ('geojson/uc.geojson');
data_layer2.loadGeoJson('https://raw.githubusercontent.com/juliolimareis/celula/master/limites-es.geojson');
//Set the stroke width, and fill color for each polygon
//alert(data_layer.feature.getProperty('Cor'));

data_layer.setStyle({
  //cor do layer
  fillColor: "red",
  //cor do contorno(linha)
  //strokeColor:"red",
  zIndex:11,
  //largura do contorno(linha)
  strokeWeight: 5
});

data_layer2.setStyle({
  fillColor: "blue",
  zIndex:10,
  strokeWeight: 1
});

/*
//quando o mouse passar sobre o layer 1
data_layer.addListener('mouseover', function(event) {
  var infoCity = new google.maps.InfoWindow({
    content: '<div style="overflow:hidden;white-space:nowrap;">'+event.feature.getProperty("NOME_UC1")+'</div>'
  });
  var anchor = new google.maps.MVCObject();
  anchor.set("position",event.latLng);
  infoCity.open(map,anchor);

  //quanto retirar o mouse
  data_layer.addListener('mouseout', function(event) { infoCity.close(map,anchor); });
});
//quando o mouse clicar sobre o layer 1
data_layer.addListener('click', function(event) {
  var infoCity = new google.maps.InfoWindow({
    content: '<div style="overflow:hidden;white-space:nowrap;">'+event.feature.getProperty("NOME_UC1")+'</div>'
  });
  var anchor = new google.maps.MVCObject();
  anchor.set("position",event.latLng);
  infoCity.open(map,anchor);
});

//quando o mouse passar sobre o layer 2
data_layer2.addListener('mouseover', function(event) {
  var infoCity = new google.maps.InfoWindow({
    content: '<div style="overflow:hidden;white-space:nowrap;">'+event.feature.getProperty("nome")+'</div>'
  });
  var anchor = new google.maps.MVCObject();
  anchor.set("position",event.latLng);
  infoCity.open(map,anchor);

  //quanto retirar o mouse
  data_layer2.addListener('mouseout', function(event) { infoCity.close(map,anchor); });
});
//quando o mouse clicar sobre o layer 2
data_layer2.addListener('click', function(event) {
  var infoCity = new google.maps.InfoWindow({
    content: '<div style="overflow:hidden;white-space:nowrap;">'+event.feature.getProperty("nome")+'</div>'
  });
  var anchor = new google.maps.MVCObject();
  anchor.set("position",event.latLng);
  infoCity.open(map,anchor);
});*/
