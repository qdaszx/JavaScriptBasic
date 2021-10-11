/**
 * JSON 오브젝트 개요
 * - JavaScript Object Notation
 *    - 빌트인 오브젝트
 *    - new 연산자로 인스턴스 생성 불가
 * - JSON 주요 기능
 *    - 데이터 송수신의 변환 기준
 *    - 텍스트이므로 전송 속도가 빠름
 *    - 파일 확장자: json, txt로 사용 가능
 * - JS 데이터 타입 지원
 *    - 다른 언어도 사용하지만,
 *      완전하게 같지 않을 수도 있음
 */

/**
 * stringify()
 * 구분 - 데이터(값)
 * object - JSON 오브젝트
 * 파라미터 1. 변환 대상
 *       2. 함수 또는 배열opt
 *       3. 가독성을 위한 구분자opt
 * 반환 - 변환 결과
 *
 * - JS 타입을 JSON 타입의 문자열로 변환
 *    - JSON.stringify() 형태로 호출
 * - 첫 번째 파라미터 [코드1] [코드2] [코드3] [코드4]
 * - 두 번째 파라미터 [코드5] [코드6]
 * - 세 번째 파라미터 [코드7] [코드8] [코드9]
 */
console.log('[코드1] 큰따옴표("")안에 작성됨');
let value = {
  book: '책',
  title: 123
};
let result = JSON.stringify(value);
console.log(result);  // {"book":"책","title":123}
/**
 * 1. 변환이란 큰따옴표 안에
 *    작성되도록 만드는 것을 뜻합니다
 * 2. 프로퍼티 이름인 book이 "book"으로 변환
 * 3. '책'이 "책"으로 변환
 * 4. 숫자는 변환하지 않습니다.
 */

console.log("[코드2] 배열 변환");
let value2 = ['book', '책', 123];
let result2 = JSON.stringify(value2);
console.log(result2); //  ["book","책",123]

console.log("[코드3] 특수한 값 변환");
console.log(JSON.stringify([Infinity, NaN, null])); // [null,null,null]
console.log(JSON.stringify([true, false])); // [true,false]
/**
 * 1. Infinity, NaN, null은 null로 변환됩니다.
 * 2. true, false는 변환하지 않습니다.
 */

console.log("[코드4] undefined 변환");
console.log(JSON.stringify(undefined)); // undefined
console.log(JSON.stringify([undefined])); // [null]
console.log(JSON.stringify({ value: undefined }));  // {}
/**
 * 1. undefined는 작성한 곳에 따라 다르게 변환됩니다.
 * 2. 값 하나이면 그대로 변환
 * 3. 배열 안에 있으면 null로 변환
 * 4. 프로퍼티 값이면 프로퍼티를 제외시킴
 *    프로퍼티 이름도 없어지므로 주의해야 합니다.
 */

console.log("[코드5] 두 번째 파라미터에 함수 작성");
let data = { book: '책', point: 55 };
function replace(key, value) {
  // point 값 55를 11로 변경
  return key === "point" ? 11 : value;
};
let result5 = JSON.stringify(data, replace);
console.log(result5); // {"book":"책","point":11}
/**
 * 1. 함수에서 return한 값을 변환 값으로 사용합니다.
 * 2. 값을 return하지 않거나 undefined를 return하면
 *    최종 데이터에서 제외시킵니다.
 *    즉, 데이터를 걸러 내게 됩니다.
 */

console.log("[코드6] 두 번째 파라미터에 배열 작성");
let data2 = { book: '책', point: 11, amount: 90 };
let result6 = JSON.stringify(data2, ['book', 'amount']);
console.log(result6); // {"book":"책","amount":90}
/**
 * 1. 배열에 프로퍼티 이름을 작성합니다.
 * 2. 이름이 같은 것만 result에 설정됩니다.
 * 3. 그래서 {point: 11}이 출력되지 않았습니다.
 */

console.log("[코드7] 세 번째 파라미터에 줄 분리 작성");
let data3 = { sports: 'soccer', time: 90 };
let result7 = JSON.stringify(data3, "", '\n');
console.log(result7);
/**
 *
{

"sports": "soccer",

"time": 90
}
1. 사람이 데이터를 보기 쉽게 하기 위한 것으로
    줄을 분리하여 표시합니다.
 */

console.log("[코드8] 들여쓰기 숫자 작성");
let data4 = { sports: 'soccer', time: 90 };
let result8 = JSON.stringify(data4, "", 4);
console.log(result8);
/**
{
    "sports": "soccer",
    "time": 90
}

1. 숫자는 들여쓰기 자릿수입니다.
2. 숫자만큼 들여쓰기를 합니다.
 */

console.log("[코드9] 문자 앞에 삽입할 문자 작성");
let data5 = { sports: 'soccer', time: 90 };
let result9 = JSON.stringify(data5, "", "##");
console.log(result9);
/**
{
##"sports": "soccer",
##"time": 90
}

1. 문자열(##)을 작성하면 데이터 앞에 ##을 표시합니다.
 */