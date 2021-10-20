# this와 bind()

## bind()

| 구분     | 타입     | 데이터(값)             |
| :------- | :------- | :--------------------- |
| object   | Function | 호출할 함수 이름       |
| 파라미터 | object   | this로 참조할 오브젝트 |
|          | Any      | 파라미터opt            |
| 반환     | Function | function 오브젝트      |

bind 메소드는 시맨틱 그대로 묶는 것 입니다.

bind 메소드는 두 번에 나누어 처리합니다. function 오브젝트를 생성하는 것과 생성한 function 오브젝트를 함수로 호출하는 두 단계로 나눕니다.

각각에 단계에서 bind가 발생합니다.

첫번째 파라미터에 함수에서 this로 참조할 오브젝트를 작성합니다.

두번째 파라미터에 호출된 함수의 파라미터 값입니다. this로 참조할 오브젝트와 파라미터 값을 묶는 것 입니다.

호출된 함수는 bind된 환경에서 실행하는 것 입니다.

생성한 function 오브젝트를 호출할 때에도 파라미터를 작성할 수 있습니다. 그래서 두 개의 파라미터를 병합하여 사용할 수 있습니다.

## function 오브젝트 생성, 호출

```js
console.log("[코드1] function 오브젝트 생성, 호출");
var book = {
  point: 123,
  get: function () {
    return this.point;
  },
};
var obj = book.get.bind(book);
console.log(typeof obj); // function
var result = obj();
console.log(result); // 123
```

book.get 함수를 호출하는데 bind 메소드를 사용합니다. 첫번째 파라미터를 book를 사용했습니다.8

book.get.bind 실행하면 book.get 함수를 호출하지 않습니다.

function 오브젝트를 생성하여 반환합니다.

생성한 function 오브젝트를 생성한 오브젝트의 내부 프로퍼티인 `[[TargetFunction]]`에 설정합니다. (처리를 나눠서 하므로 저장이 필요한 것 입니다.)

console.log(typeof obj); obj의 타입은 function 오브젝트가 나왔습니다.

bind 메소드의 첫번째 파라미터는 get() 함수에서 this로 참조할 오브젝트를 작성합니다.

get() 앞에 작성한 오브젝트를 this로 참조하지 않습니다.

작성하지 않으면 undefined를 설정합니다.

생성한 function 오브젝트의 내부 프로퍼티인 `[[BoundThis]]`에 설정합니다.

var result = obj(); obj 함수 호출합니다.

bind로 생성한 function 오브젝트를 호출합니다. 그러면 obj를 호출하게 되고 이때 get 함수가 호출하게 됩니다.

get 함수에서 return this.point; 를 하게 되면 this가 `[[BoundThis]]`를 참조하게 됩니다.

즉, book 오브젝트를 참조하므로 123을 반환하여 출력하게 됩니다.

## 파라미터 병합

```js
console.log("[코드2] 파라미터 병합");
var book2 = {
  get: function () {
    return Array.prototype.slice.call(arguments);
  },
};
var obj2 = book2.get.bind(this, 10, 20);
var result2 = obj2(30, 40);
console.log(result2); // [10, 20, 30, 40]
```

book.get.bind를 하게 되면 두번째 세번째 파라미터에 값을 작성했으며 이것은 book.get 함수의 파라미터 값으로 넘겨줍니다. 그리고 이것을 function 오브젝트의 `[[BoundArguments]]`에 설정합니다.

get 함수에 파라미터 이름을 작성하지 않았습니다. 그래서 arguments를 사용했습니다. arguments가 Array-like 입니다.

return Array.prototype.slice.call(arguments); 이것은 prototype에 연결된 메소드를 호출한 것 입니다. slice()는 인덱스 범위의 엘리먼트를 배열로 반환하고 인덱스를 작성하지 않으면 arguments 전체를 반환합니다.

var result = obj(30, 40); book.get 함수가 호출되면 book.get.bind(this, 10, 20);에서 10과 20을 [10, 20] 형태로 반환하고 여기에 obj(30, 40)의 30과 40을 병합(첨부)하여 반환합니다.
