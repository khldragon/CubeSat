const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const parseUrlencoded = bodyParser.urlencoded({extended: false});
const parseJSON = bodyParser.json();
var db = require('../database');

router.route('/:executionPassID')
    .get(parseUrlencoded, parseJSON, (req, res) => {
        try {
            db.query("SELECT * FROM queuedTelecommands WHERE executionPassID = ?", req.params.executionPassID, function (error, results, fields) {
                if (error) throw error;
                res.send(results);
              });
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    });

module.exports = router;