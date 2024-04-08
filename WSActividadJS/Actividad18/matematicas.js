function sumar(a,b){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado =num1 + num2;
    document.getElementById("resultado").value = resultado;
  }
  function restar(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 - num2;
    document.getElementById("resultado").value = resultado;
  }
  function multiplicar(a,b){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 * num2;
    document.getElementById("resultado").value = resultado;
  }
  function dividir(a,b){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    if (num2 === 0) {
        alert("No se puede dividir por cero");
        return;
    }
    var resultado = num1 / num2;
    document.getElementById("resultado").value = resultado;
  }
  
  
  