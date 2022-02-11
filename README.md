
## 1. 프로젝트 소개

- 주제 : 메신저
- 기간 : 22.02.10 ~ 22.02.12


## 2. 배포 링크


## 3. 팀원 소개

<table>
  <tr>
        </td>
      <td align="center">
      <a href="https://github.com/Jiyong95"
        ><img
          src="https://avatars.githubusercontent.com/u/49055628?v=4"
          width="100px;"
          alt=""
        /><br /><sub><b>이지용</b></sub></a>
    <br />
    </td>
    <td align="center">
      <a href="https://github.com/BByungs"
        ><img
          src="https://avatars.githubusercontent.com/u/81910935?v=4"
          width="100px;"
          alt=""
        /><br /><sub><b>안병진</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/Yena-Yun"
        ><img
          src="https://avatars.githubusercontent.com/u/68722179?v=4"
          width="100px;"
          alt=""
        /><br /><sub><b>윤예나</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/minjuice1"
        ><img
          src="https://avatars.githubusercontent.com/u/82799961?v=4"
          width="100px;"
          alt=""
        /><br /><sub><b>박민주</b></sub></a
      ><br />
  </tr>
</table>


## 4. 구현 기능

⚜ 이지용

⚜ 안병진   
    
⚜ 박민주
  
⚜ 윤예나


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
