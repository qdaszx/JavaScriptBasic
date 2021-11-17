# get() 트랩

## get()

| 구분     | 개요                  |
| :------- | :-------------------- |
| 파라미터 | target, 대상 오브젝트 |
|          | key, 프로퍼티 key     |
|          | receiver, 설명 참조   |
| 반환     | 프로퍼티 값           |

get 트랩은 값을 구하는 트랩입니다.

target, receiver에서 값을 구합니다.

### get() 트랩이 호출되면 엔진이 실행 환경을 분석하여 파라미터 값을 설정합니다.

```js
console.log("[코드1] get() 트랩");
const target = { point: 100 };
const handler = {
  get(target, key, receiver) {
    return target[key] + 200;
  },
};
const obj = new Proxy(target, handler);
console.log(obj.point); // 300
console.log(obj.bonus); // NaN
```

    1. console.log(obj.point);
      get() 트랩이 호출됩니다.
    2. 트랩: get(target, key, receiver) {...}
      target에 target 오브젝트가 설정되고 key에 "point"가 설정됩니다.
      receiver에 Proxy 또는 Proxy를 상속받은 오브젝트가 설정됩니다.
    3. 트랩: return target[key] + 200;
      target 오브젝트에서 point 값을 구하고 구한 값을 100에 200을 더해 반환합니다.
    4. console.log(obj.bonus);
      obj 인스턴스에 bonus가 없지만 obj에 get() 트랩이 있으면 호출합니다.
      bonus 프로퍼티의 존재를 체크하지 않습니다.
    5. 트랩: return target[key] + 200;에서 target[key]에서 "bonus"가 없으므로 undefined이며 200을 더하므로 NaN를 반환합니다.

### get() 트랩 활용 형테 : 조건 체크

```js
console.log("[코드2] get() 트랩 활용: 조건 체크");
const target2 = { point: 100 };
const handler2 = {
  get(target, key, receiver) {
    const value = target[key];
    return this.check ? value + 200 : value;
  },
};
const obj2 = new Proxy(target2, handler2);
handler2.check = true;
console.log(obj2.point); // 300
```

    1. hanlder.check = true;
      get() 트랩에서 체크 값으로 사용합니다.
    2. 트랩: return this.chec ? value + 200 : value;
      this는 handler 오브젝트를 참조합니다.
      check 값이 true이므로 200을 더해 반환합니다.
    3. 이처럼 조건을 부여하여 값을 구할 때
      호출하는 곳마다 조건 코드를 작성하지 않고 get() 트랩에 조건 코드를 작성하면 깨끗하게 코드를 관리할 수 있습니다.

## get() 트랩 활용 형태: 데이터 변경

```js
{
  let target = { point: 100 };
  /*
  1. 아래에서 target 전체를 대체하므로 let 변수로 선언했습니다.
  */
  debugger;

  const handler = {
    get(target, key, receiver) {
      return target[key];
    },
  };
  const proxy = new Proxy(target, handler);
  debugger;

  target.point = 300;
  /*
  1. target과 proxy.[[Target]]의 point 값이 바뀝니다.
  */
  debugger;

  target = { point: 500 };
  console.log("1. target: ", target.point);
  /*
  1. target 오브젝트 전체를 바꿉니다.
  target.point 값으로 500이 출력됩니다.

  2. 한편, proxy.[[Target]].point는 바뀌지 않습니다.
  즉, target.point는 500이고 proxy.[[Target]].point는 300입니다.
  */
  debugger;

  /*
  target = {point: 500};
  1. {point: 500}은 새로운 빌트인 Object를 생성합니다.

  2. 새로운 메모리 주소를 target에 할당하므로 target이 참조하는 메모리 주소가 바뀌게 됩니다.

  3. 이때, target의 바뀐 메모리 주소가 proxy.[[Target]] 반영되지 않습니다.
  */
  debugger;

  console.log("2. proxy: ", proxy.point);
  /*
  1. get(target, key, receiver){...}에서
  target에 바뀌기 전의 {point: 300}이 설정됩니다.
  즉, 바뀐 target이 설정되지 않고 proxy.[[Target]]이 설정됩니다.

  2. new Proxy(target, handler)로 인스턴스를 생성할 때
  proxy.[[Target]]에 target의 메모리 주소를 설정하고 get() 트랩에서 이를 사용하여 target의 프로퍼티 값을 구하는 것이 됩니다.
  */
  debugger;

  proxy.point = 700;
  console.log("3. proxy: ", proxy.point);

  /*
  1. proxy.[[Target]].point 값을 바꿉니다.
  바뀐 값인 700이 출력됩니다.
  */
  debugger;

  console.log("4. target: ", target.point);
  /*
  1. proxy.point = 700; 으로 바꾼 값이 target에 반영되지 않니다.

  2. 일반적으로 target.point에도 값이 연동되어 반영되지만
  지금은 proxy.[[Target]]이 참조하는 메모리 주소와 target의 메모리 주소가 다르기 때문입니다.
  */
  debugger;

  /*
  1. 결과적으로 target의 값을 프로퍼티 단위로 바꿔야 합니다.

  2. 앞의 트랩에서 체크하는 코드를 함수로 만들고
  target의 프로퍼티를 변경하는 것도 함수로 만들면
  프레임워크 개념으로 사용할 수 있습니다.
  */
  debugger;
}
```

## get() 트랩 호출

get() 트랩이 호출되는 형태

proxy[key]

### Object.create(proxy, {프로퍼티})

Reflect.get()

```js
console.log("[코드3] Object.create(proxy, {프로퍼티}");
const target3 = { point: 600, bonus: 100 };
const handler3 = {
  get(target, key, value, receiver) {
    return target[key] + 200;
  },
};
const proxy3 = new Proxy(target3, handler3);
const obj3 = Object.create(proxy3, {
  point: { value: 500 },
});
console.log(obj3.point); // 500
console.log(obj3.bonus); // 300
```

    1. console.log(obj.point);
      Object.create(proxy, {...})의 두 번째 파라미터에 point를 작성했습니다.
    2. 즉, point가 인스턴스 프로퍼티이므로 get() 트랩을 호출하지 않고 point 프로퍼티 값 500을 반환합니다.
    3. get() 트랩을 호출하면 target에 {point: 600}이 잇으므로 600이 반환됩니다.
    *
    4. console.log(obj.bonus);
      Object.create(proxy, {...})의 두 번째 파라미터에 bonus를 작성하지 않았으므로 get() 트랩이 호출됩니다.

## get() 트랩 준수사항

target의 프로퍼티가 data 디스크립터일 때

### [[Writable]]: false 또는 [[Configurable]]: false 이면 반환 값을 변경하여 return이 불가합니다.

target의 프로퍼티가 악세서 디스크립터일 때 [[Configurable]]: false이면 반환 값을 변경하여 return 불가합니다.

```js
console.log("[코드4] 반환 값을 변경하여 return 불가");
const target4 = {};
Object.defineProperty(target4, "point", {
  value: 500,
  writable: false,
});
const handler4 = {
  get(target, key, receiver) {
    // return target[key] + 200;
    return target[key];
  },
};
const obj4 = new Proxy(target4, handler4);
console.log(obj4.point); // 500
```

    1. {value: 500, writable: false}
      target 오브젝트의 point 프로퍼티는 {writable: false}입니다.
    2. 트랩: // return target[key] + 200;
      프로퍼티가 {writable: false}일 때
      target[key]로 구한 값을 반환해야 합니다.
    3. 트랩처럼 구한 값에 값을 더해 return하면 에러가 발생합니다.
    4. {writable: true}이면 return 값을 변경할 수 있습니다.
    5. get() 트랩에 try-catch를 사용할 수 없습니다.
