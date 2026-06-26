// class User {
//     constructor(name , score){
//         this.name = name;
//         this.score = score
//     }

//     increment(){
//         this.score++
//     }
// }

// const u1 = new User("Suraj" , 100);
// u1.increment()
// console.log(u1.score)

// console.log(typeof User)

class User{
        constructor(name , score){
        this.name = name;
        this.score = score
    }
    login(){
        console.log("Logged In")
    }
}


class Admin extends User{
   constructor(name , score , isAdmin){
        super(name , score)
        this.isAdmin = isAdmin;
   }

   deleteUser(){
    console.log("deleted")
   }
}

const admin = new Admin("Suraj" , 100 , true)

console.log(admin.name)
console.log(admin.score)
console.log(admin.isAdmin)

admin.login();
admin.deleteUser()