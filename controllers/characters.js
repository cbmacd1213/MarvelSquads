const axios = require('axios');
const Character = require('../models/character');
const APIKEY = process.env.APIKEY;




module.exports = {
    characterDetail,
    show,
    index,
    deleteOne,
    create,
    update
}

function characterDetail(req, res) {
    axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${APIKEY}&hash=dd2633feb8a30fb9829dbf72c7e9eced`)
    .then(function (response) {
    // handle success
        console.log(response);
        res.json(response.data)
        
    })
    .catch(function (error) {
    // handle error
        console.log(error);
    })
}

async function index(req, res) {
    let character = await Character.find({user:req.user._id});
    console.log('user centric',character);
    res.status(200).json(character);
  }
  
  async function show(req, res) {
    const character = await Character.findById(req.params.id);
    res.status(200).json(character);
  }
  
  async function create(req, res) {
    req.body.sportType = leagueLookup[req.body.sportType]
    req.body.user = req.user._id
    const character = await Character.create(req.body);
    res.status(201).json(character);
  }
  
  async function deleteOne(req, res) {
    const deletedCharacter = await Character.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedCharacter);
  }
  
  async function update(req, res) {
    const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedCharacter);
  }