# 항해99 웹개발 플러스 2주차

## Jinja2 (FLASK 템플릿 엔진)
**jinja란?** HTML 코드 내에서 파이썬 백엔드가 가진 정보를 출력할 수 있게 해주는 탬플릿 엔진

### 주석 사용
```JINJA
{# 주석 내용 #}
```

### 기본 사용법

- 파이썬에서 코드 전송하기
```PYTHON
@app.route('/')
def main():
    return render_template("index.html", msg="Hi")
```

- HTML로 전송된 데이터 출력하기 ```{{ 데이터이름 }}```
```JINJA
{{ msg }}
```
> **실행** <br>
<img width="28" alt="스크린샷 2022-05-10 오후 8 58 01" src="https://user-images.githubusercontent.com/87969561/167623075-b4b5c9b9-ea0f-42a3-8c1c-897af6655ca6.png">


### 조건문

- /app.py
```python
@app.route('/')
def main():
    return render_template("index.html", msg=0)
```

- /templates/index.html
```jinja
{% if msg == 0 %}
    <div>hello</div>
{% endif %}
```
> **실행** <br>
![스크린샷 2022-05-11 오후 11 18 09](https://user-images.githubusercontent.com/87969561/167871954-cfcc94be-f791-4e81-85cd-5c2d85c7874a.png)

- /templates/index.html 수정
```jinja
{% if msg == 1 %}
    <div>hello</div>
{% endif %}
```
> **실행** <br>
![스크린샷 2022-05-11 오후 11 19 00](https://user-images.githubusercontent.com/87969561/167872120-ead88854-343e-46c7-bb97-26626cc693ae.png)


### 반복문

- /app.py
```python
@app.route('/')
def main():
    data = [
        {
            "name": "jihyun",
            "age": 18
        },
        {
            "name": "subong",
            "age": 24
        },
        {
            "name": "dohoon",
            "age": 31
        }
    ]
    return render_template("index.html", dataset=data)
```

- /templates/index.html
```jinja
{% for data in dataset %}
    <div>{{data.name}}</div>
    <div>{{data.age}}</div>
{% endfor %}
```

> **실행** <br>
![스크린샷 2022-05-11 오후 11 49 03](https://user-images.githubusercontent.com/87969561/167878974-1375c98e-d66e-451f-ae44-f13236f24873.png)

