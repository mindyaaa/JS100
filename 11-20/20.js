// 공백으로 구분하여 두 숫자가 주어집니다. 두번째 숫자로 첫번째 숫자를 나누었을 때
// 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 입력 : 10 2
// 출력 : 5 0

let getTwoNumbers = prompt('두 숫자를 입력 해주세요!').split(' ');

let firstNumber = getTwoNumbers[0];
let secondNumber = getTwoNumbers[1];

let share = Math.floor(firstNumber / secondNumber);
let remainder = firstNumber % secondNumber;

console.log(share, remainder);
