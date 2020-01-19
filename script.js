
console.log('Hola Mundo');


window.alert("Me llamo Flor!");


$nombre = 'Flor';
$apellido = 'Lopez'; 
console.log($nombre+' '+$apellido);


$numero1 = 22;
$numero2 = 76;
$suma = $numero1+$numero2;
console.log('La suma entre '+$numero1+' y '+$numero2+' es: '+$suma);


$nota_examen = 3;

if ($nota_examen >= 4) {
	window.alert('Has aprobado el examen con un '+$nota_examen);
} else {
	window.alert('Lamentablemente has suspendido el examen con un '+$nota_examen);
}


$frase = "Tinc un cotxe de color blau";
console.log($frase);
$frase = $frase.replace("blau","verd");
console.log($frase);
$frase = $frase.replace(/o/gi,'u').replace("verd","blau"); // la I del GI responde a que sea "case insensitive"
console.log($frase);


$objetos = ['taula', 'cadira', 'ordinador', 'libreta'];

for (i = 0; i < $objetos.length; i++) { 
  console.log('El objeto '+$objetos[i]+' está en la posición '+i);
}
/*$objetos.forEach(elemento => {
  console.log('El objeto '+elemento+' está en la posición ');
});*/


function calculadora(operacion, valor1, valor2) {
  if (operacion == 'suma') {
		$resultado = valor1 + valor2;
	  	return($resultado);
	}
  else if (operacion == 'resta') {
		$resultado = valor1 - valor2;
	  	return($resultado);
	}
  else if (operacion == 'multiplicacion') {
		$resultado = valor1 * valor2;
	  	return($resultado);
	}
  else if (operacion == 'division') {
		$resultado = valor1 / valor2;
	  	return($resultado);
	}
  else {
		return('no es un operador válido');
	}
}

var resultado = calculadora('division',40,20);
console.log(resultado);
