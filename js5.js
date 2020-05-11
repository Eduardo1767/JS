var edad = prompt("Ingresa tu edad ");
var out = isNaN(edad);

if(out){ //out= true por lo que no es un número.
    alert("No ingresaste una edad valida...")
}
else if(edad < 16){
    alert("Eres muy joven");
}
else if(edad < 26){
    alert("Todo un adulto");
}
else if(edad < 45){
    alert("En tu mejor momento");
}
else{
    alert("Tienes que cuidarte");
}
