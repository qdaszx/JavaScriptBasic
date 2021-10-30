# Number 오브젝트

자바스크립트는 IEEE 754에 정의된 64비트 부동 소수점으로 수를 처리합니다.

64비트로 최솟값과 최댓값을 처리합니다.

자바스크립트는 정수와 실수를 구분하지 않습니다.

1을 1.0으로 처리합니다. 1과 1.2를 더할 수 있습니다.

## 64비트 구성

사인 비트, 지수, 가수로 구성되어 있습니다.

사인은 63: 1비트

지수는 52~62: 11비트

가수는 0~51: 52비트 + 1(사인 비트) = 53비트

## 값을 구하는 방법

비트 값은 0 아니면 1

2 x승 값을 더해 값을 구함

0비트 부터 1, 1, 1이면

1(2^0) + 2(2^1) + 4(2^2) = 7

## Number 상수

safe integer란 지수(e)를 사용하지 않고 나타낼 수 있는 값

즉, 2의 64승이 아니라 2의 53승 (가수 + 사인비트)

safe integer는 최댓값과 최솟값이 있습니다.

Number.MAX_SAFE_INTEGER ::: safe integer 최댓값

```js
console.log("[코드1]");
console.log(Number.MAX_SAFE_INTEGER); //  9007199254740991

console.log(Math.pow(2, 53) - 1); //  9007199254740991
```

Number.MIN_SAFE_INTEGER ::: safe integer 최솟값

```js
console.log("[코드2] safe integer 최솟값");
console.log(Number.MIN_SAFE_INTEGER); //  -9007199254740991

console.log(-(Math.pow(2, 53) - 1)); // -9007199254740991
```

    값이 똑같습니다
