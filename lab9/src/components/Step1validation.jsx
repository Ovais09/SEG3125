// function nospace(str, after) {
//     // if (!str) {
//     //     return false;
//     // }
//     after = after || 40000;
//     var v = str.replace(/[0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g, ''),
//         reg = new RegExp(".{" + after + "}", "g");
//     return v.replace(reg, function (a) {
//         return a + ' ';
//     });
// }


// var e4 = document.getElementById("fname")
// e4.addEventListener('keyup', function () {
//     this.value = nospace(this.value, 0);
// })