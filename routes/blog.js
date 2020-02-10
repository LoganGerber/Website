var express = require("express");
var assert = require("assert");
var MongoClient = require("mongodb").MongoClient;
var router = express.Router();

var sites;

const mongoClient = new MongoClient("mongodb://localhost:27017", { useUnifiedTopology: true });

mongoClient.connect((err) => {
    assert.equal(err, null);
    sites = mongoClient.db('website-test').collection('pages');
})

router.get("/", function (req, res, next) {
    sites.find({}).toArray(function (err, docs) {
        // res.send(docs);
        res.render("blog", { entries: docs });
    });
});

router.get("/:articleTitle", function (req, res, next) {
    sites.find({ url: req.params["articleTitle"] }).toArray((function (err, docs) {
        if (err) {
            console.log(err);
            res.send("unu");
            return;
        }
        let pageText = docs[0]["text"].split("\n\n");
        let title = pageText[0];
        pageText = pageText.slice(1);

        res.render("blog_entry", { title: title, paragraphs: pageText, imageInfos: [] });
    }));
});

module.exports = router;
