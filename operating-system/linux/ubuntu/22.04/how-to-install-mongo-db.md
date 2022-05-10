# 우분투 22.04 몽고 DB 설치

코드를 순서대로 입력합니다.

```SHELL
$ wget -qO- https://www.mongodb.org/static/pgp/server-5.0.asc | gpg --dearmor > /etc/apt/trusted.gpg.d/mongo.gpg
```

```SHELL
$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
```

```SHELL
$ sudo apt update
```

```SHELL
$ sudo apt install -y mongodb-org
```

오류 없이 다 진행 되었다면 아래 코드로 몽고DB 제어
```SHELL
# 부팅시 자동 실행 등록
$ sudo systemctl enable mongod

# 몽고 DB 시작 
$ sudo systemctl start mongod

# 시작되지 않는 경우
$ sudo systemctl daemon-reload

# 실행중인지 확인
$ sudo systemctl status mongod

# 중지
$ sudo systemctl stop mongod
```

위 제어 코드 안되는 경우 몽고DB가 제대로 설치되지 않은 것이므로 아래 코드도 실행
(MongoDB는 우분투 22.04를 정식으로 지원하지 않아 안되는 것임)

```SHELL
$ echo "deb http://security.ubuntu.com/ubuntu impish-security main" | sudo tee /etc/apt/sources.list.d/impish-security.list
```

```SHELL
$ sudo apt-get update
```

```SHELL
$ sudo apt-get install libssl1.1
```

```SHELL
$ sudo apt install -y mongodb-org
```
