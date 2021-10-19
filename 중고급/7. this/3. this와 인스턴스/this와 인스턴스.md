## this와 인스턴스

인스턴스의 목적은 인스턴스마다 고유 값을 유지하는데 있습니다.

인스턴스에서 this의 목적은 this로 인스턴스를 참조하여 this.name 형태로 프로퍼티에 접근할려는 것 입니다.

name의 값이 function 오브젝트이면 name은 메소드 이름이 되고, 값이 Number 형태이면 name은 프로퍼티 이름이 됩니다.

new 연산자로 인스턴스를 생성하면 prototype 연결된 프로퍼티가 인스턴스의 `__proto__`에 첨부됩니다.

그러면 this.method() 형태로 `__proto__`에 첨부된 method()를 호출할 있습니다.

여기서 prototype에 연결된 메소드는 모든 인스턴스에서 공유합니다. 그리고 인스턴스마다 공유의 값을 유지합니다.

일관된 환경안에서 값만 다르게 가져 가겠다. 즉, 데이터 중심의 처리입니다.

```js
var book = {}; // book 오브젝트를 만듦
book.Point = function (point) {
  // 생성자 함수를 선언
  this.point = point;
};
book.Point.prototype.getPoint = function () {
  // prototype에 getPoint 메소드를 연결
  console.log(this.point);
};
var obj = new book.Point(100); // new 연산자로 생성자 함수를 호출하여 인스턴스 생성
obj.getPoint(); // 100
```

var obj = new book.Point(100); book.Point 인스턴스를 생성합니다. 그리고 넘겨준 100을 this로 참조하는 인스턴스에 point 프로퍼티로 값을 할당합니다

this.point = point; this가 생성한 인스턴스를 참조하므로 point가 인스턴스 프로퍼가 됩니다. 이 논리로 인스턴스마다 프로퍼티 이름과 값을 유지할 수 있습니다.

obj.getPoint(); obj 인스턴스의 getPoint() 메소드 호출합니다.

이때 this는 getPoint 앞에 작성한 obj 인스턴스를 참조하게 됩니다.

즉, 현재의 인스턴스 전체를 참조하게 됩니다.

---

> 인스턴스마다 값을 가져갈 수 있다 `__proto__`에 전체 인스턴스에서 공유할 수 있는 메소드를 갖고 있습니다.

이것은 Class 관점에 접근입니다. Class는 하나의 덩어리입니다. 데이터 중심입니다. 그리고 하나의 클래스에는 관련된 메소드들이 존재하게 됩니다.

가독성과 유지 보수하기 좋습니다. 확장성 있는 시스템을 만들 수 있습니다.
