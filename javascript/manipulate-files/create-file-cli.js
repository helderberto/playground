const fs = require("fs");
const path = require("path");

if (!process.argv.length || process.argv.length <= 3) {
  throw Error(`
    You need to pass the following arguments: \n
    --filename=keys.txt --content=Helder,Paula,Panda,Pantufa
    \n
    Remember to separate content values with pipe.
  `);
}

const [filename, content] = process.argv.slice(2);
const filenameArgs = filename.split("=")[1];
const contentArgs = content.split("=")[1].split(",");

const tmp = path.resolve(__dirname, "tmp");
const filePath = `${tmp}/${filenameArgs}`;

fs.mkdir(tmp, { recursive: true }, (err) => {
  if (err) {
    throw err;
  }
  console.log(`✨ ${tmp} has been created!`);
});

const stream = fs.createWriteStream(filePath);

stream.once("open", () => {
  contentArgs.map((item) => {
    console.log(`📝 Wrote in file ${filenameArgs} word ${item}`);
    stream.write(`${item}\n`);
  });
});
