<?php
/**
* Diretório $path.$arquivo
* Nome do arquivo $arquivo
* Cria um json dos arquivos em pasta "layers"
*/

//$_GET['process'] = "getLayer";

if( !isset($_GET['process']) ){
	return;
}


//salvando em arquivo json
$directory = '../layers/info_layer.json';
//recebe o arquivo antigo para comparar
$old = file_get_contents( $directory );
//recebe o json de acordo com a diretório
$json = refreshJson();

//$_GET['process']='refresh';
switch ($_GET['process']) {
	case 'getLayer':
		//retorna o arquivo json do diretório de layers
		echo $json;
	break;
	//verificar se ouve alteração
	case 'refresh':
		//verifica se mudou algo para reescrever o arquivo
		if($old != $json){
			//houve mudanças
			echo "true";
			return;
		}
		//nada mudou retornar false
		echo "false";
	break;
	//salva o arquivo nem txt(json) no $directory
	case 'change':
		//grava um json do diretório em arquivo de texto
		if(setTxt($json,$directory,'w')){
			echo $json;
			return;
		}
		echo "false";
	break;
	default:
		// code...
		break;
}

///////////////////////////////// FIM MAIN ////////////////////////////////

############################# FUNÇÕES ###################################

//cria o json de acordo com o diretório layers
function refreshJson(){
	//iniciando o json
	$json ='{
	"id":[';
	//criando json de geojson
	$json.= getLayer("../layers/geojson/","geojson");
	//criando json de png
	$json.= getLayer("../layers/png/","png");
	//removendo a virgula no final do json
	$json=substr($json,0,-1);
		//finalizando o json
	return $json .= '
		 		]
			}';
	}



	function setTxt($txt,$directory,$opt){
		try{
			//abre o arquivo, com o comando de reescrever o texto
			$file = fopen($directory, $opt);
			//reescreve o arquivo
			fwrite($file, $txt);
			fclose($file);
			return true;
		}catch(Exception $e){
			return false;
		}
	}


	//cria o script json de acordo com o diretório
	function getLayer($directory,$type){
		$diretorio = dir($directory);

		//variável de retorno
		$json="";
		//percorre todos os arqivos dentro do diretório
		while($arquivo = $diretorio -> read()){
			$arquivoName = strstr($arquivo, '.', true);
			if (!(($arquivo== ".") || ($arquivo== ".."))){
				//criando o json
				$json .= '
				{
					"Type": "'.$type.'",
					"Name": "'.$arquivoName.'",
					"Layer": null,
					'.getAttrPersonal($arquivoName,"layers"."/".$type."/".$arquivo).'
				},';
			}//fim if
		}//fim while
		$diretorio -> close();
		return $json;
	}

	//adiciona o link e o style
	//$nameLayer = Valor de entrada para o switch case
	function getAttrPersonal($nameLayer,$address){
		$link=false;
		$fillColor= 'null';
		//contorno do geojson, parão 0
		$strokeWeight= '0';
		$fillOpacity= 'null';
		$fillOpacity= 'null';

		if($type="geojson"){
			$strokeWeight= '0';
		}

		switch ($nameLayer) {
			case 'Limites Municipais':
				$fillColor= 'black';
				$strokeWeight= '1';
				$fillOpacity= '1';
				//$fillOpacity= '0.0';
			break;
			case 'Banana':
				$fillColor= '"#ffff00"';
				$fillOpacity= '1';
			break;
			//se cair no default, significa que deve apenas adicionar o link
			default:
			//se link for false, significa que o link deve ser interno
			if($link==false){
				$link='"Link": "'.$address.'"';
			//se link fo modificado o link deve ser externo e deve adicionar no json
			}else{
				$link='"Link": "'.$link.'"';
			}
			return $link;
			break;
		}
		//CASO NÃO CAIA NO DEFAULT CONTINUAR O CÓDIGO
		if($link==false){
			$link='"Link": "'.$address.'",';
		}else{
			$link='"Link": "'.$link.'",';
		}

		//CONFIGURANDO O ESTILO
		$style = '
					"Style":
					{
						"fillColor":   '.$fillColor.',
						"strokeWeight":'.$strokeWeight.',
						"fillOpacity": '.$fillOpacity.'
						
					}';
		return $link.$style;
	}
	?>
