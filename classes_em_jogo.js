let input = "guerreiro"
let classes = ["guerreiro", "monge", "ninja", "mago"];
let armas = ["usou a espada", "usou as artes marciais", "usou shuriken", "usou magia"]

switch(input){
    case "guerreiro":
    console.log(`O ${classes[0]} atacou e ${armas[0]}`);
    break 
    
    case "monge":
    console.log(`O ${classes[1]} atacou e ${armas[1]}`);
    break

    case "ninja":
    console.log(`O ${classes[2]} atacou e ${armas[2]}`);
    break

    case "mago":
    console.log(`O ${classes[3]} atacou e ${armas[3]}`);
    break
    
    default:
    console.log("Erro 404");    

}