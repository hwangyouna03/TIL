'use strict';

//Array
//1. 배열 선언 Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position 접근 방법
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruets[0]);
console.log(fruits.length - 1); //마지막 배열 index 접근방법

console.clear();

//3. Looping over an array
//print all fruits
//1) for
for (let i = 0; i< fruits.length; i++){
    console.log(fruits[i]);
}
//2) for of
for(let fruit of fruits) {
    console.log(fruit);
}
//3) forEach
fruits.forEach((fruit) => console.log(fruit, index));//콜백함수를 불러옴


//4. Addtion, deletion, copy
// push: add an item to the ed
fruits.push('딸기', '복숭아');
console.log(fruits);

//pop: remove an item from the end
fruits.pop(); //뒤에 있는 복숭아 item이 삭제됨
console.log(fruits);

//unshift: add an item to the benigging 앞에서부터 들어감
fruits.unshift('배');
console.log(fruits);

// shift : remove an item from the benigging 앞에서부터 삭제됨
fruits.shift();
console.log(fruits);

//shift와 unshift는 pop과 push보다 매우 느리다 !!
//앞에서 데이터를 넣게 되려면 뒤에 있는 데이터를 다음 뒤에 있는 데이터 박스에 넣어
//앞 데이터 공간을 만들어줘야하기 때문에 선언할 때마다 반복적으로 이런 일을 수행하기 때문에
//뒤에서하는 pop과 push보다 느리다. 

//splice: remove an item by index position
fruits.push('포도', '레몬');
console.log(fruits);
//fruits.splice(1); //몇 개나 지울지 쓰지 않으면 다 지워짐
fruits.splice(1, 2);//몇번 인덱스부터 몇개까지 지울건지

//combine two arrays 2개의 배열을 결합하다
const fruits2 = ['오렌지', '키위'];
const newFruits = fruits.concat(fruit2);
console.log(newFruits);

//5. Searching 검사
//find the index
console.clear();
console.log(fruits);
//1) indexOf : '문자'가 배열 인덱스 몇번에 있는지 출력
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('바나나'));
//2) includes : '문자'가 배열에 들어있는지 boolean타입으로 반환
console.log(fruits.includes('키위'));
console.log(fruits.includes('수박'));//인덱스에 없을 경우 -1 출력
//3) lastIndexOf
console.clear();
fruits.push('사과'); //똑같은 문자가 또 배열에 들어가면 어떻게 될까?
//IndexOf를 만나면 제일 처음에 있는 인덱스 값들을 리턴함
//반대로 lastIndexOf는 마지막 인덱스 값을 출력해줌
console.log(fruits);

