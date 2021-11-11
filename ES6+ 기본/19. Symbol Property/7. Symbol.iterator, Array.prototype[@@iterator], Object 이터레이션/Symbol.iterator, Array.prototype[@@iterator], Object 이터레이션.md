# Symbol.iterator

## iterator

@@iterator가 있는 빌트인 오브젝트는 String, Array, Map, Set, TypedArray가 있습니다.

빌트인 Object에는 @@iterator가 없지만 개발자 코드로 작성할 수 있습니다.

이 절에서는 String, Array, Object를 다루고 Map, Set은 관련된 곳에서 다룹니다.

TypedArray는 ES6+ 심화 과정에서 다룹니다.

## Array.prototype[@@iterator]

### Array 오브젝트의 [Symbol.iterator]() 를 호출하면 이터레이터 오브젝트를 반환합니다.

```js
console.log("[코드1] Array[@@iterator]");
const list = [10, 20];
const obj = list[Symbol.iterator]();
console.log(obj.next()); // {value: 10, done: false}
console.log(obj.next()); // {value: 20, done: false}
console.log(obj.next()); // {value: undefined, done: ture}
```

## String.prototype[@@iterator]

String 오브젝트의 [Symbol.iterator]() 를 호출하면 이터레이터 오브젝트를 반환합니다.

```js
console.log("[코드2] String[@@iterator]");
const list2 = "1A";
const obj2 = list2[Symbol.iterator]();
console.log(obj2.next()); // {value: '1', done: false}
console.log(obj2.next()); // {value: 'A', done: false}
console.log(obj2.next()); // {value: undefined, done: true}
```

## Object 이터레이션

빌트인 Object에는 Symbol.iterator가 없습니다. 즉, @@iterator이 없습니다.

### 그런데, Symbol.iterator가 반복을 처리하므로 Object에 Symbol.iterator를 작성하면 반복처리를 할 수 있습니다.

```js
console.log("[코드3] Object 이터레이션");
const obj3 = {
  [Symbol.iterator]() {
    return {
      count: 0,
      maxCount: this.maxCount,
      next() {
        if (this.count < this.maxCount) {
          return { value: this.count++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};
obj3.maxCount = 2;
for (const result of obj3) {
  console.log(result); // 0 1
}
```

엔진이 for-of 문을 시작하면 먼저 obj에서 [Symbol.iterator] 검색하고 이를 위해서 obj에 [Symbol.iterator] 작성합니다.

for(const result of obj)을 처음 실행할 때, obj의 [Symbol.iterator]()가 호출되며 return {} 문을 수행합니다.

obj.maxCount = 2; 로 반복 횟수를 정의합니다.

---

    iterator 오브젝트의 프로토콜은 iterator 오브젝트의 next() 메소드가 있어야 한다.

    빌트인 Object에는 iterator가 없지만 Symbol.iterator를 작성하면 일단은 iterator 오브젝트가 반환된다.

    [Symbol.iterator]() {...} ::: Symbol.iterator를 함수로 작성

    Symbol.iterator를 호출하면 iterator 오브젝트가 반환된다.

    iterator 오브젝트의 __proto__에는 next() 메소드가 있다

    이것이 프로토콜이니깐

    그런데, Symbol.iterator 함수 안에 next() 메소드를 작성했습니다.

    __proto__에 있는 next 메소드는 이터러블한 환경에 맞춰진 것

    빌트인 Object는 이터레이션할 수 없으니까, 거기에 맞게 next 메소드도 오버레이드를 시킨 것

    오브젝트에서도 처리할 수 있도록 Symbol.iterator 오버라이드 하듯이 __proto__에 있는 next 메소드를 오버라이드 시킨 것

    구조적으로 보면 next 메소드는 iterator 오브젝트의 프로퍼티 레벨에 있는 것이고 __proto__에 next가 있는데 그것은 @@iterator로 만든 next라는 것

    obj.maxCount에 2를 할당했습니다.

    그것은 if문에서 사용하기 위한 것이고

    for-of문을 실행하면 iterator 오브젝트를 만들고

    Symbol.iterator가 작성된 것을 체크하게 되고

    작성되어 있으니 @@iterator가 우선적으로 호출하게 되는 것

    return문을 만나면서 반환하게 되는 것

    count 와 maxCount 프로퍼티는 클로저

    Symbol.iterator를 호출하게 되니까 iterator 오브젝트가 만들어 진 것

    for-of는 만들어진 iterator 오브젝트에 next를 호출

    그런데 Symbol.iterator 함수 안에 next가 있는 것

    이 next가 __proto__ 보다 위에 있다. 프로퍼티 레벨에

    그래서 함수안에 있는 next가 호출하게 된다.

---

    빌트인 오브젝트는 이터레이션할 수가 없지만 이터레이터 구조에 맞춰서 왜냐하면 이터레이터는 프로토콜을 갖고 있고 프로토콜이 맞으면 반복을 하게 된다. 그 구조에 맞춰서 Symbol.iterator로 오버라이드 시키고 next 메소드도 오버라이드 시켜서 빌트인 오브젝트가 for-of 문에서 반복할 수 있도록 한 것 입니다.

    이렇게 이터레이션이 안되는 빌트인 오브젝트를 Symbol.iterator와 next 메소드로 이터레이션할 수 있도록 정의할 수가 있습니다.
