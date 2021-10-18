# prototype 프로퍼티 공유 시점

## 프로퍼티 공유 시점

프로퍼티 공유 시점은 사용하는 시점에 prototype의 프로퍼티를 공유합니다.

즉, 메소드를 호출하는 시점에 prototype의 메소드를 공유합니다.

prototype의 프로퍼티로 인스턴스를 생성하지만 인스턴스의 프로퍼티는 원본 prototype의 프로퍼티를 참조합니다.

그렇다고 해서 인스턴스를 생성할 때, 복사하여 갖고 있는 개념은 아닙니다.

인스턴스의 메소드를 호출하면 원본 prototype의 메소드를 호출합니다.

따라서 원본 prototype에 메소드를 추가하면 생성된 모든 인스턴스에서 추가한 메소드를 사용할 수 있습니다. 왜냐하면 사용하는 시점에 원본 prototype의 프로퍼티를 공유하기 때문입니다.(= 원본 prototype의 메소드를 호출하기 때문입니다.)

## 프로퍼티 공유 시점 예제

```js
function Book() {
  this.point = 100;
}
var obj = new Book();
console.log(obj.getPoint); // undefined

Book.prototype.getPoint = function () {
  return this.point;
};
var result = obj.getPoint();
console.log(result); // 100
```

위 코드는 Book 생성자 함수가 있고 인스턴스.point에 100을 할당하는 코드가 있습니다. new 연산자로 Book 함수를 호출하게 되면 this.point 코드를 실행하게 됩니다.

var obj = new Book(); 인스턴스를 생성하여 obj에 할당됩니다.

console.log(obj.getPoint); obj 인스턴스에 getPoint를 출력합니다. 당연히 없습니다. 그래서 undefined가 출력됩니다.

Book.prototype.getPoint = function(){return this.point;}; Book.prototype에 getPoint 메소드를 추가합니다. 이제 obj 인스턴스에서 getPoint 메소드를 사용할 수 있습니다.

인스턴스.getPoint 메소드를 호출하면 호출이 되는데 그전에는 안되었지만 인스턴스를 만들고 난 후에 추가하더라도 호출하는 시점에 getPoint 존재 여부를 체크하고 있으면 호출한다는 것 입니다.

> 상황에 따라서 역동적으로 프로그램을 만들 수 있다.
