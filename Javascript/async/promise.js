'use strict';

//Promise is a JavaScript object for asynchronous operation.(비동기)
//state(상태): pending -> fulfilled state or rejected state
//Producer vs Consumer

//1. Producer
//새로운 promise가 만들어질 때는 우리가 전달한 executor라는 함수가 바로 자동적으로 실행된다.
const promise = new Promise((resolve, reject) => {
    //doing some heavy work(network, read files)
    console.log('doing something...');
    setTimeout(() => {
        //성공적으로 네트워크로 받아온 혹은 파일에서 읽어온 데이터를 resolve로 전달
        //resolve('ellie'); //성공했다면
        reject(new Error('no network')); //실패했다면
    }, 2000);
});

//2. Consumers: then, catch, finally
//값이 정상적으로 수행된다면 값을 받아올거야
promise
.then((value) => {
    console.log(value);
})//에러 처리
.catch(error => {
    console.log(error);
})
.finally(() => {//무조건 실행
    console.log('finally'); 
});

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000); //1이 전달
});

fetchNumber //1이 전달 되면 
//then은 값을 바로 전달 가능 or Promise를 전달
//비동기 적인 것을 묶어서 처리 가능
.then(num => num *2) //1 *2
.then(num => num *3)// 2*3
.then(num => { //6이 전달
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num-1), 1000); //6 - 1
    });
})
.then(num => console.log(num)); //5를 전달

//4. Error Handling
//3가지의 promise를 리턴
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error ! ${hen} => 알`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 달걀프라이`), 1000);
    });

getHen()
.then(hen => getEgg(hen))//egg로 전달
//.then(getEgg)로 생략 가능
.catch(error => { //계란을 가져오는데 문제가 생길 때
    return '빵';
})
.then(egg => cook(egg))//meal로 전달
//.then(cook)로 생략 가능
.then(meal => console.log(meal))
//.then(console.log)로 생략 가능
.catch(console.log); //57번 reject 에러처리

/*getHen()
.then(getEgg)
.then(cook)
.then(console.log);*/