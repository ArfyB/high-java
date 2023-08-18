// function greetUser() {
//     console.log('Hi there!');
// }
// greetUser();


// 파라미터로 값이 넘어오지 않았을 때 기본값 설정.
// 기본값을 설정할 경우 선택사항이 되기 때문에 가장 뒤쪽에 위치해야한다
function greetUser(greetingPrefix, userName = 'user') {
    //console.log(greetingPrefix + ' ' + userName + '!');

    // ``의 기능 = 여러줄의 코드 작성 가능, +를 통해 문자열 변수와 하드코딩한 !등을 결합하지 않아도 된다.
    // console.log(`
    // `);
    console.log(`${greetingPrefix} ${userName}!`);
}

greetUser('Hi', 'Max');
greetUser('Hello');

//////////////////////////////////////////////////////////////////

// function sumUp(num1, num2, num3) {
//     return num1 + num2 + num3;
// }
// console.log(sumUp(1, 2));


// function sumUp(numbers) {
//     let result = 0;

//     for (const number of numbers) {
//         result += number;
//     }

//     return result;
// }
// console.log(  sumUp([1, 2, 3, 4, 5])  );


// ...추가시 매개변수(파라미터)의 양에 관계없이 허용
// 또한 그냥 1, 2, 3, 4, 5 라고 입력해도 이후에 배열로 병합됨.
// 파라미터에 배열을 넣지 않아도 자동적으로 배열로 랩핑
// 대신 배열을 넣으면 오히려 더해지지 않음.
function sumUp(...numbers) {
    let result = 0;

    for (const number of numbers) {
        result += number;
    }

    return result;
}
// console.log(  sumUp(1, 2, 3, 4, 5)  );

// 더해지지않음.
// const inputNumbers = [1, 5, 10, 11, 20, 31];
// console.log(sumUp(inputNumbers));

//해결책    ...은 배열을 여러 개별 값으로 분산시킴
const inputNumbers = [1, 5, 10, 11, 20, 31];
console.log(sumUp(...inputNumbers));


console.log(sumUp);