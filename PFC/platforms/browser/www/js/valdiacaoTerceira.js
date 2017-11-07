function validacao(){
////////////////////////////////TERCEIRA PÁGINA/////////////////////////////////
	//Numero de Pessoas 
	if (document.dados.tx_NumPessoas.value == ""){
		alert("Preencha o campo NÚMERO DE PESSOAS.")
		document.dados.tx_NumPessoas.focus();
		return false;
	}else if(isNaN(dados.tx_NumPessoas.value)){
		alert("Preencha o campo NÚMERO DE PESSOAS apenas com NÚMEROS.")
		document.dados.tx_NumPessoas.focus();
		return false;
	}

	//Tempo de Permanência das Pessoas
	if (document.dados.tx_TempPermPessoas.value == ""){
		alert("Preencha o campo TEMPO DE PERMANÊNCIA DAS PESSOAS.")
		document.dados.tx_TempPermPessoas.focus();
		return false;
	}else if(isNaN(dados.tx_TempPermPessoas.value)){
		alert("Preencha o campo TEMPO DE PERMANÊNCIA DAS PESSOAS apenas com NÚMEROS.")
		document.dados.tx_TempPermPessoas.focus();
		return false;
	}

	//Potência de Iluminação
	if (document.dados.tx_PotIlumina.value == ""){
		alert("Preencha o campo POTÊNCIA DE ILUMINAÇÃO DAS PESSOAS.")
		document.dados.tx_PotIlumina.focus();
		return false;
	}else if(isNaN(dados.tx_PotIlumina.value)){
		alert("Preencha o campo POTÊNCIA DE ILUMINAÇÃO apenas com NÚMEROS.")
		document.dados.tx_PotIlumina.focus();
		return false;
	}

	//Tempo de Iluminação
	if (document.dados.tx_TempIlumina.value == ""){
		alert("Preencha o campo TEMPO DE ILUMINAÇÃO.")
		document.dados.tx_TempIlumina.focus();
		return false;
	}else if(isNaN(dados.tx_TempIlumina.value)){
		alert("Preencha o campo TEMPO DE ILUMINAÇÃO apenas com NÚMEROS.")
		document.dados.tx_TempIlumina.focus();
		return false;
	}

	//Potência de Motores(exceto dos evaporadores)
	if (document.dados.tx_PotMotores.value == ""){
		alert("Preencha o campo POTÊNCIA DE MOTORES.")
		document.dados.tx_PotMotores.focus();
		return false;
	}else if(isNaN(dados.tx_PotMotores.value)){
		alert("Preencha o campo POTÊNCIA DE MOTORES apenas com NÚMEROS.")
		document.dados.tx_PotMotores.focus();
		return false;
	}

	//Tempo de Operação dos Motores
	if (document.dados.tx_TempOpeMotores.value == ""){
		alert("Preencha o campo TEMPO DE OPERAÇÃO DOS MOTOROES.")
		document.dados.tx_TempOpeMotores.focus();
		return false;
	}else if(isNaN(dados.tx_TempOpeMotores.value)){
		alert("Preencha o campo TEMPO DE OPERAÇÃO DOS MOTOROES apenas com NÚMEROS.")
		document.dados.tx_TempOpeMotores.focus();
		return false;
	}

	//Fator de Segurança
	if (document.dados.tx_FatSeguranca.value == ""){
		alert("Preencha o campo FATOR DE SEGURANÇA.")
		document.dados.tx_FatSeguranca.focus();
		return false;
	}else if(isNaN(dados.tx_FatSeguranca.value)){
		alert("Preencha o campo FATOR DE SEGURANÇA apenas com NÚMEROS.")
		document.dados.tx_FatSeguranca.focus();
		return false;
	}

	//Tempo de Operação do Compressor
	if (document.dados.tx_TempOpeCompre.value == ""){
		alert("Preencha o campo TEMPO DE OPERAÇÃO DOS COMPRESSOR.")
		document.dados.tx_TempOpeCompre.focus();
		return false;
	}else if(isNaN(dados.tx_TempOpeCompre.value)){
		alert("Preencha o campo TEMPO DE OPERAÇÃO DOS COMPRESSOR apenas com NÚMEROS.")
		document.dados.tx_TempOpeCompre.focus();
		return false;
	}
}