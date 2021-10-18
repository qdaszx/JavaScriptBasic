# prototype, 상속

## prototype 오브젝트 목적

목적은 **prototype 확장**입니다.

prototype에 프로퍼티를 연결하여 prototype을 확장합니다.

이처럼 Book.prototype.getPoint = function(){} 등등 연결해서 prototype을 확장하는 것 입니다.

그리고 프로퍼티 공유입니다.

생성한 인스턴스에서 원본 prototype의 프로퍼티를 공유합니다.

예를 들면, var obj = new Book(123); new Book으로 인스턴스를 만들고 obj.getPoint(); 인스턴스.getPoint를 호출하면 인스턴스에 있는 getPoint를 호출하는 것이 아니라 Book.prototype를 호출하게 됩니다. getPoint를 각 인스턴스에서 공유하게 되는 것입니다.

만약에 공유가 아닌 복사하는 개념으로 간다면 만개를 만들면 getPoint가 만개가 생긴다 그러면 논리가 안맞기에 원본을 악세스할 수 있는, 호출할 수 있는 패스만을 만들어 놓는 것 입니다. 이것이 공유 개념입니다.

또 공유 개념에는 프로퍼티 쉐어링이라는 용어를 씁니다. 이것 외에도 또 하나가 있습니다.

인스턴스 상속(Inheritance)는 function 인스턴스를 연결하여 상속합니다. Point.prototype = new Book(); 이것 또한 prototype에 확장이라고 볼 수 있습니다.

## 인스턴스 상속

인스턴스 상속 방법은 prototype에 연결된 프로퍼티로 인스턴스를 생성하여 상속받을 prototype에 연결합니다. 그래서 이것은 prototype-based 상속이라고도 부릅니다.

```js
function Book(title) {
  this.title = title;
}
Book.prototype.getTitle = function () {
  return this.title;
};
function Point(title) {
  Book.call(this, title);
}
Point.prototype = Object.create(Book.prototype, {});
var obj = new Point("자바스크립트");
console.log(obj.getTitle()); // 자바스크립트
```

자바스크립트에서 prototype 상속보다는 프로퍼티 연결이 의미가 더 큽니다. 인스턴스 연결도 프로퍼티 연결의 하나 입니다.

ES5 상속은 OOP의 상속 기능이 부족합니다. 예를 들면, 상속 받은 프로퍼티를 참조하는 super 키워드 같은 게 없습니다. 그런데 ES6에서는 그러한 키워드를 지원합니다.

상속을 구현할려면 ES6의 Class 상속을 사용해야 합니다.

```js
class Book {
  constructor(title) {
    this.title = title;
  }
  getTitle() {
    return this.title;
  }
}
class Point extends Book {
  constructor(title) {
    super(title);
  }
}
const obj = new Point("자바스크립트");
console.log(obj.getTitle()); // 자바스크립트
```
