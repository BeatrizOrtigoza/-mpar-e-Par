document.getElementById("playBtn").addEventListener("click", function() {
    // Obtendo as escolhas do jogador
    const playerChoice = document.getElementById("playerChoice").value;
    const playerNumber = parseInt(document.getElementById("playerNumber").value);
    
    if (isNaN(playerNumber) || playerNumber < 1 || playerNumber > 10) {
        alert("Escolha um número entre 1 e 10.");
        return;
    }

    // Gerando o número aleatório do computador
    const computerNumber = Math.floor(Math.random() * 10) + 1;

    // Calculando a soma
    const sum = playerNumber + computerNumber;

    // Verificando se é par ou ímpar
    const isEven = sum % 2 === 0;
    
    // Definindo o resultado
    let winner = '';
    if ((isEven && playerChoice === 'par') || (!isEven && playerChoice === 'impar')) {
        winner = 'Você ganhou!';
    } else {
        winner = 'Você perdeu!';
    }

    // Exibindo o resultado
    document.getElementById("result").innerHTML = `
        Você escolheu ${playerNumber}. O computador escolheu ${computerNumber}.
        A soma foi ${sum}. <br>
        Resultado: ${winner}
    `;
});
