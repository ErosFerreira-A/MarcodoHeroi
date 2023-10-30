// Pontuação e nível do jogo
let nomeHeroi = "Taili";
let XP = 1000;
let div;

switch(XP){
    case xp <= 1000:
    div = "Ferro";
    break

    case xp <= 1001 && xp >= 2000:
    div = "Bronze";
    break

    case xp >= 2001 && xp >= 5000:
    div = "Prata";
    break

    case xp >= 5001 && xp <= 7000:
    div = "Ouro";
    break

    case xp <= 7001 && xp >= 8000:
    div = "Platina";
    break

    case xp <= 8001 && xp >= 9000:
    div = "Ascendente";
    break 

    case xp <= 9001 && xp <= 10000:
    div = "Imortal";
    break 

    case xp >= 10000:
    div = "Radiante";
    break

    default:
    console.log("Não encontrado na base de dados");
}

console.log(`${nomeHeroi} é da divisão de ${div} e tem ${XP} de experência.`);





