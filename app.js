// var userOne = {
//     email: 'labapo@gmail.com',
//     name: 'Lorivie Abapo', 
//     login() {
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };
// console.log(userOne.name);
// console.log(userOne); 
// class User {
//     constructor(email, name){
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     }
//     login(){
//         console.log(this.email, 'just logged in');
//         return this;
//     }
//     logout(){
//         console.log(this.email, 'just logged out');
//         return this;
//     }
//     updateScore(){
//         this.score++;
//         console.log(this.email, 'score is now', this.score);
//         return this; 
//     }
// }

// class Admin extends User {
//     deleteUser(user){
//         users = users.filter(u => {
//             return u.email != user.email;//if it evaluates to false, we're filtering out that user
//         })
//     }
// }

// let userOne = new User ('Labapo@gmail.com', 'Lorivie Abapo');
// let userTwo = new User ('adamcwagner@gmail.com', 'Adam Wagner');
// let admin = new Admin ('odin@gmail.com', 'Odin'); 
// console.log(admin);

// //console.log(userOne);
// //console.log(userTwo);

// //userOne.login().updateScore().updateScore().logout() //method chaining
// let users = [userOne, userTwo, admin];
// admin.deleteUser(userTwo);
// console.log(users);
// console.log(admin)
function User(email, name){
    this.email = email; 
    this.name = name; 
    this.online = false;
    this.login = function (){
        console.log(this.email, 'has logged in');
    }
}

User.prototype.login = function (){
    this.online =  true;
    console.log(this.email, 'has logged in');
}
User.prototype.logout = function (){
    this.online =  false;
    console.log(this.email, 'has logged in');
}

function Admin (...args){
    User.apply(this, args);// inherits from parent User function
    this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype) //this is a way to create an object in JS

Admin.prototype.deleteUser = function (u){
    users = users.filter(user => {
        return user.email !=u.email;
    });
}
let admin = new Admin ('Odin@gmail.com', 'Odin')
let userOne = new User ('labapo@gmail.com', 'Lorivie Abapo');
let userTwo = new User ('adamcwagner@gmail.com', 'Adam Wagner');
let users = [userOne, userTwo, admin]; 
console.log(admin);
