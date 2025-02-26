function calcularTaxa() {
    var nome = document.getElementById("nome").value;
    var idade = parseInt(document.getElementById("idade").value);
    var carteirinha = document.getElementById("carteirinha").value;
    var resultado = document.getElementById("resultado");
    if (nome === "" || isNaN(idade)) {
    resultado.innerHTML = "Por favor, preencha todos os campos corretamente.";
    resultado.style.color = "red";
    return;
    }
    var taxa;
    if (idade >= 60) {
    taxa = 10;
    } else if (idade >50 ) {
    taxa = 15;
    } else if (idade >= 10 ) {
        taxa = 20;
    } else {
    taxa = 50;
    }
    if (carteirinha === "Y") {
    taxa = taxa * 0.5;
    }
    else if (carteirinha === "y") {
        taxa = taxa * 0.5;
    }


    resultado.innerHTML = nome + ", você pagará R$ " + taxa + " para entrar no clube.";
    resultado.style.color = "purple";
}