let nombre = "luciano"
let apellido = "delgado"
let estudiante = nombre.concat(" ",apellido)
let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()
let numChar = estudiante.length
let firstLetter = nombre.charAt(0)
let lasttLetter = apellido.charAt(apellido.length-1)
let eraseSpace = estudiante.replace(/ /g, "")
const nombreEnEstudiante = estudiante.includes(nombre)
console.log(nombre)
console.log(apellido)
console.log(estudiante)
console.log(estudianteMayus)
console.log(estudianteMinus)
console.log(numChar)