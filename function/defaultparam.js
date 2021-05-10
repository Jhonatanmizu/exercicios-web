///Estratégia para gerar valor padrão
function soma1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}
console.log(soma1(), soma1(2), soma1(1, 2, 3), soma1(0));
//Estratégia 2, 3 , 4 para gerar valor padrão
function soma2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = 1 in arguments ? b :1;
  c = isNaN(c) ? 1 : c;
  return a + b + c;
}
console.log(soma2(3, 10 ,4));
console.log(soma2());
console.log(soma2(0));
//Valor padrão es2015
function soma3(a = 0, b = 0 , c = 0) {
return a + b + c;
}
console.log(soma3(10));
