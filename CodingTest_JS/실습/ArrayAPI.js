//1. 문자열로 합쳐서 출력 -> join()사용
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result);
}

//2. string타입을 array로 바꿔서 출력 -> split()사용
{
    const fruits = '사과, 키위, 바나나'
    const result = fruits.split(','); //구분자 넣어줘야함
    console.log(result);
}

//3. 배열 순서 거꾸로 출력 -> reverse() 사용
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
}
//4. 앞에 1, 2번째 요소를 제외한 나머지 3개로 새로운 배열 생성 -> splice
{
    const array = [1, 2, 3, 4, 5];
    //const result = array.splice(2, 5); //기존 요소를 삭제 또는 교체해 새 요소 추가하여 배열의 내용 변경
    const result = array.slice(2, 5); //원본 배열은 수정X, begin부터 end전까지 새로운 배열 객체로 반환
    console.log(result);
    console.log(array);
}

function Test(){
    var test = [
        {name: '안녕', age: 15, gender: '여'},
        {name: '바이', age: 15, gender: '남'},
        {name: '김나나', age: 19, gender: '남'},
        {name: '이미림', age: 22, gender: '여'},
        {name: '나미림', age: 30, gender: '여'}
    ]

    //여자인 사람만 출력해보기
    const result = test.filter((people) => people.gender === '여');
    console.log(result);

}


function APItest(){
    //reduce나 map을 활용해 홀짝 확인하기
    let arr = [1, 3, 5, 7, 34, 8, 10];
    let result1 = arr.map((v) => {
        if(v%2==0){
           return '짝수';
        }else if(v%2 == 1){
            return '홀수';
        }
    });
    console.log(result1);

    let result = arr.map((v) => {
        if(v%2) {
            return '홀수';
        }
        return '짝수';
    });
    console.log(result);
    test2();

    function test2() {
        //filter와 indexOf를 이용해서 중복값 제거
        let arr2 = [1, 1, 2, 3, 5, 7, 8, 8];
        let result2 = arr2.filter((value, index) => {
            return arr2.indexOf(value) === index ;
        });
        console.log(result2);
    }
}
APItest();