
//json de envio do processo a ser executado na API
var send = {
  process:"getLayer"
};

//Definindo a localização dos layers PNG
var bounds =
{
/*Bound Renata
	east: -39.662985667,
	west: -41.889710130,
	north:-17.877620375,
	south:-21.311644668
	
	Bound Rafael
	east: -39.656868189,
  west: -41.899245027,
  north: -17.872064845,
  south: -21.322540277
*/
	east: -39.664625383,
  west: -41.879511367,
  north: -17.892230665,
  south: -21.301622255
};
//guarda o array de layers a serem desativados
var offLayer=[];

//salva o json que esta instanciando os objetos de Layers
var LayerMain="";

//função recursiva
setInterval(function(){
  $.ajax({
    url : 'process/configure_json_layer',
    Type: 'GET',
    data: send,
    success: function( Layer ){
      //console.log( Layer );
      //criar o menu inicial
      if(send.process == "getLayer" ){
        startApp( Layer );
        //altera o tipo de processo
        send.process="refresh";
      }
      //console.log( Layer );

      //alguma coisa mudou ou esta sobre mudança
      if(Layer == "true"){
        //esperar para atualizar
        setTimeout(function(){
          //mudando o parametro para processo
          send.process="change";
          //salvar o novo json e pegar o novo Layer
          $.ajax({
            url : 'process/configure_json_layer',
            Type: 'GET',
            data: send,
            success: function( New_Layer ){
              console.log( New_Layer );
              //DESATIVANDO TODOS lAYERS
              for(var i=0;i<offLayer.length;i++){
                disableLayer( LayerMain, offLayer[i], true );
                offLayer=[];
              }//FIM FOR DESATIVAÇÃO DOS LAYERS
              //atualiza o menu e os metodos
              startApp( New_Layer );
              send.process="refresh";
              console.log("Refresh menu!");
            }//fim success
          });//fim ajax change
        },1500);//fim setTimeout
      }//fim if
    }//fim Sucess AJAX
  }) //fim AJAX principal
},1500);//fim setInterval


function startApp( Layer ){
  try {
    Layer = JSON.parse( Layer );
    LayerMain = Layer;
  } catch (e) {
    console.log("Erro no startApp: Json:"+Layer);
    return false;
  }

  //cria o menu de acordo com o json Layer
  createMenu( Layer );
  //menu movel
  $( ".menu" ).draggable();

  //desliga ou liga o menu
  var hide_layer = false;
  $( ".hide-layer" ).on( "click", function(){
    //esconder o menu
    if(hide_layer==false){
      $('.layers').hide();
      $('.menu').css({'width':'20px'});
      hide_layer=true;
    }else{ //mostrar o menu
      $('.layers').show();
      $('.menu').css({'width':'250px'});
      hide_layer=false;
    }
  });

  //evento de click no input
  $( "input" ).on( "click", function(){
    clickInput(this, Layer);
  });
  console.log( "App Start Sucess!" );
}//fim functions APP

function disableLayer(Layer,id,all){
  if(Layer.id[id].Type=="geojson"){
    //desativa o layer geojson
    Layer.id[id].Layer.setStyle({ visible: false });
  }else{
    //desativa o layer png
    Layer.id[id].Layer.setMap(null);
  }
  //desabilita todos os checkbox
  if(all){
    $('input').each(
      function(){
        if ($(this).prop( "checked"))
        $(this).prop("checked", false);
      }
    );
  }// fim if all
} // FIM disableLayer

function clickInput(ObjectThis, Layer){
  //recebe o id do input, que será o id de consulta do json
  var id = $(ObjectThis).attr('id');
  //se o checkbox estiver preenchido
  if( $(ObjectThis).is(':checked') ){ //ATIVAÇÃO DE LAYERS GEOJSON OU PNG
    //Ativa o layer de acordo com o nome do checkbox.
    if(Layer.id[id].Type=="geojson"){ // SE FOR geojson
      //função que instancia os metodos de insersão geojson no google maps
      Layer.id[id].Layer = new google.maps.Data( {map:map} );
      //carrega o geojson, e faz aparecer
      Layer.id[id].Layer.loadGeoJson( Layer.id[id].Link );

      //adicionando estilo personalizado
      /*function addStyle(Layer[id].Name){
      StyleLayer
    }*/
    //verifica se existe o atributo Style editado e adiciona, se n estiver
    //apenas remove o contorno
    Layer.id[id].Layer.setStyle( addStyle( Layer.id[id].Name ) );
    /*
    if(Layer.id[id].Style) {
    //configura o estilo do geojson, enviando o atributo Style do json
    Layer.id[id].Layer.setStyle( Layer.id[id].Style );
  }else{
  Layer.id[id].Layer.setStyle( { strokeWeight:0 } );
}
*/
}//fim geojson layer
else{ //PNG LAYERS
  //criando objeto GroundOverlay(urlImg,bounds);
  Layer.id[id].Layer = new google.maps.GroundOverlay(
    Layer.id[id].Link, bounds);
    //Ativa a imagem
    Layer.id[id].Layer.setMap(map);
  }//fim png layer
}// fim checked

else{//DESLIGAMENTO DE LAYERS
  disableLayer(Layer,id,false);
} // FIM DESLIGAMENTO DE LAYERS
//guarda o id dos elementos ativos, para desligar depois
offLayer.push( id );
}

//verifica se tem estilo definido, se sim retorna
function addStyle(nameLayer){
  var style=false;
  switch (nameLayer) {
    case 'limite':
    style =
    {
      "fillColor": "black",
      "strokeWeight": 1,
      "fillOpacity": 1,
      "fillOpacity": 0.0
    };
    break;
    case 'Unidade de Conservação':
    style =
    {
      "fillColor": "red",
      "strokeWeight": 0,
      "fillOpacity": 0.3
    }
    break;
    default:
    style =
    {
      "strokeWeight": 0
    }
  }
  return style;
}

//função que cria o menu
function createMenu( Layer ){
  //guarda o HTML do menu, para ser atribuido
  var itens="";
  //cria o menu de acordo com o layerJson
  for(var i=0;i<Object.keys(Layer.id).length;i++){
    //cria os itens do menu
    itens +='<div class="item-menu">'+
    '<label>'+Layer.id[i].Name+'</label>'+
    '<input type="checkbox" id="'+(i)+'">';

    if(Layer.id[i].Style){
      '<div class="legend" style="border: solid '+Layer.id[i].Style.fillColor+';"></div>';
    }else{
      itens+='<div class="legend"></div>';
    }
    itens+='</div>';
  }
  //atribui o menu em <div class="layers">
  $(".layers").html(itens);
  console.log("menu criado, numero de Layers:"+Object.keys(Layer.id).length);
}


function testLayerFuncions(){
  Layer.id[1].Layer = new google.maps.Data( {map: map} );
  Layer.id[1].Layer.loadGeoJson( Layer.id[1].Link );
  //var nUc = Layer.id[1].Layer.feature.getProperty("NOME_UC1");
  //console.log("nome_UC: "+nUc);

  //adicionando evento de click no layer
  Layer.id[1].Layer.addListener('click', function(event){
    //criando ancora de informação
    var infoCity = new google.maps.InfoWindow({
      content: '<div style="overflow:hidden;white-space:nowrap;">'+event.feature.getProperty("NOME_UC1")+'</div>'
    });
    var anchor = new google.maps.MVCObject();
    anchor.set("position",event.latLng);
    infoCity.open(map,anchor);
    //alert(event.feature.getProperty('NOME_UC1'));
  });

  //aditando estilo em local especifico
  Layer.id[1].Layer.setStyle(function(feature) {
    var color;
    var NOME_UC1 = feature.getProperty('NOME_UC1');
    if(NOME_UC1 == "RESERVA BIOLOGICA DE SOORETAMA"){
      color = "red";
    }
    return {
      fillColor: color,
      strokeWeight: 1
    };
  });
}
