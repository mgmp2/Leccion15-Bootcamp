function holaMundo (x) {
  if(typeof x == 'string'){
  if(x == "es"){
    return "Hola Mundo!";
  }
  if( x == "de"){
    return "Hallo Welt!";
  }
  if(x == "en"){
    return "Hello World!";
  }


}
if(typeof x == 'number'){
  return "Error de dato";
}
if(x == undefined){
  return "Error";
}
}

// Don't touch
if(typeof exports !== 'undefined') {
    exports.holaMundo = holaMundo;
}
