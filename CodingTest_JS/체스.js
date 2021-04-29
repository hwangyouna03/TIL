/*
설명: 체스판은 8*8 크기이고, 검정 칸과 하얀 칸이 번갈아가면서 색칠되어있다.
가장 왼쪽 위칸(0, 0)은 하얀색이다. 체스판의 상태가 주어졌을 때, 하얀칸 위에
말이 몇 개 있는지 출력하는 프로그램을 작성하시오.

입력: 첫째 줄 부터 8개의 줄에 체스판의 상태가 주어진다. '.'은 빈칸이고
F는 위에 말이 있는 칸이다.

풀이: 2중 for문을 이용하여 체스판을 만든 뒤, 짝수번째 줄일 경우에는 짝수번째
칸에서 확인하고 홀수번째 줄일 경우에는 홀수번째 칸에서 확인합니다.

*/

function Chess(){
    var chessboard = [];
    for(let i = 0; i < 8; i++){
        if(i%2 == 0){
            document.write('흰');
        }else if(i%2 == 1){
            document.write('검');
        }
        for(let j = 0; j < 8; j++){
            if(j%2 == 0){
                document.write('흰');
            }else if(j%2 == 1){
                document.write('검');
            }
        }
        document.write('<br>');
       
    }
    
}
Chess();

