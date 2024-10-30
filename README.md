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
1.URI는 동사보다는 명사를,대문자보다는 소문자를 사용
2.주소의 마지막에 슬래시(/)를 포함하지 않음
3.단어를 연결할 때는 하이픈(-)을 사용
4.파일 확장자는 URI에 포함하지 않음
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
ex)  res.status:HTTP응답상태코드
res.headers:서버로부터 받은 헤더 정보
res.config:요청에 대한 설정 정보


--
Next.js와 같은 리액트 기반 앱에서 비동기 데이터를 처리할 때 렌더링 주기에 맞게 상태를 관리해야 함
[개선점]
1.useState와 useEffect사용
-비동기 데이터를 가져오는 작업은 컴포넌트의 상태(state)로 관리하는것이 일반적.
2.Loading 상태 처리