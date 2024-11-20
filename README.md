# 202030405 김민기

서버가 데이터 불러오기 -서버에서는 두가지 방법으로 HTTP요청을 만들고 처리할 수 있습니다
1)Node의 내장 Http라이브러리를 사용할 수 있습니다
다만 서드파티 Http클라이언트와 비교했을때 설정하고 처리해야 할 작업이 더 많은 편입니다

2)HTTP 클라이언트 라이브러리를 사용할 수 있습니다. 가장 유명한 것이 Axios입니다.

-Axios를 사용하는 이유 1)클라이언트와 서버 모두에서 동일하게 사용 가능 2)

서버에서 REST API 사용하기
-REST API를 호출할 때는 public API를 호출할 것인지, private API를 호출할 것인지를 먼저 확인해야 함
-Public API는 어떤 인증이나 권한도 필요 없으며 누구나 호출 가능

# REST API 개요

---1---REST(Representational State Transfer)란 자원을 이름으로 구분하여 그 자원의 상태를 통신을 통해 주고 받는 것을 의미
1.HTTP URI를 이용해서 자원을 명시
2.HTTP Method(POST, Get, PUT, DELETE, PATCH 등)을 통해 자원에 CRUD를 적용

-CRUD란 데이터 처리의 기본적인 기능을 나타냅니다
1.create:데이터 생성(POST)
2.READ: 데이터 조회(GET)
3.Update: 데이터 수정 (PUT, Patch)
4.Delete:데이터 삭제(DELETE)

-REST API란 REST의 규칙을 적용한 API를 의미합니다

-REST API -기본설계 규칙
1.URI는 동사보다는 명사를,대문자보다는 소문자를 사용 2.주소의 마지막에 슬래시(/)를 포함하지 않음 3.단어를 연결할 때는 하이픈(-)을 사용 4.파일 확장자는 URI에 포함하지 않음
5.URI에 메소드를 포함하지 않음

---2---JSON SERVER
-backend가 개발되기 전이나 아직 외부 API가 결정되지 않았다면 local에 Json server를 구축하고 Front end 개발을 하기에 적합한 node패키지
json-server설치 명령어
-------npm i -g json-server-------

버전 확인 명령어
-------json-server --version-------

데이터 명령어
-------json-server ./data.json --port {아무 포트번호 입력}-------

---3---Axios란?
-Next.js에서 REST API를 다룰 떄는 보통 axios와 fetch중 하나를 선택
[Axios]
간편한 문법 :기본적으로 json데이터를 자동으로 변환해줌, res.data로 쉽게 접근
[Fetch-APi]
내장 API:브라우저에 내장되어 있어 별도의 설치 불필요
Promise 기반: 비동기 작업을 처리하는 데 익숙한 구조
스트림 처리 :데이터를 스트리밍으로 처리할 수 있는 기능이 있어, 큰 파일을 처리하는 데 유용
단점--
json변환 수동 처리:응답에서 json으로 변환할 때 res.json()을 호출해야함
에러처리 복잡성

[결론]
복잡한 요청이나 에러처리가 필요한 경우에는 axios

//
[Axios 설치]
---Axios 설치 명령어
$npm i axios

axios.get()을 통해 받아온 응답 객체인 res는 단순히 JSON데이터만 담고 있는것이 아니라,HTTP통신과 관련된 여러 정보들을 함께 포함하고 있음
ex) res.status:HTTP응답상태코드
res.headers:서버로부터 받은 헤더 정보
res.config:요청에 대한 설정 정보

--
Next.js와 같은 리액트 기반 앱에서 비동기 데이터를 처리할 때 렌더링 주기에 맞게 상태를 관리해야 함
[개선점]
1.useState와 useEffect사용 -비동기 데이터를 가져오는 작업은 컴포넌트의 상태(state)로 관리하는것이 일반적.
2.Loading 상태 처리

6. CSS와 내장 스타일링 메서드
   06-1 Styled JSX
   06-2 CSS Module
   06-3 SASS

6.1 Styled JSX
-Styled JSX 는 CSS-in-JS라이브러리 입니다. 내장모듈이기 떄문에 설치가 필요없습니다. -즉 CSS속성지정을 위해 자바스크립트를 사용할 수 있는 라이브러리입니다.

CSS-in-JS 의 단점
--IDE나 코드편집기 등 개발 도구에 대한 지원이 부족함.
--문법 하이라이팅, 자동 완성, 린트(llint)기능을 제공하지 않음.
--코드 내에서 CSS에 대한 의존성이 점점 커지기 떄문에 앱 번들도 커지고 느려짐.
--서버에 미리 CSS를 생성해도 클라이언트에서 리액트 하이드레이션이 끝나면 CSS를 다시생성해야함.
--이 때문에 실행 시점에 부학가 커지면 웹앱이 계속 느려지게 됨 기능을 추가 할 수록 이련 현상은 심해짐.

6.2 CSS Module
--CSS-In_JS의 단점을 회피하기 위한 좋은 방법은 바로 CSS Module입니다

--클래스들은 켐포넌트 스코프를 가집니다.
--생성된 HTML페이지 소스를 보면 class 이름이 바뀌어 있는 것을 확인 할 수 있습니다.
--styled JSX떄와 마찬가지로 이런 고유한 이름 때문에 다른 파일이라면 같은 class명을 사용해도 충돌이 일어나지 않습니다.
--만일 전역 CSS를 선언하고 싶다면 styles/globals.css를 만들고 사용합니다.
--파일명은 반드시 globals가 아니어도 되지만 암묵적 합의는 가능하면 지키는 것이 좋습니다.
html,
body{
padding:0;
margin:0;
font-family:sans-serif;
}
==이제 \_app.js에 import해주면 모든 컴포넌트에 적용됩니다
--또 한가지 방법은 class로 선언되 요소에 :global키워드를 추가해 줍니다 .button:global{}
--셀렉터 컴포지션은 통상적으로 사용할 수 있는 CSS를 만들고 compose속성을 지정해서 일부 속성을 덮어쓰는 기능입니다.

6-3 SASS
--Next에서 기본으로 지원하는 전 처리기 입니다
--단 패키지 설치가 필요합니다. $npm install sass
--SASS 및 SCSS(Sassy CSS)문법으로 CSS Module을 만들고 사용할 수 있습니다.
--styles/Home.module.css 파일 이름을 styles/Home/module.scss로 바꿔주면 됩니다
--SASS 기본 설정을 변경해야 하는 경우 next.config.js설정 파일을 변경합니다.

07.UI프레임워크
07-1.UI 라이브러리
07-2.Chakra UI
07-3.TailwindCss
07-4.Headless UI

07-1 UI 라이브러리
--UI라이브러리, 프레임워크, 유틸리티 기능이 필수는 아닙니다.
--다만 생산성 향상 및 UI의 일관서을 유지하는데 많은 도움을 받을 수 있습니다.
--Chakra UI
--TailwindCss
--Headless UI

07-2 Chakra UI
--오픈소스 컴포넌트 라이브러리로, 모듈화 되어 있고 접근성이 뛰어나며 보기좋은 UI를 만들 수 있습니다.
--버튼, 모달, 입력, 등 다양한 내장 컴포넌트를 제공
--dark mode 및 light mode를 모두 지원함
--Chakra UI의 useColorMode 훅을 사용해서 현재 사용하는 컬러 모드를 확인할 수 있습니다.
--기본 컴포넌트를 조합해서 새로운 컴포넌트를 쉽게 만들 수 있습니다.
--타입스크립트로 작성되었으며

07-3 Tailwind CSS
--다른 프레임워크와는 다르게 CSS규칙만을 제공함
--자바스크립트 모듈이나 리액트 컴포넌트를 제공하지 않기 때문에 필요한 경우 직접 만들어서 사용해야 합니다
--변수값을 조정하여 개성있는 디자인을 만들 수 있습니다. 디자인의 자유도가 높습니다.
--dark mode및 light mode를 쉽게 적용할 수 있습니다.
--빌드 시점에 사용하지 않는 클래스는 제거되기 때문에 높은 수준의 최적화를 지원함
--CSS클래싕 접두사를 활용해서 모바일, 데스크톱,태블릿 화며에서 원하는 규칙을 지정할 수 있습니다.sm(640px),md(768px),lg(1024px),xl(1280px),1xl(1536px)

07-4 Headless UI
--TailwindCSS를 만든 Tailwind Labs팀의 무료 오픈소스 프로젝트입니다
--TailwindCSS는 웹 컴포넌트 안에서 사용할 수 있는 CSS클래스만 제공합니다
--따라서 모달이나 버튼 등 동적이 컴포넌트를 만들려면 직접 자바스크립트 코드를 작성해야 합니다
--이런 단점을 보완하기 위해서 Headless UI가 탄생했습니다
--Headless UI는 CSS클래스를 제공하는 것이 아니라 동적 컴포넌트만 제공합니다

Next.js의 UI Framework
1.Project 생성
2.Tailwind CSS
3.Headless UI
4.Chakra UI
5.React-icon

1.Project 생성
$npx create-next-app@14
//15.0.2버전이 릴리드 되어 있으나 아직 Tailwind와의 호환성이 안정적이지 않기에 14를 사용
프로젝트 이름은 자유, 나머지는 모두 Yes로

2.Tailwind CSS
--TailwindCSS는 React를 기준으로 하고 있어서 바로 코드를 사용하면 오류가 발생할 수 있습니다
--test코드는 TailwindCSS.cm에 나와있는것이 오류가 적음

3.Headless UI

4.Chakra UI
--구글에서 Chakra UI검색 사이트 접속
--Home 화면에서 Start Building 버튼클릭 Next.js 선택
--App/chakra/page.js파일 생성
--지시대로 설치
--Snippets를 설치하면 src/components/ui아래 추가 component가 설치됨
--Layout에 provider를 설정
--tsconfig 설정확인해보고 전부 설정되어 있겠지만 없는것이 있으면 추가해주기
--next.config.mjx를 수정
--Component메뉴에서 Accordion을 테스트

5.React-icon

Next.js의 Props 전달 방법
1.Props흐름의 이해
2.Context API 3.주요 Directory&File
4.Context API vs. Redux
5.Redux

Props흐름의 이해
--Next.js의 데이터 흐름은 단방향
--즉, parents에서 child component의 방향으로 props의 흐름이 이루어짐
--따라서 계층구조가 복잡해 지면 Props Drilling 문제가 발생함
--Props Drilling은 여러개의 component를 지나 props가 전달 되면서 발생하는 문제

----Props Drilling가 발생시킬 수 있는 문제 1.중간에 위치한 component에 불필요한 props를 전달해야 하는 문제 2.타겟 component까지 props가 전달되지 않을 경우 원인 규명의 어려움 3.필요이상으로 코드가 복잡해짐
----해결법
props를 전역으로 사용하면 됨
Next.js에서 props를 전역으로 사용하기 위해서 Context API, Redux등을 사용함

--Component A,B,C ,props-flow 페이지 상호간에는 계층 구조를 가지고 있지 않음
--아직 어느 쪽에서도 component를 호출하지 않았기 때문
--그러나 어느 쪽이든 component를 호출하는 순간, 호출한 쪽은 parent가 되고, 호출받은 쪽은 child가 됨
--이 것은 component간, component와 page간 모두에 적용됨
--관계가 한번 성립되면 child가 parent를 호출할 수는 없엄
--예를 들어 A가 B를 호출한 경우, A는 parent, B는 child가 됨
--이 관계는 아직 아무도 호출하지 않거나, 호출받지 않은 C에게는 적용 X
--즉, C는 A,B모두 호출 할 수 있게 됨. 이 경우 C가 parent, A와 B가 child가 됨
--A와 B의 관계, C와 A,B의 관계가 공존하게 됨
--A만 B를 호출 할 수 있고, C는 A,B모두를 호출 할 수 있으며 그 반대는 불가능 함
--그리고 B는 아무것도 호출 할 수 없고, A는 C를 호출할 수 없는 관계가 됨

2.Context API 개요
--Context 는 UX구축에 많이 사용되는 React의 기능입니다
--React는 16.3버전부터 정식적으로 context api를 지원하고 있습니다
--일반적으로 props는 부모에서 자식으로 전달되는 단방향통신을 합니다.
--Context API는 특정 cpmponent가 props를 사용하지 않고 ,하위 component를 포함한 모든
component에 데이터를 공유할 수 있는 기능을 제공합니다.
--즉"전역"으로 데이터를 사용할 수 있도록 해줍니다.
--예를 들어 사용자의 로그인 상태나, 쇼핑카트의 물품 수량 등을 표시할 때 사용됩니다.
--Context API는, creatyeContext, Provider,useContext개념을

--간혹 Consumer를 useContext대신 사용하는 경우가 있지만 , function 형 component에서는 많이 사용하지 않습니다.

===Context API - use client
Next.js에서 'use client'를 사용하는 이유는 서버 컴포넌트와 클라이언트 컴포넌트를 구분하기 위해서 입니다.
Next.js는 기본적으로 서버에서 렌더링하도록 설계되어,클라이언트에서만 필요한 컴포넌트를 명시적으로 지정해야 할 필요가 있습니다.
'use client'를 컴포넌트 상단에서 선언하면 해당 컴포넌트는 클라이언트에서만 렌더링되며, 주로 상태관리나 브라우저 전용 api사용이 필요한 경우에 사용됩니다.

3.1 Directory 구조
components vs. features Directory
[components Directory]
애플리케이션 전반에서 재샤용 될 수 있는 공통 컴포넌트를 보관합니다.
특정 기능에 종속되지 않으며, 다양한 페이지나 기능에서 재샤용할 수 있는 component를 모아 둡니다.

ex)
src/components/Button.js(버튼 컴포넌트)
src/components/NavBar.js(네비게이션)
src/components/Footer.js(푸터 컴포넌트)
src/components/Modal.js(모달 컴포넌트)

[features Directory]
특정 기능이나 도메인 별로 코드를 구성하는 데 사용합니다.
사용자 인증 기능, 프로필 관리 기능 등 각 기능과 관련된 상태 관리, API요청, 슬라이스, 컴포넌트 등을 보관합니다.
재사용이 불가능 하거나 가능하더라도 많은 수정을 해야하는 컴포넌트를 관리합니다

ex)
src/features/counter/counterSlice.js(상태 관리)
src/features/counter/Counter.js(기능 관련 컴포넌트)
src/features/uesr/userSlice.js(사용자 관련 상태 관리)
src/features/uesr/UserProfile.js(사용자 프로필 컴포넌트)

3.2 Redux 주요 File의 역할
[Redux Slice]
Slice는 Redux Toolkit에서 사용되는 용어로, 특정 기능과 관련된 상태와 reducer함수의 모음을 나타냅니다.
Slice라는 이름은 애플리케이션 상태의 한 부분을 의미합니다.
Redux Toolkit의 createSlice함수를 사용하면 특정 기능과 관련된 상태, 액션, reducer를 한 곳에서 정의할 수 있어 관리하기가 용이합니다.

ex)
src/features/counter/counterSlice.js(counter 상태 관리)
src/features/counter/Counter.js(counter 기능 관련 컴포넌트)

[Redux Provider]
Redux Provider는 Redux의 상태 등을 공급하기 위한 파일 입니다.
Provider는 사용하고자 하는 page에서 사용하면 됩니다.
다만 전역적으로 사용할 때 layout파일에 정의하면 'use client'를 사용해야 하기 때문에 별도의 component로 만들어서 사용하는 것이 좋습니다.

ex)
src/store/store.js(counter 상태관리)
src/store/CounterProvider(counter 기능관련 컴포넌트)

4. Context API vs. Redux

   [Context API]
   --React에서 기본으로 제공하는 상태관리 도구로, 외부 라이브러리 설치 없이 사용가능
   --Context API는 주로 전역 상태를 관리하는 데 사용됩니다.
   --React.createContext()로 생성한 Context객체와 Provider 컴포넌트를 사용해 상태를 하위 컴포넌트에 전달합니다

(장점)
--간단하고 가볍다:외부라이브러리 설치 없이 기본 React 기능만으로 전역상태관리를 할 수 있음
--적은 설정 필요 : 간단한 구조라 설정과 사용이 간편함
--컴포넌트 트리의 깊이 제한 없음:여러단계에 걸쳐 상태를 전파할 수 있어 prop drilling문제를 해결합니다.
(단점)
--복잡한 상태 관리에 한계: 상태가 복잡하거나 다양한 액션을 통해 변경이 이루어져야 하는 경우, 관리가 어려워질 수 있습니다.
--성능 문제: 상태가 업데이트되면 해당 상태를 사용하는 모든 하위 컴포넌트가 다시 렌더링되므로, 상태 범위가 넓을 경우 성능에 영향을 미칠 수 있습니다.
--디버깅 도구 부족: 상태변경과정을 추적하고 관리하는 Redux DevTools와 같은 도구가 기본적으로 제공되지 않습니다.

[Redux]
Redux는 전역상태를 관리하기 위한 독립적인 state관리 라이브러리
상태의 변경을 예측 가능하게 하고, 전역 state 관리를 더 구조적으로 지원함
store, reducer, action등의 개념을 사용해 state 와 state dispatch를 관리합니다

(장점)
--명확한 상태관리구조: 액션과 reducer를 통해 state dispatch 과정을 예측 가능하게 만들고, 코드의 가독성을 높임.
--미들웨어 지원 : redux-thunk,redux-saga와 같은 미들웨어를 사용해 비동기 로직을 쉽게 처리할 수 있습니다.
--디버깅 도구 : Redux DevTools를 통해 상태 변화및 디버깅이 용이합니다.
--모든 프레임워크와 호환 : React뿐만 아니라 다른 JavaScript 프레임워크와도 함께 사용할 수 있습니다.
