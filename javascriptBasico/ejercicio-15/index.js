const name = "luciano";
const surname = "delgado";
const obj = {
    nombre: name,
    apellido: surname
}

sessionStorage.setItem("persona",JSON.stringify(obj));
localStorage.setItem("persona",JSON.stringify(obj));

const now = new Date()
document.cookie = `datos=${JSON.stringify(obj)};expires=${new Date(now.getTime() + 2 * 60000)}`