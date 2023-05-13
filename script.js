
const VLUZ = 299792.458


function actv1() {
    let n14 = parseFloat(prompt("Ingresa 1° número de 3 "));
    let n15 = parseFloat(prompt("Ingresa 2° número de 3 "));
    let n16 = parseFloat(prompt("Ingresa 3° número de 3 "));

    suma14 = n14 + n15 + n16;

    multiplo3 = (suma14 % 3);
    multiplo5 = (suma14 % 5);

    if (multiplo3 == 0) {
        if (multiplo5 == 0) {
            console.log(`La suma de los tres números que ingresaste es multiplo de 3 y de 5`);

            alert(`La suma de los tres números que ingresaste es multiplo de 3 y de 5`);
        } else {
            console.log(`La suma de los tres números que ingresaste es multiplo de 3 y no de 5`);

            alert(`La suma de los tres números que ingresaste es multiplo de 3 y no de 5`);
        }


    } else if (multiplo5 == 0) {
        if (multiplo3 == 0) {
            console.log(`La suma de los tres números que ingresaste es multiplo de 3 y de 5`);

            alert(`La suma de los tres números que ingresaste es multiplo de 3 y de 5`);
        } else {
            console.log(`La suma de los tres números que ingresaste es multiplo de 5 y no de 3`);

            alert(`La suma de los tres números que ingresaste es multiplo de 5 y no de 3`);
        }
    } else {


        console.log(`La suma de los tres números que ingresaste no es multiplo de 5 y de 3`);

        alert(`La suma de los tres números que ingresaste no es multiplo de 5 y de 3`);

    }
}

function actv2() {
    let usuarioC = prompt("Cree un usuario");
    let contrasenaC = prompt("Cree una contraseña");

    let intentos = 3;

    while (intentos > 0) {

        usuario = prompt("ingrese su usuario");
        contrasena = prompt("ingrese su contraseña");

        intentos--

        if (usuario == usuarioC && contrasena == contrasenaC) {

            console.log("ingresaste tu usuario y contraseña correctamente");
            alert("ingresaste tu usuario y contraseña correctamente");

            break;

        } else {
            console.log(`Intenta nuevamente te quedan ${intentos} intentos`);
            alert(`Intenta nuevamente te quedan ${intentos} intentos`);


        }

    }

}




function actv3() {
    let n20 = parseFloat(prompt("ingrese un número"));
    let op16 = prompt("Ingrese un operador (+ - * / )");
    let n21 = parseFloat(prompt("ingrese un número"));

    switch (op16) {
        case "+":          
        console.log(`La operación seleccionada es una suma el resutado es ${n20 + n21} `);
        alert(`La operación seleccionada es una suma el resutado es ${n20 + n21}`);

            break;

        case "-": 
        console.log(`La operación seleccionada es una resta el resutado es ${n20 - n21} `);
        alert(`La operación seleccionada es una suma u el resutado es ${n20 - n21}`);


            break;

        case "*": 
        console.log(`La operación seleccionada es una multiplicación u el resutado es ${n20 * n21} `);
        alert(`La operación seleccionada es una multiplicación u el resutado es ${n20 * n21}`);


            break;

        case "/": 

        console.log(`La operación seleccionada es una divición el resutado es ${n20 / n21} `);
        alert(`La operación seleccionada es una divición el resutado es ${n20 / n21}`);


            break;


        default:
            console.log(`Los datos ingresados son incorrectos `);
            alert(`Los datos ingresados son incorrectos `);
            break;
    }


}

function actv4() {
    
    let distancia = parseFloat(prompt("Ingrese la distancia entre 2 objetos expresada en KM"))

    let tiempo = distancia / VLUZ

    console.log(`El tiempo que demorara la luz en recorrer esa distancias es ${tiempo} segundos `);
    alert(`El tiempo que demorara la luz en recorrer esa distancias es ${tiempo} segundos `);

    
}