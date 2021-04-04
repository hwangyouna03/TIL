//1. 문자열 연결 (String concatenation )
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`String literals: 1 + 2 = ${1+2}`);

// 2. 숫자 연산자 (numeric operators)
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3); //지수

//3. 증감소 연산자 (rement and decrement operators)
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter;과 같다.
console.log(`prIncrement: ${preIncrement}, counter : ${counter}`);
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1과 같다.
console.log(`postIncrement: ${postIncrement}, counter : ${counter}`);

//4. 할당 연산자(Assignment operators)
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

//5. 비교 연산자(Comparison operators)
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//6. 논리 연산자(Logical operators: ||(or) &&(and) !(not))
const value1 = false;
const value2 = 4 < 2;

// ||(or)는 처음에 true가 나오면 멈춤
console.log(`or: ${value1 || value2 || check()}`); //변수로 간단한 계산은 맨 앞으로 최우선, 복잡한 계산으로 된 건 최후에

// &&(and)는 처음에 false가 나오면 멈춤
console.log(`or: ${value1 && value2 && check()}`);

//긴 if 문을 압축하는 데 자주 사용됨
//nullableObject && nullableObject.something

function check() {
    for(let i = 0; i < 10; i++){
        //wasting time
        console.log('!!!')
    }
    return true;
}

// ! (not)
console.log(!value);

//7. 동등 (Equality)
const stringFive = '5';
const numberFive = 5;
//값
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
//유형
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
//object equality by reference 참조에 의한 객체 평등
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // reference 가 다름 false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //1과 3 reference 비교 true

//equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false(boolean 타입이X)
console.log('' == false); //true
console.log('' === false); //false (empty는 boolean 타입 X)
console.log(null == undefined); //true
console.log(null === undefined); //false

//8. If 연산자
//if, else if, else
const name = 'ellie';
if (name === 'ellie'){
    console.log('Welcome, Ellie');
}else if (neme === 'coder'){
    console.log('You are amazing coder');
}else {
    console.log('unknwon');

}
// 9. 삼항 연산자 Ternary operator: ?
console.log(name === 'ellie' ? 'yes' : 'no');

//10. Switch 문(Switch statement)
// 여러 if 검사에 사용
// 열거 형 값 검사에 사용
// TS에서 여러 유형 검사에 사용

const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away!');
        break;
        
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}    

//11. Loops
//while loop, while the condition id truthy,
//body code is executed.

let i = 3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
}

//do while 루프, 본문 코드가 먼저 실행됩니다.
// 그런 다음 조건 확인
do{
    console.log(`do while ${i}`);
    i--;
}while(i > 0);

//for 루프, for{begin; codition; step} / condition=조건
for (i = 3; i> 0; i--){
    console.log(`for: ${i}`);
}
for(let i = 3; i > 0; i= i-2){
    //inline 변수 선언
    console.log(`inline variable for: ${i}`);
}
//중첩 반복문
for (let i = 0; i < 10; i++){
    for (let j= 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

//break, continue
//Q1. iterate from 0 to 10 and print only even numbers
//use continue
//continue를 사용해서 0부터 10까지 짝수만 출력
for(let i = 0; i < 11; i++){
    if(i % 2 !== 0){
        continue;
    }
}
//Q2. iterate form 0 to 10 and print numbers until
//reaching 8 (use break)
for (let i = 0; i < 11; i++){
    if(i > 8){
        break;
    }
    console.log(`q2. ${i}`);
}