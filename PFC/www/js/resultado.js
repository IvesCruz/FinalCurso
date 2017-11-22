console.log("Entrou coroi");

window.onload = function(){
	console.log("Entrou na função onload");
	valor1 = localStorage.getItem("totalDiaria");
	console.log(valor1);
	valor1.toString();

 	document.getElementById('1').innerHTML = valor1;
	document.getElementById('2').innerHTML = localStorage.getItem("totalDiariaParcial");
	document.getElementById('3').innerHTML = localStorage.getItem("seguranca");
	document.getElementById('4').innerHTML = localStorage.getItem("totalFinal");
	
}