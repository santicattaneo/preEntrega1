//ciclos => ingresar 3 notas de 5 estidiantes
//funcion => calcular el promedio de los estidiantes
//condicional => obtener numero de aprobados y desaprobados

//inicio de contadores
let aprobados = 0
let desaprobados = 0

//calculo de promedios || funcion
function calculoPromedio(nota1, nota2, nota3){
    sumaNotas = nota1 + nota2 + nota3
    promedio = sumaNotas / 3
    return promedio
}

//ingreso de notas || ciclo
for (let i=0 ; i<5 ; i++){
    let nota1 = Number(prompt("ingrese la nota"))
    let nota2 = Number(prompt("ingrese la nota"))
    let nota3 = Number(prompt("ingrese la nota"))
    
    calculoPromedio(nota1, nota2, nota3)
    let promedio = calculoPromedio(nota1, nota2, nota3)
    
    //contador de aprobados y desaprobados || condicional
    if(promedio >= 6){
        aprobados = aprobados + 1
    } else{
        desaprobados = desaprobados + 1
    }
}

alert(`Hay ${aprobados} estudiantes aprobado/s y ${desaprobados} estudiantes desaprobado/s.`)