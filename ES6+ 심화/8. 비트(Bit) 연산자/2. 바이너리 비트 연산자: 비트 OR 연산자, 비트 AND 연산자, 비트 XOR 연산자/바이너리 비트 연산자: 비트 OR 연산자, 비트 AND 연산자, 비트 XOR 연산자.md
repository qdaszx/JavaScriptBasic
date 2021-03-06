# 바이너리 비트 연산자

## Binary Bitwise Operator 개요

왼쪽과 오른쪽에 피연산자가 있는 2항 연산자입니다.

```js
console.log(2 | 5); // 7
```

    1. |가 연산자이고 왼쪽과 오른쪽은 피연산자입니다.

왼쪽과 오른쪽 피연산자 값을 비트로 변환하여 연산합니다.

비트로 연산하므로 처리 속도가 빠릅니다.

## 비트 OR 연산자

연산자 기호: |

피연산자 한 쪽이라도 1이면 1로 처리합니다.

```js
console.log(2 | 5);
```

    1. 양쪽 비트에서 하나라도 1이면 1이 됩니다.
    2. (4 + 2 + 1)은 7입니다.

| 비트    | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| :------ | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| 비트 값 | 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |
| 값2     | 0   | 0   | 0   | 0   | 0   | 0   | 1   | 0   |
| 값5     | 0   | 0   | 0   | 0   | 0   | 1   | 0   | 1   |
| 결과    | 0   | 0   | 0   | 0   | 0   | 1   | 1   | 1   |

## 비트 AND 연산자

연산자 기호: &

피연산자 한 쪽이라도 0이면 0이 되고 양쪽이 모두 1이면 1이 됩니다.

```js
console.log(3 & 5); // 1
```

    1. 0번 비트만 1이 되며, 1이 출력됩니다.

| 비트    | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| :------ | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| 비트 값 | 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |
| 값3     | 0   | 0   | 0   | 0   | 0   | 0   | 1   | 1   |
| 값5     | 0   | 0   | 0   | 0   | 0   | 1   | 0   | 1   |
| 결과    | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 1   |

## 비트 XOR 연산자

연산자 기호: ^

피연산자 양쪽 값이 같으면 0이 되고 하나만 1이면 1이 됩니다.

```js
console.log(3 ^ 5); // 6
```

    1. 하나라도 1이면 1이 되므로
    2. (4 + 2)의 값은 6입니다.

| 비트    | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| :------ | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| 비트 값 | 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |
| 값3     | 0   | 0   | 0   | 0   | 0   | 0   | 1   | 1   |
| 값5     | 0   | 0   | 0   | 0   | 0   | 1   | 0   | 1   |
| 결과    | 0   | 0   | 0   | 0   | 0   | 1   | 1   | 0   |
