# module 스코프

Module 코드는 "use strict"에서 실행됩니다.

다른 파일에서 모듈의 변수/함수 사용이 불가합니다.

이것은 모듈 단위로 별도의 스코프를 갖기 때문입니다.

별도의 스코프의 기준은 `<script type="module"></script>` 에 type="module"을 작성하면 별도의 스코프를 갖습니다.

Window를 사용하여 공유할 수 있지만 이름이 같으면 대체될 수 있습니다.

상황에 따라 어쩔 수 없이 사용할 때는 이름이 중복되지 않도록 해야 합니다.

# export 값 유지

import한 Module을 다시 import하더라도 값이 대체되지 않고 이전에 import한 값이 유지됩니다.

```js
// keep_export.mjs
export const point = {
  value: "초깃값"
};

// keep_one.mjs
import {import} from "./keep_export.mjs";
document.getElementById("one").innerHTML = "1. " + point.value; // 1. 초깃값
point.value = "값 변경";

// keep_two.mjs
import {point} from "./keep_export.mjs";
document.getElementById("two").innerHTML = "2. " + point.value; // 2. 값 변경
```

# this 참조

글로벌 오브젝트에서 this는 window 오브젝트를 참조합니다.

그러나 `<script type="module">` 로 작성된 파일에서 this 값은 undefined 입니다.
