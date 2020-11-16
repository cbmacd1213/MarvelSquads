const axios = require('axios');
const APIKEY = process.env.APIKEY;




module.exports = {
    characterDetail,
    leagueEvents
}

function characterDetail(req, res) {
    axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=7617282bbf3e80a1d90e28b492087286&hash=dd2633feb8a30fb9829dbf72c7e9eced`)
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