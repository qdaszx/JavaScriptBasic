/*
Number 오브젝트

IEEE 754

- IEEE (Institute of Electrical and Electronics Engineers)

- 자바스크립트는 IEEE 754에 정의된 64비트 부동 소수점으로 수를 처리
    - double-precision floating-point
      format numbers
  64비트로 최솟값과 최댓값을 처리

- 정수와 실수를 구분하지 않음
    - 1을 1.0으로 처리
    - 1과 1.2를 더할 수 있음
*/

/*
64비트 구성

- 사인 비트
    - 63: 1비트
    - 값이 0이면 양수, 1이면 음수

- 지수 exponent
    - 52 ~ 62: 11비트

- 가수 fraction
    - 0 ~ 51: 52비트 + 1(사인 비트): 53비트
*/

/*
값을 구하는 방법

- 비트 값은 0아니면 1
- 2^x 승 값을 더해 값을 구함
    - 0비트 부터 1, 1, 1 이면
    - 1(2^0) + 2(2^1) + 4 = 7
*/

/*
Number 상수

상수 이름 ::: 상수 값
Number.MAX_SAFE_INTEGER ::: 9007199254740991 (2의 53승 - 1)
Number.MIN_SAFE_INTEGER ::: -9007199254740991 (-(2의 53승 - 1))

- safe integer란
    - 지수(e)를 사용하지 않고 나타낼 수 있는 값
    - 2의 64승이 아닌 2의 53승

- Number.MAX_SAFE_INTEGER
    - safe integer 최댓값 [코드1]

- Number.MIN_SAFE_INTEGER
    - safe integer 최솟값 [코드2]
*/
console.log("[코드1]");
console.log(Number.MAX_SAFE_INTEGER); //  9007199254740991

console.log(Math.pow(2, 53) - 1); //  9007199254740991
/**
 * 1. 값이 같습니다.
 */

console.log("[코드2] safe integer 최솟값");
console.log(Number.MIN_SAFE_INTEGER); //  -9007199254740991

console.log(-(Math.pow(2, 53) - 1));  // -9007199254740991
/**
 * 1. 값이 같습니다.
 */