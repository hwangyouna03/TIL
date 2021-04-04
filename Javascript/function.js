//Function
// - 프로그램의 기본 구성 요소
// - 서버 프로그램은 여러 번 가능
// - 작업을 수행하거나 값을 계산하는 역할을 한다.

// 1. Function declaration 함수 선언
// function name(param1, param2) {body... return ;}
// 하나의 함수는 한 가지 일만 하도록 만든다.
// function is object in JS

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello!');
log(1234);

//2. Parameters 매개변수
// premitive parameters : 값을 전달해줌
// objcet parameters : 레퍼런스를 전달해줌
function changeName(obj){
    obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Defaul parameters (add in ES6)
function showMessage(message, from){
    console.log(`${message} by ${from}`)
}
showMessage('Hi'); //from은 정의 되어있지 않으므로 undefined

function showMessage2(message, from = 'unknown'){
    console.log(`${message} by ${from}`)
}
showMessage2('Hi'); //from은 정의 되어있지 않으므로 undefined

//4. Rest parameters (added in ES6)
function printAll(...args){ //배열 출력
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}
PrintAll('shop', 'coding', 'java');

/*for (const arg of args){
    console.log(arg); //배열 간단히 출력
}
*/

// 5. Local scope 지역 범위
let globalMessage = 'global'; // 전역변수
function printMessage(){
    let message = 'hello';
    console.log(message); //지역변수
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage); //error
    //undefined
    
}
printMessage();
//차에 선팅을 입히듯 안에서는 밖을 볼 수 있지만 밖에서는 안을 볼 수 없다.

//6. Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1,2)}`);

//7. Early return, early exit
//안좋은 예시)
function upgradeUser(user){
    if(user.point > 10){
        //long upgrade logic...
    }
}
//좋은 예시)
function upgradeUser(user) {
    if (user.point <= 10){
        return;
    }
    //long upgrade logic...
}



//1. 함수 표현
//function declaration이 hosited가 됨 (함수 선언 하기 전 호출 가능)
const print = function() { //이름없는 함수 == anoymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. 함수 표현식을 사용한 callback 함수
function randomQuiz(answer, printYes, printNo){
    if(answer ==='love you'){
        printYes(); //printYes콜백 함수 호출
    }else{
        printNo();//printNo콜백 함수 호출
    }
}
//이름이 없는 anoymous function
const printYes = function() {
    console.log('yes!');
}
//이름이 있는 named function
const printNo = function print() {
    console.log('no!');
    //print(); 함수 안에서 자기 자신을 부르는 것을 recursions라고 함
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function 
//항상 anoymous function을 사용한다.
//함수를 간결하게 만들어줌
/*원래 우리가 아는 함수 
const simplePrint = function () {
    console.log('simplePrint!');
};*/

//바꾼 Arrow function
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;

//IIFE: Immediately Invoked Function Expression
// 함수를 선언함과 동시에 뒤에 선언하듯이 (); 붙여줌 -> 함수 호출
(function hello() {
    console.log('IIFE');
})();
