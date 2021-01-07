/*let nome = "jenifer";
let idade = 30;
let idade2 = 29;
let frase = "parabéns pelos seu " + idade + " anos"; 
var frase2 = " vc tem um ótimo senso análitico";

/* Comando Replace altera/substitui uma pavavra por outra como pode ser visto ábaix0o */
/*
document.write("Bem vindo " + nome.toUpperCase() + " " + frase + " "
 + frase2.replace('ótimo', 'exelente'));

/*Trabalhando com arrays*/
/*var pulalinha = '<br>'
var frutas = ["maçã", "pera", "uva"];
document.write(pulalinha, pulalinha, frutas);
frutas.push('laranja');
document.write(pulalinha, frutas);
//frutas.pop()
console.log(frutas);
console.log(frutas.length);
console.log(frutas.reverse()); //Deixa a lista ao contrário
console.log(frutas.toString());
console.log(frutas.join(" - "))
document.write(pulalinha, frutas.join(" - ")); /*Join pod ser usado para colocar
caractere entre as listas*/

//Dicionário de array/
/*var pessoas = [{nome:"Jenifer", idade: 30}, {nome: "Michele", idade: 29}];
console.log(pessoas[0]);

/*Condição
var idadePessoa = prompt("Qual a sua idade?");

if(idadePessoa >= 18){
    console.log("vc é maior de idade");
}else{
    console.log("vc é menor de idade");
}
*/

//Laços de repetição
//var contador = 0;
/*
while(contador < 5){
    contador++;
    console.log(contador);
}

var i;
for(i=0; i <= 5; i++){
    console.log(i);
};
*/
/*var d = new Date();
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
*/
//Funções

/*function soma (n1, n2){
    return n1 + n2;
}

console.log(soma(5, 5));

function setReplace(bolo, receita, receita2){
    return bolo.replace(receita, receita2);
}
console.log(setReplace("Bolo de chocolate", "chocolate", "laranja"));

function validacao (idade){
    //var validar = 0;
    if(idade >= 18){
        //validar = true;
        return true;
    }else{
       // validar = false;
       return false;
    } 
    //return validar;
}
//idade = prompt("Qual a sua idade? ");
//console.log(validacao(idade));
*/

//Manipulando elementos

function clicou(){
    console.log("Obrigada por clicar");
   document.getElementById("agradecimento").innerHTML ="<b>Obrigada por clicar</b>";
}

function redirecionar(){
    window.open("www.google.com.br");
}

function mudar(){
    document.getElementById("agradecimento").innerHTML = "Olá meu nome é Jenifer";
}

function voltar(){
    document.getElementById("agradecimento").innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


