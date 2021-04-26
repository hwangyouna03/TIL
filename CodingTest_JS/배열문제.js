//N개의 정수가 주어진다. 이때 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

const num = [10, 10, 35, 30, 7];
var max = Math.max.apply(null, num); //최대값 구하기
console.log(max);
var min = Math.min.apply(null, num);
console.log(min);

//세준이는 기말고사를 망쳤다. 세준이는 점수를 조작해서 집에 가져가기로 했다.
/*일단 세준이는 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다. 그리고 나서 모든 점수를 
점수/M*100으로 고쳤다. 예를 들어 세준이의 최고점이 70이고, 수학점수가 50이었으면
수학점수는 50/70*100이 되어 71.43점이 된다. 세준이의 성적을 위의 방법대로 새로 계산했을 때 
새로운 평균을 구하는 프로그램을 작성하세요.
*/
// let M = prompt('시험 본 과목 개수 입력: ');

// const scores = [];

// for(let i =1; i<= M; i++){
//     let score = prompt('점수 입력:');
//     scores.push(score);
// }

// var max1 = Math.max.apply(null, scores);
// console.log(max1/M*100);

/*
대학생 새내기들의 90%는 자신이 반에서 평균을 넘는다고 생각한다. 당신은 그들에게
슬픈 진실을 알려줘야한다. 첫째 줄에는 테스트 케이스의 개수가 C가 주어진다.
둘째 줄부터 각 테이스 케이스마다 학생의 수 N(1 <= N <=1000 N은 정수)이 첫 수로 주어지고,
이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.
*/

const count = prompt('몇 명인지 입력하시오: ');
const scores = [];
let score;
for(let i = 1; i <=count; i++){
    score = prompt('점수를 입력하세요: ');
    scores.push(score);
}
for(let j = 0; j <scores.length; j++){
    total = score%j
    console.log(total);
}

