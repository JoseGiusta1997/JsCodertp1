
    alert("Bienvenidos. Esta pagina te permite calcular la tasa de interés de comprar en cuotas o de contado")
    alert("La suscripción gratuita solo se puede utilizar 3 veces, luego de eso tenes que registrarte")
    for(let intento = 1; intento <=3 ; intento++)
        {
        let costoContado = prompt("Ingrese el monto de contado");
        let costoCuotas = prompt("Ingrese el monto en cuotas");
        let tasaInteres = (costoCuotas/costoContado)*100;
        if (tasaInteres > 100){
        alert(`Intento "${intento}" La tasa que estas pagando es de: ${tasaInteres}%`);
        }else{
        alert ("La tasa es inferior a 1, verifique los datos");
        }
        }
    alert("Intentos terminados, favor de registrarte");