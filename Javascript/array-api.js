//Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result);
}

//Q2. make an array out of a string
{
    const fruits = '사과, 키위, 바나나, 체리';
    const result = fruits.split(',');
    console.log(result);

}
//Q3. make this array look this : [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse(); //배열 자체를 리턴
    console.log(result);
    console.log(array);
}
//Q4. make new array without the first tow elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 4); //배열 특정한 부분을 return 
    console.log(result);
    console.log(array);
}
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

//Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    //const result = students.find(funtion(student)){
        //return student.score == 90;
    //});
    console.log(result);
    //find: 콜백함수를 만들어서 전달 
}

//Q6. make an array of enrolled student 수업 중인 학생들 찾기
//enrolled -> true
{
    const result = student.filter((student) => student.enrolled);
    console.log(result);
}

//Q7. make an array contaning only the student's scores
//      result should be [45, 80, 90, 66, 88]
//map: 지정되어있는 콜백함수를 호출시키면서 배열 안에 있는 요소를 한가지, 한가지 변경해줌
{
    const result = students.map((student) => student.score);
    console.log(result);
}

//Q8. check if there is a student with the score lower than 50
{
    console.clear();
    //배열에 어떤 것 하나라도 있을 경우-> some
    const result = student.some((student)=> student.score< 50 );
    console.log(result);

    //배열에 모든 것이 만족되어야 할 경우 -> every
    //const result2 =!  students.every((student) => student.score >= 50);
    //console.log(result2);
}

console.clear();
//Q9. compute student's average score
{
    //배열의 있는 모든 요소들의 값을 누적하는, 함께 모아놓을 때 사용
    //reduceRight: 배열 맨 끝부분부터
    const result = student.reduce((prev, curr) => {
        console.log('-------------')
        console.log(prev); //이전 값
        console.log(curr);
        //return curr;//리턴할 때 prev값으로 반환
        return prev + curr.score;

    }, 0);
    console.log(result/students.lenght);//평균
}

//Q10. make a string containg all the scores
//result should be: '45, 80, 90, 66, 88'
{
    const result = students.map(student => student.score).join;
    conole.log(result); //map=새로운 배열이 리턴
}

//Q11. do Q10 sorted in ascending order
//result should be : '45, 66, 80, 88, 90'
{
    const result = students.map(student => student.score)
    .sort((a, b) => a - b) //높은 것이 먼저(b-a일 경우 낮은 것이 먼저)
    .join();
    console.log(result);
}