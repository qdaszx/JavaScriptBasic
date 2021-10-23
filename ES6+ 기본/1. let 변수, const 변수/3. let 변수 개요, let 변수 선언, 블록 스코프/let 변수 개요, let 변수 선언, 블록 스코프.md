# let 변수

## let 변수 개요

let 변수는 `let book = "책";` 같은 형태로 사용합니다.

블록 스코프를 가진 변수입니다.

여기서 블록이란 `{}`를 뜻합니다

변수가 선언된 블록이 스코프입니다.

스코프 적용 기준은 블록{}, 문, 표현식입니다.

블록의 기능은 안과 밖이 스코프가 다릅니다.

> let 변수는 블록 스코프를 갖습니다.

## let 변수 선언

### Syntax

```js
let name1 = value1,
  name2 = value2;
```

위와 같이 선언합니다.

name1, name2에 변수 이름 작성하고 식별자로 사용합니다.

콤마로 구분하여 다수를 선언할 수 있습니다.

값을 할당하지 않아도 됩니다.

```js
console.log("[코드2] 변수 이름 선언");
let book;
let one, two;
```

값을 할당하지 않고 변수만 선언할 수 있지만 초깃값으로 undefined가 할당됩니다.

value1, value2에 초깃값을 작성합니다.

표현식 작성 가능하고, 평가 결과에 사용합니다.

```js
console.log("[코드3] 변수에 초깃값 할당");
let book2 = "책";
let one2 = 1,
  two2 = 10 + 20;
// let five = 5, let six = 6;
// let five = 5, var six = 6;
```

let을 처음에 한번만 작성합니다.

let과 var을 같이 사용할 수 없습니다.

## 블록 스코프

블록 기준은 `중괄호 {코드}`, `function name(){코드}`, `if(a===1){코드}` {} 입니다.

블록 스코프를 가져가는 목적은 변수 이름이 같아도 값이 대체되지 않습니다.

```js
console.log("[코드4] 블록 스코프");
let sports4 = "축구";
if (sports4) {
  let sports4 = "농구";
  console.log("안:", sports4); // 안: 농구
}
console.log("밖:", sports4); // 밖: 축구
```

블록 안에서 블록 밖의 변수는 접근 할 수 있지만 블록 밖에서 블록 안의 변수는 접근할 수 없습니다.

```js
console.log("[코드5] 블록 스코프");
let sports5 = "축구";
sports5 = "농구";
console.log(sports5); // 농구
// let sports5 = "배구";
{
  let sports6 = "탁구";
  console.log(sports6); // 탁구
}
```

스코프에서 sports 식별자를 해결합니다.

바로 앞에 있으므로 값을 할당합니다.

// let sports = "배구"; -> let을 사용하여 같은 스코프에 같은 이름의 변수를 선언할 수 없습니다.

{ let sports = "탁구"; } -> 블록을 사용했으며 스코프가 다르므로 let을 사용하여 변수를 선언할 수 있습니다.
