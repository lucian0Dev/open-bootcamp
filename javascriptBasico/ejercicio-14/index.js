//const boton = document.querySelector("#boton")

//boton.addEventListener("click", () =>{
//    alert("click en el boton")
//})
$(() => {
    $("#boton").click(() => {
        console.log("probando jquery")
        alert("hola estoy usando jquery")
    })
})