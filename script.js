// function name1(nr) {
//     console.log("Started function with " ,nr);
//     if(nr>0){
//         name1(nr-1);
//     }else{
//         console.log("Done with recursion ");
//     }
// console.log("Endeded function with " ,nr);
// }
// name1(3)

// function func1() {
//     console.log("Hello from func1");
//     function func2() {
//         console.log("Hello from func2");
//     }func2();
// }func1();

// let funcVar = function() {
//     console.log("Hello from funcVar");
// };
// console.log(funcVar)
// function newfunc() {
//          console.log("Hello from funcVar");
//      };

// function doFlexible(executablefunc) {
//     executablefunc();
//     console.log("Hello from doFlexible");
// }

// doFlexible(newfunc);
// setTimeout(funcVar,10000);

// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
// }
// class DogName{
//     constructor(name,weight,color, breed){
//         this.name=name;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let cl=new ClassName("arg1","arg2");
// console.log(cl.prop1);
// let dog= new DogName("Tiku Badmos", 75, "Brown", "Street Dog");
// console.log(dog);


// class ClassName{
//     #prop1
//     #prop2
//     constructor(prop1,prop2){
//         this.#prop1=prop1;
//         this.#prop2=prop2;
//     }
// }
// let cl=new ClassName("arg1","arg2");
// console.log(cl.prop1);

// class ClassName{
//     constructor(prop1,prop2){
//         if(prop1.startsWith("M")){
//             this.prop1=prop1;
//         }else{
//             this.prop1="M" +prop1;
//         }
//     }
// }


//Getters & Setters


// class ClassName{
//     #prop1
//     #prop2
//     constructor(prop1,prop2){
//         this.#prop1=prop1;
//         this.#prop2=prop2;
//     }
//     get prop1(){
//         return this.#prop1;
//     }
//     set prop1(value){
//         this.#prop1=value;
//     }
//     get prop2(){
//         return this.#prop2;
//     }
//     set prop2(value){
//         this.#prop2=value;
//     }
// }
// let cl=new ClassName("Morris","Kathuloo");
// console.log(cl.prop1);
// cl.prop1="Morris1";
// console.log(cl.prop1);
// cl.prop2="Kathuloo1";
// console.log(cl.prop2);

// class Vehicle{
//     constructor(name, color,speed){
//         this.name=name;
//         this.color=color;
//         this.speed=speed;
//     }
//     move(){
//         console.log("Moving at speed of " + this.speed + " km/h");
//     }
//     accelerate(amount){
//         this.speed+=amount;
//         console.log("Accelerated to " + this.speed + " km/h");
//     }
//     brake(amount){
//         this.speed-=amount;
//         console.log("Braked to " + this.speed + " km/h");
//     }
// }
// class Motorcycle extends Vehicle{
//     constructor(name, color, speed, fuel){
//         super(name, color, speed);
//         this.fuel=fuel;
//     }
//     doWheelie(){
//         console.log("Doing a wheelie!");
//     }
// }

// let motor = new Motorcycle("Yamaha", "Red", 100, "Petrol");
// motor.move();
// motor.accelerate(20);
// motor.brake(10);
// motor.doWheelie();
// console.log(motor.name + " is a " + motor.color + " motorcycle with a speed of " + motor.speed + " km/h and runs on " + motor.fuel);

// class Car {
//     static wheels = 4
//     constructor(color, wheelsColor, brand, engine) {
//         this.color = color;
//         this.wheelsColor = wheelsColor;
//         this.brand = brand;
//         this.engine = engine;
//     }
// }

// class PetrolCar extends Car {
//     constructor(milaege) {
//         super("White", "Black", "BMW", 2800);
//         this.milaege = milaege;
//     }
// }

// class ElectricCar extends Car {
//     constructor(color, wheelsColor, brand, engine, batteryBackup, chargingTime) {
//         console.log("Hello, I am inside constructor");
//         super(color, wheelsColor, brand, engine);
//         this.batteryBackup = batteryBackup;
//         this.chargingTime = chargingTime;
//     }
// }

// var electricCar = new ElectricCar("White", "Black", "Audi", 3000, "400kms", "4 hours");
// console.log(electricCar);
// var electricCar2 = new ElectricCar("White", "Black", "BMW", 2800, "500kms", "4 hours");
// console.log(electricCar2);

// let petrolCar = new PetrolCar("White", "Black", "BMW", 2800, "500kms", "4 hours");
// console.log(petrolCar);
// let petrolCar2 = new PetrolCar("White", "Black", "BMW", 2800, "500kms", "4 hours");
// console.log(petrolCar2);


// Person.prototype.introduce = function() {
//     console.log("Hello, I am " + this.name);
// }
// let person1 = new Person("John", 30, "New York");