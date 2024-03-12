# 프로젝트 소개


> 누구나 자유롭게 Book List를 작성할 수 있는 게시판입니다. \
> 사용자는 Book List를 추가, 수정, 삭제할 수 있으며 메인 페이지에서 List 형태로 모든 목록을 확인할 수 있습니다.
> 
> 해당 코드는 HTML 5.0, java, JavaScript 를 사용하여 웹페이지를 출력했으며, \
> Node.js와 Express를 사용하여 서버를 띄운 간단한 웹 애플리케이션입니다.\
> 주요 기능은 데이터의 추가, 수정, 삭제입니다.

> ### 개발 기간 및 인원
> 23.12.20 ~ 23.12.20 (1일) \
> 풀스택 1명

<br/>

# 기술 스택

![html](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

<br/>

# 주요 기능

### 데이터 추가
- 사용자는 [CREATE] 버튼으로 정보를 입력할 수 있는 페이지로 넘어간다.
- 사용자가 입력한 정보는 POST 요청을 통해 서버로 전송된다.
- 서버에서는 받은 데이터를 데이터베이스에 쿼리를 사용해 추가하고, 처리가 완료되면 홈 페이지로 리디렉션한다.

### 데이터 수정
- 사용자는 [MODIFY] 을 통해 경로로 접속하여 수정할 책을 선택할 수 있다.
- 선택한 책의 정보는 해당 ID를 기준으로 데이터베이스에서 조회된다.
- 사용자가 새로운 정보를 입력하고 제출하면, 서버는 해당 책의 정보를 업데이트한다.
- 수정이 완료되면 홈 페이지로 리디렉션된다.

### 데이터 삭제
- 사용자는 [DELETE] 를 통해 경로로 접속하여 삭제할 책을 선택한다. number는 삭제할 책의 고유한 식별자로 사용된다.
- 선택한 책의 정보는 해당 number(ID)를 기준으로 데이터베이스에서 삭제된다.
- 삭제가 완료되면 홈 페이지로 리디렉션된다.

<br/>

# 추가 구현하고 싶은 기능

### 로그인 기능과 사용자에 따른 기능 차별화
- 사용자 정보를 입력하고, ID를 부여해 ID를 기준으로 로그인 및 로그아웃을 할 수 있다.
- 관리자 및 유저는 Book 정보를 입력할 수 있다. 
- 관리자로 접속하면 모든 Book List의 관리 (입력, 수정, 삭제)가 가능하다.
- 유저로 접속하면 해당 유저가 작성한 정보만 관리 (수정, 삭제) 가 가능하며, 타인이 작성한 정보는 관리할 수 없다.


# DB쿼리문
CREATE DATABASE comicbook;
use comicbook;
CREATE TABLE books (
number INT AUTO_INCREMENT PRIMARY KEY,
genre VARCHAR(255),
name VARCHAR(255),
writer VARCHAR(255),
releasedate DATE
);


