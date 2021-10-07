"use strict";
// function getName():void{
//     console.log("zhangsan")
// }
// getName()
var getCount = function () {
    var c = function () {
        c.count++;
        console.log(c.count);
    };
    c.count = 0;
    return c;
};
var count = getCount();
console.log(count());
