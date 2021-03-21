var letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

var numero = prompt("Introduce tu número de DNI (sin la letra)");
var letrauser = prompt("Introduce la letra de tu DNI en mayúsculas");
letra = letra.toUpperCase();

if (numero < 0 || numero > 99999999) {
  alert("El número indicado no es válido.");
} else {
  var comprobar = letras[numero % 23];
  if (comprobar != letrauser) {
    alert("La letra indicada es incorrecta.");
  } else {
    alert("El número indicado de su DNI y letra son correctos");
  }
}
