/**
 * get 속성
 * - getter
 *    - OOP 용어
 * - var result = obj.book; 코드를 만나면 [코드1]
 *    - obj.book의 get 함수가 호출되며
 *    - get 함수에서 "JS책"을 반환
 *    - 반환된 "JS책"을 result 변수에 할당
 * - obj.book.get()처럼 함수로
 *   호출하면 에러 발생
 */
console.log("[코드1] getter 정의");
let obj = {};
Object.defineProperty(obj, "book", {
  get: function () {
    return "JS책";
  }
});
let result = obj.book;
console.log(result);  // JS책

/**
 * set 속성
 * - setter
 *    - OOP 용어
 * - obj.book = "JS책"; 코드를 만나면 [코드2]
 *    - obj.book의 set 함수를 호출하면서
 *    - "JS책"을 파라미터 값으로 넘겨 줌
 *    - data의 title 프로퍼티에 "JS책"을 설정
 * - obj.book; 코드를 만나면
 *    - obj.book의 get 함수가 호출되며
 *    - get 함수에서 data.title 값을 반환
 *    - setter에서 설정한 "JS책"이 반환됨
 */
console.log("[코드2] setter 정의");
let obj2 = {};
let data = {};
Object.defineProperty(obj2, "book", {
  set: function (param) {
    data.title = param;
  },
  get: function () {
    return data.title;
  }
});
obj2.book = "JS책"
console.log(obj2.book);  // JS책