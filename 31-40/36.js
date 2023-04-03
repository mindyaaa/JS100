/**
 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.


입출력

입력 : 2
출력 : 2 4 6 8 10 12 14 16 18
 */

// const randomNumber = prompt('숫자를 입력해주세요');
// let result = [];

// let timestable = (num) => {
//     for (let i = 1; i < 10; i++) {
//         result.push(num*i);
//     }

//     return result.join(' ');
// }

// console.log(timestable(randomNumber));


//2번째 풀이
const randomNumber = prompt('숫자를 입력해주세요');
let result = '';

let timestable = (num) => {
    for (let i = 1; i < 10; i++) {
        result += num*i + ' ';
    }

    return result;
}

console.log(timestable(randomNumber));