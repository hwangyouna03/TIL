//Object
//object = key와 value의 집합체

const obj1 = {}; //object literal
const obj2 = new Object(); //object constructor

function print(person){
    console.log(personname);
    console.log(person.age);
}

const yuna = {name: 'yuna', age: 4};
print(yuna);

yuna.hasJob = true;
console.log(yuna.hasJob);

//delete yuna.hasJob; 뒤늦게 생성도 가능하지만 삭제도 가능

//2. Computed properties 계산된 프로퍼티
//properties type = stirng type
console.log(yuna.name); //평상시 코드 짤 때 사용
console.log(yuna['name']);//실시간으로 원하는 값을 받아오고 싶을 때 사용
ellie['hasJob'] = true;
console.log(yuna.hasJob);

function printValue(obj, key){
    //console.log(obj.key); //obj에 key라는 프로퍼티가 들어가있니? 아니 들어있지않아
    console.log(obj[key]);//=> 이렇게 써야함
}
printValue(yuna, 'name');

//3. Property value shorthand
const person1 = {name:'bob', age:2};
const person2 = {name:'steve', age:3};
const person3 = {name:'dave', age:4};
const person4 = new Person('yuna', 19);
console.log.person(person4);

//4. Constructor Function
function makePerson(name, age){//34, 35, 36번줄의 귀찮음을 줄이기 위한 방법
    this.name = name;
    this.age = age;
}

//5. in operator: 해당하는 object안에 key가 있는지 없는 지 확인
console.log('name' in yuna);
console.log('age' in yuna);
console.log('random' in yuna);

//6. for ..in vs for ..of
// for(key in obj){
console.clear(); // 이전 log 지워짐
for (key in yuna){ //yuna가 가지고 있는 key들이 블럭을 돌 때마다 key라는 지역변수에 할당
    console.log(key);
}

//for (value fo iterable)
const array = [1, 2, 3, 4];
for(value of array) { //for무을 돌릴 필요 X
    console.log(value);
}

//7. cloing
const user = {naem: 'yuna', age:19};
const user2 = user;
user2.name = 'coder'; //user를 가리키고 있는 object가 coder로 바뀜
console.log(user);

//예전 방법
const user3 = {};
for (key in user) { //user에 있는 key(name, age)돌고 있음
    user3[key] = user[key];
}
console.clear();
console.log(user3)

const user4 = Object.assign({}, user);//비어있는 변수,전달해서 바로 복사하고자하는 object
console.log(user4);

//another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixex.color); //blue 출력
console.log(mixed.size); //big 출력
//값이 덧붙임