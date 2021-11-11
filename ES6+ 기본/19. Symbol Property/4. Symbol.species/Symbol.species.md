# Symbol.species

Symbol.species는 constructor를 반환합니다.

constructor를 실행하면 인스턴스를 생성하여 반환하므로 결국, 인스턴스를 반환하게 됩니다.

Symbol.species를 오버라이드하면 다른 인스턴스를 반환할 수 있다는 의미입니다.

### 메소드를 실행한 후의 결과 형태

```js
{
  ("use strict");
  debugger;

  const obj = [1, 2, 3];
  /**
  1. [1, 2, 3]으로 Array 오브젝트를 생성하여 obj에 할당합니다.
   *
  2. 오른쪽의 obj를 펄쳐서 obj 구조를 보면 prototype은 없고 __proto__만 있으므로
   *
  3. obj는 빌트인 Array 오브젝트가 아니라 Array.prototype에 연결된 메소드로 생성한 인스턴스입니다.
   *
  4. 다만, new 연산자를 사용하지 않았으므로 강좌에서 인스턴스라고 하지 않고 오브젝트라고 한 것입니다.
   */
  debugger;

  const one = obj.slice(1, 3);
  /**
  1. 위 코드를 실행한 후의 one과 obj의 구조는 차이가 ㅇ벗으며 값 [2, 3]만 다릅니다.
   *
  2. 이것은 인스턴스에 있는 메소드를 호출하면 메소드 실행 결괏값을 반환하지 않고
   *
  3. 결괏값이 설정된 인스턴스를 반환하기 때문입니다.
   */
  debugger;

  const two = one.slice(1, 2);
  /**
  1. 바로 앞에서 반환된 one으로 메소드를 호출할 수 있다는 것은 one이 인스턴스이기 때문입니다.
   *
  2. 또한 slice(1, 2)를 실행하면 결과 값이 설정된 인스턴스를 반환합니다.
   */
  debugger;
  /**
  정리하면
  1. Array 인스턴스의 메소드를 호출하면 값을 반환하는 것이 아니라
  2. 반환할 Array 인스턴스를 생성하고 메소드에서 구한 값을 반환한 Array 인스턴스에 설정하여 Array 인스턴스를 반환합니다.
   */
  debugger;
}
```

```js
// Symbol.species 가능
console.log("Symbol.species 기능");
class Sports extends Array {}
const obj = new Sports(10, 20, 30);
const one = obj.slice(1, 2);
console.log(one); // [20]
```

    - class Sports extends Array {}
      - 빌트인 Array 오브젝트를 상속(확장, 연결) 받습니다.

    - const obj = new Sports(10, 20, 30);
      - 인스턴스를 생성합니다.

    - const one = obj.slice(1, 2);
      - obj 인스턴스의 slice()를 호출하면 slice() 처리 결과를 인스턴스에 설정하여 인스턴스를 반환합니다.

    - 이렇게 인스턴스의 메소드를 호출했을 때 인스턴스를 반환하도록 하는 것이 Symbol.species 기능입니다.
