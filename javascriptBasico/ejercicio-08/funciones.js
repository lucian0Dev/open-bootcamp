function funcions(){
    console.log(true);
}
funcions();

const miPromesa = new Promise((resolve, reject)=>{
    setTimeout(() => {console.log("soy una promesa")}, 5000);
})
function* generaIdPar(){
    let i = 0;
    while(true){
        i++
        if (i % 2 == 0){
            return i
        }else{
            i++
        }
        yield i 
    }
}
const gen = generaIdPar();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
