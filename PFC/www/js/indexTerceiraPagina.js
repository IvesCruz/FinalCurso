function pegaParametros3(){
	numeroPessoas = $("[name='tx_NumPessoas']").val();
	tempoPermanencia = $("[name='tx_TempPermPessoas']").val();
	potenciaIluminacao = $("[name='tx_PotIlumina']").val();
	tempoIluminacao = $("[name='tx_TempIlumina']").val();
	potenciaMotores = $("[name='tx_PotMotores']").val();
	tempoOperacaoMotores = $("[name='TempOpeMotores']").val();
	fatorSeguranca = $("[name='tx_FatSeguranca']").val();
	tempoOperacaoCompressor = $("[name='tx_TempOpeCompre']").val();
}

function calcular3(){
	pegaParametros3();
	var interna = localStorage.getItem("tempInterna");
	calorEquivalente = 0;

	if (interna > 7 ){
		calorEquivalente = 181;
	}else if (interna <=7 && interna > 2){
		calorEquivalente = 208;
	}else if (interna <=2 && interna > -3){
		calorEquivalente = 233
	}else if (interna <= -3 && interna > -8){
		calorEquivalente = 258;
	}else if (interna <= -8 && interna > -13){
		calorEquivalente=279;
	}else if (interna <= -13 && interna > -18){
		calorEquivalente=313;
	}else if (interna <= -18 && interna > -23){
		calorEquivalente=338;
	}else if (interna <= -23){
		calorEquivalente=358;
	}


	calorOcupacao = (numeroPessoas * calorEquivalente) * tempoPermanencia;


	//Revisar isso, o que seria fator de conversão?!?!?! (0.86)
	iluminacao = localStorage.getItem("largura") * localStorage.getItem("comprimento") * 10 * tempoIluminacao * 0.86;

	calcularTotal();
}

function calcularTotal(){
	var primeira = localStorage.getItem("totalPrimeira");
	console.log(primeira);
	var segunda = localStorage.getItem("infiltracao");
	console.log(segunda);
	var terceira = localStorage.getItem("cargaTermicaProduto");
	console.log(terceira);


	primeira = parseFloat(primeira);
	segunda = parseFloat(segunda);
	terceira = parseFloat(terceira);


	totalDiaria = primeira + segunda + terceira + calorOcupacao + iluminacao;
	totalDiariaParcial = totalDiaria/16;
	seguranca = (fatorSeguranca/100.0) * totalDiariaParcial;
	
	
	totalFinal = totalDiariaParcial + seguranca ;
	
	//Arredondar em 2 casas decimais.
	totalDiaria = totalDiaria.toFixed(2);
	totalDiariaParcial = totalDiariaParcial.toFixed(2);
	seguranca = seguranca.toFixed(2);
	totalFinal =  totalFinal.toFixed(2);

	console.log(totalDiaria);
	console.log(totalDiariaParcial);
	console.log(seguranca);
	console.log(totalFinal);


	armazenaValores(totalDiaria,totalDiariaParcial,seguranca,totalFinal);

}

function armazenaValores(totalDiaria,totalDiariaParcial,seguranca,totalFinal){
	localStorage.setItem("totalDiaria",totalDiaria);
	localStorage.setItem("totalDiariaParcial",totalDiariaParcial);
	localStorage.setItem("seguranca",seguranca);
	localStorage.setItem("totalFinal",totalFinal);
}