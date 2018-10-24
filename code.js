var testString = "make num = (12 + 4)*4; # Don't run this; drop(num)"
// From AEL, because I honestly don't feel like writing the math interpretation.

// actual MPL
function splitMulti(str, tokens){
        var tempChar = tokens[0]; // We can use the first token as a temporary join character
        for(var i = 1; i < tokens.length; i++){
            str = str.split(tokens[i]).join(tempChar);
        }
        str = str.split(tempChar);
        return str;
}
function parseExceptZero(table,affect) {
  var ret = []
  for (var i = 1; i < table.length; i++) {
    ret.push(table[i])
  } 
  return ret
}

function parseFunction(funq,funccallstring) {// i.e print(), "print(z,v,k)"

  var parts = splitMulti(funccallstring,["(",
  ",",
  ")"
  ]); // parts[0] is the command
  funq(parseExceptZero(parts));
  return parts
}
function display(arguements){
  "function".constructor(console.log(arguements));
}
console.log(parseFunction(display,"print('Epic','Man')"))
