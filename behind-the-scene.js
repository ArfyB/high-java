const hobbies = ['Sports', 'Cooking'];
const age = 32;

hobbies.push('Reading');

console.log(hobbies);

// 원시적인값   : numbers, strings, booleans & more (undefined)
// 참조값       : Object


const person = { age: 32 };

function getAdultYears(p) {

    // 아래와 같이 작성시에는 p가 person을 참조하여 변경 후 저장하므로 원래의 person의 값이 바뀐다.
    p.age -= 18;
    return p.age;
    
    // 하지만 console.log(getAdultYears({age: person.age})); 로 작성하여 새로운 객체를 만들어 넣어 준다면
    // 위의 코드를 사용하여도 원본객체의 값은 변하지 않는다.
    // {age: person.age} 을 입력하는 것이 귀찮기 때문에
    // { ...person }으로 작성해도 해당 객체의 모든 키, 값 쌍을 가져와 해당 키 값 쌍의 목록을 제공.



    // 아래와 같이 작성시에는 p가 person을 참조는 하였으나 저장하지 않아서 원래의 person의 값이 바뀌지 않는다.
    // return p.age-18;
}


// console.log(getAdultYears(person));
console.log(getAdultYears({age: person.age}));
console.log(getAdultYears({ ...person }));
console.log(person);