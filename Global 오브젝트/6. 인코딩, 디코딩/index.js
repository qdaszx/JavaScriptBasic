/**
 * encodeURI()
 *
 * 구분 - 데이터(값)
 * 파라미터 - URI
 * 반환 - 인코딩 결과
 *
 * - URI를 인코딩하여 반환
 *    - Uniform Resource Identifier
 *    - 인코딩 제외 문자를 제외하고
 *      "%16진수%16진수" 형태로 변환 [코드1]
 * - 인코딩 제외 문자
 *    - 영문자, 숫자
 *    - # ; / ? : @ & = + $ , - _ . ! ~ * () 따옴표
 */
console.log("[코드1] URI 인코딩");
let uri = "data?a=번&b=호";
console.log(encodeURI(uri));  // data?a=%EB%B2%88&b=%ED%98%B8

/**
 * encodeURIComponent()
 *
 * 구분 - 데이터(값)
 * 파라미터 - URI
 * 반환 - 인코딩 결과
 *
 * - URI를 인코딩하여 반환
 *    - "; / ? : @ & = + $ ,"를 인코딩하는 것이
 *      encodeURI()와 다름
 *    - 인코딩 제외 문자를 제외하고
 *      "%16진수 16진수" 형태로 변환
 * - 인코딩 제외 문자
 *    - 영문자, 숫자
 *    - # - _ . ! ~ * ( ) 따옴표
 */

/**
 * decodeURI()
 *
 * 구분 - 데이터(값)
 * 파라미터 - 인코딩 문자열
 * 반환 - 디코딩 결과
 *
 * - 인코딩을 디코딩하여 반환
 * - 파라미터 encodeURI()로
 *   인코딩한 문자열 작성 [코드2]
 */
console.log("[코드2] 디코딩");
let uri2 = "data?a=%EB%B2%88&b=%ED%98%B8";
console.log(decodeURI(uri2)); // data?a=번&b=호

/**
 * decodeURIComponent()
 *
 * 구분 - 데이터(값)
 * 파라미터 - 인코딩 문자열
 * 반환 - 디코딩 결과
 *
 * - 인코딩을 디코딩하여 반환
 * - 파라미터에 encodeURIComponent()로
 *   인코딩한 문자열 작성
 */