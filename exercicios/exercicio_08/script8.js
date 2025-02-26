function calcularSoma() {
    // Obter os valores inseridos pelo usuário
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    // Verificar se os valores são números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, informe dois números válidos.");
    return;
    }
    // Calcular a soma
    let soma = numero1 + numero2;
    // Exibir o resultado
    document.getElementById('soma').textContent = soma;
    document.getElementById('resultado').style.display = 'block';}


    //calcular subtração
    function calcularSubtracao() {
    // Obter os valores inseridos pelo usuário
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    // Verificar se os valores são números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, informe dois números válidos.");
    return;
    }
    // Calcular a subtração
    let subtracao = numero1 - numero2;
    // Exibir o resultado
    document.getElementById('subtracao').textContent = subtracao;
    document.getElementById('resultado').style.display = 'block';
}
    //calcular multiplicação
    function calcularMultiplicacao() {
    // Obter os valores inseridos pelo usuário
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    // Verificar se os valores são números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, informe dois números válidos.");
    return;
    }
    // Calcular a multiplicação
    let multiplicacao = numero1 * numero2;
    // Exibir o resultado
    document.getElementById('multiplicacao').textContent = multiplicacao;
    document.getElementById('resultado').style.display = 'block';
}
    //calcular divisão
    function calcularDivisao() {
    // Obter os valores inseridos pelo usuário
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    // Verificar se os valores são números válidos
    if (isNaN(numero1) || isNaN(numero2) || numero2 == 0) {
    alert("Por favor, informe dois números válidos e não zero.");
    return;
    }
    // Calcular a divisão
    let divisao = numero1 / numero2;
    // Exibir o resultado
    document.getElementById('divisao').textContent = divisao;
    document.getElementById('resultado').style.display = 'block';
}

    function resultado() {
        calcularSoma();
        calcularSubtracao();
        calcularMultiplicacao();
        calcularDivisao();}
