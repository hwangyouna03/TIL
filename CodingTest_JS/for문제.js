//N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오.
//출력 형식에 맞춰서 출력하면 된다.

// let N = prompt('몇 단?');
// for(let j = 1; j<=9; j++) {
//     console.log(N,'*', j,'=', N*j);
// }

//n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
let n = prompt('숫자 입력: ');
n = Number(n);
for(let i = 1; i<= n; i++){
    console.log(n,'+', i,'=', i + n );
}

//자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오
//5 -> 1, 2, 3, 4, 5
//! 펙토리얼 문제
let N = 5;
for(let j = 1; j <= N; j++){
    document.write(j);
}
document.write('<br');

//console.log()은 알아서 <br>처리
//document.write()은 한 줄 처리 -> 웹사이트에 출력

//별 찍기
for(let i = 0; i < 5; i++){
    for(let j = 0; j <=i; j++){
        document.write('*');
    }
    document.write('<br>');
}

