/*
getter, setter

- getter로 선언된 함수를 자동으로 호출
    - 값을 반환하는 시맨틱을 갖고 있으므로 getter 함수에서 값을 반환해야 합니다.

- ES5 형태 [코드1]
- ES6 형태 [코드1]
- ES6 장점
    - ES5처럼 프로퍼티의 속성 구조가 아님
    - 작성 편리
    - 다수의 getter 사용 가능 [코드3]
*/
console.log("[코드1] ES5 getter 형태");
var book = {};
Object.defineProperty(book, "title", {
  get: function () {
    return "책";
  }
});
console.log(book.title);  // 책
/**
 * 1. book.title을 실행하면 title 프로퍼티에서 get 속성의 존재를 체크합니다.
 * 2. 있으면, get() 함수를 호출하며 "책"이 반환되어 출력됩니다.
 * 3. book.title.get()처럼 함수로 호출하면 에러가 발생합니다.
 * 4. ES5의 Descriptor를 참조하기 바랍니다.
 */

console.log("[코드2] ES6 getter 형태");
const book2 = {
  point: 100,
  get getPoint() {
    return this.point;
  }
};
console.log(book.getPoint); // 100
/**
 * 1. get getPoint(){}처럼 getPoint() 앞에 get을 작성하면 getter로 선언됩니다.
 * 2. getPoint() 함수가 자동으로 호출됩니다.
 */

console.log("[코드3] 다수의 getter 사용");
const book3 = {
  get getPoint() {
    return "포인트";
  },
  get getTitle() {
    return "제목";
  }
};
console.log(book.getPoint); // 포인트
console.log(book.getTitle); // 제목
/**
 * 1. 다수의 getter를 선언할 수 있습니다.
 */

/*
setter

- 프로퍼티에 값을 할당하면
    - setter로 선언된 함수 자동 호출
    - 값을 설정하는 시맨틱을 갖고 있으므로 setter 함수에서 값을 설정해야 합니다.
- ES5 형태 [코드4]
- ES6 형태 [코드5]
- 변숫값을 함수 이름으로 사용 [코드6]
- setter 삭제 [코드7]
*/
console.log("[코드4] ES5 setter 형태");
var book4 = { title: "HTML" };
Object.defineProperty(book4, "change", {
  set: function (param) {
    this.title = param;
  }
});
book4.change = "자바스크립트";
console.log(book4); // {title: "자바스크립트"}
/**
 * 1. book.change = "자바스크립트";를 실행하면 change 프로퍼티에서 set 속성의 존재 여부를 체크합니다.
 * 2. 있으면, set() 함수를 호출합니다.
 * 3. "자바스크립트"를 파라미터 값으로 넘겨 줍니다.
 */

console.log("[코드5] ES6 setter 형태");
const book5 = {
  point: 100,
  set setPoint(param) {
    this.point = param;
  }
};
book5.setPoint = 200;
console.log(book5.point); // 200
/**
 * 1. setPoint() 앞에 set을 작성하면 setter로 선언됩니다.
 * 2. book.setPoint = 200; -> setPoint에 값을 할당하면 setPoint()가 자동으로 호출됩니다.
 * 3. 파라미터 값으로 200을 넘겨줍니다.
 */

console.log("[코드6] 변숫값을 함수 이름으로 사용");
const name = "setPoint";
const book6 = {
  point: 100,
  set [name](param) {
    this.point = param;
  }
};
book6[name] = 200;
console.log(book6.point); // 200
/**
 * 1. name 변숫값인 "setPoint"가 함수 이름으로 사용됩니다.
 * 2. getter도 같은 방법으로 사용할 수 있습니다.
 */

console.log("[코드7] setter 삭제");
const name2 = "setPoint";
const book7 = {
  set [name2](param) {
    this.point = param;
  }
};
delete book7[name2];
debugger;
console.log(book7[name2]);  // undefined
/**
 * 1. delete 연산자로 setter를 삭제할 수 있습니다.
 */