    var inputElement=document.querySelector("input.ano")
    var p = document.querySelector("p")
    var radios = document.getElementsByName('radsex');
    var divcard = document.querySelector("div.card")
    var resultados = document.querySelector("div.resultados")
function verificar(){
  
  
  if(inputElement.value.length === 4){
    var anoNasc=inputElement.value
    var feminino = radios[1].checked
    var sexo
        
   if(feminino){
      var sexo = 'uma muié'
      
   }
   if(!feminino){
    var sexo = 'um homí'
    
}

    var today = new Date();
    var anoAtual = today.getFullYear()
    var idade = anoAtual - anoNasc
    
    if(idade < 0){
        alert("tá errada essa idade aí")
    }
    if(idade < 17){
        p.innerHTML = "Tu é de menor"
    }
    if(idade > 60){
        p.innerHTML = "Tu tá velho mano"
    }
    if(idade > 17 && idade < 60){
        p.innerHTML = "Tu é um adulto po"
    }
    if(idade > 120){
        p.innerHTML = "Tu tá vivendo mais do que o esperado"
    } 
   
    resultados.innerHTML= `Você é ${sexo} de ${idade} anos`
    
    
}
   else {
    alert("po mano tu fez merda")
  }
 
} 

