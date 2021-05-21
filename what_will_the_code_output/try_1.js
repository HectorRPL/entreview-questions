var myObject = {
    foo: 'bar',
    func: function () {
        var self = this;
        console.log('outer func:  this.foo = ' + this.foo); // 'bar'
        console.log('outer func:  self.foo = ' + self.foo); // myObject
        (function () {
            console.log('inner func:  this.foo = ' + this.foo); //  // 'bar'
            console.log('inner func:  self.foo = ' + self.foo); // undefined
        }());
    }
};

myObject.func();
