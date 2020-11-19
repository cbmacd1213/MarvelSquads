const express = require('express');
const router = express.Router();
const characterAPICtrl = require('../../controllers/characters');
const { route } = require('./users');


router.get('/character', characterAPICtrl.characterDetail);

module.exports = router;
