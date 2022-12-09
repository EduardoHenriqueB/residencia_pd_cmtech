function temHabilidade(){
    var habilidade = prompt("Digite sua habilidade com linguagem de programação ")
			
    if(habilidade.includes('javascript')) {
       alert(true);
     } else {
       alert(false);
     } 
  }
  
  var habilidade = ['javascript', 'reactjs', 'React native'];
  var resultado = temHabilidade();  