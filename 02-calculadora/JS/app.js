//Vamos a realizar una Calculadora.
//Solicitamos número A, número B y operación (+.-. * y /)

function RecogerNum(msj){
  let a = prompt(msj);
  while(isNaN(a)){
    a = prompt("Error: introduce un número (a): ")
  }
  return a;
}

function Sumar(num1,num2){  
  alert(`La suma es: ${Number(num1)+Number(num2)}`);
}
function Restar(num1,num2){  
  alert(`La resta es: ${Number(num1)-Number(num2)}`);
}
function Multiplicar(num1,num2){  
  alert(`La multiplicación es: ${Number(num1)*Number(num2)}`);
}
function Dividir(num1,num2){  
  alert(`La división es: ${Number(num1)/Number(num2)}`);
}

function Calculadora(){
  let a = RecogerNum("Dime numero A: ");
  let b = RecogerNum("Dime numero B: ");
  let opvalida = false;

  do{
    let opcion = prompt("Pulsa (+  -  *  /");
    switch (opcion)
    {
      case "+":
        opvalida = true;
        Sumar(a,b);
        break;
      case "-":
        opvalida = true;
        Restar(a,b);
        break;
      case "*":
        opvalida = true;
        Multiplicar(a,b);
        break;
      case "/":
        opvalida = true;
        Dividir(a,b);
        break;
      default:
        alert("ERROR");
        break;
    }
  } while (opvalida == false);
}
// Calculadora();

function SumarDOM(a,b){
  let c = Number(a) + Number(b);

  //Opción DOM
  let elem = document.getElementById("resultado");
  let resultado = "La suma es: " + c;
  
  //Opción 1
  console.log(resultado);
  
  //Opción 2
  // alert(`La suma es: ${c}`)
  
  //Opción 3
  document.write(resultado);

  //Opción 3
  // elem.innerHTML = resultado;

}

function SumarVentana(){
  let a = RecogerNum("Dime numero A: ");
  let b = RecogerNum("Dime numero B: ");
  
  Sumar(a,b);
}