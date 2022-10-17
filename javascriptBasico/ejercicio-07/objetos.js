const yo = {
    nombre: "luciano",
    apellido: "delgado",
    edad : 31,
    altura : 175,
    desarrollador : true
}

const edad = yo.edad
console.log(edad)

const yo2 = { ...yo}

const friends = [
    {nombre: "jorge" , apellido:"villalobos",edad: 31, altura: 170, desarrollador:false},
    {nombre: "fabian" , apellido:"guerrero",edad: 30, altura: 175, desarrollador:true}
]
friends.sort((a,b)=>a.edad-b.edad) //funcion ordenamiento por edad a se compara con b y se resta
console.log(friends)