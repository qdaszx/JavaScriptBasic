# this와 prototype

## this로 인스턴스 참조

this로 메소드를 호출한 인스턴스 참조합니다.

var obj = new Book(); 인스턴스를 만들고 obj에 할당합니다.

obj.get() 형태로 호출하면 get 메소드 안에서 this로 obj를 참조합니다.

인스턴스 안에서 메소드를 호출하는 방법은 Book prototype에 연결된 프로퍼티가 `__proto__`에 설정됩니다.

인스턴스 프로퍼티가 됩니다. 인스턴스 프로퍼티란 this.prototype.setPoint() 형태가 아닌 prototype을 제외하고 this.setPoint() 형태로 호출하는 것을 뜻합니다.

인스턴스 프로퍼티가 되면 `this.setPoint()`형태로 호출할 수 있게 됩니다. 이때 this는 obj를 참조하게 됩니다.

## this와 prototype

```js
function Book() {
  console.log("1:", this.point); // 1:undefiend
}
Book.prototype.getPoint = function () {
  this.setPoint();
  console.log("2:", this.point); // 2: 100
};
Book.prototype.setPoint = function () {
  this.point = 100;
};
var obj = new Book();
obj.getPoint();
```

this와 prototype에 관계입니다. 위 코드를 보면 생성자 함수, prototype.getPoint 메소드가 연결되어 있고, setPoint 메소드가 만들어져 있고, new 연산자로 Book 생성자 함수를 호출하게 되면 인스턴스를 만들고 생성자 함수로 이동하게 됩니다.

이때 this.point를 출력하게 되는데 this는 인스턴스를 참조하게 됩니다. 그런데 point 프로퍼티가 없습니다. point 프로퍼티가 없더라도 에러가 나지 않고 undefined를 반환합니다.

이것이 변수와 인스턴스 프로퍼티의 차이 입니다.

인스턴스.getPoint() 메소드를 호출하게 됩니다. getPoint 메소드에서 this가 메소드를 호출한 인스턴스를 참조합니다. 여기서 this는 obj입니다. obj 인스턴스를 this로 참조하게 됩니다.

this가 인스턴스를 참조하니까 인스턴스 안에 setPoint 메소드가 있기 때문에 setPoint 메소드를 호출할 수 있습니다.

바로 이런 점이 단일 함수를 사용하는 것과 인스턴스를 사용하는 것에 차이입니다.

인스턴스 안에서는 prototype에 연결되어 있는 것은 하나의 프로퍼티 개념입니다. 그래서 this로 호출할 수 있는 것 입니다.

setPoint 메소드에 this는 obj 인스턴스를 참조하게 됩니다. 그래서 obj 인스턴스의 point에 100을 할당하게 됩니다.

그리고 this.point를 출력하게 되면 obj 인스턴스를 참조해 100을 할당한 point를 출력합니다.

## prototype 메소드 직접 호출

```js
function Book2(point) {
  this.point = point;
}
Book2.prototype.getPoint = function () {
  return this.point;
};
var obj2 = new Book2(100);
console.log(obj2.getPoint()); // 100
console.log(Book.prototype.getPoint()); // undefined
```

위 코드는 생성자 함수가 있고, prototype이 있고, new 연산자로 인스턴스를 생성합니다. 그리고 인스턴스에 getPoint를 호출하고, Book.prototype.getPoint()로 메소드를 호출합니다.

Book.prototype을 obj.getPoint() 형태로 호출하게 되면 getPoint 메소드의 this가 obj를 참조하게 됩니다.

그런데 Book.prototype.getPoint()으로 호출하게 되면 prototype을 this가 참조하게 됩니다.

전자로 호출하게 되면 100이 생성자 함수 point로 가게 됩니다. 그리고 getPoint 메소드에 인스턴스로 참조하게 되어 getPoint 메소드에 this.point는 100이 반환됩니다.

그런데 후자로 호출하게 되면 this가 prototype을 참조하게 되고 prototype은 오브젝트이고 getPoint 메소드 안에 this가 참조할 오브젝트에 point에 대한 값이 없으므로 this.point는 undefined가 됩니다.
