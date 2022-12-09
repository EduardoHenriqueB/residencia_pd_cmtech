function exp(year) {
    var year = prompt("Digite sua idade: ")
    
    if (year >= 0 &&  year <=1) {
        var xp = "Novato: Bronze";
    } 
    else if (year >= 1 &&  year <=3){
        var xp = "Intermediario: Prata";
    }
    else if (year >= 3 &&  year <=6) {
        var xp = "Avançado: Ouro";
    }
    else{
       var xp = "Profissional: Diamante"
    }
    return xp
}
    document.write(exp(7));