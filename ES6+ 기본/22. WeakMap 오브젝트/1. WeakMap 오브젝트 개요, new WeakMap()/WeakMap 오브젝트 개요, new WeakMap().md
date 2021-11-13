# WeakMap 오브젝트

WeakMap 약한 Map? 무엇이 약한가?

WeakMap은 object만 key로 사용할 수 있습니다.

number 등의 프리미티브 타입은 사용할 수 없습니다.

반면 Map 오브젝트는 프리미티브 타입을 사용할 수 있습니다.

왜 이렇게 Map 오브젝트만 사용할 수 있게 만들었을까요.

### 이것이 약한 것과 어떻게 연동될까요?

value는 제한이 없습니다.

Map에서 key로 참조한 object를 삭제하면 삭제한 objcet를 사용할 수 없게 되지만 Map 인스턴스에 object가 남습니다.

```js
console.log("[코드1] 오브젝트 참조 변경");
let sports = { like: "축구" };
const obj = new Map([[sports, "like: 축구"]]);

sports = { like: "농구" };
```

위 코드와 같이 날라간 sports 변수에 메모리 릭(memory leak)이 발생합니다.

이러한 문제를 해결하기 위한 것이 WeakMap 오브젝트입니다.

## WeakMap 오브젝트

Map 오브젝트는 값이 계속 살아있지만 WeakMap은 object를 GC(Garbage Collection)이 같이 지워서 메모리 릭이 발생하지 않습니다.

그래서 약한, 부서지기 쉬운 맵

WeakMap 오브젝트의 메소드는 set(), get(), has(), delete()와 같이 CRUD와 관련된 메소드만 있습니다.

WeakMap entry의 열거를 할 수 없습니다.

또한 이터레이션 할 수 없습니다.

즉, next() 메소드로 하나씩 읽을 수 없습니다.

## new WeakMap()

| 구분     | 데이터(값)              |
| :------- | :---------------------- |
| 형태     | new WeakMap()           |
| 파라미터 | [이터러블 오브젝트]opt  |
| 반환     | 생성한 WeakMap 인스턴스 |

WeakMap 인스턴스를 생성하여 반환합니다.

### 파라미터에 대괄호 안에 이터러블 오브젝트를 작성합니다.

```js
console.log("[코드2] WeakMap() 인스턴스 생성");
const empty = new WeakMap();

const sports2 = {};
const obj2 = new WeakMap([[sports2, "sports 오브젝트"]]);
console.log(typeof obj2); // object
```

    1. 파라미터를 작성하지 않아도 됩니다.
    2. new 연산자를 사용합니다.
    3. 인스턴스이므로 타입은 object 입니다.

## WeakMap 오브젝트 구조

```js
{
  ("ues strict");
  debugger;

  const map = Map;
  const weakmap = WeakMap;
  /*
  1. map과 weakmap이 구조에서 크게 다르지 않지만

  2. Map 오브젝트에 Symbol(Symbol.species)가 있지만 WeakMap 오브젝트에는 없습니다.

  3. map.prototype에 Symbol.iterator가 있지만 weakmap.prototype에는 Symbol.iterator가 없습니다.

  4. map.prototype에는 forEach()가 있지만 weakmap.prototype에는 forEach()가 없습니다.
  */
  debugger;

  const sports = {};
  const obj = new WeakMap([[sports, "종목"]]);
  /*
  1. 오른쪽의 obj를 펼치면 [[Entries]]가 있습니다.
  이것은 엔진에서 설정하는 것을 뜻합니다.

  2. [[Entries]]를 펼치면 0: {Object => "종목"} 형태입니다.
  [Object, "종목"] 형태로 작성한 것을 인덱스를 부여하여 배열로 만들고 엘리먼트에 {Object: "종목"} 형태로 변환합니다.

  3. Map 인스턴스와 구조가 같습니다.
  */
}
```

### 정리

Map과 WeakMap은 구조적으로 차이가 없습니다.

단, 처리하는 제약이 있습니다.

Map은 순차적으로 entry를 처리할 수 있지만, WeakMap은 전체를 순차적으로 처리할 수 없습니다.
