//JSON
//JavaScript Pbject Notation

//1. Object to JSON
//stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = { //rabbit이라는 오브젝트를 JSON으로 변환할 때는 함수는 포함되어 있지 않음(데이터만 가져다 씀)
    name: 'tori',
    color:'white',
    size: null,
    birthDate: new Date(),
    Symbol: Symbol('id'),
    jump: () => {
        console.log(`${name} can jump!`);  //jump도 마찬가지로 함수는 포함 X 
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']); //원하는 프로퍼티만 골라서 정의 하게 되면 해당하는 프로퍼티만 JSON으로 변환
console.log(json);

//세밀하게 통재하고 싶을 때 사용
json = JSON.stringify(rabbtk, (key, value) => { //콜백함수로 정의 하는 방법
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
})

//2. JSON to Object
//parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
})); //parse API를 이용하여 변환하고 싶은 JSON을 전달
console.log(obj);
rabbit.jump();
//obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate); //birthdate는 string타입
console.log(obj.birthDate.getDate());

