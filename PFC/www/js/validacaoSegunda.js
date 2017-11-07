function validacao(){
////////////////////////////SEGUNDA PAGE///////////////////////////////////////////////
	//Massa Total de Produto Armazenado
	if (document.dados.tx_MassaTotalArma.value == ""){
		alert("Preencha o campo MASSA TOTAL DE PRODUTO ARMAZENADO.")
		document.dados.tx_MassaTotalArma.focus();
		return false;
	}else if(isNaN(dados.tx_MassaTotalArma.value)){
		alert("Preencha o campo MASSA TOTAL DE PRODUTO ARMAZENADO apenas com NÚMEROS.")
		document.dados.tx_MassaTotalArma.focus();
		return false;
	}

	//Massa de Produto em Movimento
	if (document.dados.tx_MassaProdMov.value == ""){
		alert("Preencha o campo MASSA DE PRODUTO EM MOVIMENTO.")
		document.dados.tx_MassaProdMov.focus();
		return false;
	}else if(isNaN(dados.tx_MassaProdMov.value)){
		alert("Preencha o campo MASSA DE PRODUTO EM MOVIMENTO apenas com NÚMEROS.")
		document.dados.tx_MassaProdMov.focus();
		return false;
	}

	//Tempo de Resfriamento e/ou Congelamento do Produto
	if (document.dados.tx_TempResfCongProd.value == ""){
		alert("Preencha o campo TEMPO DE RESFRIAMENTO E/OU CONGELAMENTO DO PRODUTO.")
		document.dados.tx_TempResfCongProd.focus();
		return false;
	}else if(isNaN(dados.tx_TempResfCongProd.value)){
		alert("Preencha o campo TEMPO DE RESFRIAMENTO E/OU CONGELAMENTO DO PRODUTO apenas com NÚMEROS.")
		document.dados.tx_TempResfCongProd.focus();
		return false;
	}

	//Temperatura de Entrada do Produto
	if (document.dados.tx_TempEntrada.value == ""){
		alert("Preencha o campo TEMPERATURA DE ENTRADA DO PRODUTO.")
		document.dados.tx_TempEntrada.focus();
		return false;
	}else if(isNaN(dados.tx_TempEntrada.value)){
		alert("Preencha o campo TEMPERATURA DE ENTRADA DO PRODUTO apenas com NÚMEROS.")
		document.dados.tx_TempEntrada.focus();
		return false;
	}
}