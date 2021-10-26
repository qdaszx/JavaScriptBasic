/*
이터레이션

- 과정 중간에 이터레이션 개념 이해가 필요하므로
    먼저 다루며
    이 장에서는 이터레이션 개념만 다루고
    자세한 것은 Symbol 오브젝트에서 다룹니다.

- 이터레이션(Iteration)의 사전적 의미 : 반복
    for() 문의 반복 개념과 차이 있음 [코드1]
    강좌에서는 이터레이션과 반복을 같이 사용

- 이터레이션을 위한 프로토콜(protocol) 필요
    예: 통신 프로토콜(규약)
    데이터 송수신 프로토콜 정의

- 즉, 이터레이션은 프로토콜을 갖고 있으며
    프로토콜에 따라 이터레이션 수행
    프로토콜이 구문과 빌트인이 아니므로
    프로토콜에 맞으면 이터레이션 가능
*/
console.log("[코드1] 이터레이션");
const list = [10, 20];
for (let value of list) {
  console.log(value);
};
const obj = list[Symbol.iterator]();
console.log(obj.next());  // {value: 10, done: false}
console.log(obj.next());  // {value: 20, done: false}
console.log(obj.next());  // {value: undefined, done: true}

/*
이터레이션 프로토콜

- 이터레이션 프로토콜(규약)은

- 오브젝트가 이터레이션할 수 있는 구조이어야 하며 [코드2]
    [10, 20]은 가능, 100은 불가능

- 이터레이션 함수를 갖고 있어야 합니다.

- 이터레이션 프로토콜 구분
    이터러블(iterable) 프로토콜
    이터레이터(iterator) 프로토콜

개발자 코드로 프로토콜을 맞추면
    이터레이션할 수 없는 오브젝트를
    이터레이션할 수 있도록 만들 수 있음
*/
console.log("[코드2] 이터레이션");
const list = [10, 20];
const obj = list[Symbol.iterator]();

console.log(obj.next());  // {value: 10, done: false}
console.log(obj.next());  // {value: 20, done: false}
console.log(obj.next());  // {value: undefined, done:
