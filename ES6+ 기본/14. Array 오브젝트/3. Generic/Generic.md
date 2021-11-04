# Generic

## generic

스펙에서 아래 문장을 볼 수 있습니다.

> copyWithin function is intentionally generic (copyWithin 함수는 의도적으로 제네릭이다.)

### generic 사용 형태

```js
console.log("[코드1] generic: Array-like");
const like = { 0: 10, 1: 20, 2: 30, length: 3 };
console.log(Array.prototype.copyWithin.call(like, 1, 0)); // {0: 10, 1: 10, 2: 20, length: 3}
```

    1. call()의 첫 번째 파라미터에 Array-like를 작성했으며 Array-like 타입은 Object입니다.
    2. copyWithin()이 Array 메소드이므로 Array를 넘겨주어야 하는데 Array-like를 넘겨주어도 처리가 됩니다.
    3. 이것이 Generic입니다. copyWithin()은 Generic 함수입니다.
    4. 배열로 반환하지 않고 대상 오브젝트 형태로 반환합니다.

**generic이 뜻하는 것은**

    copyWithin()이 Array 메소드이므로 Array 오브젝트가 대상이지만 generic은 Array 오브젝트가 아닌 Array-like, 또는 이터러블 오브젝트를 처리할 수 있다는 것을 뜻합니다.
    + 넘겨준 형태의 오브젝트를 그대로 반환해준다.

copyWithin()은 배열만 처리하는 것이 아니다 라는 논리적인 근거는 generic이라는 것 입니다.
