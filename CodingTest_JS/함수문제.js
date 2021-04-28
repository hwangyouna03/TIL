/*정수 N개의 합
정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.
 */
function Num(){
    let N = 5;
    let sum = 0;
    //sum = Number(N);은 문자열일 때 가능 -> NaN출력됨
    for(let i = 1; i<=N; i++){
        sum += i;
    }
    console.log('sum:', sum);
}
Num();


//셀프넘버
/*셀프 넘버는 1949년 인도 수학자 D.R. Kaperekar 가 이름 붙였다. 양의 정수
n에 대해서 d(n)을 n과 n읙 각 자리 수를 더하는 함수라고 정의하자.
예를 들어d(75) = 75+ 7+5+87이다.
양의 정수 n이 주어졌을 때, 이 수를 시작해서 n d(n), d(d(n)), d(d(d(n)))과 같은
무한 수열을 만들 수 있다. 예를 들어 33으로 시작한다면 다음 수는 33 + 3+ 3 = 39이고,
그 다음 수는 39+3+9 = 51, 다음 수는 51+ 5+1+57이다. 이런 식으로 다음과 같은 수열을 만들 수 있다.
n을 d(n)의 생성자라고 한다. 위의 수열에서 33은 39의 생성자이고, 39는 51의 생성자, 51은 57의
생성자이다. 생성자가 한 개보다 많은 경우도 있다. 예를 들어 101은 생성자가 2개(91, 100)이 있다.
생성자가 없는 숫자를 셀프 넘버라고 한다. 100보다 작은 셀프 넘버는 총 13개 있다.
1, 3, 5, 7, 9, 20, 31, 42, 53, 64, 75, 86, 97

10000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 증가하는 순서로 출력
*/
function selfNumber() {

}
/*
어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다.
등차 수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. N이 주어졌을 때, 1보다 크거나
같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오.

110 -> 99
1-> 1
210 -> 105
*/
function Sequence() {
    
}