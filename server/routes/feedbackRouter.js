const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// ERROR IN POST
router.post('/',  (req, res) => {
    let feedback = req.body;
    console.log(`Adding Feedback`, feedback);
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [feedback.HowFeeling, feedback.HowUnderstand, feedback.HowSupport, feedback.HowComment])
      .then((result) => {
        res.sendStatus(201);
        console.log(result);

      })
      .catch((error) => {
        console.log(`Error adding feedback`, error);
        res.sendStatus(500);
      });
  });

  router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "feedback";';
    pool.query(queryText).then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error getting feedback', error);
      res.sendStatus(500);
    });
  });


  // DELETE FEEDBACK IN ADMIN
router.delete('/:id', (req, res) => {
    pool.query('DELETE FROM "feedback" WHERE id=$1', [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE feedback', error);
        res.sendStatus(500);
    })
});

module.exports = router;