// function saludo1(){
//     console.log("Hola fulano");
// }

// saludo2 = function(){
//     console.log("Hola Sutano");
// }

// saludo3 = () => {
//     console.log("Hola mnegano")
// }

// let mi_array = [1, 2, 3, 4, 5];
// mi_array.forEach(numerito => {
//     console.log(numerito)
// })

function saludo() {
  console.log("Hola fulano");
}

saludo2 = function () {
  console.log("Hola sutano");
};

saludo3 = (nombre) => {
  console.log("Hola " + nombre);
  let direccion = "calle falsa 123";
  return direccion;
};

let mi_array = ["miguel", "cristian", "juan", "sara", "julieta"];
var mi_array_2 = [
  { nombre: "miguel", rh: "A+", apellido: "perez" },
  { nombre: "juan", rh: "O+", apellido: "mendez" },
  { nombre: "sara", rh: "A+", apellido: "diaz" },
];

console.log(saludo3());
//Forma antigua
mi_array_2.forEach(function (numerito, pos) {
  console.warn(numerito.nombre);
  console.log(pos);
});

//Forma nueva
mi_array.forEach((numerito, pos) => {
  console.warn(numerito);
  console.log(pos);
});
