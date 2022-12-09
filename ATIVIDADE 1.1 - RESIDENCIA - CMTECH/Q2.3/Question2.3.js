function notas(nota) {
    var nota = Number(prompt("Insira sua nota:"));
    if (nota >= 0.0 &&  nota <=4.9) {
        var resultado = "CONCEITO: D";
    } 
    else if (nota >= 5.0 &&  nota <=6.9){
        var resultado = "CONCEITO: C";
    }
    else if (nota >= 7.0 &&  nota <=8.9) {
        var resultado = "CONCEITO: B";
    }
    else{
       var resultado = "CONCEITO: A"
    }
    return resultado
}
    document.write(notas());