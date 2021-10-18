## constructor 프로퍼티

```js
Book function 오브젝트: {
  prototype: {
    constructor: Book
  }
}
```

constructor 프로퍼티는 생성하는 function 오브젝트를 참조합니다. 이것은 function 오브젝트를 생성할 때 설정합니다. 또한, 이것은 prototype에 연결되어 있습니다.

개인적인 경험으로는 constructor가 없어도 인스턴스가 생성됩니다. 그렇다고 필요하지 않다는 의미는 압니다.

ES5 기준으로 본다면 의미가 없습니다. constructor를 변경할 수 없고 외부에 노출되지 않아서 생성자를 활용할 수 없는 아쉬운 점이 있었지만

ES6에서는 constructor를 변경할 수 있게 되었습니다. 개발자가 constructor에 코드를 추가할 수 있게 되었습니다. 그래서 활용성이 높지만 constructor를 활용할려면 ES5가 아닌 ES6을 사용해야 합니다.

## constructor 비교

```js
var Book = function(){};
var result = Book === Book.prototype.constructor;
console.log("1:", result);

var obj = new Book()l
console.log("2:", Book === obj.constructor);

console.log("3:", typeof Book);
console.log("4:", typeof obj);
```

Book === Book.prototype.constructor; 실행결과 true가 출력됐습니다.

Book 오브젝트와 Book.prototype.constructor가 타입까지 같다는 뜻입니다.

이것은 Book 오브젝트를 생성할 때, Book.prototype.constructor가 Book 오브젝트 전체를 참조하기 때문입니다. 그래서 같습니다.

Book === obj.constructor; obj의 constructor가 Book 오브젝트를 참조하므로 true가 출력된 것 입니다.

typeof Book; 이것은 function입니다. 그런데 obj 인스턴스의 타입은 object입니다.

function 오브젝트를 인스턴스로 생성했더니 object로 타입이 변경되었습니다. 이것은 내부 프로퍼티인 `[[Construct]]`가 실행될 때 생성한 오브젝트의 `[[Class]]`에 'Object'를 설정하기 때문입니다.

여기서 오브젝트 타입이 바뀐다는 것은 오브젝트 성격과 목적이 바뀌는 것을 뜻합니다. 즉, function -> object 바뀐 것 입니다.

인스턴스는 다른 관점에서 접근해야 합니다. 일반적인 함수 개념으로 접근하는 것이 아니라 인스턴스 개념으로 접근해야 한다는 것 입니다.

인스턴스에 가장 큰 특징은 prototype이 있으며, prototype에 많은 메소드들이 연결된다는 것 입니다. 즉, 함수가 하나가 아니라 다수라는 것입니다. function은 함수가 하나 입니다. 그러나 인스턴스는 함수가 다수 입니다. 이것이 특징입니다.

그러므로 다른 관점에서 접근해야 합니다. 함수와 인스턴스의 차이. 이것을 정확하게 이해해야 합니다.
