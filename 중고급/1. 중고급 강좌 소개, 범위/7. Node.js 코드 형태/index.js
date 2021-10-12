/**
 * Node.js 코드 형태
 *
 * - 서버 프로그램 고려 사항
 *    - 동접 10K
 * - JS는 Single thread
 * - Node.js에서 JS는 비동기 처리
 *    - C++의 Semapore, Mutex
 * - Context 형태가 효율성이 높음
 *    - ES5의 실행 콘텍스트는 Context 형태
 * - 실행 콘텍스에
 *    - 최적화된 형태로 코드를 작성해야 하며
 *    - 이를 위해 엔진 처리를 이해할 필요가 있음
 */