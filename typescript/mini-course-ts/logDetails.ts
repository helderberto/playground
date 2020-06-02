// type alias
type UUID = number | string | undefined;

function logDetails(uuid: UUID, item: string) {
  console.log(`A Product with ${uuid} has a title as ${item}.`);
}

function logInfo(uuid: UUID, user: string) {
  console.log(`An user with ${uuid} has a name as ${user}.`);
}

type Platform = 'Windows' | 'Linux' | 'Mac Os' | 'ios';

function renderPlatform(platform: Platform) {
  return platform;
}

renderPlatform('ios');

logDetails(123, 'sapato');
logDetails('123', 'sapato');

logInfo(123, 'Helder');
logInfo('123', 'Helder');
