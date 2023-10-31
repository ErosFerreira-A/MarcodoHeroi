// Pontuação e nível do jogo
let vitorias = 10;
let derrotas = 10;
let saldo = vitorias - derrotas
let div;

switch(saldo){
    case saldo <= 10:
    div = "Latão";
    break

    case xp <= 11 && xp >= 20:
    div = "Ferro";
    break

    case xp >= 21 && xp >= 50:
    div = "Bronze";
    break

    case xp >= 51 && xp <= 70:
    div = "Prata";
    break

    case xp <= 71 && xp >= 80:
    div = "Ouro";
    break

    case xp <= 81 && xp >= 90:
    div = "Diamante";
    break 

    case xp <= 91 && xp <= 100:
    div = "Lendário";
    break 

    case xp >= 100:
    div = "Imortal";
    break

    default:
    console.log("Não encontrado na base de dados");
}

console.log(`O herói tem o saldo de ${saldo} tendo a divisão de ${div}`);





