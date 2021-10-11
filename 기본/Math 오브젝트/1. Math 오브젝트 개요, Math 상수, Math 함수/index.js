/**
 * Math 오브젝트 개요
 * - 수학 계산용 오브젝트
 *    - 상수, 절댓값, 사인, 탄젠트 등
 * - new 연산자로 인스턴스 생성 불가
 *    - Math, JSON, 글로벌 오브젝트
 * - 메소드가 아니라 함수
 *    - Math.abs(값) 형태
 */

/**
 * Math 상수
 * 이름 - 값 - 개요
 * Math 상수
 * E - 2.7182818284590452354 - 자연로그 상수(e)
 * LN10 - 2.302585092994046 - 자연로그 10
 * LN2 - 0.6931471805599453 - 자연로그 2
 * LOG2E - 1.4426950408889634 - 밑이 2인 e(자연로그 밑) 로그
 * LOG10E - 0.4342944819032518 - e의 상용 로그(10을 밑으로 하는 로그) 값
 * PI - 3.1415926535897932 -  𝛑
 * SQRT1_2 - 0.7071067811865476 - 0.5의 제곱근 값
 * SQRT2 - 1.4142135623730951 - 2의 제곱근
 */

/**
 * Math 함수
 * 이름 - 개요
 * abs() - 절댓값 반환
 * floor() - 소수 이하 버림, 정숫값 반환
 * ceil() - 소수 이하 올림, 정수값 반환
 * round() - 소수 이하 반올림, 정숫값 반환
 * max() - 최댓값
 * min() - 최솟값
 * random() - 0에서 1미만 난수
 * pow() - x의 y자승 값
 * cos() - 코사인
 * acos() - 아크 코사인
 * sin() - 사인
 * asin() - 아크 사인
 * tan() - 탄젠트
 * atan() - 아크 탄젠트
 * atan2() - x, y 좌표의 아크 탄젠트
 * sqrt() - 제곱근
 * exp() - 자연로그 상수(e)의 제곱근
 * log() - 자연로그 값
 */

/**
 * abs()
 * 구분 - 데이터(값)
 * 파라미터 - 값
 * 반환 - 변환한 절댓값
 *
 * - 음수를 양수로 변환한 절댓값 반환 [코드1]
 */
console.log("[코드1] 절댓값 반환");
console.log(Math.abs(-123));  // 123
console.log(Math.abs(-Infinity)); // Infinity

/**
 * floor()
 * 구분 - 데이터(값)
 * 파라미터 - 값
 * 반환 - 변환한 값
 *
 * - 소수 이하 버림, 정숫값 반환
 * - 소수 이하 값이 있으면서
 *   음수이면 -1을 더해 반환 [코드2]
 */
console.log("[코드2] 소수 이하 버림");
console.log(Math.floor(5.3)); // 5
console.log(Math.floor(-1.7));  // -2
console.log(Math.floor(-1.0));  // -1

/**
 * ceil()
 * 구분 - 값
 * 반환 - 변환한 값
 *
 * - 소수 이하 올림, 정숫값 반환 [코드3]
 */
console.log("[코드3] 소수 이하 올림");
console.log(Math.ceil(5.1));  // 6
console.log(Math.ceil(-1.7)); // -1
console.log(Math.ceil(-0.3)); // -0

/**
 * round()
 * 구분 - 데이터(값)
 * 파라미터 - 값
 * 반환 - 변환한 값
 *
 * - 소수 이하 반올림, 정숫값 반환
 * - 양수이면 반올림, 음수이면 반내림 [코드4]
 */
console.log("[코드4] 소수 이하 반올림");
console.log(Math.round(5.1)); // 5
console.log(Math.round(5.5)); // 6
console.log(Math.round(-1.6));  // -2
console.log(Math.round(-1.3));  // -1

/**
 * max()
 * 구분 - 데이터(값)
 * 파라미터 - 콤마로 구분하여 값 작성
 * 반환 - 변환한 값
 *
 * - 파라미터 값 중에서 가장 큰 값을 반환
 * - 파라미터 값을 전부 숫자로 변환하여 비교
 *    - NaN가 하나라도 있으면 NaN 반환 [코드5]
 */
console.log("[코드5] 최댓값 반환");
console.log(Math.max(5, 3, 9)); // 9
console.log(Math.max(5, 3, "AB"));  // NaN


/**
 * min()
 * 구분 - 데이터(값)
 * 파라미터 - 콤마로 구분하여 값 작성
 * 반환 - 변환한 값
 *
 * - 파라미터 값 중에서 가장 작은 값을 반환
 * - 파라미터 값을 전부 숫자로 변환하여 비교
 *    - NaN가 하나라도 있으면 NaN 반환 [코드6]
 */
console.log("[코드6] 최솟값 반환");
console.log(Math.min(5, 3, 9))  // 3
console.log(Math.min(5, 3, "AB"));  // NaN

/**
 * pow()
 * 구분 - 데이터(값)
 * 파라미터 1. x 2. y
 * 반환 - 변환한 값
 *
 * - 파라미터 x 값의 y승 값을 반환
 * - y가 0일 때 x가 NaN라도 1을 반환
 * - y가 NaN이면 NaN 반환
 * - 이처럼 경우의 수가 많으므로
 *   사용하기 전에 테스트 필요 [코드7]
 */
console.log("[코드7] 자승 값 반환");
console.log(Math.pow(10, 2)); // 100
console.log(Math.pow(10, 0)); // 1
console.log(Math.pow("A", 1));  // NaN
console.log(Math.pow(1, "A"));  // NaN
console.log(Math.pow(1)); // NaN
/**
 * 1. 두 번째 파라미터를 작성하지 않으면 NaN
 */

/**
 * random()
 * 구분 - 데이터(값)
 * 파라미터 - 사용하지 않음
 * 반환 - 변환한 값
 *
 * - 0에서 1미만 사이의 난수 반환 [코드8]
 */
console.log("[코드8] 난수 반환");
console.log(Math.random()); // 0.7511482178165865
console.log(Math.random()); // 0.730086053674263
/**
 * 1. random() 함수를 실행할 때마다
 *    다른 값이 반환됩니다.
 */
