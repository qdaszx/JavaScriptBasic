# 시작 / 끝 체크 복제

## startsWith()

| 구분     | 데이터(값)                    |
| :------- | :---------------------------- |
| 형태     | String.prototype.startsWith() |
| 파라미터 | 비교 문자열                   |
|          | 비교 시작 인덱스opt, 디폴트 0 |
| 반환     | 시작하면 true, 아니면 false   |

**대상 문자열이 첫 번째 파라미터의 문자열로 시작하면 true, 아니면 false 반환합니다.**

정규 표현식 사용 불가합니다.

```js
console.log("[코드1] startsWith()");
const target = "ABC";
console.log(target.startsWith("AB")); // true
console.log(target.startsWith("BC")); // false

console.log(/^AB/.test(target)); // true
```

    1. "AB"로 시작하므로 true를 반환합니다.
    2. "BC"가 있지만 시작이 아니므로 false
    3. 정규 표현식의 ^과 같습니다.

두 번째 파라미터은 선택이며, 비교 시작 인덱스를 작성합니다.

```js
console.log("[코드2] 시작 인덱스 작성");
const target2 = "ABCD";
console.log(target2.startsWith("BC", 1)); // true
console.log(target2.startsWith("BC", 2)); // false
```

    1. "BC"가 중간에 있지만
    2. 시작 인덱스가 1이므로 true를 반환합니다.

## endsWith()

| 구분     | 데이터(값)                              |
| :------- | :-------------------------------------- |
| 형태     | String.prototype.endsWith()             |
| 파라미터 | 비교 문자열                             |
|          | 사용 문자열 길이opt 디폴트: 문자열 전체 |
| 반환     | 끝나면 true, 아니면 false               |

**대상 문자열이 첫 번째 파라미터의 문자열로 끝나면 true, 아니면 false 반환**

```js
console.log("[코드3] endsWith()");
const target3 = "ABC";
console.log(target3.endsWith("BC")); // true
console.log(target3.endsWith("AB")); // false

console.log(/BC$/.test(target3)); // true
```

    1. "BC"로 끝나므로 true를 반환합니다.
    2. "AB"가 있지만 끝이 아니므로 false
    3. 정규 표현식의 $와 같습니다.

두 번째 파라미터는 선택이며, 사용할 문자열 길이를 지정합니다.

```js
console.log("[코드4] 사용할 문자열 작성");
const target4 = "ABC";
console.log(target4.endsWith("AB", 2)); // true
```

    1. "AB"로 끝나지 않지만
    2. 대상 문자열을 3자리가 아닌 2자리를 사용하므로 즉, "AB"만 사용하므로 true를 반환합니다.

## repeat()

| 구분     | 데이터(값)                |
| :------- | :------------------------ |
| 형태     | String.prototype.repeat() |
| 파라미터 | 복제할 수opt 디폴트: 0    |
| 반환     | 복제하여 만든 문자열      |

**대상 문자열을 파라미터에 작성한 수만큼 복제합니다. 그리고 연결하여 반환합니다.**

```js
console.log("[코드5] repeat()");
const target5 = "ABC";
console.log(target5.repeat(3)); // ABCABCABC
console.log(target5.repeat(0)); // ""
console.log(target5.repeat()); // ""
console.log(target5.repeat(2.7)); // ABCABC
```

    1. repeat(3)
      "ABC"를 3번 복제하고 연결하여 반환합니다.
    2. 파라미터를 작성하지 않거나 0을 작성하면 빈문자열을 반환합니다.
    3. 2.7에서 0.7을 무시하고 2를 사용합니다.

## includes()

| 구분     | 데이터(값)                    |
| :------- | :---------------------------- |
| 형태     | String.prototype.includes()   |
| 파라미터 | 존재 여부 비교 문자열         |
|          | 비교 시작 인덱스opt 디폴트: 0 |
| 반환     | 존재하면 true, 아니면 false   |

**대상 문자열에 첫 번째 파라미터의 문자열이 있으면 true 없으면 false 반환합니다.**

첫 번째 파라미터는 숫자이면 문자열로 변환하여 체크합니다.

```js
console.log("[코드6] includes()");
const target6 = "123";
console.log(target6.includes("1")); // true

console.log(target6.includes(12)); // true
console.log(target6.includes("13")); // false
```

    1. "1"과 12는 존재하며
    2. "13"은 존재하지 않습니다.

두 번째 파라미터(선택)은 비교 시작 인덱스를 작성합니다.

```js
console.log("[코드7] 시작 인덱스 작성");
const target7 = "ABC";
console.log(target7.includes("A", 1)); // false

try {
  result = target7.includes(/^A/);
} catch (e) {
  console.log("정규 표현식 사용 불가"); // 정규 표현식 사용 불가
}
```

    1. "A"가 있지만 0번 인덱스에 있습니다.
    2. 1번 인덱스부터 비교하므로 존재하지 않습니다.

## raw()

Template의 이해가 필요하므로 Template에서 같이 다룹니다.
