const FIGMA_API_URL = 'https://api.figma.com/v1';
const ACCESS_TOKEN = '26651-625efab7-5897-4196-a328-b1c88876d26d';
const request = require('request');
const fetch = require('node-fetch');

const options = {
    headers: {
        'X-Figma-Token': `${ACCESS_TOKEN}`
    }
};

const figmaAPIRequest = async() => {
    const res = await fetch(`${FIGMA_API_URL}/files/jZE8coiDiHCIRoF0mndbkp`, options, async(error, response, body) => {
        const object = JSON.parse(body);
        return Promise.resolve(object);
    });

    const figmaRes = await res.json();
    return Promise.resolve(figmaRes);
}

const whatever = (figma) => {
    console.log(figma);
}

(async() => {
    const figmaObj = await figmaAPIRequest();
    // console.log('connection : %j', figmaObj);
    console.log(figmaObj.document.children);
    whatever(figmaObj.document.children);
})();