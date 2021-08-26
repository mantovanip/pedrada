

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


let tipoPedido = "entrega";
let statusPagamento = "pago";
 
let situacaoEntrega =
(tipoPedido === "entrega" && statusPagamento === "pago")
  ? "Entrega liberada"
  : "Entrega não liberada";
console.log(situacaoEntrega);



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