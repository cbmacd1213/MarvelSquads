const express = require('express');
const router = express.Router();
const characterAPICtrl = require('../../controllers/characters');


router.get('/character', characterAPICtrl.characterDetail);
