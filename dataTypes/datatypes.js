exports.dataTypes = function(arg) {
  if(typeof arg === "string"){
     return arg.length;
  }
  else if(typeof arg === "boolean") {
     return arg;
  }
  else if(typeof arg === "undefined" || (typeof arg === "object" && arg === null)){
     return "no value";
 }
  else if (typeof arg === "number") {
    if(arg < 100){
      return "less than 100" ;
    } else if (arg == 100){
      return "equal to 100";
    } else {
      return "more than 100";
    }
  }
  else if (typeof arg === "object") {
    if (arg[2] != "undefined") {
      return arg[2];
    }else {
      return "undefined";
    }
  }
  else if (typeof arg === "function") {
      return callback(true);    

  }
};


function callback(arg){ 
  if (arg === true) {  
    return "called callback"; 
   }
}

