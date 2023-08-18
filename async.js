// const fs = require("fs");

// function readFile() {
//   let fileData;

//   fileData = fs.readFileSync("data.txt");

//   console.log(fileData);
//   console.log(fileData.toString());
//   console.log("Hi there!");
// }

// readFile();

// 비동기식 (아래 코드에서 fs.readFile 부분.)
// 내가 이해한 대로라면
// 동기식의 경우에는 무조건 위에서 아래로 코드를 해석해 나가는 것에 반해
// 비동기식의 경우 위에서 아래로 코드를 해석해 나가는 것은 똑같지만
// 비동기식 코드의 부분은 따로 해석을 하고난 뒤에 실행된다.

// 다른코드의 실행을 차단하지 않고 하나 이상의 장기작업을 실행할 수 있다는 장점.
const fs = require("fs/promises");

async function readFile() {
  let fileData;

  // data.txt의 구문분석이 완료되면 function이 실행된다.
  // 구문분석 실패시 error를 성공하면 fileData를 보유
  //   fs.readFile("data.txt", function(error, fileData) {
  // 콜백함수의 에러잡는 방법. try-catch사용불가.
  // if (error) {

  // }
  //     console.log('File parsing done!');
  //     console.log(fileData.toString());
  //   });

  // fileData = await fs.readFile('data.txt').then(function(fileData) {
  //     console.log('File parsing done!');
  //     console.log(fileData.toString());
  //     // return anotherAsyncOperation;
  //     console.log("Hi there!");
  // })
  // .then(function () {} )
  // .catch(function(error) {
  //     console.log(error)
  // });

  try {
    // async await을 통해 프로미스를 강제하는 코드에서도 비동기식이지만 동기식인것 처럼 변환가능하다.
    // 또한 try-catch를 사용가능하게 함.
    fileData = await fs.readFile("data.txt");
  } catch (error) {
    console.log(error);
  }
  console.log("File parsing done!");
  console.log(fileData.toString());
  // return anotherAsyncOperation;
  console.log("Hi there!");

  console.log("Hi there!");
}

readFile();
