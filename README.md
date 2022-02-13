
## 1. 프로젝트 소개

- 주제 : 메신저
- 기간 : 22.02.10 ~ 22.02.12



## 2. 배포 링크

https://luckyzzang-swit-messenger.netlify.app/


## 3. 팀원 소개

<table>

  <tr align="center">
    <td><a href='https://github.com/Jiyong95'>이지용</a></td>
    <td><a href="https://github.com/BByungs">안병진</a></td>
    <td><a href="https://github.com/Yena-Yun">윤예나</a></td>
    <td><a href="https://github.com/minjuice1">박민주</a></td>
  </tr>

  <tr align="center">
    <td><img src="https://avatars.githubusercontent.com/u/49055628?v=4" width="150px"/></td>
    <td><img src="https://avatars.githubusercontent.com/u/81910935?v=4"  width="150px"/></td>
    <td><img src="https://avatars.githubusercontent.com/u/68722179?v=4" width="150px"/></td>
    <td><img src="https://avatars.githubusercontent.com/u/82799961?v=4" width="150px"/></td>
  </tr>
</table>


## 4. 구현 기능

⚜ 이지용
* 리덕스 boiler-plate 세팅
* 리덕스, 타입스크립트 세팅
* 리덕스를 활용한 메신저 내용 저장
* redux-persist로 로컬스토리지에 저장: 새로고침 시에도 상태 유지 기능
* 입력란의 멀티라인 메시지 화면에 그대로 출력

⚜ 안병진
* 리덕스, 타입스크립트 세팅
* 채팅 메시지 UI
* 대화내용 입력시 스크롤 아래로 내려가는 기능 구현
* 채팅 메시지 모달 UI (hover 시 답장/삭제 버튼)
* 삭제버튼 모달 (10자까지 보여주고 말줄임표 처리)
    
⚜ 박민주
* 로그인 모달 UI
* 리덕스를 활용한 로그인 기능
* 로그인 모달에 이미지 등록과 프리뷰
* 내가 전송한 메시지의 경우 이름 옆에 * 출력
* 엔터키 util 함수
  
⚜ 윤예나
* 채팅창 페이지 UI
* 채팅창 댓글 작성 기능
* data.ts에 있는 기존 데이터 렌더링
* 입력 시 전송버튼 활성화 (scss의 props 작업)
* 날짜 util 함수 (yyyy-mm-dd hh:MM:ss 형태로 출력)

## 5. 기술 스택
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![scss](https://img.shields.io/badge/scss-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 


## 6. 디렉토리 구조

```bash
.
├── App.tsx
├── assets      # icons, images
├── components
│   ├── Login
│   ├── messageCard
│   └── messageModal
├── hooks
│   ├── useBlockScroll
│   ├── useBottomScroll
│   └── useControlModal  
├── pages
│   └── Main
├── store     # redux 구성 파일
│   ├── actions   # redux action
│   ├── data.ts   # 대화목록 data
│   └── reducers
│       ├── auth.ts     # 사용자 reducer
│       ├── message.ts  # 대화 목록 reducer
│       └── utils       # reducer 관련 utils 함수
├── types     # typescript type 선언 파일
└── utils     # 자주 사용하는 함수
```


## 7. 설치 및 실행 방법
클라이언트 실행
    ```bash
    npm run start
    ```


## 8. 커밋 컨벤션

깃모지를 사용하여 이모티콘만 보고 커밋의 목적이나 의도를 쉽게 식별할 수 있도록 하였습니다.

| 깃모지 | 사용 예시 |
| --- | --- |
| :sparkles: | 기능 구현 |
| :lipstick: | CSS 스타일링 |
| :wrench: | utils 함수나 types 추가 |
| :fire: | 파일 삭제 |
| :wastebasket: | 코드 삭제 |
| 🚚 | 디렉토리 또는 파일 이동 |
| :package: | 패키지 설치 |
| ♻️ | 리팩토링 |
| 📝 | Readme 수정 |
| 🐛 | 버그 수정 |
