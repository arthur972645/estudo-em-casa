//ATIVIDADE 1:
function soma(a, b){
    return a + b
}
const resultado = soma(5,1)
console.log(resultado)

//ATIVIDADE 2:
function parImpar(x){

    if(x % 2 === 0){
        console.log("tru")
    }else{
        console.log("false")
    }
}
var x = prompt("digite um valor")
parImpar(x)

//ATIVIDADE 3:
function cauculadora(a){
  if(a === 1){
    function soma(b,c){
        return b + c
    }
    console.log(soma(10,10))
  }

if(a === 2){
    function subtracao(b,c){
        return b - c
    }
    console.log(subtracao(10,10))
  }

   if(a === 3){
     function multiplicacao(b,c){
        return b * c
     }
     console.log(multiplicacao(10,10))
   }
   if(a === 4){
     function divisao(b,c){
        return b / c
     }
     console.log(divisao(10,10))
   }
}
cauculadora(4)


