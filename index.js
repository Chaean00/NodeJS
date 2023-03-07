const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   send() 함수는 연결된 서버나 클라이언트로 데이터를 전송합니다.
  res.send("Hello World");
});

app.get("/dog", (req, res) => {
  //   send() 함수는 연결된 서버나 클라이언트로 데이터를 전송합니다.
  res.send({ sound: "멍멍" });
});

app.get("/cat", (req, res) => {
  //   send() 함수는 연결된 서버나 클라이언트로 데이터를 전송합니다.
  res.send("고양이");
});

//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
