window.onload = ()=>{
    console.log(ejercicio1("aglfffa"));
    ejercicio2(100);
    console.log(ejercicio3(")ccc(ccc)cc((ccc(c)))("));
    ejercicio4(2);
    console.log(ejercicio5(["12:12:2006","12:12:2009","12:12:2009"]));
    console.log(ejercicio6("Electrónica")); 

}
function ejercicio1(cad){
    let vocales=0;
    for(let i=0;i<cad.length;i++){
        if(cad[i]=="a"){
            vocales++;
        }else if(cad[i]=="e"){
            vocales++
        }else if(cad[i]=="i"){
            vocales++;
        }else if(cad[i]=="o"){
            vocales++;
        }else if(cad[i]=="u"){
            vocales++
        }
    }
    return "La cad tiene: "+vocales+ " vocales";
}
    
function ejercicio2(numero){
    for(let i=1;i<=numero;i++){
        if(i%3==0 && i%5==0){
            console.log("El numero: "+i+" es Div 3 + Div 5");
        }else if(i%5==0){
            console.log( "El numero: "+i+" es Div 5")
        }else if (i%3==0){
            console.log("el numero: "+i+" es Div 3")
        }else
            console.log(i);
    }
    
}
function ejercicio3(cad){
    let parentesisi=0;
    let parentesisd=0;
    let resultado=false;
    for(let i=0;i<cad.length;i++){
        if(cad[0]==")"){
            return resultado;
        }
        if(cad[i]=="("){
            parentesisi++;
        }else if(cad[i]==")"){
            parentesisd++;
        }
    }
    if(parentesisd == parentesisi){
        resultado=true;
    }
    return resultado;
}
function ejercicio4(minutos){
    let segundos = minutos*60;
    
}
function restaSeg(){
    setInterval(ejercicio4,1000);
}
function ejercicio5(array){
    let año =0;
    let dia=0;
    let mes =0;
    let lon = array.length;
    let i=0;
    let arrayn = [];
    while(i!==lon){
        let fecha = new Date(array[i]);
        año = fecha.getFullYear();
        arrayn.push(año);
        i++;
    }

    return Math.min(...arrayn);
}
function ejercicio6(cat){

    let  productos = [
        { id: 1, nombre: "Laptop Gamer", categoria: "Electrónica", precio: 1500, stock: 10 },
        { id: 2, nombre: "Silla de Oficina Ergonómica", categoria: "Hogar", precio: 250, stock: 20 },
        { id: 3, nombre: "Libro 'Clean Code'", categoria: "Libros", precio: 45, stock: 50}];

   let  inventario2 = productos.filter((c)=>c.categoria==cat).reduce((acc,n)=>acc+(n.precio*n.stock),0)
   if(inventario2==0){
    inventario2 = productos.reduce((acc,n)=>acc+(n.precio*n.stock),0);
   }
    return inventario2;
}
class Cuenta{
    titular;
    saldo=0;
    constructor(){
        this.saldo=saldo;
        this.titular=titular;
    }
    depositar(cantidad){
        this.saldo=cantidad+this.saldo;
    }
    retirar(cantidad){
        op = true;
        if(this.saldo-cantidad<0){
            op=false
        }else this.saldo = this.saldo-cantidad;
        return op?"Si se puede":"No se puede";
    }
}
class cuentaCorriente extends Cuenta{
    limite;
    constructor(saldo,titular){
        super();
        this.limite=this.limite
    }
    retirar(cantidad){
    
    }
}
class cuentaAhorro extends Cuenta{
    
}