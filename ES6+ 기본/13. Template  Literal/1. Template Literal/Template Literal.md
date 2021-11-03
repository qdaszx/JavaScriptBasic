# Template Literal

    Syntax: `문자열`, `문자열 ${표현식} 문자열`, tag `문자열 ${표현식} 문자열`

문자열 처리를 위한 리터럴입니다.

표현식을 포함할 수 있습니다.

### backtick `` 안에 표현식을 작성할 수 있습니다.

```js
console.log("[코드1] Template 표현식");
console.log(`ABC`); // ABC
const one = 1,
  two = 2;
const result = `1 + 2는 ${one + two}이 된다`;
console.log(result); // 1 + 2는 3이 된다
```

    1. 백틱(``) 안에 문자열을 작성했습니다.
      문자열이 그대로 문자열로 출력됩니다.
    2. ${one + two}
      템플릿에 표현식을 작성했습니다.
    3. 아래 방법으로 표현식을 평가합니다.
      one에 one 변숫값 1을, two에 two 변숫값 2를 설정합니다.
      one의 값과 two의 값을 더해 표현식 위치에 설정합니다.
    4. 템플릿의 모든 공백이 그대로 반영됩니다.

### 줄 바꿈 작성 차이

```js
{
  ("use strict");
  debugger;

  console.log("ES5-1라인\n2라인");
  /*
  1. ES5 형태로 문자열 중간에 줄을 바꾸려면 \n을 작성합니다.
  */
  debugger;

  console.log(`1라인
    2라인`);
  /*
  1. Template 리터럴을 사용했습니다.

  2. ES5처럼 \n을 사용하지 않고
    백틱 안에서 줄을 바꿉니다.
    줄 앞에 공백을 작성하면 공백으로 처리됩니다.
  */
  debugger;
}
```
