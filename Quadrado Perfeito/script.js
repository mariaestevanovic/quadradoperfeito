function isQuadradoPerfeito(numero) {
    var raizQuadrada = Math.sqrt(numero);
    return raizQuadrada === Math.floor(raizQuadrada);
  }
  
  function verificarQuadradoPerfeito() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");
  
    if (isQuadradoPerfeito(numero)) {
      resultado.textContent = numero + " é um quadrado perfeito.";
    } else {
      resultado.textContent = numero + " não é um quadrado perfeito.";
    }
  }
  