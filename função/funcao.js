//COMO FAZER UMA FUNÇÃO:
function primeiraFuncao /*nome da função */ (){ 
    console.log("oioioioioi") //O que a função vai fazer
}
primeiraFuncao(); //essa parte vai chamar a função pelo nome dela, sem ela a função não é realizada

//FUNÇÃO COM ARGUMENTOS/PARAMETRO:
function dizerNome(nome){// O que ta dentro dos parateses é o argumento
    console.log("O meu nome é :" +nome);
} 

dizerNome("arthur"); //Quando é utilizado argumentos, vc ou o usuario se compromete a passar alguma informação, como se fosse uma "variavel"
dizerNome("lucas");  // reaproveitamento de codigo
dizerNome("vivi");

//FUNÇÃO COM ARGUMENTOS E RETURN:
function soma (a, b){
    return a + b // vai armazenar um valor da função, e quando a funcao é chamada ela vai retornar esse valor
}
console.log(soma(1,5))

