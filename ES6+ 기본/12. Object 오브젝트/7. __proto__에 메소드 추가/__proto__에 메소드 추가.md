# `__proto__`에 메소드 추가

## 메소드 추가

`__proto__`에 function을 추가하면 prototype에 설정됩니다.

prototype에 설정되는 것은 메소드로 추가하는 것과 같습니다.

메소드로 추가하면 어떤 결과가 나오는 지, 인스턴스에 함수로 프로퍼티를 추가하면 추가한 인스턴스만 반영됩니다.

새로운 인스턴스를 만들면 새로운 인스턴스에 반영되지 않습니다만 prototype에 메소드를 추가하면 앞으로 만들 인스턴스에도 반영이 되고 현재 만들어져 있는 인스턴스에도 반영이 됩니다.

함수를 추가하는 것과 메소드를 추가하는 것은 전혀 다릅니다.

### `__proto__`에 메소드를 추가한 후의 prototype 모습입니다.

```js
{
  ("use strict");
  debugger;

  function Book(param) {
    this.point = param;
  }
  Book.prototype.getPoint = function () {
    return this.point;
  };
  const obj = new Book(100);
  debugger;

  // __proto__에 메소드를 추가합니다.
  obj.__proto__.setPoint = function (param) {
    this.point = param;
  };
  /*
  1. obj를 펼치면 __proto__에 setPoint가 표시됩니다.

  2. Book.prototype을 펼치면 setPoint가 표시됩니다.
  */
  debugger;

  /*
  1. 이렇게 표시가 되는 것은
      - __proto__에 메소드를 추가하면, __proto__에 추가하지 않고
      - prototype에 연결된 메소드를 표시한 것 입니다.
  2. __proto__에 연결되어 표시된 것은
      - 디버깅 틀에서 가독성을 위해
      - prototype에 연결된 메소드를 표시한 것 입니다.
  */
  debugger;
}
```

### 추가한 메소드를 인스턴스에 공유 (prototype sharing)

```js
{
  ("use strict");
  debugger;

  function Book(param) {
    this.point = param;
  }
  Book.prototype.getPoint = function () {
    return this.point;
  };
  const obj = new Book(100);

  // beforeObj 인스턴스를 생성합니다.
  const beforeObj = new Book(100);
  debugger;

  // __proto__에 메소드를 추가합니다.
  obj.__proto__.setPoint = function (param) {
    this.point = param;
  };
  debugger;

  // 새로운 인스턴스를 생성합니다.
  const afterObj = new Book(300);
  /*
    1. setPoint()가 인스턴스에 할당되므로
      - 메소드로 호출할 수 있습니다.
  */
  debugger;

  beforeObj.setPoint(700);
  /*
  1. beforeObj 인스턴스는 setPoint() 메소드를 추가하기 전에 인스턴스를 만들었지만

  2. prototype sharing(공유)으로 인해 추가된 메소드를 사용할 수 있습니다.

  3. setPoint()가 호출되면 Book.prototype에서 setPoint의 존재 여부를 체크하고 있으면 __proto__가 아니라 Book.prototype의 setPoint()를 호출하기 때문입니다.
  */
  debugger;
}
```

`__proto__`에 function을 추가하면 prototype에 설정되고 prototype에 설정된다는 것은 메소드를 추가하는 것과 같다.

메소드로 추가하게 되면 이미 만들어진 인스턴스, 그리고 앞으로 만들어질 인스턴스에서도 prototype에 추가된 메소드를 사용할 수 있다.
