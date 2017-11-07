window.onload = function(){
    data = new Date();
    mes = data.getMonth();
    dia = data.getDate();
    ano = data.getFullYear();
    var str_data = dia + '/' + (mes+1) + '/' + ano;
    document.getElementById("DataAtual").value = str_data


 $.getJSON( "./produtos.json", function(data) {
    const select = $('#selectProdutos')
    const produtos = JSON.stringify(data)
    let option
    for (var i = produtos.length - 1; i >= 0; i--) {
        option = new Option(i, produtos[i].nome)
        select.add(option)
    }
});

}

$(document).ready(function() {
  $('#inputOculto').hide();
  $('#labelOculto').hide();
  $('#mySelect').change(function() {
    if ($('#mySelect').val() == 'Outros') {
      $('#inputOculto').show();
      $('#labelOculto').show();
    } else {
      $('#inputOculto').hide();
      $('#labelOculto').hide();
    }
  }); 
});

function calcular(){

    //Primeira Página
    //var comprimento = document.getElementById("Comprimento").value 
    //var largura = document.getElementById("Largura").value
    var comprimento = $("[name='tx_comprimento']").val();
    var largura = $("[name='tx_largura']").val();
    var altura = $("[name='tx_altura']").val();
    var tempInterna = $("[name='tx_TempInterna']").val();
    var conduTermi = $("[name='tx_ConduTermi']").val();
    var espessuraIsolamento = $("[name='tx_EspessuraIsolamento']").val();
    var tempExterna = $("[name='tx_TempExterna']").val();
    var frequencia = $("[name='tx_Frequencia']").val();
    

    //Primeira Página
    //window.localStorage.setItem("tx_comprimento", comprimento);
    window.localStorage['tx_comprimento'] = comprimento;
    window.localStorage['tx_largura'] = largura;
    window.localStorage['tx_altura'] = altura;
    window.localStorage['tx_TempInterna'] = tempInterna;
    window.localStorage['tx_ConduTermi'] = conduTermi;
    window.localStorage['tx_EspessuraIsolamento'] = espessuraIsolamento;
    window.localStorage['tx_TempExterna'] = tempExterna;
    window.localStorage['tx_Frequencia'] = frequencia;

    volume = (comprimento * largura) * altura;
    area = comprimento * largura;

    $('#areaDoPiso').val(area);
    $('#volume').val(volume);
}


//JSON

$.ajax({
    url: "produtos.json",
    success: function(data){

    }
});

var dados;
$.ajax({
    url: "produtos.json",
    success: function(data){
        dados = data;
    }
});






var populateInputs = function(data){
    for (var prop in data){
        var val = data[prop];
        $("#"+prop).val(val);
    }; 
};