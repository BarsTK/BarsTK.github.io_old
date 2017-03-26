function add(a, b){ 
  return a + b;
}
function sub(a, b){ 
  return a - b;
}
function mul(a, b){ 
  return a * b;
}
function div(a, b){ 
  return a / b;
}
function divInt(a, b){ 
  return Math.floor(Math.floor(a) / Math.floor(b));
}
function calculate(a, b, oper){ 
  switch (oper) {
  case "add":
    alert(add(a, b));
    break;
  case "sub":
    alert(sub(a, b));
    break;
  case "mul":
    alert(mul(a, b));
    break;
  case "div":
    alert(div(a, b));
    break;
  case "divInt":
    alert(divInt(a, b));
    break;
  }
}
