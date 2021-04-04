'use strict'; 

//variable 변수
// 1. let (added in ES6)
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
}

console.log(name);
console.log(globalName);

//2. var 
//var hoisting : 어디에 선언했냐와 상관없이 항상 제일 위로 선언을 끌어올려주는 것

//var has no block scope
/* {
    age = 4;
    var age;
}*/
console.log(age);
age = 4;
console.log(age);

//3. Constants
//: 값이 한번 할당하면 값이 절대 바뀌지 않음
const daysInWeek = 7;
//const == Immutable data type(값이 변하지 않음)
//mutable(let) <=> Immutable(const)

//4. Variable types
//*primitive single item: 더이상 작은 값으로 나눠질 수 없는 한가지 item
// => number, String, boolean, null, undefined, symbol
//*object boxcontainer : single item들을 묶어서 한 단위로 한 박스로 관리
//*function first-class function 
//=> first-class function은 이 함수도 다른 변수들 처럼 변수 할당 가능, 인자 전달, return 가능

//*number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1 /0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
//한 글자든 여러글자든 모두 string 타입
const char = 'c';
const brendan = 'brendan';

const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
//`백택 기호를 이용해서 원하는 string을 적고 $ !를 이용하면 변수(brendan)값이 자동적으로 붙여져서 나옴  
//=> 간편하게 string 타입을 만들 수 있음
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: '+ typeof helloBob);

//boolean
//false: 0, null, undefined, NaN, '' 
//-> null은 empty, null 값 지정 / undefined 변수 선언 but null값인지 비어있는지 정하지 않은 상태
//true: any other value
const canRead = true;
const test = 3 < 1; //false;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, 고유한 식별자를 만들 때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);

//주어진 string에 맞는 Symbol 만들어줘
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(`value: ${symbol1.description}, type ${typeof symbol1}`);
//description을 이용해 string으로 변환해서 출력해야함 

//object : 일상생활에서 보는 물건, 물체들을 대표하는 박스형태
const ellie = {name: 'ellie', age : 20};
ellie.age = 21; //변경 가능

//4. Dynamic typing : dynamically typed language
// => 선언할 때 어떤 타입인지 선언하지 않고 runtime,
//      프로그램이 동작할 때 할당 된 갑셍 따라 type이 변경될 수 있음
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text ='7' + 5; 
console.log(`value: ${text}, type: ${typeof text}`); //string으로 변환되어 75출력
text = '8'/ '2';
console.log(`value: ${text}, type: ${typeof text}`);// 숫자로 변환되어 계산됨

 