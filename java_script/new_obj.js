var obj = function(){
    var _this = this;
    console.log(_this);
    this.hello = 'hello';

    _this.greet = function(){
        console.log(_this.hello);
    };

    _this.delayGreeting = function(){
        setTimeout(_this.greet, 1000);
    };
};

var greeter = new obj();
console.log(greeter);

greeter.greet();

greeter.delayGreeting();
