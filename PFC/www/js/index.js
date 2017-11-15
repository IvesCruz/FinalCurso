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

/*
    var x = [
                1 = {
                    1:[{50:14},{75:9.5},{100:7.2},{150:4.8},{200:3.6}],
                    2:[{50:9.5},{75:6.4},{100:4.8}]
                }
            ];
            Diferencial de temperatura > Tipo de isolamento > Espessura
*/
    var fatorTabela = {
        1:{1:{50:14,75:9.5,100:7.2,150:4.8,200:3.6},2:{50:9.5,75:6.4,100:4.8}},
        10:{1:{50:143,75:95,100:72,150:48,200:36},2:{50:95,75:64,100:48}},
        15:{1:{50:215,75:143,100:107,150:72,200:54},2:{50:143,75:95,100:72}},
        20:{1:{50:286,75:191,100:143,150:95,200:72},2:{50:191,75:127,100:95}},
        23:{1:{50:329,75:220,100:165,150:110,200:82},2:{50:220,75:146,100:110}},
        25:{1:{50:358,75:239,100:179,150:119,200:89},2:{50:239,75:159,100:119}},
        28:{1:{50:401,75:267,100:200,150:134,200:100},2:{50:267,75:178,100:134}},
        30:{1:{50:429,75:286,100:215,150:143,200:107},2:{50:286,75:191,100:143}},
        33:{1:{50:472,75:315,100:236,150:157,200:118},2:{50:315,75:210,100:157}},
        35:{1:{50:501,75:334,100:251,150:167,200:125},2:{50:334,75:223,100:167}},
        38:{1:{50:544,75:363,100:272,150:181,200:136},2:{50:363,75:242,100:181}},
        40:{1:{50:573,75:382,100:286,150:191,200:143},2:{50:382,75:255,100:191}},
        43:{1:{50:616,75:410,100:308,150:205,200:154},2:{50:410,75:274,100:205}},
        45:{1:{50:644,75:429,100:322,150:215,200:161},2:{50:429,75:286,100:215}},
        48:{1:{50:687,75:429,100:344,150:229,200:172},2:{50:458,75:305,100:229}},
        50:{1:{50:716,75:477,100:358,150:239,200:179},2:{50:477,75:318,100:239}},
        53:{1:{50:759,75:506,100:379,150:253,200:190},2:{50:506,75:337,100:253}},
        55:{1:{50:787,75:525,100:394,150:262,200:197},2:{50:525,75:350,100:262}},
        58:{1:{50:830,75:554,100:415,150:277,200:208},2:{50:554,75:369,100:277}},
        60:{1:{50:859,75:573,100:429,150:286,200:215},2:{50:573,75:382,100:286}},
        63:{1:{50:902,75:600,100:451,150:300,200:225},2:{50:600,75:401,100:300}},
        65:{1:{50:931,75:620,100:465,150:310,200:233},2:{50:620,75:414,100:310}},
        68:{1:{50:974,75:650,100:487,150:325,200:243},2:{50:650,75:433,100:325}},
        70:{1:{50:1000,75:668,100:500,150:335,200:250},2:{50:668,75:445,100:335}},
    }
    //console.log(fatorTabela["1"]["2"]["75"]);

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

    //Pegando o valor do select tipo de isolamento.
    var valorIsolamento = document.getElementById('mySelect').value;
    
    



    volume = (comprimento * largura) * altura;
    area = comprimento * largura;
    //var fatorTabela1 = altura * largura
    
    diferencialTemperatura = tempExterna - tempInterna;
    
    //Aproximando de acordo com a tabela.
    if (diferencialTemperatura >= 1 && diferencialTemperatura < 10){
        diferencialTemperatura = 1;
    }else if (diferencialTemperatura >=10 && diferencialTemperatura < 15){
        diferencialTemperatura = 10;
    }else if (diferencialTemperatura >=15 && diferencialTemperatura < 20){
        diferencialTemperatura = 15;
    }else if (diferencialTemperatura >=20 && diferencialTemperatura < 23){
        diferencialTemperatura = 20;
    }else if (diferencialTemperatura >=23 && diferencialTemperatura < 25){
        diferencialTemperatura = 23;
    }else if (diferencialTemperatura >=25 && diferencialTemperatura < 28){
        diferencialTemperatura = 25;
    }else if (diferencialTemperatura >=28 && diferencialTemperatura < 30){
        diferencialTemperatura = 28;
    }else if (diferencialTemperatura >=30 && diferencialTemperatura < 33){
        diferencialTemperatura = 30;
    }else if (diferencialTemperatura >=33 && diferencialTemperatura < 35){
        diferencialTemperatura = 33;
    }else if (diferencialTemperatura >=35 && diferencialTemperatura < 38){
        diferencialTemperatura = 35;
    }else if (diferencialTemperatura >=38 && diferencialTemperatura < 40){
        diferencialTemperatura = 38;
    }else if (diferencialTemperatura >=40 && diferencialTemperatura < 43){
        diferencialTemperatura = 40;
    }else if (diferencialTemperatura >=43 && diferencialTemperatura < 45){
        diferencialTemperatura = 43;
    }else if (diferencialTemperatura >=45 && diferencialTemperatura < 48){
        diferencialTemperatura = 45;
    }else if (diferencialTemperatura >=48 && diferencialTemperatura < 50){
        diferencialTemperatura = 48;
    }else if (diferencialTemperatura >=50 && diferencialTemperatura < 53){
        diferencialTemperatura = 50;
    }else if (diferencialTemperatura >=53 && diferencialTemperatura < 55){
        diferencialTemperatura = 53;
    }else if (diferencialTemperatura >=55 && diferencialTemperatura < 58){
        diferencialTemperatura = 55;
    }else if (diferencialTemperatura >=58 && diferencialTemperatura < 60){
        diferencialTemperatura = 58;
    }else if (diferencialTemperatura >=60 && diferencialTemperatura < 63){
        diferencialTemperatura = 60;
    }else if (diferencialTemperatura >=63 && diferencialTemperatura < 65){
        diferencialTemperatura = 63;
    }else if (diferencialTemperatura >=65 && diferencialTemperatura < 68){
        diferencialTemperatura = 65;
    }else if (diferencialTemperatura >=68 && diferencialTemperatura < 70){
        diferencialTemperatura = 68;
    }else if (diferencialTemperatura >=70){
        diferencialTemperatura = 70;
    }
    
    //Aproximando a espessura de isolamento
    if(valorIsolamento == 1){
        if (espessuraIsolamento > 0 && espessuraIsolamento <= 50){
            espessuraIsolamento = 50;
        }else if(espessuraIsolamento > 50 && espessuraIsolamento <= 75){
            espessuraIsolamento = 75;
        }else if(espessuraIsolamento > 75 && espessuraIsolamento <= 100){
            espessuraIsolamento = 100;
        }else if(espessuraIsolamento > 100 && espessuraIsolamento <= 150){
            espessuraIsolamento = 150;
        }else if(espessuraIsolamento > 150){
            espessuraIsolamento = 200;
        }
    }else if (valorIsolamento == 2){
        if (espessuraIsolamento > 0 && espessuraIsolamento <= 50){
            espessuraIsolamento = 50;
        }else if(espessuraIsolamento > 50 && espessuraIsolamento <= 75){
            espessuraIsolamento = 75;
        }else if(espessuraIsolamento > 75){
            espessuraIsolamento = 100;
        }
    }


    diferencialTemperatura = diferencialTemperatura.toString();
    valorIsolamento = valorIsolamento.toString();
    espessuraIsolamento = espessuraIsolamento.toString();
    
    var fator = fatorTabela[diferencialTemperatura][valorIsolamento][espessuraIsolamento];
    
    var piso = largura * comprimento * fator;
    console.log(piso);
    
    var parede1 = largura * altura * fator * 2;
    console.log(parede1);
    
    var parede2 = comprimento * altura * fator * 2;
    console.log(parede2);
    
    var teto = largura * comprimento * fator;
    console.log(teto);
    
    var totalPrimeira = piso+parede1+parede2+teto;
    console.log(totalPrimeira);
    

    $('.mySelect option:selected').text()
    valorSelect = $('#mySelect').val()

    if(diferencialTemperatura >= 1 && diferencialTemperatura < 10){
        if(valorSelect == 1 && espessuraIsolamento == 50){
            var result = 14;
            fatorTabela1 = fatorTabela1 * result
            console.log(fatorTabela1)
        }
    }

    //fatorTabela1 = altura * largura * 

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