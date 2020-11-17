const express = require('express');
const router = express.Router();
const characterCtrl = require('../../controllers/characters');


router.get('/character', characterCtrl.characterDetail);
