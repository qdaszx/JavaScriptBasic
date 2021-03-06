# Argument 처리 메커니즘

## Argument 처리 구조

```js
function get() {
  return arguments;
}
console.log(get("A", "B")); // {0: A, 1: B}
```

함수 안에서 Argument 오브젝트를 만듭니다.

파라미터를 `{key: value}` 형태로 저장합니다.

그런데, key가 없습니다.

그래서 파라미터 수 만큼 0부터 인덱스를 부여하고 그것을 key로 사용합니다.

그리고 파라미터로 받은 값을 value에 설정합니다.

이러한 형태를 Array-like라고 부릅니다.

Array-like는 key 값이 0부터 1씩 증가해야 합니다.

그리고 length 프로퍼티가 있어야 합니다.

length가 있다는 것은 for문을 돌릴 수 있다는 것 입니다. 그래서 Array-like 작명을 얻었다.

## 엔진의 파라미터 처리

```js
let get2 = function (one) {
  return one;
};
get2(77, 100);
```

우선 get 함수를 호출하면서 77과 100을 파라미터 값으로 넘겨 줍니다.

넘겨받은 값을 함수의 **파라미터 이름**에 설정합니다. 이때 **정적 환경의 선언적 환경 레코드에 one: 77로 설정**합니다.

즉, 스코프 개념으로 정의를 하는 것입니다.

따라서 return one;을 했을 때 표현식을 평가하게 되는데, 이때 선언적 환경 레코드에 가서 식별자 해결을 합니다.

one이 이미 있으니까 77이 반환됩니다.

> 함수의 파라미터에 작성한 파라미터 이름을 key로 해서 그리고 파라미터로 받은 값을 value로 해서 선언적 환경 레코드에 설정하는 것입니다. 그리고 여기서 식별자 해결을 한다는 것입니다.

또 하나, Argument 오브젝트를 생성합니다. 이것은 파라미터로 받은 모든 값을 설정하는 것입니다.

넘겨받은 파라미터 수를 Argument 오브젝트의 length 프로퍼티에 설정합니다.

그리고 넘겨받은 파라미터 수만큼 반복하면서 {0: 77}, {1: 100}와 같은 형태로 만드는 것입니다.

이것은 함수의 초기화 단계에서 실행합니다.
