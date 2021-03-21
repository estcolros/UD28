function texto(cadena) {
  var cadenafinal = 'La cadena de texto:"' + cadena + '"';

  if (cadena == cadena.toUpperCase()) {
    cadenafinal += "La cadena esta formada solo por mayúsculas";
  } else if (cadena == cadena.toLowerCase()) {
    cadenafinal += "La cadena esta formada solo por minúsculas";
  } else {
    cadenafinal += "La cadena esta formada por mayúsculas y minúsculas";
  }
  return cadenafinal;
}

alert(texto("TJAVASCRIP"));
alert(texto("tjavascrip"));
alert(texto("Tjavascrip"));
