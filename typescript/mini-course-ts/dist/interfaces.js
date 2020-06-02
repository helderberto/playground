"use strict";
var minecraft = {
    title: 'Minecraft',
    description: 'Lorem Ipsum',
    genre: 'other',
    // platform: ['xbox', 'ps4', 'pc'],
    getSimilars: function (title) {
        console.log("Similar games to the " + title + ": Lego");
    }
};
console.log(minecraft.title);
// minecraft.genre = 'other'; // => Error
if (minecraft.getSimilars) {
    minecraft.getSimilars(minecraft.title);
}
// const leftbehind: DLC = {
//   title: 'Minecraft - Left Behind',
//   description: 'Lorem Ipsum',
//   genre: 'action',
//   platform: ['xbox', 'ps4', 'pc'],
//   originalGame: minecraft,
//   newContent: ['3 hours story', 'new characters']
// };
// console.log(leftbehind);
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
var game = new CreateGame('Mario', 'The best game', 'adventure');
console.log(game);
