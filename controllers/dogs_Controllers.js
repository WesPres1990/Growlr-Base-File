var express = require("express");

var router = express.Router();

// Import the model (growlr.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  console.log(hbsObject);
  res.render("index", hbsObject);
});

router.get("/seeking-dog", function(req, res) {
  console.log(hbsObject);
  res.render("seek-dog", hbsObject);
});

router.get("/seeking-human", function(req, res) {
      console.log(hbsObject);
      res.render("seek-human", hbsObject);
});

router.post("/api/person-input", function(req, res) {
  db.Survey.findAll
  
  human.insertHuman([
    "human_name", "age", "address", "phone"
  ], [
    req.body.human_name, req.body.age, req.body.address, req.body.phone
  ], 
  // add human survey logic
  function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.post("/api/dogs-input", function(req, res) {
  human.insertDog([
    "human_name", "age", "address", "phone"
  ], [
    req.body.human_name, req.body.age, req.body.address, req.body.phone
  ], 
  // add dog survey logic
  function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.post("/api/person-survey", function(req, res) {
  human.insertHuman([
    "human_name", "age", "address", "phone"
  ], [
    req.body.human_name, req.body.age, req.body.address, req.body.phone
  ], 
  // add human survey logic
  function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.post("/api/dog-survey", function(req, res) {
  human.insertHuman([
    "human_name", "age", "address", "phone"
  ], [
    req.body.human_name, req.body.age, req.body.address, req.body.phone
  ], 
  // add human survey logic
  function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.get("/finish-find-dog", function(req, res) {
  console.log(hbsObject);
  res.render("finish-human-survey", hbsObject);
});

router.get("/finish-find-human", function(req, res) {
  console.log(hbsObject);
  res.render("finish-dog-survey", hbsObject);
});

// Export routes for server.js to use.
module.exports = router;