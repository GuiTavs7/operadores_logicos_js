/*
   1)  == ---- igual ---- a==b ----- verdadeiro se "a" for igual a "b"
*/

const a = 3;
const b = 3;

console.log(a==b);

// 2_ === ---- idêntico ---- a === b ----- verdadeiro se "a" for idêntico a "b" (valor e tipagem verificados)

const c = 3;
const d = "3";

console.log(c === d);

// 3) != ------ diferente ----- a != b ----- verdadeiro se "a" for diferente de "b" (verifica apenas valor)

const n1 = 3;
const n2 = "3";

console.log(n1 != n2);

// 4) !== ------ não idêntico ---- a !== b ----- verdadeiro se "a" não for idêntico a "b"

const e = 1;
const f = 4;

console.log(e !== f);

// 5) < ----- menor que ------ a < b ------ verdadeiro quando "a" for menor que "b"

const n3 = 1;
const n4 = 3;

console.log(n3 < n4);

// 6) <= ----- menor igual que ------ a <= b ------ verdadeiro quando "a" for menor ou igual a "b"

const n5 = 1;
const n6 = 1;

console.log(n5 <= n6);

// 7) > ------- maior que ------ a > b ------- verdadeiro quando "a" for maior que "b"

const n7 = 4;
const n8 = 3;

console.log(n7 > n8);

// 8) >= ----- maior igual que ------ a <= b ------ verdadeiro quando "a" for maior ou igual a "b"

const n9 = 7;
const n10 = 7;

console.log(n9 >= n10);