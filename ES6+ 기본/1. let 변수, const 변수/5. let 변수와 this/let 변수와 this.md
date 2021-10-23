## let 변수와 this

글로벌 오브젝트에서 let 변수를 this로 참조 **불가**

```js
console.log("[코드1] let과 this");
var music = "음악";
let sports = "축구";
console.log(this.music, this.sports); // 음악, undefined
```

현재 위치는 글로벌 오브젝트입니다. `var music = "음악";`은 window 오브젝트에 설정됩니다.

한편, `let sports = "축구";`로 설정하면 window 오브젝트에 설정되지 않습니다.

그래서 `this.music`를 하게 되면 this가 window 오브젝트를 참조하게 되며 music이 window 오브젝트에 설정되어 있으므로 `음악` 값이 출력됩니다.

한편, `this.sports`에서 this가 오브젝트를 참조하는데 let 변수는 window 오브젝트에 설정되지 않습니다. 따라서 sports 변수를 찾을 수 없으므로 undefined가 출력됩니다.

### 글로벌 오브젝트에서 var과 let 변수가 설정되는 위치 구조

디버거를 실행하면

`var globalVar = "글로벌";` -> 글로벌(window) 오브젝트에 설정

`let globalLet = "블록";` -> 1. 글로벌(window) 오브젝트에 설정되지 않습니다. 2. **let 변수를 블록 안에 작성해야 하지만, 블록이 없으므로 엔진이 블록을 만들고 이를 스코프로 사용하며 설정하는 개념입니다.** 3. 오른쪽 Script는 하나의 블록 개념으로 `<script>`에 작성한 모든 파일에서 공유합니다. 이에 대해서는 다음 절에서 다룹니다.

`console.log(this.globalVar);` -> 1. this가 window 오브젝트를 참조하며 globalVar이 window 오브젝트에 설정되므로 globalVar 값인 글로벌이 출력됩니다.

`console.log(this.globalLet);` -> 1. globalLet은 window 오브젝트에 설정되지 않으므로 undefined가 출력됩니다. 2. 글로벌 오브젝트의 var 변수와 let 변수의 차이입니다.

> 구조적으로 살펴봐야 합니다.

---

처음 알았던 사실 : var 변수와 let 변수의 큰 차이점을 알았습니다. 아무 생각없이 let 변수를 써야한다고 var 변수는 쓰면 노답이라고만 알고 왜 쓰면 안되는지 구체적인 이유가 없이 안썼고 let을 써야 하는 구체적인 이유도 없었습니다. 공부를 더 하면서 왜? 라는 질문에 답할 수 있게 해볼려고 합니다!
