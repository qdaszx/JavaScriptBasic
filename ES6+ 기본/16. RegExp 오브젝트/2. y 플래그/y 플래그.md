# y 플래그

### y 플래그를 작성한 lastIndex 위치에 매치합니다.

lastIndex부터가 아니라 **lastIndex 위치에 매치**합니다.

매치되면 lastIndex 값이 1 증가합니다.

```js
console.log("[코드1] lastIndex 위치에 매치");
const value = "AABBA",
  obj = /A/y;
console.log(obj.test(value) + ": " + obj.lastIndex); // true: 1
console.log(obj.test(value) + ": " + obj.lastIndex); // true: 2
console.log(obj.test(value) + ": " + obj.lastIndex); // false: 0
```

    1. g 플래그를 사용하지 않았습니다.
    2. obj.test(value)
      A가 매치되어 true가 출력됩니다.
    3. lastIndex의 디폴트 값이 0이므로 0번 인덱스의 A에 매치한 것입니다.
    4. obj.lastIndex
      1이 출력되며, 매치된 인덱스에 1을 더한 값입니다.
      y 플래그는 매치가 되면 lastIndex에 1을 더합니다.
    5. obj.test(value)
      A가 매치되어 true가 출력됩니다.
      1번 인덱스의 A에  매치한 것입니다.
    6. obj.lastIndex
      2가 출력되며 매치된 인덱스에 1을 더한 값입니다.
    7. obj.test(value)
      A가 매치되지 않아 false가 출력됩니다.
    8. 4번 인덱스에 A가 있지만 2번 인덱스에 매치하며 2번  인덱스 같이 B이므로 매치되지 않습니다.
    9. obj.lastIndex
      매치되지 않으면 lastIndex 값이 0이 됩니다.

### lastIndex 값을 지정할 수 있습니다.

y 플래그를 사용하면 stick 프로퍼티에 true로 설정됩니다.

```js
console.log("[코드2] lastIndex 값 지정");
const value2 = "AABBA",
  obj2 = /A/y;
console.log(obj2.sticky); // true
obj2.lastIndex = 4;
console.log(obj2.test(value2) + ": " + obj2.lastIndex); // ture: 5
```

    1. obj.stick
      y 플래그를 사용하면 sticky 프로퍼티에 true가 설정됩니다.
    2. obj.lastIndex = 4
      lastIndex 프로퍼티 값에 4를 할당했으므로 4번 인덱스의 문자에 매치하게 됩니다.
    3. obj.test(value)
      4번 인덱스에 A가 있으므로 매치가 되어 true가 출력됩니다.
    4. obj.lastIndex
      1이 증가된 5가 출력됩니다.

y 플래그는 lastIndex 값을 조정하여 사용할 수 있지만 g 플래그는 사용할 수 없습니다.
