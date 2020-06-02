// Type Alias

// definition
type GameT = {
  title: string;
};

type DLCT = {
  extra: string;
};

// intersection
type GameCollectionT = Game & DLCT & { content: boolean };

// implements

// class CreateGameT implements GameCollectionT {}

// declare function

type getSimilarsT = (title: string) => void;

// ---------- Differences ----------

// can declare primite types
type IDT = string | number;

// declare tuples normally
type TupleT = [number, number];
[1, 2] as TupleT;

// Only can declare once by scope
// type JQueryT = { a: string }; // Wrong!
// type JQueryT = { b: string }; // Wrong!

// more recommended:
// most of the time
// React - Props

// CONSISTENCE! Follow the project pattern
