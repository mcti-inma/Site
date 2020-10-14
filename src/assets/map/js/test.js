$(document).ready(function() {
  var json;
	pegaPrev("geojson", function(dados) {
    json = dados;
    $('#log').append(dados.id[0].Type);
	});
  alert(json);
});

function pegaPrev(cidade, callback) {
	var url = "info_layer.json";

	$.getJSON( url, function(data) {
		callback(data);
	});
}
