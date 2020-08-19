
//Practice on String functions






/* 
Array Declaration


let arr = [];

let arr = [1, 2, 3];

let arr = ["A", "B", "C"];

let arr = [1.1, 2.2, 3.3];

let arr = [1, "A", 3.14, true];

let arr = [1, "A", 3.14, true, () => {}, 11, function () {}];

let arr = ["Tushar", "sneha","Subham", "Shwetalana", "Sushant"]; 


*/

//Accesing Array Element

let firstItem = arr[0]; 
let anyItem = arr[3]; 


let arr1 = ["JavaScript", "html","css", "xml", "Ajax"]; 
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]); 
}


let arr2 = ["JavaScript", "html","css", "xml", "Ajax"];
 
arr.push("Jquery");

arr.pop();

arr[0] = "JavaScript";

arr.splice(3, 2);


let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  console.log(item); // print or use it logic purpose
}




//Global Functions Fundamental

setInterval(function () {
  
  console.log("I am interval, using annonymous!!");
}, 1000);


setInterval(() => {
  
  console.log("I am also interval, using Arrow");
}, 1000);


let anfn = function () {
  
  console.log("I am getting uses as parameter inside the setinveral");
};
setInterval(anfn, 1000);


//JSON Object Fundamental - Create and Access properties

let ref = {};


let person = {
  name: "Tushar",
};

let person = {
  "first-name": "Tushar",
};

let person = {
  firstName: "Tushar",
};

let person = {
  id: 100,
};

let person = {
  list: [1, 2, 3],
};


let person = {
  id: 10,
  firstName: "Tushar",
  lastName: "More",
};



let person = {
  id: 10,
  "first-name": "Tushar",
  lastName: "More",
};

let list = [1, 2, 3];
let list = ["a", "b", "c"];


let list = [
  {
    id: 10,
    firstName: "Tushar",
  },
  {
    id: 11,
    firstName: "Nidhi",
  },
];


let person = { id: 1, firstName: "Sayali" };
let list = [person];