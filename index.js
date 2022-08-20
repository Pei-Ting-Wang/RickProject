const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());

let score;
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});
router.get('/question', function (req, res) {
    res.sendFile(path.join(__dirname + '/question.html'));
});
router.post('/testresult', function (req, res) {
    score = req.body;
});
router.get('/testresult', function (req, res) {
    res.send(score);
});
router.get('/radar', function (req, res) {
    res.sendFile(path.join(__dirname + '/radar.html'));
});
//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
