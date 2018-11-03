function validar(){
  var dato = document.getElementById('img').value;
  if(dato == ""){
    alert('Campo null ¡verifique!')
  }else{
    document.getElementById('pos').src = dato;
    Tesseract.recognize(dato)
         .progress(function(progr){     })
         .then(function(resul){document.getElementById('resultado').value = resul.text;});
    document.getElementById('x').style.display="inline";
    document.getElementById('btn_org').style.display="inline";
  }
}
function limpiar(){
  document.getElementById('img').value = "";
  document.getElementById('pos').src = "";
  document.getElementById('resultado').value = "";
  document.getElementById('x').style.display="none";
  document.getElementById('box_fact').style.display="none";
}
function organizar(){
  var texto = document.getElementById('resultado').value;
  var siigo = texto.substr(4,32);
  var siigo2 = texto.substr(36,18);
  var siigo3 = texto.substr(64,26);
  var siigo4 = texto.substr(90,18);
  var siigo5 = texto.substr(108,19);
  var siigo6 = texto.substr(127,7);
  document.getElementById('title').innerHTML = siigo;
  document.getElementById('title2').innerHTML = siigo2;
  document.getElementById('title3').innerHTML = siigo3;
  document.getElementById('title4').innerHTML = siigo4;
  document.getElementById('title5').innerHTML = siigo5;
  document.getElementById('title6').innerHTML = siigo6;

  var siigo_content = texto.substr(137,600);
  document.getElementById('content').innerHTML = siigo_content;

  document.getElementById('box_fact').style.display="inline";
  document.getElementById('btn_org').style.display="none";
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
