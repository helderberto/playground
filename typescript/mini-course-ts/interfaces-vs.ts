// Interfaces

// definition
interface Game {
  title: string;
}

interface DLC {
  extra: string;
}

// intersection | extend

interface GameCollection extends Game, DLC {}

// implements

// class CreateGame implements GameCollection {}

// declare function
interface getSimilars {
  (title: string): void;
} 

// ---------- Differences ----------

// interface ID extends number {}

// can't define tuples in interface
interface Tuple {
  0: number;
  1: number;
}

[1, 2, 3, "test"] as Tuple // Wrong!

// Can declare multiple using the same name it will merge by name
interface JQuery {
  a: string;
}

interface JQuery {
  b: string;
}

const $: JQuery = {
  a: 'bla',
  b: 'foo'
};

// advantage: when are creating libs, choose interfaces because it's more extensible
// creating objects/classes (OOP)
