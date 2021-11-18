# get()

| 구분     | 개요                                    |
| :------- | :-------------------------------------- |
| 파라미터 | target, 대상 오브젝트                   |
|          | key, 프로퍼티 key                       |
|          | receiver, (선택) this로 참조할 오브젝트 |
| 반환     | 프로퍼티 값                             |

target의 프로퍼티 값을 반환합니다.

target의 getter와 차이입니다.

### receiver에 this로 참조할 오브젝트를 작성합니다.

```js
console.log("[코드1] receiver에 this로 참조할 오브젝트 작성");
const target = {
  point: 100,
  get getPoint() {
    return this.point + 500;
  },
};
console.log(target.getPoint); // 600
console.log(Reflect.get(target, "getPoint")); // 600
const that = { point: 300 };
console.log(Reflect.get(target, "getPoint", that)); // 800
```

    1. console.log(target.getPoint)
      getter 이므로 target의 getPoint()가 호출됩니다.
      getPoint()에서 this가 target을 참조합니다.

    2. Reflect.get(target, "getPoint")
      target의 getPoint()가 호출됩니다.
      getPoint()에서 this가 target을 참조합니다.

    3. Reflect.get(target, "getPoint", that)
      3번째 파라미터에 that을 작성했습니다.
      getPoint()에서 this가 that을 참조합니다.

    4. this로 참조하는 오브젝트를 바꿀 수 있습니다.

### Proxy 핸들러의 get() 트랩에서 target[key]로 값을 구하는 형태

```js
console.log("[코드2] get() 트랩 호출");
const target2 = {
  point: 100,
  get getPoint() {
    return this.point + 500;
  },
};
const handler2 = {
  get(target, key, receiver) {
    return target[key];
  },
};
const proxy2 = new Proxy(target2, handler2);
console.log(Reflect.get(proxy2, "getPoint")); // 600
const that2 = { point: 200 };
console.log(Reflect.get(proxy2, "getPoint", that2)); // 600
```

    1. Reflect.get(proxy, "getPoint")
      get() 트랩이 호출됩니다.

    2. 트랩: get(target, key, receiver){...}
      target 오브젝트, "getPoint"가 설정되고
      receiver에 Proxy 인스턴스가 설정됩니다.

    3. 트랩: return target[key]
      getPoint()를 호출합니다.

    4. get getPoint(){return this.point + 500}
      getPoint()에서 this가 target을 참조합니다.
      this.point 값은 100입니다.

    5. Reflect.get(proxy, "getPoint", that);
      3번째 파라미터에 that을 작성했습니다.
      getPoint()에서 this가 that을 참조하지 않고 target을 참조합니다.

    6. 한편, get() 트랩을 작성하지 않으면 getPoint()에서 this가 that을 참조합니다.
      200과 500을 더해 700이 됩니다.

### get() 트랩에 Reflect.get()을 사용한 형태

```js
console.log("[코드3] get() 트랩에서 Reflect.get() 사용");
const target3 = {
  point: 100,
  get getPoint() {
    return this.point + 500;
  },
};
const handler3 = {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
};
const proxy3 = new Proxy(target3, handler3);
const that3 = { point: 200 };
console.log(Reflect.get(proxy3, "getPoint", that3)); // 700
```

    1. Reflect.get(proxy, "getPoint", that);
      3번째 파라미터에 that을 작성했습니다.

    2. 트랩: get(target, key, receiver){...}
      recevier에 {point: 200}이 설정됩니다.

    3. 트랩: return Reflect.get(target, key, receiver);
      target의 getPoint()가 호출됩니다.

    4. getPoint()에서 this가
      receiver의 {point: 200}을 참조합니다.

    5. 결과적으로 target.getPoint로 값을 구하는 것은
      that을 사용할 수 없으므로 확장성이 떨어집니다.

    6. Reflect.get(proxy, "getPoint", that)과
      return Reflect.get(target, key, receiver);를
      사용하면 일련의 코드를 변경하지 않아도 됩니다.

    7. 상황에 따라 get() 트랩에서 return 값을 바꿀 수 있습니다.
