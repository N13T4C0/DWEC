// 1
let sum = (num1,num2)=> num1+num2;
console.log(sum(1,2));
// 2
let cad = (str)=>str.length;
console.log(cad("weads"));
// 3
// lo mismo q la 2
// 4
let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"];
let mensaje = (name) => {
      let rand = Math.floor(Math.random() * alerts.length);
      let mostrar = alerts[rand]+name;
      alert(mostrar);
};
mensaje("you ball of fluff");
// 6
let años = (edad,nombre)=> "Hola soy "+nombre+" y te3ngo"+edad;
console.log(años(12,"pepe"));
// 7
let array = [1,2,3,4,5,6,78];
let suma = array.reduce((acc,n) => acc+n,0);
console.log(suma);
// 8
let eye = "eye";
let fire = () => "bulls-";
console.log(fire());
// 9
let fibo = (n)=> {
    if(n<3)
        return 1;
    return n*fibo(n-1);
}
let resultado=0;
function recursivo(nnum){
    for(let i =0;i<nnum;i++){
    resultado *= i;
    }
    return resultado;
}

console.log(recursivo(4));
console.log(fibo(6));
