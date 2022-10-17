const fecha = new Date()
const fechaNac = new Date(1991,06,13)
const compara = fecha.getTime()>fechaNac.getTime();
console.log(fechaNac.toLocaleDateString())
console.log(compara)
const diaNac = fechaNac.getDate()
console.log(diaNac)
const mesNac = fechaNac.getMonth()+1;
console.log(mesNac)
const year = fechaNac.getFullYear();
console.log(year)