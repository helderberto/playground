"use strict";
function logDetails(uuid, item) {
    console.log("A Product with " + uuid + " has a title as " + item + ".");
}
function logInfo(uuid, user) {
    console.log("An user with " + uuid + " has a name as " + user + ".");
}
function renderPlatform(platform) {
    return platform;
}
renderPlatform('ios');
logDetails(123, 'sapato');
logDetails('123', 'sapato');
logInfo(123, 'Helder');
logInfo('123', 'Helder');
