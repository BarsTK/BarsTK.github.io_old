function add(a, b){ 
  return a + b;
 console.log(add(a, b));
}
function sub(a, b){ 
  return a - b;
}
function div(a, b){ 
  return a / b;
}
function mul(a, b){ 
  return a * b;
}

console.log("Test of function add(a, b) with difference parameters");
console.log(add(3.1, 5));
console.log(add(3.1, true));
console.log(add(3.1, 2.6));
console.log(add(3.1, -2));
console.log(add(3));
console.log(add(3, false));
console.log(add(1.5));
console.log(add(0));
console.log(add(0, 0));
console.log(add());

console.log("Test of function sub(a, b) with difference parameters");
console.log(sub(3.1, 5));
console.log(sub(3.1, true));
console.log(sub(3.1, 2.6));
console.log(sub(3.1, -2));
console.log(sub(3));
console.log(sub(3, false));
console.log(sub(1.5));
console.log(sub(0));
console.log(sub(0, 0));
console.log(sub());

console.log("Test of function div(a, b) with difference parameters");
console.log(div(3.1, 5));
console.log(div(3.1, true));
console.log(div(3.1, 2.6));
console.log(div(3.1, -2));
console.log(div(3));
console.log(div(3, false));
console.log(div(1.5));
console.log(div(0));
console.log(div(0, 0));
console.log(div());

console.log("Test of function mul(a, b) with difference parameters");
console.log(mul(3.1, 5));
console.log(mul(3.1, true));
console.log(mul(3.1, 2.6));
console.log(mul(3.1, -2));
console.log(mul(3));
console.log(mul(3, false));
console.log(mul(1.5));
console.log(mul(0));
console.log(mul(0, 0));
console.log(mul());
