"use strict";
// boolean (true / false)
var isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
// number (int, float, binary)
var total;
total = 20.3;
// array (type[])
var items;
items = [1, 2, 3];
var values; // generic
values = [1, 2, 3];
// tuple
var title;
title = [1, 'foo'];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "000";
})(Colors || (Colors = {}));
// any (anything) isn't cool
var coisa;
coisa = true;
coisa = 'string';
coisa = [1];
// void (empty) there is no return
function logger() {
    console.log('foo');
}
var text;
text = 'test';
// never - will never return
function error() {
    throw new Error('error');
}
// object
var cart;
cart = {
    key: 'fi'
};
// Type Inferece
var message2 = "mensagem definida"; // type: string
// message2 = 2 causes error
window.addEventListener('click', function (e) {
    console.log(e.target);
    // console.log(e.foo) don't exists foo in an event will cause error
});
