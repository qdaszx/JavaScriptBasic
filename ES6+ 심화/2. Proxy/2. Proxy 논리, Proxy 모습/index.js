// Proxy 모습

/*
Proxy 모습

식당에서 3명이 식사하고 있는 모습에서

왼쪽 사람이 오른쪽 사람 앞의 밥을 가져오려고 합니다.
  - 왼쪽 사람이 가운데 사람에게 밥을 달라고 말하고
  - 가운데 사람이 오른쪽 사람에게 말하면
  - 오른쪽 -> 가운데 -> 왼쪽 순서로 밥을 받을 수 있습니다.

이 모습에서 가운데 사람이 Proxy
  - 왼쪽 사람의 말을 받아 오른족 사람에게 말하고
  - 오른쪽 사람에게서 밥을 받아 왼쪽 사람에게 전달합니다.

이와 같이 Proxy는 중간에서 대리 역할을 합니다.

왼쪽 사람이 오른쪽 사람에게 직접 말하고 밥을 받으면 Proxy가 필요하지 않습니다.
*/

/*
Proxy 논리

가운데 사람(Proxy)을 거쳐서 받는 모습을
  - 자바스크립트 코드로 표현하면 [코드1]

middle.food가 실행되면
  - Proxy의 getter가 호출되며
  - Proxy에서 target의 getter를 호출하면서 "food"를 파라미터로 넘겨줍니다.
  - new Proxy() 파라미터에 target을 작성하므로 middle에서 target을 알 수 있습니다.

target의 [[Get]]이 food 값을 구해 middle로 반환하고
  - middle로 반환된 값을 left에 할당합니다.

이렇게 Proxy가 가운데에서 대리 역할을 합니다.
*/
console.log("[코드1] Proxy 논리");
const target = { food: "밥" };
const middle = new Proxy(target, {});
const left = middle.food;
console.log(left);  // 밥
/**
 * 1. const target = {food: "밥"};
 *    target은 오른쪽 사람이고 food는 프로퍼티 키이며, "밥"은 프로퍼티 값입니다.
 * 2. const middle = new Proxy(target, {});
 *    Proxy 인스턴스를 생성하여 middle에 할당합니다.
 *    middle이 가운데 사람이며 target을 알 수 있습니다.
 * 3. const left = middle.food;
 *    왼쪽 사람이 가운데 사람에게 밥을 달라는 것과 가운데 사람이 오른족 사람에게 밥을 달라고 하는 것입니다.
 * 4. 할당 연산자(=)는 오른쪽 사람이 준 밥을 받아 왼쪽 사람에게 건네주는 것 입니다.
 * 5. left는 왼쪽 사람입니다.
 */