const listado = ["shampoo","aceite","azucar","manjar","pasta dientes"];
listado.push("Aceite de girasol");
listado.pop();
const peliculas = [
    {titulo:"hostel", director: "elit rioth", fecha: 2005},
    {titulo:"silencio de los inocentes", director: "Jonathan Demme", fecha: 1991},
    {titulo:"matrix", director: "Hermanas Wachowski", fecha: 1999},
]
const pelis2010 = peliculas.filter(obj => obj.fecha > 2010)

function directores({director}){
    return `${director}`;
}
const directoresArray = peliculas.map(directores);
const titulosArray = peliculas.map(pelicula => {return pelicula.titulo})
const concatDirectorPeliculas = directoresArray.concat(titulosArray)
const directores_titulos_prop = [...directoresArray, ...titulosArray]
console.log(directores_titulos_prop)