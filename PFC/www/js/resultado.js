
window.onload = function(){
	valor1 = localStorage.getItem("totalDiaria");
	valor1.toString();

 	document.getElementById('1').innerHTML = valor1;
	document.getElementById('2').innerHTML = localStorage.getItem("totalDiariaParcial");
	document.getElementById('3').innerHTML = localStorage.getItem("seguranca");
	document.getElementById('4').innerHTML = localStorage.getItem("totalFinal");
	
}