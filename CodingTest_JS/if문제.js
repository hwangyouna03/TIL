//두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.
//A가 B보다 큰 경우 '>'를, 작은 경우'<' 출력, 같은 경우 '==' 출력
// let A =30;
// let B = 10;
// if(A >B){
//     console.log('A > B');
// }else if(A < B){
//     console.log('A < B');
// }else{
//     console.log('A==B');
// }

//시험 성적
//시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
// let score = prompt('점수 입력: ');
// if(score >= 90){
//     console.log('A');
// }else if(score >= 80){
//     console.log('B');
// }else if(score >= 70){
//     console.log('C');
// }else if(score >=60){
//     console.log('D');
// }else{
//     console.log('F');
// }

//연도가 주어졌을 때 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.
//윤년은 연도가 4의 배수이면서 100의 배수가 아닐 때 또는 400의 배수일 때이다.
/*예를 들어 2012년의 4의 배수이면서 100의 배수가 아니라서 윤년이다. 1900년은 100의 배수이고 400의 배수는
아니기 때문에 윤년은 아니다. 하지만 2000년은 400의 배수이기 때문에 윤년이다.
입력: 첫째 줄에 연도가 주어진다. 연도는 1보다 크거나 같고, 4000보다 작거나 자연수이다.
*/
// let num = prompt('연도 입력: ');
// num = Number(num);
//     if(num%4==0){
//         console.log('1');
//     }else{
//         console.log('0');
//     }


//사분면 고르기
//흔한 수학문제 중 하나는 주어진 점이 어느 사분면에 속하는지 알아내는 것이다. 사분면은
/*아래 그림처럼 1부터 4까지 번호를 갖는다. 예를 들어 좌표가 (12, 5)인 점 A는 x좌표와 y좌표가 모두 양수이므로
제1사분면에 속한다. 점 B는 x좌표가 음수이고 y좌표는 양수이므로 제 2사분면에 속한다.
점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오. 단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다.
https://www.acmicpc.net/problem/14681
ex) 12 5 -> 1
    9 -13 -> 4
*/

// let x = prompt('x좌표 입력: ');
// let y = prompt('y 좌표 입력: ');
// x = Number(x);
// y = Number(y);

// if(x > 0 && y >0){
//     console.log('1');
// }else if(x <0 && y >0){
//     console.log('2');
// }else if(x <0 && y <0){
//     console.log('3');
// }else if(x > 0 && y < 0){
//     console.log('4');
// }

/*상근이는 매일 아침 알람을 듣고 일어난다. 알람을 듣고 일어나면 다행이겠지만,
항상 조금만 더 자려는 마음 때문에 매일 학교를 지각하고 있다. 상근이는 모든 방법을 동원
해보았지만 조금만 더 자려는 마음은 그 어떤 것도 없앨 수가 없었다. 이런 상근이를 불쌍하게 보던,
창영니는 자신이 사용하는 방법을 추천해주었다. 바로 45분 일찍 알람 설정하기이다.
이 방법은 단순하다. 원래 설정되어 있던 알람을 45분 앞서는 시간으로 바꾸는 것이다. 
어차피 알람 소리를 들으면 알람을 끄고 더 잘 것이기 때문이다. 이 방법을 사용하며, 매일 아침 더
잤다는 기분을 느낄 수 있고 학교도 지각하지 않게 된다.
현재 상근이가 설정한 알람 시각이 주어졌을 때 창영이의 방법을 사용한다면, 이를 언제로 고쳐야
하는 지 구하는 프로그램을 작성하시오.

입력: 첫째 줄에 두 정수 H와 M이 주어진다. 
(0 <= H <= 23, 0 <= M <= 59) 상근이가 설정해놓은 알람 시간 H시 M분 의미.
입력 시간은 24시간 표현을 사용한다. 24시간 표현에서 하루의 시작은 0:0이고, 끝은
23:59분이다 시간을 나타날 때 불필요한 0을 사용하지 않는다.

예시 입력 10 10 -> 9 25
예시 입력 0 30 -> 23 45
*/

//0 <= H <=23
//0 <= M <= 59
let H = prompt('몇 시');
let M = prompt('몇 분');
H = Number(H);
M = Number(M);



if(0<=H <=23 && M <= 59){
    if(M -= 45){
        console.log(H-1,':', M);
    }
}

    
