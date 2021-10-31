# 길이 늘리기, 공백 삭제

## padStart()

| 구분     | 데이터(값)                       |
| :------- | :------------------------------- |
| 형태     | String.prototype.padStart()      |
| 파라미터 | 늘릴 길이 값                     |
|          | 설정할 값opt                     |
| 반환     | 길이를 늘리고 문자열을 채운 결과 |

첫 번째 파라미터 값만큼 길이를 늘리고 늘리어난 **끝에** 대상 문자열을 설정한 후 앞의 남는 공간에 두 번째 파라미터를 채움

두 번째 파라미터에 채울 문자열 작성합니다.

```js
console.log("[코드1] padStart()");
console.log("ABC".padStart(10, "123")); // 1231231ABC
console.log("ABC".padStart(6, "123456")); // 123ABC
console.log("ABCDE".padStart(3, "123")); //  ABCDE
console.log("ABC".padStart(6).length); // 6
```

    1. "ABC".padStart(10, "123")
      10자리로 늘리고 8/9/10번째에 "ABC"를 설정
      남은 7자리에 "123"을 왼쪽부터 반복하여 채웁니다.
    2. "ABC".padStart(6, "123456")
      6자리 끝에 ABC를 설정하면 3자리가 남습니다.
      123456을 왼쪽부터 채우므로 123이 채워집니다.
    3. "ABCDE".padStart(3, "123")
      전체 길이가 대상 문자열보다 작으면 길이를 줄이지 않고 대상 문자열을 반환합니다.
    4. "ABC".padStart(6).length
      두 번째 파라미터를 작성하지 않으면 남은 앞에 빈문자열을 채웁니다.

## padEnd()

| 구분     | 데이터(값)                       |
| :------- | :------------------------------- |
| 형태     | String.prototype.padEnd()        |
| 파라미터 | 늘릴 길이 값                     |
|          | 설정할 값opt                     |
| 반환     | 길이를 늘리고 문자열을 채운 결과 |

첫 번째 파라미터 값만큼 길이를 늘리고 늘어난 **앞에** 대상 문자열을 설정한 후 뒤의 남은 공간에 두 번째 파라미터를 채웁니다.

두 번째 파라미터에 채울 문자열 작성합니다.

```js
console.log("[코드2] padEnd()");
console.log("ABC".padEnd(10, "123")); // ABC1231231
console.log("ABC".padEnd(6, "123456")); // ABC123
console.log("ABCDE".padEnd(3, "123")); // ABCDE
console.log("ABC".padEnd(6).length); // 6
```

    1. "ABC".padEnd(10, "123")
      10자리로 늘리고 1/2/3번째에 "ABC"를 설정
      남은 7자리에 "123"을
      왼쪽부터 반복하여 채웁니다.
    2. "ABC".padEnd(6, "123456")
      6자리 앞에 ABC를 설정하면 3자리가 남습니다.
      123456을 왼쪽부터 채우므로 123이 채워집니다.
    3. "ABCDE".padEnd(3, "123")
      전체 길이가 대상 문자열보다 작으면길이를 줄이지 않고 대상 문자열을 반환합니다.
    4. "ABC".padEnd(6).length
      두 번째 파라미터를 작성하지 않으면 남은 뒤에 빈문자열을 채웁니다.

## trimStart()

| 구분     | 데이터(값)                           |
| :------- | :----------------------------------- |
| 형태     | String.prototype.trimStart(), ES2019 |
| 파라미터 | 없음                                 |
| 반환     | 삭제한 결과                          |

문자열 앞의 공백 삭제

```js
console.log("[코드3] trimStart()");
const value = "  123";
console.log(value.length); // 5
console.log(value.trimStart().length); // 3

const split = "a, b, c".split(",");
for (let value of split) {
  console.log(`${value}, ${value.length}`); //  a, 1 b, 2 c, 2
  console.log(value.trimStart().length); // 1 1 1
}
```

## trimEnd()

| 구분     | 데이터(값)                         |
| :------- | :--------------------------------- |
| 형태     | String.prototype.trimEnd(), ES2019 |
| 파라미터 | 없음                               |
| 반환     | 삭제한 결과                        |

문자열 끝의 공백 삭제

```js
console.log("[코드4] trimEnd()");
const value2 = "123  ";
console.log(value2.length); // 5
console.log(value2.trimEnd().length); // 3
```
