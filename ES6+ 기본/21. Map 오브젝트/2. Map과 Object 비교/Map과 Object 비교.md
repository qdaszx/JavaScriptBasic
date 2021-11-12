# Map과 Object 비교

## Map 오브젝트 구조

```js
console.log("Map 오브젝트 구조");
{
  ("use strict");
  debugger;

  const map = Map;
  /**
  1. Map 오브젝트에 get Symbol(Symbol.species) 가 있습니다.
    따라서, constructor를 오버라이드할 수 있습니다.

  2. prototype을 펼치면 Symbol.iterator가 있습니다.
   */
  debugger;

  const list = [1, 2];
  const obj = new Map([
    ["one", "첫 번째"],
    ["two", "두 번째"],
  ]);

  /*
  1. 오른쪽의 obj를 펼치면 [[Entries]]가 있습니다.
    대괄호[[]] 두 개는 엔진에서 설정하는 것을 뜻합니다.

  2. [[Entries]]를 펼치면 0: {"one" => "첫 번째"} 형태입니다.

  3. 인덱스를 부여하여 key로 사용하고 {"one": "첫 번째"}를 value로 설정합니다.

  4. 이것은 배열 형태와 구조가 비슷합니다. size가 length 기능을 합니다.

  5. 인덱스를 부여하여 저장하므로 작성한 순서로 읽혀집니다.
  */
  debugger;
}
```

{key: value} 구조에서 key는 Map 오브젝트는 타입에 제약이 없습니다.

반면, 빌트인 Object는 String과 Symbol만 사용할 수 있습니다.

{key: value} 수를 구할 때는 Map 오브젝트는 size 프로퍼티로 수를 구합니다.

반면, 빌트인 Object는 전체를 읽어 구해야 합니다.

처리 시간: MDN에 의하면 빈번하게 key, value를 추가/삭제할 때는 Map이 Object보다 좋은 경우가 있다고 합니다.

이것을 종합적으로 정리한다면

지금까지 일반적으로 Object를 사용했습니다.8

그런데 Map 오브젝트를 좀 더 적극적으로 사용해야 하지 않을까 라는 생각입니다.

특별한 경우가 아니라면 빌트인 Object보다는 Map 오브젝트가 더 좋다고 생각합니다.
