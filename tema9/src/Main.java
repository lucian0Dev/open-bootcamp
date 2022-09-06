/* Crea una clase Persona con las siguientes variables:

La edad

El nombre

El teléfono

Una vez creada la clase, crea una nueva clase Cliente que herede de Persona, esta nueva clase tendrá la variable credito solo para esa clase.

Crea ahora un objeto de la clase Cliente que debe tener como propiedades la edad, el telefono, el nombre y el credito, tienes que darles valor y mostrarlas por pantalla.

Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de Persona, y con una variable salario que solo tenga la clase Trabajador.*/
public class Main {
    public static void main(String[] args) {
        Cliente cliente = new Cliente();
        cliente.setEdad(30);
        cliente.setNombre("luciano");
        cliente.setTelefono(982202997);
        cliente.setCredito(10001);
        System.out.println("edad: "+cliente.getEdad()+"\nnombre: "+cliente.getNombre()+"\ntelefono: "+cliente.getTelefono()+"\ncredito: "+cliente.getCredito());

        Trabajador trabajador = new Trabajador();
        trabajador.setEdad(30);
        trabajador.setNombre("luciano");
        trabajador.setTelefono(982202997);
        trabajador.setSalario(30000);
        System.out.println("edad: "+trabajador.getEdad()+"\nnombre: "+trabajador.getNombre()+"\ntelefono: "+trabajador.getTelefono()+"\nsalario: "+trabajador.getSalario());

    }
}
class Persona{
    int edad;
    String nombre;
    int telefono;
}
class Cliente extends Persona{
    private int credito;
    public Cliente(){

    }
    public void setEdad(int edad){
        this.edad=edad;
    }
    public int getEdad(){
        return edad;
    }
    public void setNombre(String nombre){
        this.nombre = nombre;
    }
    public String getNombre(){
        return nombre;
    }
    public void setTelefono(int telefono){
        this.telefono = telefono;
    }
    public int getTelefono(){
        return telefono;
    }
    public void setCredito(int credito){
        this.credito = credito;
    }
    public int getCredito(){
        return credito;
    }
}
class Trabajador extends Persona{
    private int salario;

    public Trabajador(){

    }
    public void setEdad(int edad){
        this.edad=edad;
    }
    public int getEdad(){
        return edad;
    }
    public void setNombre(String nombre){
        this.nombre = nombre;
    }
    public String getNombre(){
        return nombre;
    }
    public void setTelefono(int telefono){
        this.telefono = telefono;
    }
    public int getTelefono(){
        return telefono;
    }
    public void setSalario(int salario){
        this.salario = salario;
    }
    public int getSalario(){
        return salario;
    }
}