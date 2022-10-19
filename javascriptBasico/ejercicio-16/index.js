const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".section");
const papelera = document.querySelector(".papelera");

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event =>{
        console.log("estoy arrastrando el parrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
    })
    parrafo.addEventListener("dragend", () =>{
        console.log("termine de arrastrar")
        parrafo.classList.remove("dragging")
    })
})
secciones.forEach(seccion =>{
    seccion.addEventListener("dragover", event =>{
        event.preventDefault()
        console.log("dragover")
    })
    seccion.addEventListener("drop" , event=>{
        console.log("drop")
        const id_parrafo = event.dataTransfer.getData("id")
        //console.log("parrafo id: ",id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})
papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})
