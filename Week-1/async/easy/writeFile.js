const { writeFileSync, readFileSync } = require("fs");
const path = require("path");

// const filePath = path.join(process.cwd(),"Files"  ,"File1.txt");

const Info = readFileSync("./File.txt", "utf-8");
console.log(Info);

const newFile = writeFileSync(
  "./NewFile.txt",
  `The New File is ${Info} which is different than previous readFile.`,
  { flag: "a" }
);

console.log("Done");
