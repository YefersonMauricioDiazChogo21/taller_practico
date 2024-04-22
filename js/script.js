function contraseñaVAlida(contraseña){
    switch (contraseña){
        case "2Fj(jjbFsuj":
            alert("True")
            break
        case "eoZiugBf&g9":
            alert("True")
            break
        default:
            alert("False")
            break
    }
}
function calcularImpuestos(edad,ingreso){
    if (edad>18 && ingreso>1000){
        alert(ingreso*0.4)
    }
    else{
        alert("0")
    } 
}
function bmi(peso,altura){
    indice=(peso/(altura*altura))
    if (indice<18.5){
        alert("Bajo de peso")
    }
    else if (indice>18.5 && indice<25){
        alert("Normal")
    }
    else if (indice>24.9 && indice<30){
        alert("Sobrepeso")
    }
    else{
        alert("Obeso")
    }
}
function imprimirArreglo(lista){
    for (i=0;i<lista.length;i++){
        console.log(lista[i])
    }
}
function contarRango(numUno,numDos){
    cont=(numDos-numUno)-1
    alert(cont)
}
function likes(numeroLikes){
    valor=(numeroLikes/1000)
    if(valor<0){
        alert(numeroLikes)
    } else if (valor>0 && valor<1000){
        entero=Math.trunc(valor)
        alert(entero+"K")
    }else{
        valor2=(valor/1000)
        entero=Math.trunc(valor2)
        alert(entero+"M")
    }
}

do{
    opc=prompt("1. Contraseña Valida\n2. Calcular impuestos\n3. IMC\n4. Imprimir arreglo\n5. Contar rango\n6. Contador de likes\n7. Sumar Rango de numeros")
    switch (opc){
       case ("1"):
            contraseña=prompt("Digite su contraseña")
            contraseñaVAlida(contraseña)
            break
        case ("2"):
            edad=parseInt(prompt("Digite su edad"))
            ingreso=parseInt(prompt("Digite el monto de sus ingresos"))
            calcularImpuestos(edad,ingreso)
            break
        case ("3"):
            pes=parseInt(prompt("Digite su peso"))
            altur=parseFloat(prompt("Digite su altura"))
            bmi(pes,altur)
        case ("4"):
            lista=["5","Hola","adios"]
            imprimirArreglo(lista)
        case ("5"):
            numUno=parseInt(prompt("Ingrese el primer numero"))
            numDos=parseInt(prompt("Ingrese el segundo numero"))
            
            contarRango(numUno,numDos)
        case ("6"):
            numero=parseInt(prompt("Ingrese el numero de likes"))
            likes(numero)
        case ("7"):

    }
    
} while(opc)
