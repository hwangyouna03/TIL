//N개의 정수가 주어진다. 이때 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

const num = [10, 10, 35, 30, 7];
var max = Math.max.apply(null, num); //최대값 구하기
console.log(max);
var min = Math.min.apply(null, num);
console.log(min);


