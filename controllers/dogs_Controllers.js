var express = require("express");

var router = express.Router();

// Import models to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.

// GET route for home HTML page
router.get("/", function(req, res) {
  console.log(hbsObject);
  res.render("index", hbsObject);
});

// GET route for HTML page displaying the input fields for people finding dogs

router.get("/person-input", function(req, res) {
  console.log(hbsObject);

  res.render("person-input", hbsObject);

  db.Person.findAll({})
  
    .then(function(dbPerson) {
      res.json(dbPerson);
    });
});

// GET route for HTML page displaying the input fields for dogs finding people

router.get("/dog-input", function(req, res) {
  console.log(hbsObject);
  db.Dog.findAll({})
  
  .then(function(dbDog) {
    res.json(dbDog);
  });
  res.render("dog-input", hbsObject);
});

// POST route for information posted in the "people" input fields

router.post("/api/person-input", function(req, res) {
  console.log(req.body);
  db.Person.create({
    person_id: req.body.person_id,
    person_firstname: req.body.person_firstname,
    person_lastname: req.body.person_lastname,
    person_age: req.body.person_age,
    person_email: req.body.person_email,
    person_phone: req.body.person_phone,
    person_address: req.body.person_address,
    person_city: req.body.person_city,
    person_state: req.body.person_state,
    person_zipcode: req.body.person_zipcode,
    person_image: req.body.person_image
  })
    .then(function(dbPerson) {
      res.json(dbPerson);
    });
});

// POST route for information posted in the "dog" input fields

router.post("/api/dog-input", function(req, res) {
  
    console.log(req.body);
    db.Dog.create({
      dog_id: req.body.dog_id,
      dog_name: req.body.dog_name,
      dog_age: req.body.dog_age,
      dog_breed: req.body.dog_breed,
      dog_email: req.body.dog_email,
      dog_sponsorName: req.body.dog_sponsorName,
      dog_sponsorEmail: req.body.dog_sponsorEmail,
      dog_sponsorPhone: req.body.dog_sponsorPhone,
      dog_sponsorAddress: req.body.dog_sponsorAddress,
      dog_city: req.body.dog_city,
      dog_state: req.body.dog_state,
      dog_zipcode: req.body.dog_zipcode,
      dog_facts: req.body.dog_facts,
      dog_image: req.body.dog_image
    })
      .then(function(dbDog) {
        res.json(dbDog);
      });
});

//  GET route for HTML page displaying the survey for people finding dogs 

router.get("/person-survey", function(req, res) {
  console.log(hbsObject);
  db.Survey.findAll({})
  .then(function(dbPost) {
    res.json(dbPost);
  });
  res.render("person-survey", hbsObject);
});

// GET route for HTML page displaying the survey for dogs finding people 

router.get("/dog-survey", function(req, res) {
  console.log(hbsObject);
  db.Survey.findAll({})
  .then(function(dbPost) {
    res.json(dbPost);
  });
  res.render("dog-survey", hbsObject);
});

// POST route for "people" survey choices

router.post("/api/person-survey", function(req, res) {
  console.log(req.body);
  db.Survey.findAll({})
  .then(function(dbPost) {
    res.json(dbPost);
  });
  db.Survey.create({
    url: req.body.url,
    name: req.body.name,
    image: req.body.image,
    score: req.body.person_age,
    question1: req.body.question1,
    question2: req.body.question2,
    question3: req.body.question3,
    question4: req.body.question4,
    question5: req.body.question5,
    question6: req.body.question6,
    question7: req.body.question7,
    question8: req.body.question8,
    question9: req.body.question9,
    question10: req.body.question10
  })
    .then(function(dbPerson) {
      res.json(dbPerson);
    });
});

// POST route for "dog" survey choices

router.post("/api/dog-survey", function(req, res) {
  console.log(req.body);
  db.Survey.findAll({})
  .then(function(dbPost) {
    res.json(dbPost);
  });
  db.Survey.create({
    url: req.body.url,
    name: req.body.name,
    image: req.body.image,
    score: req.body.person_age,
    question1: req.body.question1,
    question2: req.body.question2,
    question3: req.body.question3,
    question4: req.body.question4,
    question5: req.body.question5,
    question6: req.body.question6,
    question7: req.body.question7,
    question8: req.body.question8,
    question9: req.body.question9,
    question10: req.body.question10
  })
    .then(function(dbSurvey) {
      res.json(dbSurvey);
    });
});

// GET route for HTML page displaying dog matched with the person

router.get("/dog-display", function(req, res) {
  console.log(hbsObject);
  res.render("dog-display", hbsObject);
});

// GET route for HTML page displaying person matched with the dog

router.get("/person-display", function(req, res) {
  console.log(hbsObject);
  res.render("person-display", hbsObject);
});

// Export routes for server.js to use.
module.exports = router;

// 

//   db.Survey.findAll
  
//   human.insertHuman([
//     "human_name", "age", "address", "phone"
//   ], [
//     req.body.human_name, req.body.age, req.body.address, req.body.phone
//   ], 
//   // add human survey logic
//   function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });


// router.post("/api/dog-input", function(req, res) {
//   human.insertDog([
//     "human_name", "age", "address", "phone"
//   ], [
//     req.body.human_name, req.body.age, req.body.address, req.body.phone
//   ], 
//   // add dog survey logic
//   function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });


//   human.insertHuman([
//     "human_name", "age", "address", "phone"
//   ], [
//     req.body.human_name, req.body.age, req.body.address, req.body.phone
//   ], 
//   // add human survey logic
//   function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });


// router.post("/api/dog-survey", function(req, res) {
//   human.insertHuman([
//     "human_name", "age", "address", "phone"
//   ], [
//     req.body.human_name, req.body.age, req.body.address, req.body.phone
//   ], 
//   // add human survey logic
//   function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });