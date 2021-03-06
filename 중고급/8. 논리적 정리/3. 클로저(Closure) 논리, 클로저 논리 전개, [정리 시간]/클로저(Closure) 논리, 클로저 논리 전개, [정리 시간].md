# 클로저(Closure) 논리

## 클로저

Closure란 function 오브젝트를 생성할 때 함수가 속한 스코프를 내부 프로퍼티인 `[[Scope]]`에 설정하고 함수가 호출 되었을 때, `[[Scope]]`의 프로퍼티를 사용하는 메커니즘입니다.

따라서 `[[Scope]]`의 설정과 사용 방법을 이해하면 클로저는 단지 논리적인 설명입니다.

## 클로저 논리

함수가 호출되면 실행 중인 function 오브젝트에 작성한 변수와 함수를 선언적 환경 레코드에 설정합니다.

```js
실행 콘텍스트: {
  렉시컬 환경 컴포넌트: {
    환경 레코드: {
      선언적 환경 레코드: {},
      오브젝트 환경 레코드: {}
    },
    외부 렉시컬 환경 참조: {}
  }
}
```

그리고 `[[Scope]]`를 외부 렉시컬 환경 참조에 바인딩합니다.

변수 이름으로 접근하여 값을 사용하거나 변경할 수 있습니다. 왜냐하면 실행 콘텍스트 안에 다 들어 있기 때문입니다.

또한, 함수를 호출할 수 있습니다.

> 외부 렉시컬 환경 참조에 있는 것을 내 것처럼 쓰겠다 라는 논리가 클로저 논리입니다.

## 클로저 논리 전개

```js
console.log("[코드1] 클로저 논리 전개");
function book() {
  var point = 100;
  var getPoint = function (param) {
    point = point + param;
    return point;
  };
  return getPoint;
}
var obj = book();
console.log(obj(200)); // 300
```

`var obj = book();` book 함수를 호출하면 엔진은 아래와 같은 방법으로 처리합니다. 그리고 getPoint()의 클로저가 만들어집니다.

### 실행 준비 단계

실행 콘텍스트(EC) 생성하게 됩니다.

3개의 컴포넌트를 생성합니다. (렉시컬/변수 환경 컴포넌트, this 바인딩 컴포넌트)

function 오브젝트의 `[[Scope]]`를 외부 렉시컬 환경 참조에 바인딩합니다.

```js
실행 콘텍스트 = {
  렉시컬 환경 컴포넌트 : {
    환경 레코듸: {
      선언적 환경 레코드: {},
      오브젝트 환경 레코드: {}
    },
    외부 렉시컬 환경 참조 : {[[Scope]]}
  },
  변수 환경 컴포넌트 : {Same},
  this 바인딩 컴포넌트: {}
}
```

### 초기화 및 실행 단계

var point, var getPoint; 변수 이름을 선언적 환경 레코드에 설정합니다. 이때 값은 undefined입니다.

var point = 100; 선언적 환경 레코드의 point에 100을 할당합니다.

var getPoint = function(param){코드}; function 키워드를 만나서 function 오브젝트를 생성합니다. 이때 스코프를 내부 프로퍼티인 `[[Scope]]`에 바인딩합니다. 즉 book 함수가 바인딩되는 것 입니다.

따라서 point = 100이 스코프에 바인딩됩니다.

```js
렉시컬 환경 컴포넌트 = {
  환경 레코드: {
    선언적 환경 레코드: {},
  },
  외부 렉시컬 환경 참조: {
    point: 100
  }
}
```

이렇게해서 book 함수는 getPoint 함수를 넘겨주게 되고 obj는 getPoint 함수가 됩니다. 여기서 obj(200)을 하게 되면

getPoint 함수를 호출합니다. 그러면 실행 콘텍스트(EC)를 생성합니다.

getPoint 오브젝트의 `[[Scope]]`를 외부 렉시컬 환경 참조에 바인딩합니다.

```js
렉시컬 환경 컴포넌트 = {
  환경 레코드: {
    선언적 환경 레코드: {
      param: 200
    },
  },
  외부 렉시컬 환경 참조: {
    point: 100
  }
}
```

파라미터 값을 매핑합니다. 선언적 환경 레코드에 설정합니다.

함수 안의 코드를 실행합니다.

point = point + param; point를 선언적 환경 레코드에서 식별자 해결합니다.

없으니까 외부 렉시컬 환경 참조에서 식별자를 해결합니다.

그런데 point 변수가 있으므로 100으로 반환합니다.

param을 선언적 환경 레코드에서 식별자 해결을 합니다.

param이 있으니까 200을 반환합니다.

100과 200을 더해서 point 변수에 할당하면 되는데 point 변수는 외부 렉시컬 환경 참조에 있는 것 입니다.

> ### 변수가 선언적 환경 레코드에 없으면 외부 렉시컬 환경 참조에서 식별자 해결을 합니다. 이것이 클로저 논리입니다.

## 정리 시간

요구 사항 : 값이 출력되는 논리를 설명하세요.

```js
function book2(bookParam) {
  var point = 100;
  function getPoint(pointParam) {
    point = point + bookParam + pointParam;
    return point;
  }
  return getPoint;
}
var obj2 = book2(200);
console.log(obj2(400)); // 700
```

`var obj = book(200);` book 함수를 호출합니다.

```js
실행 콘텍스트 = {
  렉시컬 환경 컴포넌트 : {
    환경 레코듸: {
      선언적 환경 레코드: {
        point: 100,
        bookParam: 200
      },
      오브젝트 환경 레코드: {}
    },
    외부 렉시컬 환경 참조 : {[[Scope]]}
  },
  변수 환경 컴포넌트 : {Same},
  this 바인딩 컴포넌트: {}
}
```

book 함수의 실행콘텍스트는 이런식으로 설정됩니다.

`return getPoint;` obj는 getPoint 함수가 됩니다.

`console.loog(obj(400));` obj 함수를 호출하면 getPoint(400);이 호출됩니다. 실행 콘텍스트가 만들어집니다.

```js
실행 콘텍스트 = {
  렉시컬 환경 컴포넌트 : {
    환경 레코듸: {
      선언적 환경 레코드: {
        pointParam: 400
      },
      오브젝트 환경 레코드: {}
    },
    외부 렉시컬 환경 참조 : {
      point: 100,
      bookParam: 200
    }
  },
  변수 환경 컴포넌트 : {Same},
  this 바인딩 컴포넌트: {}
}
```

`function getPoint(pointParam){...}` 함수 안에 point 변수를 구하기 위해서 point를 선언적 환경 레코드에서 식별자 해결을 합니다. 없으니까 외부 렉시컬 환경 참조에서 point를 찾아 100 값을 반환합니다.

bookParam도 선언적 환경 레코드에 없고 외부 렉시컬 환경 참조에 있으므로 200을 반환합니다

pointParam은 선언적 환경 레코드에 있으므로 400을 반환합니다.

100 + 200 + 400은 700이므로 값을 반환하여 출력합니다.
