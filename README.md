# simple ranking server
this project is simple ranking server

# stack

```
server : node.js
framework : express
database : mysql
orm library : sequelize
```

# 서버실행

- 의존 모듈 설치

```
$ npm install
```

- DB설정

`./config/RDB.json` username, database, password 설정

```json
{
    "username": "root",
    "database": "test",
    "host": "localhost",
    "dialect": "mysql",
    "logging": true
}
```

# API


## 1. 관리자 API

```
endpoint : /admin
```


## 2. 일반 API

```
endpoint : /api_v1
```

- 유저 등록하기
- 유저 리스트 가져오기
- 유저 랭킹 가져오기
- 점수 등록하기
- 유저 점수기록 가져오기
- crypto test

### 3. API 설 명

#### 유저등록
- 기능 : 유저등록하기
- path : /user
- method : `POST`

- request
```
{
    userName: '' (필수)
}
```

- response
```
status Code : 200 or 201

{

}
```
   
- orm -> query 번역
```mysql
SELECT * FROM user WHERE userName = userName;

# 유저가 없을 경우
INSERT INTO user(userName, score) VALUES(userName, 0);
```

#### 유저 리스트 가져오기
- 기능 : 유저 리스트 가져오기
- path : /user
- method : `GET`

- request

```
{
}
```

- response

```
{
}
```

- orm -> query 번역

```mysql
# include가 있을 경우
SELECT * FROM user INNER JOIN userScore ;

# include가 없을 경우
SELECT * FROM user;

```

#### 유저 랭킹 가져오기
- 기능 : 유저 랭킹 가져오기
- path : /user/rank/:userId
- method : `GET`

- request

```
{

}
```

- response

```
{
}
```

- orm -> query 번역

```mysql
SELECT *FROM user ORDER BY score DESC;
```

#### 점수 등록하기
- 기능 : 점수 등록하기
- path : /score/:userId
- method : `POST`

- request

```
{
    score : score
}
```

- response

```
{
}
```

- orm -> query 번역

```mysql
INSERT INTO userScore(userId, score) VALUES(userId, score);
UPDATE user SET score = score WHERE id = userId ;
```

#### 유저 점수기록 가져오기
- 기능 : 유저 점수기록 가져오기
- path : /score/history/:userId
- method : `GET`

- request

```
{

}
```

- response

```
{
}
```

- orm -> query 번역

```mysql
SELECT * FROM userScore WHERE userId = userId; 
```

#### crypto test
- 기능 : crypto test
- path : /user/crypto
- method : `GET`
