const FIGMA_API_URL = 'https://api.figma.com/v1';
const GOOGLE_FONTS_API_URL = 'https://fonts.googleapis.com';
const ACCESS_TOKEN = '26651-625efab7-5897-4196-a328-b1c88876d26d';
const fetch = require('node-fetch');

const designSystem = {
    googleFonts: [],
    classes: [],
    elements: [],
    colors: [],
    rem: null,
};

const elements = [
    'ul',
]

const objTostyle = {
    fontFamily: 'font-family',
    fontWeight: 'font-weight',
    fontSize: 'font-size',
    textAlignHorizontal: 'text-align',
    textAlignVertical: 'text-align-vertical',
}

const options = {
    headers: {
        'X-Figma-Token': `${ACCESS_TOKEN}`
    }
}

const getColors = (colorFrames) => {
    colorFrames.forEach((frame) => {
        designSystem.colors.push({
           [`${frame.name}`]: frame.children[0].characters
        })
    });
}

const getFonts = async(typeFrames) => {
    await Promise.all(typeFrames.map(async (frame) => {
        let elementObj = {};
        let element = ''
        let color = ''
        let font = ''
        let googleFontImport = '';

        if (frame.type === 'FRAME') {
            element = frame.name.substring(0, frame.name.indexOf(':'))
            color = frame.name.substring(frame.name.indexOf(':') + 1, frame.name.length);

            if (element === 'body') {
                designSystem.rem = frame.children[0].style.fontSize
            }

            await Promise.all(Object.keys(frame.children[0].style).map(async(item) => {
                if (item === 'fontFamily') {
                    googleFontImport = await googleFontsAPIRequest(frame.children[0].style[item]);
                }
                
                if (objTostyle[item]) {
                    elementObj[objTostyle[item]] = frame.children[0].style[item];

                    font = frame.children[0].style.fontFamily;
                }
            }))

            // console.log(elementObj)
            // console.log(element);
            // console.log(color);
            // console.log(font);

            if (!designSystem.googleFonts.includes(googleFontImport)) {
                designSystem.googleFonts.push(googleFontImport);
            }

            designSystem.elements[element] = {
                ...elementObj,
                color: color,
            };

            // console.log(googleFontImport);
        }
    }))
}

const googleFontsAPIRequest = async(font) => {
    font = font.replace(' ', '+');

    const res = await fetch(`${GOOGLE_FONTS_API_URL}/css?family=${font}`, async(error, response, body) => {
        return Promise.resolve(body);
    });

    const googleRes = await res.text();
    return Promise.resolve(googleRes);
}

const figmaAPIRequest = async() => {
    const res = await fetch(`${FIGMA_API_URL}/files/jZE8coiDiHCIRoF0mndbkp`, options, async(error, response, body) => {
        const object = JSON.parse(body);
        return Promise.resolve(object);
    });

    const figmaRes = await res.json();
    return Promise.resolve(figmaRes);
}

const generateClasses = async(designObj) => {
    await Promise.all(Object.keys(designObj).map(async (frame) => {
        if (designObj[frame].type === 'FRAME') {
            // ?Gets colors 
            if (designObj[frame].name === 'colors') {
                getColors(designObj[frame].children);
            }

            // ?Gets all fonts and types
            if (designObj[frame].name === 'type') {
                await getFonts(designObj[frame].children);
            }
        }
    }))

    await Promise.all(Object.keys(designObj).map(async (frame) => {
        if (designObj[frame].type === 'FRAME') {
            // ?Finds all the other div styling
            if (designObj[frame].name !== 'type' && designObj[frame].name !== 'colors') {
                console.log(designObj[frame].name);
                designObj[frame].children.forEach((item) => {
                    if (item.type === 'FRAME') {
                        console.log(`${item.name}: ${item.absoluteBoundingBox.height / designSystem.rem}rem`);
                    }
                })
                console.log('')
            }
        }
    }))
}

(async() => {
    const figmaObj = await figmaAPIRequest();
    await generateClasses(figmaObj.document.children[0].children[0].children);
    // console.log(designSystem);
})();
