/*
data_layer.setStyle({
//cor do layer
fillColor: "red",
//cor do contorno(linha)
//strokeColor:"red",
zIndex:11,
//largura do contorno(linha)
strokeWeight: 5
});
*/
var Layer;
$.ajax({
  url  : 'info_layer.json',
  //data : 'cliente=eu&acao=getmenu',
  type : "POST",
  crossDomain  : "true",
  dataType     : "json",
  contentType  : "application/json",
  success: function( Layer ){//alert("ok");
    Layer = data;
  }
});

//var Layer = $.getJSON("info_layer.json");
/*
var Layer = {
  "About": "json de dados dos layers",
  "id": [
    {
      "Type": "geojson",
      "Nome": "Limites Municipais",
      "Descrição": null,
      "Link": "https://raw.githubusercontent.com/juliolimareis/celula/master/limites-es.geojson",
      "Layer": null,
      "Style":
      {
        "fillColor": "black",
        "strokeWeight": 1,
        "fillOpacity": 1,
        "fillOpacity": 0.0
      }
    },
    {
      "Type": "geojson",
      "Nome": "Unidade de Conservação",
      "Descrição": "Unidades de conservação do ES, 2017",
      "Link": "geojson/uc.geojson",
      "Layer": null,
      "Style":
      {
        "fillColor": "red",
        "fillOpacity": 0.3,
        "strokeWeight": 0
      }
    },
    {
      "Type": "geojson",
      "Nome": "Cultivos Permanentes",
      "Descrição": null,
      "Link": "geojson/agricultura/cultivos_permanentes.geojson",
      "Layer": null,
      "Style":
      {
        "fillColor": "#73ffdf",
        "fillOpacity": 1,
        "strokeWeight": 0
      }
    },
    {
      "Type": "geojson",
      "Nome": "Cultivos Temporarios",
      "Descrição": null,
      "Link": "geojson/agricultura/cultivos_temporarios.geojson",
      "Layer": null,
      "Style":
      {
        "fillColor": "#cd8966",
        "fillOpacity": 1,
        "strokeWeight": 0
      }
    },
    {
      "Type": "geojson",
      "Nome": "Mamão",
      "Descrição": null,
      "Link": "geojson/agricultura/mamao.geojson",
      "Layer": null,
      "Style":
      {
        "fillColor": "#ffaa00",
        "fillOpacity": 1,
        "strokeWeight": 0
      }
    },
    {
      "Type": "geojson",
      "Nome": "Coco da Bahia",
      "Descrição": null,
      "Link": "geojson/agricultura/coco_da_baia.geojson",
      "Layer": null,
      "Style":
      {
        "fillColor": "#a3ff73",
        "fillOpacity": 1,
        "strokeWeight": 0
      }
    },
    {
      "Type": "geojson",
      "Nome": "Cana de Açúcar",
      "Descrição": null,
      "Link": "geojson/agricultura/cana_de_acucar.geojson",
      "Layer": null,
      "Style":
      {
        "fillColor": "#ffbebe",
        "fillOpacity": 1,
        "strokeWeight": 0
      }
    },
    {
      "Type": "geojson",
      "Nome": "Café",
      "Descrição": null,
      "Link": "geojson/agricultura/cafe.geojson",
      "Layer": null,
      "Style":
      {
        "fillColor": "#a87000",
        "fillOpacity": 1,
        "strokeWeight": 0
      }
    },
    {
      "Type": "geojson",
      "Nome": "Banana",
      "Descrição": null,
      "Link": "geojson/agricultura/banana.geojson",
      "Layer": null,
      "Style":
      {
        "fillColor": "#ffff00",
        "fillOpacity": 1,
        "strokeWeight": 0
      }
    },
    {
      "Type": "geojson",
      "Nome": "Abacaxi",
      "Descrição": null,
      "Link": "geojson/agricultura/abacaxi.geojson",
      "Layer": null,
      "Style":
      {
        "fillColor": "#ffffbe",
        "fillOpacity": 1,
        "strokeWeight": 0
      }
    },
    //PNG
    {
      "Type": "png",
      "Nome": "Ocupaçao da Terra (PNG)",
      "Descrição": "null",
      "Link": "http://www.tempustecnologia.com/claudio/img/ocupacaoterra.png",
      "Layer": null,
      "Style":
      {
        "fillColor": "#ffffbe"
      }
    },
    {
      "Type": "png",
      "Nome": "Pastagem(PNG)",
      "Descrição": "null",
      "Link": "img/pastagem.png",
      "Layer": null,
      "Style":
      {
        "fillColor": "#ffffbe"
      }
    }
  ]
}
//tamanho do atributo id do LayerJson
function sizerId(){
  return sizeId = Object.keys(Layer.id).length;
}*/
