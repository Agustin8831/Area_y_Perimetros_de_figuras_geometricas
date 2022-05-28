let $nombreFig = document.querySelectorAll(".text-fig");   
let $body = document.querySelector("body");
let $input_cont = document.getElementById("input-cont");
let $total = document.getElementById("total");
let $unidad = document.getElementById("unidad");
let $resultadoFigura = document.getElementById("resul-fig");
let $resultado = document.querySelector(".resultado");
let resp;

function seleccionCuadrado() {
  $nombreFig[0].innerHTML = `Cuadrado`;
  $nombreFig[1].innerHTML = `Cuadrado`;
  $body.style.setProperty("top","-100vh")
  $input_cont.innerHTML = 
  `
    <label class="ingresar" for="input">Ingrese la medida de un lado: </label>
    <input id="input-1" type="number">
  `;
  resp = 1;
}
function seleccionRectangulo() {
  $nombreFig[0].innerHTML = `Rectangulo`;
  $nombreFig[1].innerHTML = `Rectangulo`;
  $body.style.setProperty("top","-100vh")
  $input_cont.innerHTML = 
  `
    <label class="ingresar" for="input-1">Ingrese la medida del primer lado: </label>
    <input id="input-1" type="number">
    <label class="ingresar" for="input-2">Ingrese la medida del segundo lado: </label>
    <input id="input-2" type="number">
  `;
  resp = 2;
}
function seleccionTriangulo() {
  $nombreFig[0].innerHTML = `Triangulo`;
  $nombreFig[1].innerHTML = `Triangulo`;
  $body.style.setProperty("top","-100vh")
  $input_cont.innerHTML = 
  `
    <label class="ingresar" for="input-1">Ingrese la medida de la base: </label>
    <input id="input-1" type="number">
    <label class="ingresar" for="input-2">Ingrese la medida de la altura: </label>
    <input id="input-2" type="number">
  `;
  resp = 3;
}
function seleccionCirculo() {
  $nombreFig[0].innerHTML = `Circulo`;
  $nombreFig[1].innerHTML = `Circulo`;
  $body.style.setProperty("top","-100vh")
  $input_cont.innerHTML = 
  `
    <label class="ingresar" for="input-1">Ingrese la medida del radio: </label>
    <input id="input-1" type="number">
  `;
  resp = 4;
}    
function regresar() {
  $body.style.setProperty("top","0");
  $resultado.style.setProperty("display","none");
}

// --- Operaciones De las figuras
function areaCuadrado(lado) {
  return lado * lado;      
}
function perimetroCuadrado(lado) {
  return lado * 4;      
}

function areaRectangulo(base,altura) {
  return base * altura;      
}
function perimetroRectangulo(lado_1,lado_2) {
  return (lado_1 * 2) + (lado_2 * 2);      
}

function areaTriangulo(base,altura) {
  return (base * altura) / 2;      
}
function perimetroTriangulo(base,altura) {
  let hipotenusa = Math.sqrt(Math.pow(base/2,2) + Math.pow(altura,2));
  return  parseFloat((hipotenusa * 2) + base);      
}

function areaCirculo(radio) {
  return Math.PI * Math.pow(radio,2);      
}
function perimetroCirculo(radio) {
  return 2 * Math.PI * radio;      
}

// ------------------------------------
function total(total) {  
  $resultado.style.setProperty("display","block")
  $total.innerHTML = total;
}
function calcularArea(){  
  let value_1 = document.querySelector("#input-1").value;
  let value_2;
  let area = NaN;
  switch (resp) {
    case 1:
      area = areaCuadrado(value_1);                
      break;
    case 2:
      value_2 = document.querySelector("#input-2").value
      area = areaRectangulo(value_1,value_2);
      break;
      case 3:
      value_2 = document.querySelector("#input-2").value
      area = areaTriangulo(value_1,value_2);                
      break;
    case 4:
      area = areaCirculo(value_1);                
      break;
  
    default:
      break;
  }
  $resultadoFigura.innerHTML = `El Area del`;
  $unidad.innerHTML = ` cm^2`;
  total(area.toFixed(2));
}
function calcularPerimetro(){
  let value_1 = document.querySelector("#input-1").value;
  let value_2;
  let perimetro = NaN;
  switch (resp) {
    case 1:
    perimetro = perimetroCuadrado(value_1);          
      break;      
    case 2:
    value_2 = document.querySelector("#input-2").value
    perimetro = perimetroRectangulo(value_1,value_2);          
      break;      
    case 3:
    value_2 = document.querySelector("#input-2").value;
    perimetro = perimetroTriangulo(value_1,value_2);          
      break;      
    case 4:
    perimetro = perimetroCirculo(value_1);          
      break;      
    default:
      break;
  }  
  $resultadoFigura.innerHTML = `El Perimetro del`;
  $unidad.innerHTML = ` cm`;
  total(perimetro.toFixed(2));
}
