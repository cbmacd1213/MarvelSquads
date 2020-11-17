const BASE_URL = '/api/characters';
const PUBLIC_APIKEY = process.env.PUBLIC_APIKEY;
const PRIVATE_APIKEY = process.env.PRIVATE_APIKEY;

export default {
    characterDetail,
}

function characterDetail(character) {
    
    const options = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        },
    };
    return fetch(BASE_URL+'/character/', options).then(res => res.json());
}