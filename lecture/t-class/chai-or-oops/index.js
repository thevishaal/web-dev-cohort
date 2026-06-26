// const user1 = {
//     name:"Suraj",
//     score:99,
//     increment(){
//         this.score++
//     }
// }


// const user2 = Object.create(user1);

// console.log(user2)

// console.log(user2.increment())

// user2.toString()

// Dry❌
// Memory Waste
// not scalable 

// function User(name , score){
//     this.name = name;
//     this.score = score;

// }

// User.prototype.increment = function(){
//     this.score++
// }

// const user1 = new User("Suraj" , 99);
// const user2 = new User("user2" , 100);

// console.log(user1.increment)
// console.log(user2 instanceof User)

// console.log(user2.name)
// console.log(user2.score)