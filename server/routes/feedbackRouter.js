const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.post('/',  (req, res) => {
    let feedback = req.body;
    console.log(`Adding book`, feedback);
  
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4)`;
    pool.query(queryText, [feedback.HowFeeling, feedback.HowUnderstand, feedback.HowSupport, feedback.HowComment])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding new book`, error);
        res.sendStatus(500);
      });
  });

  router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "feedback";';
    pool.query(queryText).then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error getting books', error);
      res.sendStatus(500);
    });
  });
module.exports = router;