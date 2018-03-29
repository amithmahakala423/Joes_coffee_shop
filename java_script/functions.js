//'use strict';
func();
function func(){
    console.log("this is from function");
}
var expression = function(){
    console.log("this is from expression");
};
expression();

var obj = {
    a: {
        b:{
            c: 'hello'
        }
    }
};

var c = "i am creating new variable c";
//console.log(obj.a.b.c);
//with(obj.a.b){
//    console.log(c);
//}

(function(newvar){
    console.log(newvar);
}(obj.a.b));