//this refers to the current object
'use strict';
var obj = {
    val : 'this is obj object',
    printVal : function(){
        console.log(this);
        console.log(this.val);
    }
};

var obj2 = {
    val : 'this is from obj2 object'
};

obj2.printVal = obj.printVal;
obj2.printVal();

obj.printVal();

var print = obj.printVal.bind(obj2);
print(); //not using any object here, no meaning to this.val in function