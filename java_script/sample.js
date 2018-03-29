function myFunction(){
    return{
        x: 3,
        y: 4
    };
}
console.log(myFunction());

var x = 1;
console.log(typeof x);
if (typeof x !== 'undefined') {
    console.log("hello world");
    console.log(x);
}
else {
    console.log("Bye be!!");
    console.log(x);
}
