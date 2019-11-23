const FIGMA_API_URL = 'https://api.figma.com/v1';
const ACCESS_TOKEN = '26651-625efab7-5897-4196-a328-b1c88876d26d';
const fetch = require('node-fetch');

const designSystem = {};

const options = {
    headers: {
        'X-Figma-Token': `${ACCESS_TOKEN}`
    }
}

const getColors = (colorFrames) => {
    colorFrames.forEach((frame) => {
        designSystem[frame.name] = `color: ${frame.children[0].characters}`;
    });
}

const getFonts = (typeFrames) => {
    typeFrames.forEach((frame) => {
        if (frame.type === 'FRAME') {
            console.log(frame.name);
        }
    })
}

const figmaAPIRequest = async() => {
    const res = await fetch(`${FIGMA_API_URL}/files/jZE8coiDiHCIRoF0mndbkp`, options, async(error, response, body) => {
        const object = JSON.parse(body);
        return Promise.resolve(object);
    });

    const figmaRes = await res.json();
    return Promise.resolve(figmaRes);
}

const generateClasses = (designObj) => {
    Object.keys(designObj).forEach((frame) => {
        if (designObj[frame].type === 'FRAME') {
            // ?Gets colors from 
            if (designObj[frame].name === 'colors') {
                getColors(designObj[frame].children);
            }

            if (designObj[frame].name === 'type') {
                getFonts(designObj[frame].children);
            }

            // console.log(designObj[frame].children);
        }
    })
}

(async() => {
    let classes = [];
    const figmaObj = await figmaAPIRequest();
    classes = generateClasses(figmaObj.document.children[0].children[1].children);
})();