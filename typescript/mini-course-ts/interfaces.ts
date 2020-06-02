type Genre = 'action' | 'adventure' | 'thriller' | 'other';

interface Game {
  id?: string | number;
  title: string;
  description: string;
  readonly genre: Genre;
  platform?: string[];
  getSimilars?: (title: string) => void;
}

const minecraft: Game = {
  title: 'Minecraft',
  description: 'Lorem Ipsum',
  genre: 'other',
  // platform: ['xbox', 'ps4', 'pc'],
  getSimilars: (title: string) => {
    console.log(`Similar games to the ${title}: Lego`);
  }
};

console.log(minecraft.title);
// minecraft.genre = 'other'; // => Error
if (minecraft.getSimilars) {
  minecraft.getSimilars(minecraft.title);
}

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
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

class CreateGame implements Game {
  title: string;
  description: string;
  genre: Genre;

  constructor(t: string, d: string, g: Genre) {
    this.title = t;
    this.description = d;
    this.genre = g;
  }
}

const game = new CreateGame('Mario', 'The best game', 'adventure');
console.log(game);
