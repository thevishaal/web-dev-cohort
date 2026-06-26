// class MathUtils {
//    constructor(name , email){
//     this.name = name
//     this.email = email
//    }

//    getName(){
//     return this.name;
//    }
// }

// console.log(MathUtils.add(2,3));


// class User{
//     constructor(name){
//         this._name = name;
//     }

//     get name(){
//         return this._name
//     }

//     set name(val){
//         if(val.length < 2){
//             console.log("Name too short");
//             return;
//         }
//         this._name = val;
//     }
// }

// const u = new User("Suraj");

// console.log(u.name) //getter
// u.name = "A"

// class Bank {
//     #balance = 0;

//      get balance(){
//         return this.#balance
//     }

//     set balance(amount){
//         if(amount <0){
//             console.log("Invalid amount")
//             return;
//         }
//         this.#balance += amount
//     }


  
// }

// const hdfc = new Bank();

// class CoffeeMachine{
//     #heat(){}
//     #brew(){}

//     start(){
//         this.#heat();
//         this.#brew();
//     }
// }

class Animal{
    speak(){
        console.log("Sound")
    }
}

class Dog extends Animal{
    speak(){
        console.log("Bark...")
    }
}

class Cat extends Animal{
    speak(){
        console.log("Meow")
    }
}