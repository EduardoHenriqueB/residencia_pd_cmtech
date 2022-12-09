var dano = Number(prompt("Qual foi o dano inferido no personagem?"));
var saude = Number(prompt("Quanto é seu HP?"));
function PersonagemMorreu(dano, saude) {
    if(dano > saude){
        return 1;
    }
    else{
        return 0;
    } 
}
document.write(PersonagemMorreu(dano,saude));