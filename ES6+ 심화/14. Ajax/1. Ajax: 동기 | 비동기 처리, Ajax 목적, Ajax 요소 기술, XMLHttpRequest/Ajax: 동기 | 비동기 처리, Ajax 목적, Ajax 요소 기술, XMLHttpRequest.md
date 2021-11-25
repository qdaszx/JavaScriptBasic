# 비동기 통신, 비동기 프로세스

지금부터 4개 섹션으로 나누어

비동기 통신과 비동기 프로세스를 다룹니다.

비동기 통신과 비동기 프로세스의 전반적인 흐름을 단계별로 진행합니다.

통합된 시나리오 구성을 위해 자바스크립트 스펙에 없는 것도 포함시켰습니다.

4개의 섹션은

- Ajax
- XMLHttpRequest
- 비동기 통신과 비동기 프로세스
- Fetch

## 동기, 비동기 처리

동기처리는 현재 실행중인 처리가 끝나야 다음 처리를 하게 됩니다.

자바스크립트는 기본적으로 동기 처리입니다.

한편 비동기 처리는 실행중인 처리가 끝나지 않아도 다른 처리를 할 수 있습니다.

처리 순서가 엉킬 수 있으므로 이에 대응할 수 있도록 해야 합니다.

### 동기 처리의 단점

서버에서 이미지 파일을 가져올 때

이미지를 수신하는 동안 마우스 클릭 이벤트가 발생하지 않습니다.

사용자가 기다려야 합니다.

### 비동기 통신 처리는

이미지를 수신하는 동안에도 마우스 클릭 이벤트가 발생하며

다른 처리를 할 수 있습니다.

UI를 향상시킬 수 있습니다.

비동기 처리의 바탕은 Promise 개념입니다.

# Ajax의 목적

## Ajax

약칭: Asynchronous JavaScript + XML

누가: Jesse James Garrett

언제: 2005.02.18

어디에: 블로그(현재는 연결되지 않음)

글 제목: A New Approach to Web Applications

## Ajax 요소 기술

### XHTML과 CSS로 표준 기반의 프리젠테이션

standards-based presentation using XHTML and CSS

### DOM으로 동적 표시 및 상호작용

dynamic display and interaction using the DOM

### XML과 XLST로 데이터 변환 및 제어

data interchange and manipulation using XML and XLST

### XMLHttpRequest를 사용하여 비동기로 데이터 송수신

asynchronous data retrieval using XMLHttpRequest

### JavaScript로 기술을 결합

JavaScript binding everything together

## XMLHttpRequest

XMLHttpRequest는?

동기, 비동기 통신을 지원하는 오브젝트

오브젝트를 사용하여 데이터 송수신

그럼, Ajax는?

A New Approach to Web Applications

새로운 것은 하나도 없습니다.

Web을 애플리케이션으로 접근하자는 것

XHR 오브젝트는 애플리케이션을 위한 하나의 요소, 수단입니다.

---

    XMLHttpRequest는 비동기 통신을 위한 하나의 수단이다.

    왜 필요하느냐? 애플리케이션 개념으로 접근하겠다는 것입니다.

    요소 기술들을 묶어서 서비스를 하겠다.
