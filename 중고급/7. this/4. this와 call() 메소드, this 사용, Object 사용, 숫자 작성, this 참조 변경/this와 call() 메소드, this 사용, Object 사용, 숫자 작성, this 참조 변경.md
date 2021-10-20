## this와 call()

| 구분     | 타입     | 데이터(값)                               |
| :------- | :------- | :--------------------------------------- |
| object   | Function | 호출할 함수 이름                         |
| 파라미터 | object   | this로 참조할 오브젝트                   |
|          | Any      | 파라미터opt, 콤마로 구분, 다수 작성 가능 |
| 반환     | Any      | 호출된 함수에서 반환한 값                |

`getTotal.call(this, 10, 20)` 함수 형태로 작성합니다.

첫 번째 파라미터는 값으로 넘어가지 않고 두번째부터 넘어 갑니다.

즉, getTotal 함수의 10, 20이 파라미터 값으로 넘어 갑니다.

첫 번째 파라미터에 호출된 함수에서 this로 참조할 오브젝트를 작성합니다.

일반적으로 this를 작성하지만 this 이외에 다른 오브젝트를 사용할 수 있습니다.

즉, this 바인딩 컴포넌트에 첫번째 파라미터에 작성한 오브젝트가 바인딩 된다는 것 입니다.

## this 사용

이 코드는 window.onload = function(){} 안에 작성하지 않고 밖에 코드를 작성합니다. 즉, 글로벌 오브젝트에서 실행됩니다.

```js
console.log("[코드1] this와 call()");
("use strict");
var value = 100;
function get(param) {
  return param + this.value;
}
var result = get.call(this, 20);
console.log(result); // 120
```

get.call(this, 20) 호출된 get 함수에서 this가 첫 번째 파라미터에 작성한 this를 참조합니다. this가 글로벌 오브젝트입니다.

return param + this.value; param은 20이고 this가 글로벌 오브젝트를 참조하므로 글로벌 변수로 value가 있기때문에 this.value는 100입니다.

120이 반환되어 120이 출력됩니다.

그런데, call 메소드를 사용하지 않으면 get 앞에 오브젝트를 작성해주지 않아서 undefined를 참조해서 에러가 납니다.

## Object 사용

```js
console.log("[코드2] 오브젝트 사용");
var get = function (value) {
  return this.base * this.rate + value;
};
var value = { base: 20, rate: 30 };
var result = get.call(value, 50);
console.log(result); // 650
```

get.call(value, 50); get 함수에 this는 value 오브젝트를 참조합니다.

그래서 this.base는 20, this.rate는 30이 됩니다. 600이 되면서 value는 두번째 파라미터 값이 넘어가 50이 되어 650이 반환되어 출력하게 됩니다.

이와 같이 호출된 함수에서 this로 참조할 오브젝트를 변경할 때 call 메소드를 사용합니다.

일반적으로 window.get하면 됩니다 그런데 call 메소드를 쓴 것은 this로 참조할 오브젝트를 바꾸겠다는 그런 의도가 큽니다.

그러므로 get 함수 안에 코드는 바꿀 필요가 없습니다. 호출할 때 마다 오브젝트만 바꿔주면 되기 때문입니다. 데이터 중심의 접근을 할 수 있게 됩니다.

> 함수는 안바귀고 오브젝트만 바뀌는 데이터 중심 접근

## 숫자 작성

```js
console.log("[코드3] 숫자 작성");
function get3() {
  return this.valueOf();
}
var result3 = get3.call(123);
console.log(result3); // 123
```

get 함수에 call 메소드를 이용해서 123을 넘겼습니다.

그런데 여기는 this가 오브젝트를 참조하니까 숫자(123)를 작성하면 에러가 발생해야 합니다.

이때, 값(123) 타입에 해당하는 Number 인스턴스를 생성하고 123을 프리미티브 값으로 설정합니다.

this.valueOf();로 하게 되면 123에 Number 인스턴스를 this가 참조하게 되고 valueOf()로 프리미티브 값을 반환합니다.

## this 참조 변경

```js
console.log("[코드4] this 참조 변경");
var book4 = {
  value: 123,
  point: {
    value: 456,
    get: function () {
      console.log(this.value);
    },
  },
};
```

book.point.get.call(book); get 함수에서 call 메소드를 사용해서 this는 book 오브젝트를 참조합니다.

그러면 this가 book 이므로 value: 123 를 참조해 반환하여 출력합니다.

book.point.get.call(book.point); get 함수에 this는 book.point 오브젝트를 참조하게 되어 value: 456를 반환하여 출력합니다.

---

오브젝트 안에 함수를 작성하는 방법도 괜찮은 방법입니다. book과 관련된 함수가 있다는 시맨틱을 확보할 수 있습니다.
