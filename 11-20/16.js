// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 입출력

// 입력 : 거꾸로
// 출력 : 로꾸거

let reverseWords = (word) => {
    return word.split("").reverse().join("");
}

let randomWord = reverseWords('거꾸로');
console.log(randomWord);