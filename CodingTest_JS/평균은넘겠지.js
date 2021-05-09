/*대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 당신은 그들에게 슬픈 진실을 알려줘야 한다.

입력: 첫째 줄에는 테스트 케이스의 개수 C가 주어진다.
둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다.
점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다. 

출력: 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.

예시 입력
5 50 50 70 80 100

예시 출력
40.000%
*/

let input = [];
/*let num = prompt('학생 수 입력: '); //학생 수 입력=> N
let total= 0;

for(let i= 0; i< num; i++){ //학생 수 만큼 입력 받기
    let score = prompt('점수 입력:'); //점수 입력=> C
    score = Number(score);
    total += score;
    score++;
    
}

//오류
let result = (total/num*100).toFixed(3); 
console.log(result);*/
let n = Number(input[0]);
    
    for(let i = 1; i <= n; i++) {
        let sum = 0;
        let count = 0;
        
        let test = input[i].split(' ').map(x => Number(x));
        
        for(let j = 1; j <= test[0]; j++) {
            sum += test[j];
        }
        
        let avg = sum / test[0];
        for(let j = 1; j <= test[0]; j++) {
            if(test[j] > avg) {
                count++;
            }
        }
        console.log((count/test[0]*100).toFixed(3) + '%');
    }


