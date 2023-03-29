// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.
let getTwoNumbers = prompt('두 숫자를 입력해주세요 :-)').split(' ');

let result = getTwoNumbers[0]**getTwoNumbers[1];
console.log(result);