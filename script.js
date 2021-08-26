

console.log("essa ferramente serve para  testar oque estamos fazendo e se esta funcionando iremos usar mais ao decorrer do curso")


//  Boolean         ( quando se declara verdadeiro ou falso)
//  Null        ( quando querer declarar nada)
//  Undefined       (quando nao se tem uma variavem definida)
//  Number ( n se usa nada, usa direto os numero)
//  String    ( se usa as "")
var a;
var b = "exemplo2"

a = "exemplo1";

b = a;

console.log(b);




//Operação aritméticas

//  + adição
//  - subtração
//  * multiplicaçãp
//  / divisão
//  % modulo            (ele tenta fazer uma divisão mas ele retorna o que sobra da divisão)
//  ++incremento        (ele adiciona +1)
//  -- decremento       (ele subtra -1)


//Atribuições

// =        x = y     x = y
// +=        x += y    x = x + y
// -+        x -+ y    x = x - y
// *=       x *= y      x = x * y
// /=       x /= y      x = x / y
// %=       x %= y      x = x % y


var a=10;

var b=30;

var c=60;




console.log(a+b+c);
c=a+a;
console.log(c);




// Operadores comparativos

// == igual a
// === valor igual a igual
// ! = não é igual
// ! == não é igual ou não igual
// > maior que
// < menor  que
// > = maior que ou igual a 
// < = menor que ou igual a




//so ira funcionar se ambos serem do mesmo tipo ex; number"... strings...

console.log( 2==3);


var a=2;
var b=3;

console.log( a==b);

a=b;

console.log( a==b);


var a= 2;
var b= 3;

console.log( a > b);



//Operadores logicos


// && e
// || ou
// Negativo

var idade = 25;

var menor17 = idade <= 17;
var maior18 = idade >= 18;


console.log("Idade ", idade);

console.log("Maior que 18", maior18);
console.log("Menor que 17", menor17);

console.log("Você pode entrar", maior18)
console.log("Você não pode entrar", menor17)

console.log(null)


var idade = 67;

var menor10 = idade <=10 ;
var maior65 = idade >= 65;

var gratuidade = menor10 || maior65

console.log("Idade ", idade);

console.log("Maior que 65", maior65);

console.log("Menor que 10", menor10);


console.log("Tem direito a gratuidade", gratuidade)


console.log(true);

console.log(!false);


//strings
// NaN (not a number)

var str = "valor qualquer" +" " + 10;

console.log(str);

var numero = "29.7" * 7.6;

console.log(numero);


console.log(null)





var nome = prompt( "oi, como é seu nome?");

alert("Seja bem vindo(a) " + nome + ", e isso é apenas um projeto.");



var idade =68;

if (idade >= 18 && idade <= 65){
       console.log("pode")
       console.log("qual o seu pedido?")
}
else if (idade >= 18){
  console.log("pode")
  console.log("mostre id")
}
else  {
  console.log("não pode")
  console.log("volte futuramente")

}


var idade= 18;

idade >= 18 ? console.log("pode.") : console.log("não pode.");

console.log(null);


var nota1 = 7.0;

var nota2 = 7.3;

var media =( nota1 + nota2) / 2;

var conceito = "";

if (media >=8){

    conceito = "Ótimo";
}
else if (media >= 6.5){

  conceito = "Bom";
}
else 
{

conceito= "regular";
}


//esse caso abaixo seria mais para forçar o default que foi colocado, por n cria uma var com default para usar algo inferior a regular
conceito = "Mais ou menos"
///
console.log(media + " " +conceito);



switch(conceito){

    case "Òtimo":
      console.log("Párabens.");
      break;

    case "Bom":
      console.log("Você está quase lá.");
      break;

    case "regular":
      console.log("Estude mais.");
      break;


    default :

    console.log("houve algum erro");
    break;


}



/// alguns comandos de repetiçao conceitos for e while

//for serve para repetir um certo numedo de coisa certas vezes 
//TIPO DE LAÇO

var numero = 5;

for( var i = 0; i < numero; i++){

console.log("executando o for, pela " + i + " vez")

}

console.log("acabou")



//while


var numero = Math.random() *100;

//while(numero < 90){


  //console.log(numero);
 // numero = Math.random() *100;
//roda ate chegar no 90..cuidar pq gera mt bug e pode entrar em loop infinito ATENTIO



//ultimo numero
//console.log(numero);
//console.log("acabou");






///arrays ou vetores
//um conjuto de variaveis, sequencial, começa com indice 0, e o indice vai de 0 até o numero de elementos que tiver,com qualquer tipo de dados


var alunos = new Array("paulo", "taize", "ayla", "barny","paulo",
         "taize", "ayla", "barny");

for (var i = 0; i < alunos.length; i++){

  console.log(alunos[i])
  console.log(i)
}




function média(n1, n2){

  var nota1 = n1;
  var nota2 = n2;
  var média = (nota1 + nota2) /2;
 //console.log(média);
 return média;
}




var resultado1 = média(6, 7);
var resultado2 = média(5, 5);

console.log( resultado1 + " " + resultado2);



function saudaçao(){

  return"olá mundo"
}
var s = saudaçao();
console.log(s);
