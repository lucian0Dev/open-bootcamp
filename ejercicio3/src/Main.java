/*Primera parte:
                    Crear una función con tres parámetros que sean números que se suman entre sí.
                    Llamar a la función en el main y darle valores.

    Segunda parte:
                  Crear una clase coche.
                  Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.
                  Una función que incremente el número de puertas que tiene el coche.
                  Crear un objeto miCoche en el main y añadirle una puerta.
                  Mostrar el número de puertas que tiene el objeto.*/
public class Main {
    public static void main(String[] args) {
        var valor = sum(10,30,30);
        System.out.println("suma: "+valor);
        /* sum(a: 10,b: 30,c: 30) */
        coche miCoche = new coche(); //crea objeto miCoche instanciando a clase coche
        miCoche.sumarPuertas(); //objeto llama funcion sumarPuertas de la clase coche
        System.out.println("numero de puertas: "+miCoche.puertas);
    }
    public static int sum (int a, int b, int c){
        return a + b + c;
    }
    /*alternativa clase sum tipo void
    public static void sum (int a, int b, int c){
        int resultado;
        resultado = a + b + c;
        System.out.println(resultado);
    }*/
}
/*crea clase coche*/
class coche{
    public int puertas = 4; //variable de tipo publica
    public void sumarPuertas() { //funcion suma puerta
        this.puertas ++;
    }
}