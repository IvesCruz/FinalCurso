window.onload = function(){
    data = new Date();
    mes = data.getMonth();
    dia = data.getDate();
    ano = data.getFullYear();
    var str_data = dia + '/' + (mes+1) + '/' + ano;
    document.getElementById("DataAtual").value = str_data
}
/**
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
**/
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
    
function pegaParametros(){
    comprimento = $("[name='tx_comprimento']").val();
    largura = $("[name='tx_largura']").val();
    altura = $("[name='tx_altura']").val();
    tempInterna = $("[name='tx_TempInterna']").val();
    conduTermi = $("[name='tx_ConduTermi']").val();
    espessuraIsolamento = $("[name='tx_EspessuraIsolamento']").val();
    tempExterna = $("[name='tx_TempExterna']").val();
    frequencia = $("[name='tx_Frequencia']").val();

}

function armazenaDados(){
    localStorage.setItem("tempInterna",tempInterna);
    localStorage.setItem("totalPrimeira",totalPrimeira);
    localStorage.setItem("infiltracao",infiltracao);
    localStorage.setItem("cargaTermicaDiaria",cargaTermicaDiaria);
    localStorage.setItem("largura",largura);
    localStorage.setItem("comprimento",comprimento);
}

function calcular(){
    //Primeira Página
    //var comprimento = document.getElementById("Comprimento").value 
    //var largura = document.getElementById("Largura").value

    /*
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
    */

    pegaParametros();

    //Pegando o valor do select tipo de isolamento.
    var valorIsolamento = document.getElementById('mySelect').value;
    var trocasDeAr = 0;
    var calorNecessario = 0;
    volume = (comprimento * largura) * altura;

    area = comprimento * largura;

    $('#areaDoPiso').val(area);
    $('#volume').val(volume);

    diferencialTemperatura = tempExterna - tempInterna;
    
    //Aproximando de acordo com a tabela.
    if (diferencialTemperatura >= 1 && diferencialTemperatura < 5){
        diferencialTemperatura = 1;
    }else if (diferencialTemperatura >= 5 && diferencialTemperatura < 13){
        diferencialTemperatura = 10;
    }else if (diferencialTemperatura >=13 && diferencialTemperatura < 18){
        diferencialTemperatura = 15;
    }else if (diferencialTemperatura >=17 && diferencialTemperatura < 22){
        diferencialTemperatura = 20;
    }else if (diferencialTemperatura == 22 || diferencialTemperatura == 23){
        diferencialTemperatura = 23;
    }else if (diferencialTemperatura >= 24 && diferencialTemperatura < 27){
        diferencialTemperatura = 25;
    }else if (diferencialTemperatura == 27 || diferencialTemperatura == 28){
        diferencialTemperatura = 28;
    }else if (diferencialTemperatura >= 29 && diferencialTemperatura < 32){
        diferencialTemperatura = 30;
    }else if (diferencialTemperatura == 32 || diferencialTemperatura == 33){
        diferencialTemperatura = 33;
    }else if (diferencialTemperatura >=34 && diferencialTemperatura < 37){
        diferencialTemperatura = 35;
    }else if (diferencialTemperatura ==37 || diferencialTemperatura == 38){
        diferencialTemperatura = 38;
    }else if (diferencialTemperatura >= 39 && diferencialTemperatura < 42){
        diferencialTemperatura = 40;
    }else if (diferencialTemperatura == 42 && diferencialTemperatura == 43){
        diferencialTemperatura = 43;
    }else if (diferencialTemperatura >= 44 && diferencialTemperatura < 47){
        diferencialTemperatura = 45;
    }else if (diferencialTemperatura == 47 || diferencialTemperatura == 48){
        diferencialTemperatura = 48;
    }else if (diferencialTemperatura >= 49 && diferencialTemperatura < 52){
        diferencialTemperatura = 50;
    }else if (diferencialTemperatura ==52 || diferencialTemperatura < 53){
        diferencialTemperatura = 53;
    }else if (diferencialTemperatura >=54 && diferencialTemperatura < 57){
        diferencialTemperatura = 55;
    }else if (diferencialTemperatura == 57 || diferencialTemperatura == 58){
        diferencialTemperatura = 58;
    }else if (diferencialTemperatura >= 59 && diferencialTemperatura < 62){
        diferencialTemperatura = 60;
    }else if (diferencialTemperatura == 62 || diferencialTemperatura == 63){
        diferencialTemperatura = 63;
    }else if (diferencialTemperatura >= 64 && diferencialTemperatura < 67){
        diferencialTemperatura = 65;
    }else if (diferencialTemperatura >=67 && diferencialTemperatura < 70){
        diferencialTemperatura = 68;
    }else if (diferencialTemperatura >=70){
        diferencialTemperatura = 70;
    }
    
    //Aproximando a espessura de isolamento
    if(valorIsolamento == 1){
        if (espessuraIsolamento > 0 && espessuraIsolamento <= 62){
            espessuraIsolamento = 50;
        }else if(espessuraIsolamento > 62 && espessuraIsolamento <= 87){
            espessuraIsolamento = 75;
        }else if(espessuraIsolamento > 87 && espessuraIsolamento <= 124){
            espessuraIsolamento = 100;
        }else if(espessuraIsolamento > 124 && espessuraIsolamento <= 174){
            espessuraIsolamento = 150;
        }else if(espessuraIsolamento > 174){
            espessuraIsolamento = 200;
        }
    }else if (valorIsolamento == 2){
        if (espessuraIsolamento > 0 && espessuraIsolamento <= 62){
            espessuraIsolamento = 50;
        }else if(espessuraIsolamento > 62 && espessuraIsolamento <= 87){
            espessuraIsolamento = 75;
        }else if(espessuraIsolamento > 87){
            espessuraIsolamento = 100;
        }
    }


    diferencialTemperatura = diferencialTemperatura.toString();
    valorIsolamento = valorIsolamento.toString();
    espessuraIsolamento = espessuraIsolamento.toString();
    
    //Primeira soma.
    var fator = fatorTabela[diferencialTemperatura][valorIsolamento][espessuraIsolamento];
    
    var piso = largura * comprimento * fator;
    console.log(piso);
    
    var parede1 = largura * altura * fator * 2;
    console.log(parede1);
    
    var parede2 = comprimento * altura * fator * 2;
    console.log(parede2);
    
    var teto = largura * comprimento * fator;
    console.log(teto);
    
    totalPrimeira = piso+parede1+parede2+teto;
    console.log(totalPrimeira);
    
    //Segunda soma.
    
    //FATOR TABELA 2B
    if (volume > 0 && volume < 7 ){
        trocasDeAr = 36;
    }else if (volume >= 7 && volume < 9 ){
        trocasDeAr = 30;
    }else if (volume > 8 && volume <= 12){
        trocasDeAr = 24;
    }else if (volume > 12 && volume <= 17){
        trocasDeAr = 20;
    }else if (volume > 17 && volume <= 22){
        trocasDeAr = 17;
    }else if (volume > 22 && volume <= 27){
        trocasDeAr = 15;
    }else if (volume > 27 && volume <= 34){
        trocasDeAr = 13;
    }else if (volume > 34 && volume <= 44){
        trocasDeAr = 11;
    }else if (volume > 44 && volume <= 54){
        trocasDeAr = 10;
    }else if (volume > 54 && volume <= 70){
        trocasDeAr = 9;
    }else if (volume > 70 && volume <= 90){
        trocasDeAr = 8;
    }else if (volume > 90 && volume <= 112){
        trocasDeAr = 7;
    }else if (volume > 112 && volume <= 135){
        trocasDeAr = 6;
    }else if (volume > 135 && volume <= 175){
        trocasDeAr = 5.5;
    }else if (volume > 175 && volume <= 249){
        trocasDeAr = 4.5;
    }else if (volume > 249 && volume <= 349){
        trocasDeAr = 3.7;
    }else if (volume > 349 && volume <= 449){
        trocasDeAr = 3.2;
    }else if (volume > 449 && volume <= 549){
        trocasDeAr = 2.8;
    }else if (volume > 549 && volume <= 849){
        trocasDeAr = 2.3;
    }else if (volume > 849 && volume <= 1099){
        trocasDeAr = 1.9;
    }else if (volume > 1099 && volume <= 1349){
        trocasDeAr = 1.7;
    }else if (volume > 1349 && volume <= 1749){
        trocasDeAr = 1.5;
    }else if (volume > 1749 && volume <= 2499){
        trocasDeAr = 1.3;
    }else if (volume > 2499 && volume <= 4449){
        trocasDeAr = 1.1;
    }else if (volume > 4499 && volume <= 7499){
        trocasDeAr = 1;
    }else if (volume > 7499){
        trocasDeAr = 0.8;
    }

    
    //FATOR TABELA 3
    if (tempExterna <= 17){
        if (tempInterna >= 7 ){
            calorNecessario = 1.8;
        }else if (tempInterna < 7 && tempInterna > 2){
            calorNecessario = 4.3;
        }else if (tempInterna <= 2 && tempInterna > -3 ){
            calorNecessario = 7;
        }else if (tempInterna <= -3 && tempInterna > -8 ){
            calorNecessario = 9.7;
        }else if (tempInterna <= -8 && tempInterna > -13 ){
            calorNecessario = 12;
        }else if (tempInterna <= -13 && tempInterna > -18 ){
            calorNecessario = 14.4;
        }else if (tempInterna <= -18 && tempInterna > -23 ){
            calorNecessario = 16.6;
        }else if (tempInterna <= -23 && tempInterna > -28 ){
            calorNecessario = 18.8;
        }else if (tempInterna <= -28 && tempInterna > -33 ){
            calorNecessario = 21.1;
        }else if (tempInterna <= -33 && tempInterna > -38 ){
            calorNecessario = 23.5;
        }else if (tempInterna <= -38){
            calorNecessario = 25.8;
        }
    }else if(tempExterna > 17 && tempExterna < 23){
        if (tempInterna >= 7){
            calorNecessario = 5.1;
        }else if (tempInterna < 7 && tempInterna > 2){
            calorNecessario = 7.7;
        }else if (tempInterna <= 2 && tempInterna > -3 ){
            calorNecessario = 10.5;
        }else if (tempInterna <= -3 && tempInterna > -8 ){
            calorNecessario = 13.2;
        }else if (tempInterna <= -8 && tempInterna > -13 ){
            calorNecessario = 15.5;
        }else if (tempInterna <= -13 && tempInterna > -18 ){
            calorNecessario = 18.1;
        }else if (tempInterna <= -18 && tempInterna > -23 ){
            calorNecessario = 20.4;
        }else if (tempInterna <= -23 && tempInterna > -28 ){
            calorNecessario = 22.6;
        }else if (tempInterna <= -28 && tempInterna > -33 ){
            calorNecessario = 25;
        }else if (tempInterna <= -33 && tempInterna > -38 ){
            calorNecessario = 27.4;
        }else if (tempInterna <= -38){
            calorNecessario = 29.8;
        }
    }else if(tempExterna >= 23 && tempExterna < 28){
        if (tempInterna >= 7){
            calorNecessario = 8.9;
        }else if (tempInterna < 7 && tempInterna > 2){
            calorNecessario = 11.7;
        }else if (tempInterna <= 2 && tempInterna > -3 ){
            calorNecessario = 14.5;
        }else if (tempInterna <= -3 && tempInterna > -8 ){
            calorNecessario = 17.3;
        }else if (tempInterna <= -8 && tempInterna > -13 ){
            calorNecessario = 19.7;
        }else if (tempInterna <= -13 && tempInterna > -18 ){
            calorNecessario = 22.3;
        }else if (tempInterna <= -18 && tempInterna > -23 ){
            calorNecessario = 24.7;
        }else if (tempInterna <= -23 && tempInterna > -28 ){
            calorNecessario = 27;
        }else if (tempInterna <= -28 && tempInterna > -33 ){
            calorNecessario = 29.5;
        }else if (tempInterna <= -33 && tempInterna > -38 ){
            calorNecessario = 32;
        }else if (tempInterna <= -38){
            calorNecessario = 34.5;
        }
    }else if(tempExterna >= 28 && tempExterna < 33){
        if (tempInterna >= 7){
            calorNecessario = 13.6;
        }else if (tempInterna < 7 && tempInterna > 2){
            calorNecessario = 16.5;
        }else if (tempInterna <= 2 && tempInterna > -3 ){
            calorNecessario = 19.4;
        }else if (tempInterna <= -3 && tempInterna > -8 ){
            calorNecessario = 22.3;
        }else if (tempInterna <= -8 && tempInterna > -13 ){
            calorNecessario = 24.8;
        }else if (tempInterna <= -13 && tempInterna > -18 ){
            calorNecessario = 27.5;
        }else if (tempInterna <= -18 && tempInterna > -23 ){
            calorNecessario = 30;
        }else if (tempInterna <= -23 && tempInterna > -28 ){
            calorNecessario = 32.4;
        }else if (tempInterna <= -28 && tempInterna > -33 ){
            calorNecessario = 35;
        }else if (tempInterna <= -33 && tempInterna > -38 ){
            calorNecessario = 37.7;
        }else if (tempInterna <= -38){
            calorNecessario = 40.3;
        }
    }else if(tempExterna >= 33 && tempExterna <= 40){
        if (tempInterna >= 7){
            calorNecessario = 26;
        }else if (tempInterna < 7 && tempInterna > 2){
            calorNecessario = 29.2;
        }else if (tempInterna <= 2 && tempInterna > -3 ){
            calorNecessario = 32.3;
        }else if (tempInterna <= -3 && tempInterna > -8 ){
            calorNecessario = 35.5;
        }else if (tempInterna <= -8 && tempInterna > -13 ){
            calorNecessario = 38.2;
        }else if (tempInterna <= -13 && tempInterna > -18 ){
            calorNecessario = 41.2;
        }else if (tempInterna <= -18 && tempInterna > -23 ){
            calorNecessario = 43.9;
        }else if (tempInterna <= -23 && tempInterna > -28 ){
            calorNecessario = 46.7;
        }else if (tempInterna <= -28 && tempInterna > -33 ){
            calorNecessario = 49.5;
        }else if (tempInterna <= -33 && tempInterna > -38 ){
            calorNecessario = 52.5;
        }else if (tempInterna <= -38){
            calorNecessario = 55.4;
        }
    }

    infiltracao = largura * comprimento * altura * trocasDeAr * calorNecessario;
    
    console.log(infiltracao);
    console.log(totalPrimeira);

    cargaTermicaDiaria = totalPrimeira + infiltracao;

    console.log(cargaTermicaDiaria);

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

    armazenaDados();

}
