function Foo(params) {
    getName = function (params) {
        console.log(1);
        
    }
}
Foo.getName = function (params) {
    console.log(2);
    
}
Foo.prototype.getName= function (params) {
    console.log(3);
    
}
var getName = function (params) {
    console.log(4);
    
}
function getName(params) {
    console.log(5);
    
}
Foo.getName()
getName()
// Foo().getName()
getName()
new Foo.getName()
new Foo().getName()
new new Foo().getName()