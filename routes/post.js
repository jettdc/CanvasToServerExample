var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body.imgBase64);
    var base64Data = req.body.imgBase64.replace(/^data:image\/png;base64,/, "");
    console.log(base64Data);
    require("fs").writeFile("out.png", base64Data, 'base64', function(err) {
      console.log(err);
    });
});

module.exports = router;
