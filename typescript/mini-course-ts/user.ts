// AccountInfo
// CharInfo
// PlayerInfo

type AccountInfo = {
  id: number | string; // union
  name: string;
  email?: string; // optional value
}

const account: AccountInfo = {
  id: 123,
  name: 'Helder'
}

type CharInfo = {
  nickname: string;
  level: number;
}

const char: CharInfo = {
  nickname: 'helderburato',
  level: 100
}

// intersection of the two types
type PlayerInfo = AccountInfo & CharInfo; 

const player: PlayerInfo = {
  name: 'Helder',
  nickname: 'helderburato',
  id: 123,
  level: 100
}
