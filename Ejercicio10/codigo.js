function palindromo() {
  var cadena = prompt("Indique una cadena de texto:");
  var cadenaAlReves = "";

  for (i = 1; i < cadena.length + 1; i++) {
    cadenaAlReves += cadena[cadena.length - i];
  }

  cadenaFormateada = cadena.toLowerCase().split(" ").join("");
  cadenaAlRevesFormateada = cadenaAlReves.toLowerCase().split(" ").join("");

  if (cadenaFormateada == cadenaAlRevesFormateada) {
    var resultado = cadena;
    resultado = "Es un palíndromo";
  } else {
    resultado = "No es un palíndromo";
  }
  return resultado;
}
alert(palindromo());
