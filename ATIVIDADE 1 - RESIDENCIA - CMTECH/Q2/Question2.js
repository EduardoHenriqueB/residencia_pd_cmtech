var pares = [];

function exibePar(a,b){
   while(a<=b){
      if((a%2)==0){
        pares.push(a);
      }
      a++    
   }
}
exibePar(0,40);
document.write(pares);