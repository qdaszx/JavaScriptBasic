# Module 접근 바탕

일반적으로 하나의 js 파일에 다수의 함수, 오브젝트를 작성합니다.

한편, 하나의 파일에 작성하면 사용하지 않는 것도 해석해야 하며 메모리를 차지하므로 비효율적입니다. (예: 회원가입)

Module은 파일을 분리하여 필요한 시점에 필요한 것을 가볍게 사용하려는 접근이며 바탕입니다.

Module을 파일이라고 할 수는 없지만 구조 측면에서 보면 하나의 파일이 Module입니다.

[파일 확장자로 mjs를 권장합니다.](https://v8.dev/features/modules#mjs)

Module 파일의 기본은 함수, 오브젝트를 분리하는 것이 바탕이므로 Module 파일이 되도록 작아야 합니다.

# Module 코드 형태

### export 키워드

외부로 보내 줄 함수, 오브젝트를 선언합니다.

`<script>` 에 mjs 파일을 작성하여 랜더링하지 않습니다.

### import 키워드

export로 선언된 mjs 파일을 가져와서 오브젝트, 함수를 사용합니다.

## Module 코드 형태

```js
// export.mjs
export function getPoint(id) {
  return id + 100;
}

// import.mjs
import { getPoint } from "./export.mjs";
console.log(getPoint("code")); // code100
```

    1. export.mjs 파일이 보내 줄 module 파일입니다.
    보내 줄 함수, 오브젝트 앞에 export를 작성합니다.
    export function getPoint(id){...}

    2. import.mjs가 가져오는 module 파일입니다.
    코드처럼 import 키워드를 사용합니다.

    3. import  {getPoint} from "./export.mjs"
    export.mjs 파일의 getPoint() 함수를 {getPoint}에 설정합니다.

    4. getPoint("code")
    getPoint() 함수를 호출하면 code100을 반환합니다.

# html 파일 작성 방법

## html 파일에 module 파일을 작성하는 방법

`<script type=module src="./import.mjs">` 를 작성합니다.

상대 경로, 절대 경로로 작성합니다.

상대 경로는 /, ./, ../ 로 시작해야 합니다.

"import.mjs" 처럼 경로없이 작성이 불가합니다.

defer가 디폴트이므로 defer를 작성하지 않습니다.

### html 파일에 module 파일을 작성하는 형태
