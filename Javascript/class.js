'use strict';
//class: template
//object: instance of a class

// 1. Class declarations
class Person {
    //constructor 생성자 -> 나중에 object를 만들 때 필요한 데이터를 전달
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; //this.age = getter호출 / = age; = setter 호출
    }

    get age() {
        return this._age;
    }
    set age(value) { //값 설정
        this._age = value < 0 ? 0: value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields(public, private)
class Experiment {
    publicField = 2; //public -> 외부 접근 가능
    #privateField = 0; //#태그를 사용하면 private -> 내부에서만 읽고 변경 가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //최신 문법이어서 babel 이용해야함

// 4. Static properties and methods
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
//console.log(article1.publisher);//object의 publisher
console.log(Article.publisher); //object는 클래스 자체에 붙어있어서 이렇게 써야함
Article.printPublisher();

// 5. Inheritance 상속과 다양성 
// a war for one class to extend another class
class Shape { //부모 클래스 
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return wieth * this.height;
    }
}

class Rectangle extends Shape {} //자식 클래스
class Triangle extends Shape { 
    //다양성 -> 필요한 함수만 재정의(=오버라이딩)
    //재정의된 함수만 호출되는데 super를 사용하면
    //부모의 메서드도 호출할 수 있다.
    draw() {
        super.draw();
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height)/2;
    }
    toString(){
        return `Triangle: color ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea()); 

const triangle = new Triangle(20, 20, 'red');
rectangle.draw();
console.log(triangle.getArea());

// 6. Class checking : instanceOf  (= object가 이 클래스를 이용하여 만들어진 건지 확인함)
console.log(rectangle instanceof Rectangle);//true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
//object 클래스들은 자바스크립트에 있는 object를 상속한 것
console.log(triangle instanceof Object); //true 
//자바스크립트에 모든 object는 다 object를 상속받은 것
console.log(triange instanceof toString);


