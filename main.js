let userName = 'Roukeyatou';
// userName ? console.log(userName) : console.log('Hello');
// Create a variable that will hold the person's username //
let userQuestion = 'Will you get rich?';
console.log(`${userName}, ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

// if else version //
if (randomNumber === 1) {
  eightBall = 'It is certain';
} else if (randomNumber === 2) {
  eightBall = 'It is decidely so';
} else if (randomNumber === 3) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 4) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 5) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 6 ) {
  eightBall = 'My sources say no';
} else if (randomNumber === 7) {
  eightBall = 'Outlook not so good';
} else if (randomNumber === 8) {
  eightBall = 'Signs point to yes';
} else {
  eightBall = 'Could you say that again?';
}
console.log(eightBall);

// switch statement //
// switch (randomNumber) {
//   case 1:
//     eightBall = 'It is certain';
//     break;
//   case 2:
//     eightBall = 'It is decidedly so';
//     break;
//   case 3:
//     eightBall = 'Reply hazy try again';
//     break;
//   case 4:
//     eightBall = 'Cannot predict now';
//     break;
//   case 5:
//     eightBall = 'Do not count on it';
//     break;
//   case 6:
//     eightBall = 'My sources say no';
//     break;
//   case 7:
//     eightBall = 'Outlook not so good';
//     break;
//   case 8:
//     eightBall = 'Signs point to yes';
//     break;
//   default:
//     eightBall = 'Could you say that again?';
// }
// console.log(eightBall);
