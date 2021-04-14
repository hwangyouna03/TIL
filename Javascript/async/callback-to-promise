'use strict';

//Callback Hell example
class UserStorage {
    loginUser(id, password){
        return new Promeise((resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'yuna' && password === 'company')
                ){
                    resolve(id);
                }else{
                    reject(new Error('not Found')); //Error라는 object를 선언해서 not Found라고 출력
                }
            }, 2000); 
    });
}
        
    getRoles(user){
        return new Promise((resove, reject)=> {
            setTimeout(() => {
                if(user === 'ellie'){
                    resove({name: 'ellie', role: 'admin'});
                }else{
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }
}

const UserStorage = new UserStorage(); //클래스 생성
const id = prompt('enter your id');
const password = prompt('enter your password');

UserStorage.loginUser(id, password) //login이 성공하면 user 전달
.then(UserStorage.getRoles) //user가 전달받으면 getRoles를 호출
.then(user =>  alert( //성공적으로 된다면 alert이 됨
    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`))
.catch(console.log);

