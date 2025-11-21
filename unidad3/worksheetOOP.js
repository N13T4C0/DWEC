// tarea 1
class Persona {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }

    eat(food) {
        if (this.stomach.length < 10) {
            this.stomach.push(food);
        } else {
            return "No hay más espacio";
        }
    }

    poop() {
        this.stomach = [];
    }

    toString() {
        return this.name + ", " + this.age;
    }
}

// Prueba Tarea 1
let persona1 = new Persona("María", 50);
console.log("TAREA 1:");
console.log(persona1.toString());           
persona1.eat("manzana");
persona1.eat("pan");
console.log(persona1.stomach);             
persona1.poop();
console.log(persona1.stomach);             
console.log("");

// TAREA 2 - Clase Car
class Car {
    constructor(model, milesPerGallon) {
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(gallons) {
        this.tank = this.tank + gallons;
    }

    drive(distance) {
        const maxDistance = this.tank * this.milesPerGallon;
        if (distance <= maxDistance) {
            this.odometer = this.odometer + distance;
            this.tank = this.tank - (distance / this.milesPerGallon);
            return "Has conducido: " + distance;
        } else {
            this.odometer = this.odometer + maxDistance;
            this.tank = 0;
            return "Me quede sin combustible a " + this.odometer + " millas";
        }
    }
}

// Prueba Tarea 2
const miCoche = new Car("Toyota Corolla", 30);
miCoche.fill(10);
console.log("TAREA 2:");
console.log(miCoche.drive(100));          
console.log("Odómetro: " + miCoche.odometer); // 100
console.log("Combustible restante: " + miCoche.tank); 

// TAREA 3 - Clase Lambdasian
class Lambdasian {
    name;
    age;
    location;
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
    }

    speak() {
        return "Hello my name is " + this.name + ", I am from " + this.location;
    }
}

// Prueba Tarea 3
let personaLambda = new Lambdasian({
    name: "Lucía",
    age: 25,
    location: "Granada"
});
console.log("TAREA 3:");
console.log(personaLambda.speak());     
console.log("");

// TAREA 4 - Clase Instructor
class Instructor extends Lambdasian {
    specialty;
    favLanguage;
    catchPhrase;
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }

    demo(subject) {
        return "Hoy estamos aprendiendo sobre " + subject;
    }

    grade(student, subject) {
        return student.name + " recibe una puntuación perfecta en " + subject;
    }
}

// Prueba Tarea 4
let instructor = new Instructor({
    name: "Carlos",
    age: 35,
    location: "Barcelona",
    specialty: "React",
    favLanguage: "JavaScript",
    catchPhrase: "Don't forget the homies"
});
console.log("TAREA 4:");
console.log(instructor.speak());        
console.log(instructor.demo("Redux"));    
console.log(instructor.grade({ name: "Ana" }, "CSS")); 
console.log("");

// TAREA 5 - Clase Student
class Student extends Lambdasian {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }

    listSubjects() {
        return "Loving " + this.favSubjects.join(", ") + "!";
    }

    PRAssignment(subject) {
        return this.name + " has submitted a PR for " + subject;
    }

    sprintChallenge(subject) {
        return this.name + " has begun sprint challenge on " + subject;
    }
}

// Prueba Tarea 5
let alumno = new Student({
    name: "Ana",
    age: 22,
    location: "Madrid",
    previousBackground: "Diseñadora gráfica",
    className: "CS132",
    favSubjects: ["HTML", "CSS", "JS"]
});
console.log("TAREA 5:");
console.log(alumno.listSubjects());    
console.log(alumno.PRAssignment("JavaScript")); 
console.log(alumno.sprintChallenge("React"));   

// TAREA 6 - Clase ProjectManager
class ProjectManager extends Instructor {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }

    standUp(channel) {
        return this.name + " announces to " + channel + ", @channel standy times!";
    }

    debugsCode(student, subject) {
        return this.name + " debugs " + student.name + "'s code on " + subject;
    }
}

// Prueba Tarea 6
let pm = new ProjectManager({
    name: "Sofía",
    age: 30,
    location: "Valencia",
    specialty: "Backend",
    favLanguage: "Python",
    catchPhrase: "Keep it simple!",
    gradClassName: "CS1",
    favInstructor: "Sean"
});
console.log("TAREA 6:");
console.log(pm.standUp("cs132_slack"));   
console.log(pm.debugsCode(alumno, "APIs")); 
console.log(pm.grade(alumno, "Node.js"));  
