# Int, Uint, Uint8C 타입

## Int 타입

Int8 타입으로 Int 타입을 살펴봅니다.

```js
const buffer = new ArrayBuffer(1);
const obj = new Int8Array(buffer);
[127, 128, 129].forEach((value) => {
  obj[0] = value;
  console.log(value); // 127, -128, -127
});
```

    1. const buffer = new ArrayBuffer(1);
    값의 변화를 보기 위해 1 바이트를 생성합니다.

    2. const obj = new Int8Array(buffer);
    buffer로 Int8 타입의 인스턴스를 생성합니다.

    3. [127, 128, 129].forEach((value) => {...})
    127, 128, 129를 순서대로 Int8Array 인스턴스의 [0]에 설정합니다.

    4. 127, -128, -127 으로 값이 설정됩니다.

    5. Int8 타입은 사인 비트(MSB)가 있으며
    이 값이 0이면 양수이고 1이면 음수입니다.

    6. 127 할당
    사인 비트는 0이 되고 다른 7비트는 1이 됩니다.

    7. 128 할당
    사인 비트와 7비트 모두 1이 됩니다.
    사인 비트를 제외한 7비트의 누적값은 -127이며
    이 값에 -1을 더하면 -128이 됩니다.

    8. 129 이상
    129(-127), 130(-126), 131(-125)이 됩니다.

## Uint8, Uint8C 타입

### Uint8 타입은 사인 비트(MSB)가 없습니다.

```js
const buffer = new ArrayBuffer(1);
const obj = new Uint8Array(buffer);
[255, 256, 257].forEach((value) => {
  obj[0] = value;
  console.log(obj[0]); // 255, 0, 1
});
```

    1. const buffer = new ArrayBuffer(1);
    값의 변화를 보기 위해 1 바이트를 생성합니다.

    2. const obj = new Uint8 타입의 인스턴스를 생성합니다.

    3. Uint8 타입은 사인 비트(MSB)가 없습니다.
    음수도 양수도 아닌 단지 값입니다.
    음수가 아니면 양수라는 측면에서 보면 양수이지만
    사인 비트가 없다는 것이 더 적절합니다.

    4. 7번 비트를 사인 비트가 아닌 값으로 사용합니다.
    값의 범위가 1비트 늘어나므로
    1바이트의 최댓값이 127에서 255로 커집니다.

    5. [255, 256, 257].forEach((value) => {...})
    255, 256, 257을 순서대로
    Uint8Array 인스턴스의 [0]에 설정합니다.

    6. 255를 할당하면 8개 비트 모두 1이 됩니다.
    256은 0이 되고 257은 1이 됩니다.

### Uint8C 타입은 Uint8 타입과 같으며, 다만 1바이트 값이 넘쳐도 최댓값을 유지합니다.

```js
const buffer = new ArrayBuffer(1);
const obj = new Uint8ClampedArray(buffer);
[255, 256, 257].forEach((value) => {
  obj[0] = value;
  console.log(obj[0]); // 255, 255, 255
});
```

    1. const obj = new Uint8ClampedArray(buffer);
    Uint8Clamped 타입의 인스턴스를 생성합니다.

    2. 기본적으로 Uint8 타입과 같습니다.

    3. Uint8 타입과 다른 점은 1바이트의 최댓값이 넘쳐도 최댓값을 유지합니다.

    4. [255, 256, 257].forEach((value) => {...})
    255, 256, 257을 설정해도 최종값은 255입니다.

    5. 색을 표현하는 RGB 각각의 최댓값은 FF(255)입니다.
    이미지의 RGB 값을 분석할 때 사용합니다.
    RGB(255, 255, 255)는 흰색입니다.
