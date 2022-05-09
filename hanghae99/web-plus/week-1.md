# 항해99 웹개발 플러스 1주차

## 부트스트랩 활용하여 파일 업로드하기 (부트스트랩 4.x.x 기준)

### 파일 업로드 준비
HTML 코드
```HTML
<div class="custom-file">
    <input type="file" class="custom-file-input" id="file">
    <label class="custom-file-label" for="file">사진 선택하기</label>
</div>
```

위 코드에 파일을 넣기 위한 부트스트랩 라이브러리 (```<HEAD></HEAD>``` 사이에 삽입)
```HTML
<script src="https://cdn.jsdelivr.net/npm/bs-custom-file-input/dist/bs-custom-file-input.js"></script>
```

스크립트 코드 삽입
```HTML
<script>
$(document).ready(function () {
    bsCustomFileInput.init();
});
</script>
```

### 업로드 코드 (프론트엔드)
```HTML
<script>
function listing() {
    $.ajax({
        type: "GET",
        url: "/listing",
        data: {},
        success: function (response) {
            if (response["result"] == "success") {
                let articles = response['articles']
                for (let i = 0; i <script articles.length; i++) {
                    let title = articles[i]['title']
                    let content = articles[i]['content']
                    let file = articles[i]['file']

                    let temp_html = `<div class="card">
                                        <img src="../static/${file}" class="card-img-top">
                                        <div class="card-body">
                                            <h5 class="card-title">${title}</h5>
                                            <p class="card-text">${content}</p>
                                        </div>
                                    </div>`

                    $('#cards-box').append(temp_html)
                }
            }
        }
    });
}
</script>
```

### 업로드 코드 (백엔드)
```PYTHON
@app.route('/diary', methods=['POST'])
def save_diary():
    title_receive = request.form['title_give']
    content_receive = request.form['content_give']

    file = request.files["file_give"]

    extension = file.filename.split('.')[-1]

    today = datetime.now()
    mytime = today.strftime('%Y-%m-%d-%H-%M-%S')

    filename = f'file-{mytime}'
    save_to = f"static/{filename}.{extension}"
    file.save(save_to)

    doc = {
        'title': title_receive,
        'content': content_receive,
        'file': f'{filename}.{extension}'
    }

    db.diary.insert_one(doc)

    return jsonify({'msg': '저장 완료!'})
```