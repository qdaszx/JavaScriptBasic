# this

## this 개요

this는 `키워드`이고, `obj.name()` 형태로 호출한 함수(메소드)에서 this로 인스턴스(오브젝트)를 참조합니다.

obj는 실행 콘텍스트의 this 바인딩 컴포넌트에 바인딩 됩니다.

그래서 함수 안에서 this로 obj를 참조할 수 있는 것 입니다.

## this와 글로벌 오브젝트

글로벌 오브젝트에서 this는 글로벌 오브젝트를 참조합니다.

글로벌 함수를 호출할 때는 함수 앞에 글로벌 오브젝트를 작성할 수 없지만, 묵시적으로 글로벌 오브젝트로 간주되는 것 입니다.

따라서 글로벌 함수에서 this는 글로벌 오브젝트를 참조하게 되는 것 입니다.

window 오브젝트는 자바스크립트에서 만든 것이 아니며 글로벌 오브젝트의 스코프도 아닙니다.

그런데 window와 글로벌 오브젝트를 같은 선상에서 사용합니다. 이것은 Host 오브젝트 개념을 적용하기 때문입니다.

## this와 글로벌 오브젝트 관계

글로벌 오브젝트에 코드 작성

```js
window.onload = function () {
  // 안이 아니라 밖에 코드 작성
};
```

(글로벌 오브젝트와 this를 비교하기 위해서)

### this가 window를 참조하는 경우

```js
console.log(this === window); // true
```

글로벌 오브젝트에서 this는 window를 참조한다는 것 입니다.

### this로 글로벌 변수를 사용하는 경우

```js
var value = 100;
console.log(this.value); // 100
```

value는 글로벌 변수이고 this.value로 값을 구했습니다.

100이 출력되었습니다.

this가 글로벌 오브젝트를 참조하기 때문입니다.

### window로 글로벌 변수를 사용한 경우

```js
var value = 100;
console.log(window.value); // 100
```

window 오브젝트가 글로벌 오브젝트가 같은 선상입니다.

즉, this랑 window가 같다는 것인데 실체는 다릅니다.

### this.value = 100; 형태로 값을 할당한 경우

```js
this.value3 = 100;
console.log(window.value3); // 100
```

window 오브젝트와 같이 다른 오브젝트를 마치 내것 처럼 사용하는 개념을 Host 오브젝트라고 합니다.

DOM 오브젝트도 Host 오브젝트입니다.

이러한 개념으로 인해서 this와 window가, 즉, 글로벌 오브젝트와 window가 같은 선상에서 사용된다는 것 입니다.

## this와 window 오브젝트 관계

앞에선 window.onload 밖에서 코드를 작성했습니다.

지금은 안에서 작성하겠습니다.

```js
window.onload = function () {
  // 여기에 코드 작성
};
```

### this가 window를 참조하는 경우

```js
window.onload = function () {
  console.log(this === window); // true
};
```

onload도 결국 function 오브젝트입니다. onload 앞에 작성한 window를 함수 안에서 this로 참조하게 되는 것 입니다.

onload 이벤트가 발생하게 되면 실행 콘텍스트를 생성하고 onload 앞에 작성한 window 오브젝트를 this 바인딩 컴포넌트에 바인딩합니다.

그리고나서 함수 안에서 this로 그것을 참조해서 당연히 window하고 this는 같습니다.

### this로 로컬(지역) 변수 사용하는 경우

```js
window.onload = function () {
  var value = 100;
  console.log(this.value); // undefined
};
```

여기서 this는 window 오브젝트를 참조합니다. 그리고 value는 onload 함수에 지역 변수입니다.

만약에 value로만 출력했다면 값이 100으로 나왔을텐데 여기서 this는 window 오브젝트를 참조하여 undefined가 나옵니다.

### this.value = 100; 형태로 값을 할당한 경우

```js
window.onload = function () {
  this.value = 100;
  console.log(window.value); // 100
};
```

여기서 this는 window 오브젝트를 참조하게 되므로 window 오브젝트에 설정됩니다. window.value는 100이 나옵니다.

정리하자면 함수가 되든 이벤트 핸들러 함수가 되든 함수 앞에 작성한 오브젝트를 함수에서 this로 참조한다는 것 입니다. 이것은 글로벌 오브젝트가 되든 일반 오브젝트가 되든 똑같습니다.
