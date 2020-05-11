var numero1 = prompt(" ingrese al Primer numero : ");
var numero2 = prompt(" ingrese el segundo numero : ");
var numero3 = prompt(" ingrese el tercer numero : ");

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
numero3 = parseInt(numero3);


    if (numero1 > numero2 && numero1 > numero3) {
            document.write("El numero mayor es: " + numero1);
        } else {

        if (numero2 > numero1 && numero2 > numero3) {
                document.write("El numero mayor es: " + numero2);
            }
            else {
                document.write("El numero mayor es: " + numero3);
                }
            }
        
    


