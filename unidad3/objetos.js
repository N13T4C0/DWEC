class Animal{
    #name;
    type = "cat";

    // metodo
    hablar(){
        return "me envanta los lunes";
    }
    constructor(nombre){
        this.#name= nombre;
    }
}
let pato = new Animal("antonio");
console.log(pato.hablar());
// console.log(pato.#name);  propiedad privada
class persona{
    nombre;
    apellidos1;
    apellidos2;
    constructor(nombre,apellidos1,apellidos2){
        this.nombre=nombre;
        this.apellidos1=apellidos1;
        this.apellidos2=apellidos2;
    }
    static despedirse(){
        return "Adios";
    }
    get nombreCompleto(){
        return this.nombre+" "+this.apellidos1+" "+this.apellidos2;
    }
}
jose = new persona("Jose","Piñero","Berbel");