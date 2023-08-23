
alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let numeroEscolhido = prompt("Digite um número entre 1 e 5000");
let tentativas = 1;

while (numeroEscolhido != numeroSecreto) {
    numeroEscolhido = prompt(`Digite um número entre 1 e ${numeroMaximo}`);
    if(numeroEscolhido ==  numeroSecreto){
        break;
    } else {
        if (numeroEscolhido > numeroSecreto) {
            alert(`O número secreto é menor que ${numeroEscolhido}`);
        } else {
                alert(`O número é maior que ${numeroEscolhido}`);    
            }
            //tentativas = tentativas + 1; é a mesma coisa que tentativas++
            tentativas++;
        }
}

// if (tentativas > 1) {
//     alert(`Você acertou o número secreto que é ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
//     alert(`Você acertou o número secreto que é ${numeroSecreto} com ${tentativas} tentativa`);
// }

// Operador Ternário - o código abaixo faz a mesma coisa que o código da condição "if" acima

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Você acertou o número secreto que é ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);










