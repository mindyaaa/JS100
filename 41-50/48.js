/**
 * 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.
 * 
입출력

입력 : AAABBBcccddd
출력 : aaabbbCCCDDD
 */

let result = [];

function reverseCapital(str) {
    
    for(let i = 0; i < str.length; i++) {
        if(str[i].toLowerCase() === str[i]) {
            result.push(str[i].toUpperCase());
        } else {
            result.push(str[i].toLowerCase());
        }
    }
    return console.log(result.join(''));
}

let randomWords = 'AABBcc';
reverseCapital(randomWords)