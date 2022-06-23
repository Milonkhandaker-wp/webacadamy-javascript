//number, string, object, boolean,undifind, null

// var, let, const
//string
//var x = "Hello World, world     world world world    ";
//var y = "webAcademy";
//var y = new String("khandaker world");

//let z = x.slice(-5,);
// let z = x.slice(0, 5);
// let a = x.substring(0, 5);
// console.log(z);
// console.log(a);

//let z = x.replace(/world/i, "webacademy");
//let z = x.replace(/World/g, "webacademy");
//let z = x.toLowerCase();
//let z = x.toUpperCase();
//let z = x.concat(" ", y);
//console.log(x + "" + y);
//let z = x.trim();
// let z = x.split(",");
// console.log(z);
//let str = "welcome to our webAcademy";
//console.log(str.match(/webAcademy/g))
// let searchResult = str.match(/webAcademy/g);
// if( searchResult != null) {
//     console.log(searchResult);

// } else {
//     console.log("Not found");
// }
//console.log(str.includes("webAcademy))
//console.log(str.startsWith("welcome"))
//console.log(str.endsWith("webacademy"))

//Template literals
// let name = "Rashed";
// let x = 12;
// let y = 15;
// let text = `welcome to our webacademy and our trainer name is ${name}`;

// let text1 = `welcome
//  to 
//  our 
//  webacademy`;
// console.log(`The value of x is ${x}and y is ${y} and the some is ${x+y} `);

//Array
//let x = [1,2,3,4,5,6,7,8];
//let y = new Array(1,2,3,4,5,6,7,8,9);
//console.log(`Length of arry x is ${x.length}`);
//x.unshift(0);
//x.shift();
//x.pop();
//x.push(9);
//x[2]= 15;
//delete x[2];
//let newArray = x.slice(2, 4);
//x.splice(2, 1);
//console.log(x);

//`sort()`;
 
//let x = [4, 5, 9, 4, 3, 2, 1,20];
//let y = ["Banana", "Orange", "Apple", "Mango"];
//y.sort();
//y.reverse();

// x.sort(function(a, b){
//     return a-b;
// });
// //x.reverse();
// console.log(x);

//Iteration
//forEach()

// var names = ["Khandaker", "Rajib", "Ripon", "Naim", "Rakib"];
// names.forEach(function(x, y, z) {
// console.log("Hello " + x + " your index is " + y + "and array is " +z);    
// });

//map()
//let x = [1, 2, 3, 4, 5, 6, 7];
//delete x[2];
//console.log(x);
// x.map(function(){
//     console.log("Hello");
// });

// let newArray = x.map(function(x, y, z){
//    if(x < 4){
//     return x;
//    }
// })
//let newArray = x.filter((x) => x < 4);
// let newArray = x.filter(function(x, y, z){
//     return x < 4;
// })

// console.log(newArray);

//Object
// let computer = {
// brand: "Dell",
// model: "xps",
// price: 30000,
// features:["Grafix card", "ssd", "usb"],
// specs: {
//     memory: "4GB",
//     model: "i3",
//     stroge: "250GB"
// },
// details: function() {
//     console.log(`The computer is a ${this.brand} Brand`);
// }


//detalis: function(){
//console.log(`The computer is a ${this.brand} brand`);
//}
//console.log(computer.details());
//console.log(computer.brand);
//console.log(computer.model);
//console.log(computer.price);

// //computerFeatures = computer.features.map(function(value){
//     return "Features: " + value;
// })
//console.log(computer.detalis);

// let car = {
//     brabd: "Toyota",
//     model: "Corolla",
//     price: 3000000,
//     color: "White",
//     specifications: {
//         engine: "v6",
//         transmission: "Automatic",
//         mileage: "10klmL",
//         fuel: "petrol"
//     },
//     coment: function() {
//         console.log(`The car is a ${this.brand} Brind which milege is ${this.specifications.mileage} is so cool`);
//     }
// }
//  //onsole.log(car.coment());
//  console.log(car["model"]);
//  console.log(car.model);


//function is 2type: 1. user-defined, 2. build-in
//user-defined
//function add(...x){
    // x = 10;
    // y = 25;
    //console.log(x+y);
    //return x +y;
//     var sum = 0;
//     x.forEach(function(x){
//         sum = sum + x;
//     })
//     console.log(sum);
// }
// add(20, 30, 40, 50, 60, 70, 75);
//console.log(add());
// let a = add(30, 50);
// console.log(a);

let add = (...x) => {
var sum = 0;
x.forEach(function(x){
    sum = sum + x;
})
console.log(sum);
}

add(1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 15, 16, 17,18, 19, 20);

let ourCastomFun = () => {
    console.log("Hello world");
    
}
ourCastomFun("js");