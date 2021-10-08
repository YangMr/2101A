"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
var A;
(function (A) {
    A.time = "2021-10-08";
    function formatTime() {
        console.log("日期格式化");
    }
    A.formatTime = formatTime;
})(A = exports.A || (exports.A = {}));
// namespace B{
//     export let time = "2021-10-09"
//     export function formatTime(){
//         console.log("日期校验")
//     }
// }
// B.formatTime()
// console.log(B.time)
