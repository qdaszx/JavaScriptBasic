# prototype 확장

## prototype 확장 방법

prototype을 확장하는 방법은 prototype에 프로퍼티를 연결하여 작성합니다. `prototype.name = value 형태`

name에 프로퍼티 이름을 작성합니다.

value에 JS 데이터 타입을 작성할 수 있습니다. 일반적으로 function을 작성합니다.

prototype에 null을 설정하면 더이상 확장 불가합니다.

## 프로퍼티 연결 고려사항

prototype에 연결할 프로퍼티가 많을 때, Book.prototype.name1, 2, 3 ~ N 형태는 Book.prototype을 반복해서 작성해야 하니까 번거롭습니다.

이럴 때는 `Book.prototype = {name1: value, name2: value, ...} 형태`로 작성하면 됩니다.

여기서 문제는 prototype 안에 constructor가 있다는 것 입니다. 따라서 한꺼번에 할당을 해버리면 constructor가 지워집니다.

constructor가 지워지더라도 {name1: value, ...} 형태로 설정한 후에 prototype에 constructor를 다시 연결해주는 것이 차라리 편합니다.

## constructor 연결

```js
function Book() {}
Book.prototype = {
  constructor: Book,
  setPoint: function () {},
};
var obj = new Book();
console.log(obj.constructor); // function Book(){}
```

다수의 메소드를 prototype에 연결할 때는 constructor가 지워지는 것을 고려해야 합니다. 하지만, ES5에서 constructor가 없어도 인스턴스가 생성되는데, 원래는 constructor가 있는 것이 정상이기 때문에 코드와 같이 constructor를 의도적으로 작성해줍니다.

그러나 ES6에서는 이런 것을 고민하지 않아도 됩니다.

## prototype 확장과 인스턴스 형태

```js
function Book(point) {
  this.point = point;
}
Book.prototype.getPoint = function () {
  return this.point;
};
var obj = new Book(100);
obj.getPoint();
```

```js
obj: {
  point: 100;
  __proto__ = {
    constructor: Book,
    getPoint: function () {},
    __proto__: Object,
  };
}
```

> prototype 확장 방법과 생성한 인스턴스 형태를 살펴봅니다.

생성자 함수, prototype, new 연산자로 인스턴스를 만듭니다. 전형적인 형태입니다.

function Book(point){}; function 키워드를 만나서 Book 오브젝트를 생성합니다.

Book.prototype.getPoint = function(){...}; Book.prototype에 getPoint 메소드를 연결합니다.

var obj = new Book(100); new 연산를 이용해서 인스턴스를 만들어 obj 변수에 인스턴스가 할당됩니다.

obj.getPoint(); obj 인스턴스의 getPoint() 호출합니다.

이렇게 인스턴스를 생성하면 prototype에 연결된 메소드를 `인스턴스.메소드이름() 형태`로 호출할 수 있습니다.
