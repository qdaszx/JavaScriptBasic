# export, import 형태

- export 대상에 export 키워드 작성합니다.

export function name(){...}

변수, function, Class, Object를 export 할 수 있습니다.

- 중괄호{}에 import 이름을 작성합니다.

import {name,,, nameN} from "./export.mjs";

- 한 번에 export 선언할 수 있습니다.

export {name1, ..., nameN}

- export와 import 이름을 변경할 수 있습니다.

export {fromName as toName};

import {toName as name} for "./export.mjs";

- export default

export default function name(){...}

import name from "./export.mjs";

중괄호를 쓰지 않고 import 할 수 있습니다.

- 전체를 import

import \* as name from "./export.mjs";

## 변수, 함수, Class

### 변수, 함수 export/import

```js
// export.mjs
export const point = 123;
export function getPoint(id) {
  return id + point;
}

// import.mjs
import { point, getPoint } from "./export.mjs";
console.log(point); // 123
console.log(getPoint("code")); // code123
```

    1. import {point, getPoint} from "./export.mjs";
    "./export.mjs"를 module specifier 또는 import specifier 라고 부릅니다.

### Class export/import

```js
// export.mjs
export class Book {
  setPoint(point) {
    this.point = point;
  }
}

// import.mjs
import { Book } from "./export.mjs";
const obj = new Book();
obj.setPoint(700);
console.log(obj.point); // 700
```

### export를 리스트 형태로 작성

```js
// export.mjs
const point = 123;
function getPoint(id) {
  return id + point;
}
export { point, getPoint };

// import.mjs
import { point, getPoint } from "./export.mjs";
console.log(point); // 123
console.log(getPoint("code")); // code123
```

    1. export {point, getPoint};
    변수와 함수에 export를 작성하지 않고 export 대상을 한 번에 작성한 형태입니다.

## as, \*

### as로 export/import 이름을 변경할 수 있습니다.

```js
// export.mjs
const point = 123;
function getPoint(id) {
  return id + point;
}
export { point as asPoint, getPoint as asGetPoint };

// import.js
import { asPoint as point, asGetPoint as getPoint } from "./export.mjs";
console.log(point); // 123
console.log(getPoint("code")); // code123
```

    1. export {point as asPoint, ...};
    export할 변수, 함수 이름을 변경합니다.

    2. as의 왼쪽에 원래 이름을 작성하고
    오른쪽에 변경할 이름을 작성합니다.
    point 이름이 asPoint로 변경됩니다.

    3. import {asPoint as point, ...}
    import할 변수, 함수 이름을 변경합니다.

    4. as의 왼쪽에 export 이름을 작성하고
    오른쪽에 변경할 이름을 작성합니다.
    asPoint 이름이 point로 변경됩니다.

### \* 로 export 전체를 import 할 수 있습니다.

```js
// export.mjs
const point = 123;
function getPoint(id) {
  return id + point;
}
export { point, getPoint };

// import.js
import * as all from "./export.mjs";
console.log(all.point); // 123
console.log(all.getPoint("code")); // code123
```

    1. import * as all from "./export.mjs";
    export로 작성된 것을 모두 import합니다.

    2. as all 에서 all이 Object 이름이 됩니다.
    all = {point: 값, getPoint: 함수} 형태가 되므로
    all.point로 값을 구할 수 있습니다.

    3. 전체를 한 번에 import 하므로 편리하지만 사용하지 않는 것도 import 됩니다.

## default

### 모듈에 export가 하나만 있는 것을 명시적으로 나타낼 때 사용합니다.

```js
// export.mjs
export default function getPoint(param) {
  return param + 100;
}

// import.mjs
import getPoint from "./export.mjs";
console.log(getPoint("code")); // code100
```

    1. import getPoint from "./export.mjs";
    default로 선언하면 {getPoint}에서 중괄호{}를 제외하고 getPoint만 작성합니다.

    2. 모듈 파일에 default가 아닌 것을 같이 작성할 수 있지만
    일반적으로 default 하나만 작성합니다.

    3. 모듈 파일에 default를 다수 작성하면 에러 발생

### default를 리스트 형태로 작성할 수 있습니다.

```js
// export.mjs
function getPoint(id) {
  return id + 100;
}
export { getPoint as default };

// import.mjs
import getPoint from "./export.mjs";
console.log(getPoint("code")); // code100
```

    1. export {getPoint as default};
    함수에 export default를 작성하지 않고
    별도로 export default를 작성할 수 있습니다.

### 함수 이름을 작성하지 않은 형태

```js
// export.mjs
export default function (param) {
  return param + 100;
}

// import.mjs
import getPoint from "./export.mjs";
console.log(getPoint("code")); // code100
```

    1. export default function(param){...}
    함수 이름을 작성하지 않았습니다.

    2. import getPoint from "./export.mjs";
    export default로 선언된 함수를 import하면서 함수 이름을 getPoint로 정의합니다.

    3. console.log(getPoint("code"));
    export default로 선언한 함수가 호출됩니다.

### \* 로 default를 import

```js
// export.mjs
export default function getPoint(param) {
  return param + 100;
}

// import.mjs
import * as all from "./export.mjs";
console.log(all.default("code")); // code100
```

    1. import * as all from "./export.mjs";
    export의 default가 all.default에 설정됩니다.

    2. all.default("code")
    getPoint() 함수가 호출됩니다.
