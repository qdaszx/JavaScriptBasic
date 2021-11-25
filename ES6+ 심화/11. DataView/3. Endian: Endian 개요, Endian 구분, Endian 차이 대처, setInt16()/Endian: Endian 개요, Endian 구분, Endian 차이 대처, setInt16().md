# Endian

### 엔디언이란

다수의 바이트로 구성된 값의 순서입니다.

2바이트의 12, 34를
12, 34 순서 또는 34, 12 순서로

메모리에 저장하거나 주변 장치로 전송합니다.

### 엔디언 표기

Endian 또는 Endianness 또는 바이트 오더(Byte Order)로 표기합니다.

## Endian 구분

### 엔디언 구분

엔디언은 빅-엔디언, 리틀-엔디언, 믹스드-엔디언으로 구분됩니다.

16진수 4바이트로 구성된 12 34 56 78을

엔디언 구분에 따라 메모리에 배치하면 아래 순서로 배치됩니다.

### 빅-엔디언 Big-endian

0x12 0x34 0x56 0x78처럼 앞에서부터 배치

### 리틀-엔디언 Little-endian

0x78 0x56 0x34 0x12 처럼 뒤에서부터 배치

### 믹스드-엔디언 Mixed-endian

0x34 0x12 0x78 0x56처럼 앞뒤를 섞어서 배치

## Endian 차이 대처

OS, CPU, 컴퓨터에 따라 엔디언이 다릅니다.

CPU: IBM은 빅-엔디언, Intel는 리틀-엔디언 순서로 배치합니다.

데이터를 전송할 때, TCP/IP에서는 빅-엔디언으로 전송합니다.

### 엔디언 차이에 대한 대처 방법

- TypedArray는 대처할 수 있는 선택이 없습니다.
- DataView는 개발자가 엔디언을 지정할 수 있으며, 디폴트는 빅-엔디언입니다.
- 우선 디프로트 값을 사용하고, 맞지 않으면 DataView로 엔디언을 지정하여 대처할 수 있습니다.

## setInt16()

| 구분     | 개요                       |
| :------- | :------------------------- |
| 파라미터 | byteOffset, offset 바이트  |
|          | value, 설정한 값           |
|          | Big-endian:, Little-endian |
| 반환     | ArrayBuffer 값             |

사인 부호를 가진 16비트 값을 설정합니다.

### 파라미터

- 첫 번째: DataView 기준의 오프셋 바이트를 작성
- 두 번째: 설정할 값
- 세 번째: 엔디언, 디폴트 false
- Big-endian이면 false 또는 undefined를 작성하고 Little-endian이면 true 작성

```js
const buffer = new ArrayBuffer(4);
const view = new DataView(buffer);
view.setInt16(2, 100, true);
console.log(view.getInt16(2, true)); // 100
console.log(view.getInt16(2)); // 25600
```

    1. view.setInt16(2, 100, true);
    3번째 파라미터에 true를 작성했으며
    리틀-엔디언 타입으로 값이 설정됩니다.

    2. view.getInt16(2, true);
    2번째 파라미터에 true를 작성했으며
    리틀-엔디언 타입으로 값을 반환합니다.
    100이 출력됩니다.

    3. view.getInt16(2);
    2번째 파라미터를 작성하지 않았으며
    빅-엔디언 타입으로 값을 반환합니다.
    설정했던 값과 다른 값이 출력됩니다.

    4. 따라서 값을 저장한 타입으로 값을 구해야 합니다.
