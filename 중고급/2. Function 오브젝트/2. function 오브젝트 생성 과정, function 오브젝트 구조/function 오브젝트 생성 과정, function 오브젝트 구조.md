```js
function sports(){...}
```

function sports(){...} 형태에서 function 키워드를 만나면 우선 오브젝트를 생성하고 저장합니다.

그 오브젝트는 {sports: {...}} 같은 형태입니다.

여기서 sports는 function 오브젝트 이름입니다.

오브젝트는 {...} 프로퍼티가 없는 빈 상태입니다.

```js
var sports = function () {};
```

1. 생성한 오브젝트가 sports에 할당됩니다. 오브젝트를 생성하는 시점에는 빈 오브젝트
2. 왼쪽 Local의 sports를 펼칩니다.
3. arguments: (...)
   caller: (...)
   length: 0
   name: "sports"
4. prototype: {constructor: 𝒇}
5. \_\_proto\_\_: f ()

---

```js
sports = {
  prototype: {
    constructor: sports
    __proto__: {}
  }
}
```

sports 오브젝트에 prototype 오브젝트 첨부하고 prototype에 constructor 프로퍼티를 첨부합니다. 그리고 value에는 오브젝트 이름을 작성합니다. 즉 오브젝트 전체를 참조하는 것입니다. 그래서 sports 둘 다 값이 같습니다.

prototype에 \_\_proto\_\_ 오브젝트를 첨부합니다.

(\_\_proto\_\_는 ES5 스펙에 기술되어 있지 않으며 ES6 스펙에 기술)

엔진이 사용한다는 뉘앙스로 정의

그렇다면 ES5 기준으로 본다면 표준이 아닙니다.

왜냐하면 ES6에 기술되어 있기 때문입니다.

그런데도 2000년대 초부터 파이어폭스에서 사용합니다.

---

```js
sports = {
  arguments: {},
  caller: {},
  length: 0,
  name: "sports",
  prototype: {
    constructor: sports,
    __proto__: Object.prototype,
  },
  __proto__: Function.prototype,
};
```

\_\_proto\_\_ value를 Object.prototype으로 설정합니다.

sports 오브젝트에 proto 오브젝트를 첨합니다.

빌트인 Function.prototype의 메소드로 function 인스턴스를 생성해서 sports.\_\_proto\_\_에 첨부합니다.

---

정리하자면

function 오브젝트에 prototype이 있습니다. 그리고 constructor도 있고 언더바proto있고 거기에 빌트인 Object.prototype

밑 언더바proto에는 빌트인 Function 오브젝트인 프로퍼티에 연결된 3개 연결된 bind apply call이 설정됩니다.

지금은 function이지만 Array를 만든다면 빌트인 Array.prototype에 연결된 프로퍼티들이 설정

String을 만든다면 빌트인 String.prototype에 연결된 프로퍼티들이 설정
