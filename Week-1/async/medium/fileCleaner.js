/*

File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

"hello     world    my    name   is       raman"
After the program runs, the output should be

"hello world my name is raman"

*/

const { readFileSync } = require("fs");
const file = readFileSync("../FileCleaner.txt", "utf8");

const words = file.split(" ");

const splitedFile = words.filter((word) => word !== "").join(" ");

console.log(file);
console.log(words);
console.log(splitedFile);
