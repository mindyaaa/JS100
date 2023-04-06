/**
숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수
 */

let inputNum = prompt('판별하고자 하는 숫자를 입력해주세요');
let result = ['YES', 'NO'];

function isPrime(num) {
    for(let i=2; i<num; i++) {
        if(num%i == 0) {
            return result[1];
        }
    }

    if (num == 1) {
        return result[1];
    }

    else return result[0];
} 

isPrime(inputNum);


//1, 2, 3, 5, 7, 9, 11, 13, 