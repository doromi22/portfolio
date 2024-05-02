// app.js

const express = require('express');
const path = require('path');

const app = express();

// 뷰 엔진으로 사용할 템플릿 엔진을 설정합니다. 여기서는 EJS를 사용합니다.
app.set('view engine', 'ejs');

// 뷰 파일이 위치한 디렉토리를 설정합니다.
app.set('views', path.join(__dirname, 'views'));

// 정적 파일들을 서빙하기 위해 express.static 미들웨어를 사용합니다.
app.use(express.static(path.join(__dirname, 'public')));

// 루트 경로에 대한 라우트를 정의합니다.
app.get('/', (req, res) => {
  res.render('index'); // index.html 파일을 렌더링합니다.
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});