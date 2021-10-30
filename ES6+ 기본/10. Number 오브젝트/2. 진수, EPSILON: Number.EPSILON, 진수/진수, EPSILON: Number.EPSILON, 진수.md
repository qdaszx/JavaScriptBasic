# 진수, EPSILON

## Number.EPSILON

아주 작은 값
또는 2^-52

사용 사례

- ### 미세한 값 차이 형태

```js
console.log("[코드1] 미세한 값 차이");
const total = 0.1 + 0.2;
console.log(total); //  0.30000000000000004
console.log(total === 0.3); //  false
```

    1. 0.1과 0.2를 더했는데 0.3이 아닌 0.30000000000000004를 출력
    2. 값이 같지 않으므로 false가 출력됩니다.
    3. JS가 부동 소수점 처리를 하기 때문입니다. IEEE 754
    4. 이처럼 미세한 값 차이로 일치하지 않을 때 EPSILON을 사용합니다.

- ### 미세한 값 차이를 같은 값으로 간주

```js
console.log("[코드2] 같은 값으로 간주");
const value = Math.abs(0.1 + 0.2 - 0.3);
console.log(value < Number.EPSILON); //  true
```

    1. 값 차이가 Number.EPSILON보다 작으면 true를 반환합니다.

- ### 0 / 0으로 NaN가 되는 것을 방지

```js
console.log("[코드3] 0 / 0 방지");
console.log(0 / 0); // NaN
const value2 = 0 / (0 + Number.EPSILON);
console.log(value2); // 0
```

    1. 0 / 0은 NaN
    2. (0 + Number.EPSILON)처럼 작은 값을 더해 나누면 0이 됩니다.
    3. 0이므로 후속 처리를 할 수 있습니다.

## 진수

### Binary(2진수)

0b0101, 0B0101 형태로 작성

숫자 0 다음에 b/B 작성하고 이어서 0 또는 1로 값을 작성

```js
console.log("[코드4] Binary(2진수)");
const value4 = 0b111;
console.log(value4); // 7
/**
 * 1. 1 + 2 + 4
 */
```

### Octal(8진수)

0O0105 형태로 작성

숫자 0 다음에 영문 o/O 작성하고 이어서 0~7로 값을 작성

```js
console.log("[코드5] Octal(8진수)");
const value5 = 0o111;
console.log(value5); // 73
/**
 * 1. 1 + 8 + 64
 */
```

ES3는 첫 자리에 영문 o/O 작성, ES5에서는 작성하지 않았지만 ES6에서 다시 재정의해서 사용할 수 있게 됨
