# 화살표 함수와 this

strict 모드에서 함수를 호출할 때 함수 앞에 오브젝트 작성은 필수 입니다.

```js
console.log("[코드1] 오브젝트 작성은 필수");
// "use strict"
function book() {
  function getPoint() {
    console.log(this);
  }
  getPoint();
  // window.getPoint();
}
window.book(); // undefined
```

strict 모드에서는 window.book()처럼 호출하는 함수 앞에 오브젝트를 작성해야 합니다. 작성하지 않으면 book() 함수 안에서 this 값이 undefined입니다.

또한, getPoint()처럼 window를 앞에 작성하지 않으면 getPoint() 안에서 this 값이 또 undefined입니다.

이를 피하기 위해서 window.getPoint()로 작성할 수 있지만, 호출하면 window 오브젝트에 getPoint()가 없으므로 에러가 납니다.

이와 같이 strict 모드의 함수에서 this를 참조하기 위해서는 this를 별도로 저장하는 등에 방법으로 사용해야 합니다.

## 화살표 함수로 해결

```js
console.log("[코드2] 화살표 함수 사용");
// "use strict"
var point = 100;
function sports() {
  const getPoint2 = () => {
    console.log(this.point);
  };
  getPoint2();
}
window.sports(); // 100
```

화살표 함수를 작성하면 getPoint()를 호출할 수 있습니다. (window를 작성하지 않아도 됩니다.)

또한, getPoint() 화살표 함수 안에서 this가 undefined가 아니라 글로벌(window) 오브젝트를 참조하게 됩니다.

따라서 글로벌 변수 값인 point 값을 출력하게 됩니다.

### 화살표 함수에서 this가 글로벌 오브젝트를 참조한다는 것 입니다.

그런데 중요한 포인트가 있습니다.

    this 값이 undefined 이라면?

```js
"use strict";
debugger;

const book2 = {
  point: 500,
  getPoint: function () {
    console.log(this.point);
  },
};
book2.getPoint(); // 500
/*
1. 일반 함수인 book.getPoint()를 호출하면
  함수 안에서 this가 book 오브젝트를 참조합니다.
  따라서 console에 500이 출력됩니다.
*/
debugger;

var point2 = 100;
const sports2 = {
  getPoint: () => {
    console.log("this.point", this.point2);
  },
};
sports2.getPoint(); // 100
/*
1. 화살표 함수인 sports.getPoint()를 호출하면
  오른쪽 Local에 this:undefined가 표시됩니다.
2. 이것은, 화살표 함수는 함수에
  this를 갖고 있지 않기 때문입니다.
3. 이때, this가 window 오브젝트를 참조합니다.
*/
debugger;

/*
1. console.log("this.point", this.point);
  var point = 100; 에서 var 키워드를 사용했으므로
  point 변수가 Window 오브젝트에 설정됩니다.
  따라서 console에 100이 출력됩니다.
2. 지금부터 this가 window 오브젝트를 참조하는
  논리를 살펴보겠습니다.
*/
debugger;
```

## this가 window 오브젝트를 참조하는 논리

### this가 정적 스코프 참조

this가 화살표 함수에서 정적 스코프의 this를 사용합니다.

    정적(렉시컬) 스코프란 엔진이 해석할 때, 화살표 함수를 만나면 function 오브젝트를 생성합니다.
    그리고 화살표 함수가 속한 스코프를 생성한 오브젝트에 바인딩합니다.
    오브젝트에 바인딩된 스코프의 this를 화살표 함수에서 this로 사용합니다.

```js
console.log("[코드3] 스코프를 this로 사용");
var title = "책";
const book3 = {
  show: () => console.log(this.title),
};
book3.show(); // 책
```

    show() 화살표 함수에서 this가 window 오브젝트를 참조하는 것은 함수 밖 스코프의 변수를 사용하듯이 show()의 스코프인 book 오브젝트에 설정된 스코프의 this를 화살표 함수에서 this로 사용하기 때문입니다.

    book 오브젝트가 글로벌 오브젝트에 설정되므로 this가 window 오브젝트를 참조하게 됩니다.
