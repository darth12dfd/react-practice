//기존 자바스크립트의 클래스 표현 알아보기

/*
function Shape(x,y){
    this.name = 'Shape';
    this.move(x,y);
}

//static 함수를 선언하는 예제
Shape.create = function(x,y) { return new Shape(x,y); };
//인스턴스 함수를 선언하는 예제
Shape.prototype.move = function(x,y){
    this.x = x;
    this.y = y;
}
Shape.prototype.area = function(){
    return 0;
}
//혹은
Shape.prototype ={
    move: function(x,y){
        this.x;
        this.y;
    },
    area: function() {
        return 0;
    }
};
var s = new Shape(0,0);
s.area(); //0

*/

//위와 같이 new Shape(0,0)와 같이 함수를 호출하면 this 객체에 해당하는 변수 및 함수가 prototype 객체에 선언된 변수와 함수를 함께 참조한다.
//예를 들어 Shape() 함수에는 this.move에 함수를 정의하지 않았지만 prototype 객체에 move()함수가 정의되어 있으므로 prototype 선언 이후 new 연산자로 Shape() 함수를 호출하여 Shape 객체를 s를 만든다.
// 그러면 s는 prototype 객체 안에 있는 move() 함수를 참조할 수 있다. 또한 s는 prototype에 추가로 정의된 area() 함수도 참조할 수 있습니다. 클래스의 상속은 prototype 객체의 값을 객체 내장 함수를 사용해 덮어씌우는 방식을 이용하면 된다.

/*
function Circle(x,y,radius){
    Shape.call(this,x,y);
    this.name = 'Circle';
    this.radius = radius;
}
Object.assign(Circle.prototype, Shape.prototype, {
    area: function() {
        return this.radius * this.radius;
    }
});

var c= new Circle(0,0,10);
c.area(); //100

*/

//위 코드는 Circle() 함수를 만드는 방법으로 자식 클래스를 생성한 것을 보여준다. 자식 클래스 Circle은 내장 함수 call()을 통해 부모의 생성자를 호출하여 초깃값을 상속받는다. 자바의 super()함수를 사용한 것과 같다.
//부모 클래스 함수를 상속하는 방법으로는 Object에 내장된 assign() 함수를 이용하며 이 함수에 전달한 area() 함수는 Shape.prototype에 정의된 area() 함수를 덮어씌운다. 그래서 코드를 실행하면 부모 클래스에 있는 area() 함수의 결괏값 이후 덮어쓴 area() 함수의 결괏값인 100이 출력된다.

//ES6의 클래스 사용 방법
//ES6에서는 class 키워드로 클래스를 정의하므로 코드가 훨씬 간결해진다. 코드는 아래와 같다.
class Shape {
    static create(x,y) { return new Shape(x,y); };
    name = 'Shape';
    constructor (x,y){
        this.move(x,y);
    }

    move(x,y){
        this.x = x;
        this.y = y;
    }

    area(){
        return 0;
    }
}

var s = new Shape(0,0);
s.area(); //0

class Circle extends Shape{
    constructor(x,y,radius){
        super(x,y);
        this.radius = radius;
    }
    area(){
        if(this.radius === 0) return super.area();
        return this.radius * this.radius;
    }
}

var c = new Circle(0,0,10);
c.area();

//코드를 보면 class 키워드로 Shape 클래스를 정의했으며, Shape 클래스 안에 생성자 함수도 추가되었다. 클래스 정의 표현식에는 객체가 생성될 때 함께 만들어질 변수나 클래스 변수(static)를 클래스 선언 블록 안에 같이 정의할 수 있게 변경되었다.
//또한 상속하는 경우 extends 키워드를 사용하여 Circle 클래스가 Shape 클래스를 상쇽하도록 한다. 그리고 부모의 함수를 참조할 경우 super()를 사용한다. 
//자바와 많이 비슷하나 ES6은 다중 상속이나 인터페이스는 지원하지 않는다.