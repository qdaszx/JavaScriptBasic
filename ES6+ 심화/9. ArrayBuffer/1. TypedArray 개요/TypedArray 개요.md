# ArrayBuffer

## TypedArray 개요

TypedArray는 Type을 가진 Array와 비슷한 형태입니다.

    스펙: Integer-Indexed exotic object
    Byte Offset 개념 등

```js
console.log([1, 2, 3]); // [1, 2, 3]
const obj = new Int8Array(3);
console.log(obj); // {0: 0, 1: 0, 2: 0}
obj[0] = 12;
obj[1] = 34;
console.log(obj); // {0: 12, 1: 34, 2: 0}
```

    1. const obj = new Int8Array(3);
    Int는 정수를 뜻하며 8은 8비트를 뜻합니다.
    8비트 크기 정수 타입의 TypedArray 인스턴스를 생성합니다.

    2. 파라미터의 3은 엘리먼트 수입니다.
    인스턴스에 3개의 엘리먼트를 만듭니다.

    3. 그런데, 각 엘리먼트의 타입과 크기가 같습니다.
    Int8Array, Int16Array, Float32Array 등의 9타입
    엘리먼트에 초깃값으로 0이 설정됩니다.

    4. console.log(obj);
    {0: 0, 1: 0, 2: 0}이 출력됩니다.

    5. obj[0] = 12;
    0번 인덱스에 12를 설정합니다.
    0을 프로퍼티 키라고 해도 됩니다.
    스펙에 integer index property keys로 기술되어 있습니다.

    6. obj[1] = 34;
    1번 인덱스에 34를 설정합니다.

    7. console.log(obj)
    인덱스의 값이 변경되었습니다.

Int8Array, Int16Array, Float32Array

정수(Int), 실수(Float) 타입

8비트, 16비트, 32비트, 64비트

같은 숫자만 사용할 수 있으며

바이너리로 저장됩니다.

따라서 처리 속도가 빠릅니다.
