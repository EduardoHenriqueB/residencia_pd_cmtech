var x = Number(prompt("Insira o valor que sera construido a tabuada:"))
for (i = 1; i<=10; i++) {
    var valor = x*i
    document.write( " ",x," X ",i," = ",valor,'<br>');
}