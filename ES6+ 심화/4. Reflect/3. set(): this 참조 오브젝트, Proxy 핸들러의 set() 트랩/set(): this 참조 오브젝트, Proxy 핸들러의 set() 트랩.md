# set()

| 구분     | 개요                                    |
| :------- | :-------------------------------------- |
| 파라미터 | target, 대상 오브젝트                   |
|          | key, 프로퍼티 key                       |
|          | receiver, (선택) this로 참조할 오브젝트 |
| 반환     | 처리 성공: true, 실패: false            |

**target에 프로퍼티 키와 값을 설정합니다.**

### true, false 를 반환합니다.

```js
console.log("[코드1] true, false 반환");
const target = {
  point: 100,
};
console.log((target.point = 200)); // 200
console.log(Reflect.set(target, "point", 300)); // true
console.log(target.point); // 300
```

    1. console.log(target.point = 200)
      setter는 point에 설정한 값을 반환합니다.

    2. Reflect.set(target, "point", 300)
      target에 point가 있으면 300으로 대체하고 없으면 추가합니다.

    3. 한편, set()은 처리를 성공하면 true를 반환하고 실패하면 false를 반환합니다.

    4. 에러로 프로그램이 중단되는 것을 방지할 수 있습니다.

### this로 참조할 오브젝트 작성

```js
console.log("[코드2] this로 참조할 오브젝트 작성");
const target2 = {
  point: 100,
  set setPoint(key) {
    target2[key] = this.point + 500;
  },
};
target2.setPoint = "point";
console.log(target2.point); // 600

const that2 = { point: 300 };
Reflect.set(target2, "setPoint", "point", that2);
console.log(target2.point); // 800
```

    1. target.setPoint = "point";
      setPoint()가 호출되며 "point"가 파라미터 값으로 넘어갑니다.

    2. setPoint()에서 this가 target을 참조합니다.
      target.point = (100 + 500) 형태가 됩니다.

    3. Reflect.set(target, "setPoint", "point", that);
      4번째 파라미터에 that을 작성했습니다.
      setPoint()에서 this가 that을 참조합니다.
      target.point = (300 + 500) 형태가 됩니다.

### Proxy 핸들러의 set() 트랩 호출

```js
console.log("[코드3] set() 트랩 호출");
const target3 = {
  point: 100,
  set setPoint(key) {
    target3[key] = this.point + 500;
  },
};
const handler3 = {
  set(target, key, value, receiver) {
    Reflect.set(target, key, value, receiver);
  },
};
const proxy3 = new Proxy(target3, handler3);
proxy3.setPoint = "point";
console.log(target3.point); // 600
```

    1. proxy.setPoint = "point"
      set() 트랩이 호출됩니다.

    2. 트랩: set(target, key, value, receiver){...}
      target 파라미터에 target이 설정됩니다.
      key에 setPoint가 설정되고
      value에 point가 설정됩니다.
      receiver에 Proxy 인스턴스가 설정됩니다.

    3. 트랩: Reflect.set(target, key, value, receiver)
      setPoint()를 호출합니다.
      setPoint()에서 this가 receiver(Proxy)를 참조하며
      Proxy.[[target]].point 값을 사용합니다.

### set() 트랩에서 this 참조 변경

```js
console.log("[코드4] set() 트랩에서 this 참조 변경");
const target4 = {
  point: 100,
  set setPoint(key) {
    target4[key] = this.point + 500;
  },
};
const handler4 = {
  set(target, key, value, receiver) {
    Reflect.set(target, key, value, receiver);
  },
};
const proxy4 = new Proxy(target4, handler4);
const that4 = { point: 300 };
Reflect.set(proxy4, "setPoint", "point", that4);
console.log(target4.point); // 800
```

    1. Reflect.set(proxy, "setPoint", "point", that);
      4번째 파라미터에 that을 작성했습니다.
      set() 트랩이 호출됩니다.

    2. 트랩: set(target, key, value, receiver) {...}
      receiver에 that 오브젝트가 설정됩니다.

    3. 트랩: Reflect.set(target, key, value, receiver);
      setPoint()를 호출합니다.

    4. target[key] = this.point + 500;
      this가 receiver를 참조하며, receiver는 that입니다.
      this.point에서 {point: 300}을 사용합니다.
