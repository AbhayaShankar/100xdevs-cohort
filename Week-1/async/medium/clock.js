/*

Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

HH:MM::SS (Eg. 13:45:23)

HH:MM::SS AM/PM (Eg 01:45:23 PM)

*/

let now = new Date();
let hours = String(now.getHours());
let minutes = String(now.getMinutes());
let seconds = String(now.getSeconds());

const currentTime = `${hours}:${minutes}:${seconds}`;

const updatingSeconds = () => {
  setInterval(() => {
    seconds++;
    // console.log(seconds)
  }, 1000);
};

const updatingMinutes = () => {
  setInterval(() => {
    minutes++;
    // console.log(minutes)
  }, 60000);
};

const updatingHours = () => {
  setInterval(() => {
    hours++;
    // console.log(hours)
  }, 3600000);
};

updatingHours();
updatingMinutes();
updatingSeconds();

const clock = `${hours}: ${minutes} : ${seconds} `;
console.log(clock);

// useEffect(() => {
// const clock = `${hours}: ${minutes} : ${seconds} `;
// console.log(clock)

// },[seconds])
// console.log('Current Time:', currentTime);
