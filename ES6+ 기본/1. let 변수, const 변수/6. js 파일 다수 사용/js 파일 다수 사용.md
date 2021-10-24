# js 파일 사용

## 다수의 js 파일 사용

모든 js 파일에서 글로벌 오브젝트에 작성한 var 변수와 let 변수를 공유합니다.

그런데 블록 안에 작성하면 공유하지 않습니다.

```js
// "use strict"

/**
 * 1. 현재 위치는 글로벌 오브젝트입니다.
 *
 * 2. html 파일에 2개의 js 파일을 작성했습니다.
 *    <script src="./first.js" defer></script>
 *    <script src="./second.js" defer></script>
 *
 * 3. 현재 first.js를 실행하고 있습니다.
 */

// debugger;

var globalVar = "var 변수";
// 글로벌(window) 오브젝트에 설정됩니다.

let globalLet = "let 변수";
/**
 * 1. 글로벌(window) 오브젝트에 설정되지 않고
 *    오른쪽의 Script에 설정됩니다.
 *
 * 2. Script는 스펙에 정의된 이름입니다.
 */

{
  let globalBlock = "block의 let 변수";
  // 오른쪽의 Script에 설정되지 않고
  // 오른쪽의 Block에 설정됩니다.
  // debugger;
}

// debugger;
// first 파일에 이어서 실행된 것입니다.

console.log(globalVar);
/**
 * 1. var globalVar = "var 변수";
 *
 * 2. 글로벌 오브젝트에서
 *    var 키워드를 사용해서 선언한 변수는
 *    window 오브젝트에 설정되며
 *    모든 js 파일에서 변수를 공유합니다.
 *
 * 3. console에 "var 변수"가 출력됩니다.
 */
// debugger;

console.log(globalLet);
/**
 * 1. let globalLet = "let 변수";
 *
 * 2. 글로벌 오브젝트에서
 *    let 키워드를 사용해서 선언한 변수는
 *    오른쪽의 Script에 설정되며
 *    모든 js 파일에서 변수를 공유합니다.
 *
 * 3. 따라서 console에 "let 변수"가 출력됩니다.
 */
// debugger;

try {
  console.log(globalBlock);
} catch (e) {
  console.log("globalBlock은 공유되지 않습니다.");
}
/**
{
  let globalBlock = "block의 let 변수";
};
1. 글로벌 오브젝트에 작성했지만 블록 안에 작성한 변수입니다.

2. 이렇게 블록 안에 작성한 변수는 공유되지 않아 에러가 발생합니다.
 */
```

> ### var 변수, let 변수 작성한 것은 공유하는 측면에서 똑같습니다. 이것은 var 변수 말고 let 변수를 사용해도 괜찮다는 것 입니다.

글로벌 오브젝트는 개념은 있었지만 실체가 없었습니다. 그런데 Script이라는 것을 가지고 글로벌 오브젝트로 볼 수가 있습니다.

이것은 구조적으로 완전히 바꿨습니다.

> ### ES5에서는 window 오브젝트에 설정됐는데, window 오브젝트는 자바스크립트 관점에서는 오너가 아닙니다. 내가 만든 게 아니고 다른 오브젝트에 자신의 변수를 설정하는 것 입니다. 이것은 좋은 모습은 아니였습니다. 그런데 Script라는 블록 개념의, 오브젝트 개념의 그것을 만들어서 이 곳에 설정한다는 것, 그리고 중요한 것은 Script라는 블록은 자바스크립트가 만든다는 것 입니다. 오너입니다.

블록 안에 작성한 변수는 공유되지 않고 에러가 발생합니다. (중요한 부분입니다.)

> 즉, 글로벌 오브젝트의 지역 변수, Local 변수가 되는 것 입니다.

블록을 썼다는 것은 글로벌 오브젝트 자체를 위한 변수로 사용하겠다. 하지만 블록 밖에 작성한 것은 다른 파일에서도 사용할 수 있다. 라는 의미가 있습니다.

지금까지 글로벌 오브젝트를 위한 지역(로컬) 변수는 없었습니다. 그러나 지금은 블록을 사용함으로써 글로벌 오브젝트를 위한 지역(로컬) 변수를 사용할 수 있다는 것 입니다.

## 정리

글로벌 오브젝트에 작성

var 변수는 window 오브젝트에 설정되고 공유가 됩니다.

let 변수는 Script에 설정되고 공유가 됩니다.

### 그렇다면 두 변수는 공유하는 측면에서 같습니다. 하지만, 저장하는 장소가 다릅니다.

`window.sports = {}` 처럼 의도적으로 작성하고 사용했었습니다.

그런데 이제는 let 변수를 사용해서 `let globalLet = "let 변수";` 처럼 선언하면 됩니다. (공유가 가능합니다.)

그리고 `{let 변수}`블록 안에 작성하면 Block에 설정되고 공유하지 않습니다. global 오브젝트의 로컬 변수로 사용되는 것 입니다.

함수에 작성하는 var, let 변수는 Local, 블록에 작성하는 것은 Block에 설정됩니다.

Block 안에 설정된 것은 밖에 설정한 것을 사용할 수 있지만 밖에 있는 것은 Block 안에 있는 것을 사용할 수 없다. 스코프를 세분해서 ES6부터는 관리를 하게 되는 것 입니다.

---

Block Local Script Global 4가지 형태로 변수가 정의됩니다.

Scope > Block, Local, Script, Global
