# Symbol Property

## Well-Known Symbols

스펙에서 @@iterator 형태를 볼 수 있습니다.

@@는 Well-Known Symbol을 나타내는 기호입니다.

@@match와 Symbol.match가 같습니다.

왜냐하면, 스펙에서는 @@match 형태를 사용하고 개발자 소스코드에서는 Symbol.match 형태를 사용합니다. (왜 나눈거지)

## Well-Known Symbol이란

스펙에서 알고리즘에 이름을 부여하고 이름으로 참조하기 위한 빌트인 Symbol 값입니다.

개발자 코드가 우선 실행됩니다.

개발자 코드에서 match() 메소드를 실행하면 디폴트로 @@match를 실행하게 됩니다.

개발자 소스 코드에 Symbol.match를 작성하면 @@match가 실행되지 않고 Symbol.match가 실행됩니다.

개발자 코드로 @@match의 디폴트 기능을 오버라이딩 할 수 있습니다.

개발자가 유용성을 갖을 수 있도록 오픈 시켰줬습니다.

기존에는 엔진이 제공하는 기능만 사용할 수 있었는데, 이제는 개발자가 개발에 필요한 것을 추가할 수 있다는 것 입니다.

### ES2019 기준으로 12개의 Well-Known-Symbol

| Symbol                    | 대응                        |
| :------------------------ | :-------------------------- |
| Symbol.asyncIterator      | for-await-of                |
| Symbol.isConcatSpreadable | Array.prototype.concat()    |
| Symbol.match              | String.prototype.match()    |
| Symbol.search             | String.prototype.search()   |
| Symbol,split              | String.prototype.split()    |
| Symbol.toStringTag        | Object.prototype.toString() |
| Symbol.hasInstance        | instanceof                  |
| Symbol.iterator           | for-of                      |
| Symbol.replace            | String.prototype.replace()  |
| Symbol.species            | constructor                 |
| Symbol.toPrimitive        | ToPrimitive()               |
| Symbol.unscopables        | with                        |

- 강좌에서 다루는 것

  - isConcatSpreadable, iterator, match, species, toPrimitive, toStringTag

- 강좌에서 다루지 않는 것
  - asyncIterator, hasInstance(instanceof 처리)
  - replace, search, split는 match와 비슷
  - unscopables는 "use strict"에서 with 문을 사용할 수 없음
