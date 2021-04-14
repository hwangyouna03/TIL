'use strict';

//JavaScript is synchronou.
//Execute the code block by orger after hoisting.
//hoisting: var, function declaration
console.log('1');
setTimeout(function() {//지정한 시간이 지나면 지정한 콜백함수를 불러옴
    console.log('2');
}, 1000);//1000-> 1초
console.log('3');
//=> 1 3 2 순서대로 출력됨
//setTimeout브라우저api는 먼저 브라우저한테 요청하고 바로 응답 X,
//브라우저에서 1초가 지나고 console.log('2')를 출력

//setTimeout(() => console.log('2'), 1000); 이렇게 간단히 쓸 수 있음


//Synchronous callback 동기 콜백함수
function printImmediately(print){ //함수의 선언은 hoisting으로 맨 위로 올라감
    print();
}
printImmediately(() => console.log('hello'));
//=> 1 3 hello 2 순서대로 출력됨

//Asynchronous callback 비동기 콜백함수
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); //2초뒤로


//Callback hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'yuna' && password === 'company')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not Found')); //Error라는 object를 선언해서 not Found라고 출력
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === 'ellie') {
                onSuccess({name: 'ellie', role:'admin'});
            }else {
                onError(new Error('no access'));
            }
         }, 1000);
    }
}

const UserStorage = new UserStorage(); //클래스 생성
const id = prompt('enter your id');
const password = prompt('enter your password');
UserStorage.loginUser(
    id, 
    password,
    (user) => {
        UserStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {console.log(error);
    }
);
//콜백체인의 문제점
//1. 가독성이 떨어진다.
//어디서 어떻게 연결되어있는지 한 눈에 볼 수 없다.
//2. 에러가 발생할 경우 디버깅을 할 때 에러를 찾기 힘들다.