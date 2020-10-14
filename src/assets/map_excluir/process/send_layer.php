<html>
<head>
  <meta charset="UTF-8">
  <meta name="login-content" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <script type="text/javascript" src="js/jquery-3.3.1/jquery.min.js"></script>
  <dscript type="text/javascript" src="upload_layer/js/script.js"></script>
  <link rel="stylesheet" href="../../style/form_validation.css">
  <link rel="stylesheet" href="../../style/bootstrap.css">
  <link rel="stylesheet" href="../../style/login.css">
</head>
<body>
  <div class="container">
    <div class="login-container">
      <div class="form-box">
        <form name="files" method="post" action="send_layer" enctype="multipart/form-data">
          <input type="file" name="file[]" id="file_upload" multiple="multiple">
          <label for="file_upload">Escolha o Arquivo</label>
          <input type="submit" value="Enviar"/>
        </form>
        <label class="msg"></label>
        <a href="../layers"> Visualizar/Baixar layers</a><br>
        <a href="../" target="_blank">Testar Layers</a><br>
        <br>
        <br>
        <a href="index">Voltar</a>
      </div>
    </div>
<style>
.sucess{
 color:#00FA9A;
}

.error{
  color:red;
}

.relat{
	position:absolute;
	top:350px;
	margin-left:0;
	margin-right:0;
  padding:3px;
  background:black;
  border:solid black;
  color:white;
  font-size:19px;
}

.alert{
  color:red;
}
.form-file{
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
</style>

<div class="relat">
<h3>Relatório</h3>
<?php
ini_set('display_errors','Off');
error_reporting(E_ALL);
$zip = new ZipArchive();
$data = array();

$uploaddir = './';
$upLoadJson = '../layers/geojson/';
$upLoadImage = '../layers/png/';

$sucessLog = "";
$errorLog  = "";
$sucess = false;
//$error = false;
$count=0;
// erro
$error = false;
//josn de log de sucesso
$files = array();
//se a variável $_FILES existir

//echo($_FILES['file_upload']['name'][0]);
//return;

if(isset($_FILES)){
  $total = count($_FILES['file']['name']);
	//passar em arquivo por arquivo
	//foreach($_FILES as $file){
  for( $i=0 ; $i < $total ; $i++ ) {
    $file = $_FILES['file']['tmp_name'][$i];
    $fileName = $_FILES['file']['name'][$i];
    echo $fileName;
    //EXENÇÃO DO ARQUIVO
		$e = explode( ".", $fileName );
		$ext = end( $e );
		//FIM EXTENÇÃO DO ARQUIVO
		echo $ext;
		//SE FOR ZIP ARQUIVO
		if($ext == 'zip'){
			//ABRE O ARQUIVO ZIP
			if( $zip->open( $_FILES['file']['tmp_name'][$i] ) === true){
				//PERCORRE O ZIP
				for ($i = 0; $i < $zip->numFiles; $i++) {
					//PEGA O NOME DA EXTENÇÃO DO ARQUIVO DENTRO NO ZIO
					$z = explode( ".", $zip->getNameIndex($i) );
					$extZip = end( $z );
					//VERIFICA O NOME DA EXTENÇÃO, SE FOR GEOJSON OU JSON, EXTRAIR PARA A PASTA ADEQUADA
					if( $extZip == "geojson" || $extZip == "json" ){
						if($zip->extractTo( $upLoadJson,  $zip->getNameIndex($i) ) ){
							//ARRAY DE NOME DOS ARQUIVOS MOVIDOS
							$files[] = $upLoadJson . $zip->getNameIndex($i);
            //caso aconteça erro na extração
						}else{
							$files[] = "error file(".$fileName.") try extract to => ".$upLoadJson . $zip->getNameIndex($i);
						}
						//VERIFICA O NOME DA EXTENÇÃO, SE FOR PNG, JPG OU JPEG, APLICAR TRANSPARÊNCIA E MOVER PARA A PASTA ADEQUADA
					}elseif($extZip == "png" || $extZip == "jpg" || $extZip == "jepg"){
					//salvando a imagem na pasta local para edição
					$zip->extractTo( './', $zip->getNameIndex($i) );
						if( transparentIMG( $zip->getNameIndex($i), $upLoadImage ) ){
							//ARRAY DE NOME DOS ARQUIVOS MOVIDOS
							$files[] = $upLoadImage . $zip->getNameIndex($i);
						}else{
							$files[] = "error file(".$fileName.") try convert to => ".$upLoadJson . $zip->getNameIndex($i);
						}
					}
				}
			}
		}//FIM ARQUIVO ZIP

		//SE FOR ARQUIVO JSON
		elseif($ext == "geojson" || $ext == "json"){
			if( move_uploaded_file($_FILES['file']['tmp_name'][$i], $upLoadJson .$fileName) ){
				$files[] = $upLoadJson .$fileName;
			}else{
				$files[] = "error file(".$fileName.") try move to => ".$upLoadJson;
			}
		}
		//SE FOR ARQUIVO DE IMAGEM
		elseif($ext == "png" || $ext == "jpg" || $ext == "jepg"){
			//movendo arquivo para psta local para editar
			if( move_uploaded_file($_FILES['file']['tmp_name'][$i], "./" .$fileName) ){
				if( transparentIMG( $fileName,$upLoadImage )){
					$files[] = $upLoadImage .$fileName;
				}else{
					$files[] = "error file(".$fileName.") try convert to => ".$upLoadImage . $zip->getNameIndex($i);
				}
			}
			//erro ao tentar mover arquivos
			else{
				$files[] = "error file(".$fileName.") try move to => ".$upLoadImage;
			}
		}
		//Arquivo inadequado retornar erro;
		else{
			$error = true;
		}
	}//FIM FOREACH

	//editando json de resposta, se erro for true, voltar erro, ou retornar log json de sucesso
	$data = ($error) ? array('error' => 'Ocorreu um erro ao enviar seus arquivos') : array('files' => $files);

}else{
	$data = array('success' => 'Arquivo(s) enviado(s)', 'formData' => $_POST);
}

if($error){
  msg('error',$data);
}else{
  msg('sucess',$data);
}

function msg($class,$data){
  echo '<p class="'.$class.'">'.json_encode($data).'<br>Quantidade de Arquivos: '.count($_FILES['file']['name']).'</p><br>';
}

/*
Aplica transparência na imagem
$nameImg
	Se refere ao endereço da imagem com o nome,
se a imagem estiver no mesmo diretório deste escript
apenas o nome da imagem deve ser passado.

$salveImg
	endereço onde será salvo a imagem

retorno
	retorna true ou false
*/
function transparentIMG($nameImg, $salveImg){
	try{
		//passando a localização da imagem que será editada
		$img = imageCreateFromPng( $nameImg );
    //pegando o RGB do primeiro pixel, esse sera a cor removida
    $rgb = imagecolorat($img, 0, 0);
    $r = ($rgb >> 16) & 0xFF;
    $g = ($rgb >> 8) & 0xFF;
    $b = $rgb & 0xFF;
    //fim pegar cor a ser removida

		//selecionando a cor para processo
    $white = imageColorAllocate($img, $r, $g, $b);
    //$white = imageColorAllocate($img, 255, 255, 255);
		//aplicando a transparência
		imageColorTransparent($img, $white);
		//criando imagem com transparência
		imagePng($img,$salveImg.$nameImg);
		//Deletando a imagem temporária
		unlink($nameImg);
		return true;
	}catch(Excepiton $e){
		return false;
	}//FIM TRY
}

?>
</div>
</div>
</body>
</html>
