# RegExp 오브젝트

## lastIndex

### 정규 표현식 사용 형태

```js
console.log("[코드1] 정규 표현식 사용 형태");
const value = "ABC";
const obj = new RegExp("A", "g");
console.log(obj.test(value)); // true
const reg = /A/g;
console.log(reg.test(value)); // true
```

    1. const obj = new RegExp("A", "g")
    RegExp 인스턴스를 생성합니다.
    A로 매치 대상에 매치합니다.
    g 플래그는 모두 매치합니다.
    2. obj.test(value)
    obj에 설정된 A를 ABC에 매치하며 A가 있으므로 true를 반환
    3. const reg = /A/g
    정규 표현식 리터럴을 사용한 형태입니다.
    new 연산자를 사용하지 않았을 뿐, 1번과 같습니다.

정규 표현식은 매치 시작 위치를 lastIndex 프로퍼티에 설정합니다. 디폴트값은 0

### g 플래그를 사용하면 lastIndex 프로퍼티 위치부터 매치합니다.

```js
console.log("[코드2] g 플래그 사용");
const value2 = "ABABA",
  obj2 = /B/g;
console.log(obj2.test(value2) + ": " + obj2.lastIndex); // ture: 2
console.log(obj2.test(value2) + ": " + obj2.lastIndex); // true: 4
console.log(obj2.test(value2) + ": " + obj2.lastIndex); // false: 0
```

    1. obj.test(value)
    B가 ABABA에 있으므로 매치되며 true 반환
    2. obj.lastIndex
    lastIndex 값으로 2가 출력됩니다.
    B가 매치된 인덱스는 1이며 1을 더한 값입니다.
    2가 다음에 매치를 시작할 위치입니다.
    3. obj.test(value)
    lastIndex 값이 2이므로 대상 문자열의 2번 인덱스부터 B를 매치합니다.
    4. obj.lastIndex
    lastIndex 값으로 4가 출력됩니다.
    B가 매치된 인덱스는 3이며 1을 더한 값입니다.
    5. g 플래그는 매치가 되면 lastIndex 값에 1을 더합니다.
    6. obj.test(value)
    대상 문자열의 4번 인덱스부터 B를 매치하며 매치가 되지 않아 false가 출력됩니다.
    7. obj.lastIndex
    매치가 되지 않으면 lastIndex 값은 0이 됩니다.

### g 플래그를 사용하지 않으면 lastIndex 프로퍼티 값이 바뀌지 않음

```js
console.log("[코드3] g 플래그를 사용하지 않음");
const value3 = "ABABA",
  obj3 = /B/;
console.log(obj3.test(value3) + ": " + obj3.lastIndex); // true: 0
console.log(obj3.test(value3) + ": " + obj3.lastIndex); // true: 0
```

    1. obj = /B/
    g 플래그를 사용하지 않았습니다.
    2. obj.test(value)
    B가 ABABA에 있으므로 매치되며 true 반환
    3. obj.lastIndex
    lastIndex 값으로 0이 출력됩니다.
    0은 디폴트 값으로 값이 바뀌지 않았습니다.
    g 플래그를 작성하지 않으면 값이 바뀌지 않습니다.
    4. obj.test(value)
    매치가 되어 true가 출력됩니다.
    5. obj.lastIndex
    lastIndex 값으로 0이 출력됩니다.

### lastIndex 값을 지정해도 적용되지 않고 0번 인덱스부터 매치

```js
console.log("[코드4] lastIndex 값 지정");
const value4 = "ABACC",
  obj4 = /B/;
console.log(obj4.test(value4) + ": " + obj4.lastIndex); // true: 0
obj4.lastIndex = 2;
console.log(obj4.test(value4) + ": " + obj4.lastIndex); // true: 2
console.log(obj4.test(value4) + ": " + obj4.lastIndex); // true: 2
```

    1. true: 0
    매치가 되었으므로 1이 출력되어야 합니다.
    2. obj.lastIndex = 2
    lastIndex에 2를 설정했으므로
    3. obj.test(value)
    2번 인덱스부터 매치를 해야 하지만 0번 인덱스부터 매치합니다.
    4. 2번 인덱스부터 매치하면 B가 없으므로 false가 반환됩니다.
