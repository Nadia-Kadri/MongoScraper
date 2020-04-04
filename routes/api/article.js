const express = require("express");
const router = express.Router();
const db = require("../../models");
// Scraping dependencies
const axios = require("axios");
const cheerio = require("cheerio");

// Scrape data from WSJ and place it into Articles collection within MongoScraper db
router.get("/scrape", function(req, res) {
  axios.get("https://www.wsj.com/").then(function(res) {
    // Load the html body from axios into cheerio
    const $ = cheerio.load(res.data);
      
    $("article").each(function(i, element) {
      let title = $(element).find("h3").text();
      let summary = $(element).find("p").text();
      let link = $(element).find("a").attr("href");

      if (title && summary && link) {
        // Insert the data in MongoScraper db
        db.Article.create({
          title: title, 
          summary: summary, 
          link: link
        })
        .then(result => {
          console.log("Article inserted into database")
        })
        .catch(err => console.log(err.message));
      }
    });
  })
  // Send a message to the client
  res.send("Scrape Complete");
});

// View articles saved in Articles collection within MongoScraper db with Notes populated
router.get("/view", function(req, res) {
  db.Article.find({})
    .sort({ $natural: -1 })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

module.exports = router;