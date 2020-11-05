const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/static/'));
app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + '/static/assets/index.html');
})
app.listen(port);

console.log("server started");