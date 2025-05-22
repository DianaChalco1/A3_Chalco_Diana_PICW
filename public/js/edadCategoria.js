//window.prompt("texto");
//prompt("texto");

var edad = prompt("Ingrese su edad");

if (isNaN(edad)) {
  console.log("Por favor, ingresar un número válido.");
} else {
  if (edad < 0) { // Menor de 0: "Edad no válida"
    console.log("Edad no válida");
  } else if (edad >= 0 && edad <= 12) { //0 a 12 años: "Niño"
    console.log("Niño");
  } else if (edad >= 13 && edad <= 17) { //13 a 17 años: "Adolescente"
    console.log("Adolescente");
  } else if (edad >= 18 && edad <=59) { //18 a 59 años: "Adulto"
    console.log("Adulto");
  } else if (edad >= 60 && edad <= 99) { //60 años o más: "Adulto mayor"
    console.log("Adulto mayor");
  } else {
    console.log("Adulto mayor");
  }
}

