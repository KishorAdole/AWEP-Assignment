// Anonymous Function

let f1 =function(a,b){
    return a+b;
}
console.log(f1(3,7)); // Call The Function




// Synonymous Function

function f2(){
    return "JavaScript";
}

console.log(f2());





// Arrow Function 

let f3=(a,b) => {
    return a*b;
}

console.log(f3(5,8));






function example1()
{
    console.log("1");
    console.log("2");
    console.log("4");
    setTimeout(()=> {
        console.log("3. I am callback")
    },5000);
    console.log("5");

}
