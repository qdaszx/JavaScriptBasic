# this 참조 범위

## this와 strict 모드

오브젝트.함수이름() 형태로 함수를 호출해야 하지만, 글로벌 오브젝트는 오브젝트 이름이 없으므로 함수 이름만 작성하여 호출합니다.

하지만, strict 모드에서는 window.book()처럼 book()앞에 window를 글로벌 오브젝트로 작성해야 합니다.

그렇지 않으면, 즉, 함수 앞에 오브젝트를 작성하지 않으면 this 바인딩 컴포넌트에 undefined가 설정됩니다.

따라서 this로 window(글로벌 오브젝트)를 참조할 수 없게 됩니다.

### 오브젝트 작성하지 않을 경구

```js
function book() {
  "use strict";
  return this;
}
var result = book();
console.log(result); // undefined
```

앞에 오브젝트를 작성하지 않아서 undefined가 출력됐습니다.

this가 this 바인딩 컴포넌트를 참조하게 되는데, 그런데 undefined가 설정되어서 undefined가 출력된 것 입니다.

### window 오브젝트 작성한 경우

```js
function book2() {
  "use strict";
  return this;
}
var obj = window.book2();
console.log(obj === window); // true
```

앞에 window 오브젝트를 작성하여 this는 window 오브젝트를 참조하게 됩니다. 그래서 true가 출력됩니다.

## this 참조 오브젝트

this가 참조하는 오브젝트를 코드를 따라가면서 하나씩 설명하겠습니다.

```js
var book3 = {
  point: 100,
  member: {
    point: 200,
    get: function () {
      console.log(this === book3.member); // true
      console.log(this.point); // 200
    },
  },
};
book3.member.get();
```

마지막 줄에서 book.member.get() 호출합니다.

여기서 this가 book이 아닌 member 오브젝트를 참조합니다.

즉, member: {...} 여기를 참조하게 됩니다.

이때 book은 단지 member를 찾아가는 경로 역할을 합니다.

get 함수 안에서 this와 book.member를 타입까지 비교하면 true가 나옵니다.

get 함수에서 member 오브젝트를 this로 참조하기 때문입니다. this.point는 member 안에 있는 . 이니까 point 프로퍼티 값 200이 나왔습니다.

여기서 this가 member를 참조하기 때문에 그렇습니다.

만약에 book를 참조했다면 100이 출력됐을 것입니다.

이렇게 함수는 자신을 호출한 바로 앞에 오브젝트를 함수 안에서 this로 참조합니다.

## 정리 시간

1. console.log(this === window)에서 true가 출력되는 논리를 제시하세요.
2. console.log(this.value)에서 undefiend가 출력되는 논리를 제시하세요.

```js
var book = {
  value: 123,
  get: function () {
    var value = 456;
    console.log(this === window); // true
    console.log(this.value); // undefined
  },
};
var fn = book.get;
fn();
```

fn 함수는 글로벌 함수입니다. 그래서 this는 글로벌 오브젝트를 참조합니다.

window 또한 글로벌 오브젝트를 참조합니다.

그래서 this와 window는 true를 출력합니다.

this.value면 this는 글로벌 오브젝트를 참조합니다. 하지만 글로벌 오브젝트에 value라는 프로퍼티가 없기 때문에 undefied를 출력합니다.

## 정리 시간

- [실행 결과] 값이 출력된 논리를 제시하세요
  - this.getTitle()
  - getTitle()

```js
function getTitle() {
  console.log("HTML책");
}
var book = function () {
  function getTitle() {
    console.log("JS책");
  }
  this.getTitle(); // HTML책
  getTitle(); // JS책
};
book();
```

book 함수는 글로벌 함수이므로 book 함수 내부에 this는 글로벌 오브젝트를 참조합니다.

this.getTitle은 글로벌 오브젝트에 있는 getTitle 함수를 찾아 HTML책을 출력하고 엔진은 다시 book함수 내부로 들어가 getTitle()을 호출합니다.

이때 getTitle 함수는 선언적 환경 레코드에 있는 getTitle를 찾아 실행하여 JS책을 출력합니다.
