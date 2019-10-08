var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {

    let imageInfoArray = [
        {
            "image": "/images/placeholders/800x800.png",
            "description": "800x800 image desc",
            "caption": "800 x 800"
        },
        {
            "image": "/images/placeholders/1920x1080.png",
            "description": "1920x1080 image desc",
            "caption": "1920 x 1080"
        },
        {
            "image": "/images/placeholders/1960x4032.png",
            "description": "1960x4032 image desc",
            "caption": "1960 x 4032"
        },
        {
            "image": "/images/placeholders/3024x4032.png",
            "description": "3024x4032 image desc",
            "caption": "3024 x 4032"
        },
        {
            "image": "/images/placeholders/4032x3024.png",
            "description": "4032x3024 image desc",
            "caption": "4032 x 3024"
        }
    ];
    
    res.render("blog_entry", { title: "Website", imageInfos: imageInfoArray });
});

module.exports = router;
