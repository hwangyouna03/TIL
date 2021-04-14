//async & await
//clear style of using promise

const { anySeries } = require("async");

//1. how to async
async function fetchUser() {
    //return new Promise((resolve, reject) => {
    //do network reqesust in 10 secs..
    //resolve('yuna');
   // });
   return 'yuna';//async를 쓰면 자동적으로 Promise로 만들어줌
}

const user = fetchUser(); //함수 실행 -> function -> user에 yuna 들어감
user.then(console.log);
console.log(user); //yuna 출력

//2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms)); //ms가 지나면 resolve를 호출
}

async function getApple() {
    await delay(2000); 
    return '사과';
}

async function getBanana() {
    await delay(1000);
    return '바나나';
}

/*function pickFruits() { //콜백 지옥
    return getApple()
    .then(apple => {
        return getBanana()
        .then(banana => `${apple} + ${banana}`);
    });
}*/

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    //const apple = await getApple();//사과 호출하고 기다려
    //const banana = await getBanana(); //바나나 호출하고 기다려
    const apple = await applePromise(); //사과와 바나나를 동시에 기다렸다가 출력
    const banana = await bananaPromise();
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

//3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])//배열에 넣음
    .then(fruits => fruits.join('+')); //과일에 배열이 전달받음 (과일을 string으로 묶는 것 = join)
}
pickAllFruits().then(console.log);

function pickOnlyOne() {//배열에 전달된 가장 먼저 값을 리턴하는 아이만 전달됨
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);


