/**
 * this와 bind()
 *
 * 구분 - 타입 - 데이터(값)
 * object - Function - 호출할 함수 이름
 * 파라미터 - object - this로 참조할 오브젝트
 *        - Any - 파라미터opt
 * 반환 - Function - function 오브젝트
 *
 * - 두 번에 나누어 처리
 *    - function 오브젝트 생성
 *    - 생성한 function 오브젝트를 함수로 호출
 * - 파라미터
 *    - 1번째 파라미터에 함수에서 this로 참조할 오브젝트
 *    - 2번째 파라미터에 호출된 함수의 파라미터 값
 * - 생성한 function을 호출할 때에도 파라미터 작성 가능
 *    - 두 개의 파라미터를 병합하여 사용
 */

/**
 * function 오브젝트 생성, 호출
 *
 * - var obj = book.get.bind(book);
 *    - book.get()을 호출하지 않고
 *    - function 오브젝트를 생성하여 반환
 *    - 생성한 function 오브젝트를
 *      생성한 오브젝트의 [[TargetFunction]]에 설정
 *    - 처리를 나누어서 하므로 저장 필요
 * - console.log(typeof obj);
 *    - obj의 타입은 function 오브젝트
 * - bind()의 첫 번째 파라미터
 *    - get() 함수에서 this로 참조할 오브젝트 작성
 *    - get() 앞에 작성한 오브젝트를 this로 참조하지 않음
 *    - 작성하지 않으면 undefined 설정
 *    - 생성한 function 오브젝트의 [[BoundThis]]에 설정
 * - var result = obj();
 *    - bind()로 생성한 function 오브젝트 호출
 *    - book.get() 함수가 호출됩니다.
 * - return this.point;
 *    - this가 [[BoundThis]]를 참조
 *    - 즉, book 오브젝트를 참조하므로 123 반환
 */
console.log("[코드1] function 오브젝트 생성, 호출");
var book = {
  point: 123,
  get: function () {
    return this.point;
  }
};
var obj = book.get.bind(book);
console.log(typeof obj);  // function
var result = obj();
console.log(result);  // 123

/**
 * 파라미터 병합
 *
 * - var obj = book.get.bind(this, 10, 20);
 *    - 두 번째, 세 번째 파라미터에 값을 작성했으며
 *    - book.get()의 파라미터 값으로 넘겨줍니다.
 *    - function 오브젝트의 [[BoundArguments]]에 설정
 * - get() 함수에 파라미터 이름을
 *    - 작성하지 않고 arguments 사용
 * - return Array.prototype.slice.call(arguments);
 *    - slice()는 인덱스 범위의 엘리먼트를 배열로 반환
 *    - 인덱스를 작성하지 않으면 arguments 전체 반환
 * - var result = obj(30, 40);
 *    - book.get() 함수가 호출되며
 *    - book.get.bind(this, 10, 20); 에서
 *      10과 20을 [10,20] 형태로 반환
 *    - 여기에 obj(30, 40)의 30과 40을
 *      병합(첨부)하여 반환
 */
console.log("[코드2] 파라미터 병합");
var book2 = {
  get: function () {
    return Array.prototype.slice.call(arguments);
  }
};
var obj2 = book2.get.bind(this, 10, 20);
var result2 = obj2(30, 40);
console.log(result2); // [10, 20, 30, 40]