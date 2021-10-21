/**
 * 재귀함수
 *
 * 프로퍼티 연동 방지
 *
 * - Object에 Object를 할당하면
 *    - 프로퍼티 값이 연동됩니다. [코드1]
 * - 배열도 마찬가지로 연동됩니다. [코드2]
 * - 연동 방지: 프로퍼티 단위로 할당 [코드3]
 */
console.log("[코드1] Object 할당");
var origin = { member: 100 };
var dup = origin;
dup.member = 200;
console.log(origin.member); // 200
/**
 * 1. origin 오브젝트를 dup 변수에 할당한 후
 *    - dup.member에 200을 설정하면
 *    - origin.member 값이 연동되어 바뀝니다.
 * 2. 오브젝트를 할당하면 값을 공유하기 때문입니다.
 */

console.log("[코드2] 배열 할당");
var origin2 = [1, 2, 3];
var dup2 = origin2;
dup2[1] = 200;
console.log(origin2); // [1, 200, 3]
/**
 * 1. 배열도 마찬가지로 배열을 할당하면
 *    - 값을 공유합니다.
 */

console.log("[코드3] 프로퍼티 단위로 할당");
var origin3 = { member: 100 };
var dup3 = {};
for (var name in origin3) {
  dup3[name] = origin[name];
};
dup3.member = 200;
console.log(origin3.member);  // 100
console.log(dup3.member); // 200
/**
 * 1. 값을 공유를 방지하려면
 *    프로퍼티 단위로 할당해야 합니다.
 */

/**
 * 재귀 함수
 *
 * - Recursive Function
 *    - 함수 안에서 자신 함수를 호출하는 형태
 * - 사용 사례
 *    - {name: {name: {name: value}}}
 *    - [[1, 2], [3, 4], [5, 6]]
 */

/**
 * 재귀 함수 형태
 *
 * 1. show(book);
 *    - 마지막 줄에서 show(book)를 호출하면서
 *    - book 오브젝트를 파라미터 값으로 넘겨줍니다.
 * 2. for (var type in param) {...}
 *    - for-in으로 파라미터로 받은 오브젝트 전개
 * 3. typeof param[type] === "object" ? show(param[type] : console.log(type + ": ", param[type]));
 * 4. param[type] 타입이 "object"이면
 *    - show()를 호출
 *      자신을 호출하면서 param[type]을 넘겨줍니다.
 *    - book["member"]이므로
 *      {name: 100}이 넘어 갑니다.
 * 5. param[type] 타입이 "object"가 아니면
 *    - member: {name: 100}에서
 *      {name: 100}을 읽은 것이므로 값을 출력합니다.
 */
console.log("[코드4] 재귀 함수 형태");
var book = {
  member: { name: 100 },
  point: { value: 200 }
};
function show(param) {
  for (var type in param) {
    typeof param[type] === "object" ? show(param[type]) : console.log(type + ":", param[type]);
  }
};
show(book); // name: 100 value: 200

/**
 * [정리 시간]
 *
 * 데이터 형태
 *
 * var member = {
 *   Jan: {item: {title: "JS북", amount: 100}, point: [10, 20, 30]},
 *   Feb: {item: {title: "JS북", amount: 200}, point: [40, 50, 60]}
 * }
 * - 재귀 함수로 데이터를 출력하세요.
 *    - 오브젝트이면 프로퍼티 이름(title, amount)과 값을 출력하고
 *    - 배열이면 값([10, 20, 30])을 출력하고 값을 누적하세요.
 * - 재귀 호출이 끝나면 누적한 값을 출력하세요.
 */
console.log("[정리 시간]");

// 강의자님의 ES5 기준 코드...

var Point = {};
Point.member = {
  jan: {item: {title: "JS북", amount:100}, point: [10,20,30]},
  Feb: {item: {title: "JS북", amount:200}, point: [40,50,60]}
};

Point.dup = {};
Point.dupArray = function(target, dup){
  dup.forEach(function(element, index){
    if (Array.isArray(element)){
      if (!target[index]){
        target[index] = [];
      };
      this.dedpCopy(target[index], element);
    } else if (typeof element === 'object'){
      if (!target[index]){
        target[index] = {};
      };
      this.deepCopy(target[index], element);
    } else {
      target[index] = element;
    };
  }, this);
};

Point.dupObject = function(target, dup){
  for (var pty in dup){
    var value = dup[pty];
    if (Array.isArray(value)){
      if (!target[pty]){
        target[pty] = [];
      };
      this.deepCopy(target[pty], value);
    } else if (typeof value === 'object'){
      if (!target[pty]){
        target[pty] = {};
      };
      this.deepCopy(target[pty], value);
    } else {
      target[pty] = value;
    };
  };
};

Point.deepCopy = function(target, dup){
  if (Array.isArray(dup)){
    this.dupArray(target, dup);
  } else if (typeof dup === 'object'){
    this.dupObject(target, dup);
  };
};

Point.deepCopy(Point.dup, Point.member);

// 수강생분 코드..

var member = {
  Jan: { item: { title: 'JS북', amount: 100 }, point: [10, 20, 30] },
  Feb: { item: { title: 'JS북', amount: 200 }, point: [40, 50, 60] },
};
//배열의 값을 누적할 변수 설정
var result = 0;

//reduce 메소드에서 사용할 콜백 함수
function reduceCallback(prev, curr) {
  return prev + curr;
}
function show(param) {
  for (var type in param) {
    if (typeof param[type] === 'object') {
      ifArray(param[type]);
    } else {
      console.log(type, param[type]);
    }
  }
}
//param[type]이 배열인지를 확인하는 함수
function ifArray(paramArray) {
  if (Array.isArray(paramArray)) {
    console.log(paramArray);
    result = paramArray.reduce(reduceCallback) + result;
  } else {
    show(paramArray);
  }
}

show(member);
//누적한 배열의 값을 출력
console.log(result);