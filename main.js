const FIGMA_API_URL = 'https://api.figma.com';
const ACESS_TOKEN = '26651-625efab7-5897-4196-a328-b1c88876d26d';

curl - sH 'X-Figma-Token: 26651-625efab7-5897-4196-a328-b1c88876d26d'
'https://api.figma.com/v1/files/jZE8coiDiHCIRoF0mndbkp'

const obj = {
  "document": {
    "id": "0:0",
    "name": "Document",
    "type": "DOCUMENT",
    "children": [{
      "id": "0:1",
      "name": "Page 1",
      "type": "CANVAS",
      "children": [{
        "id": "1:6",
        "name": "padding for headers",
        "type": "TEXT",
        "blendMode": "PASS_THROUGH",
        "absoluteBoundingBox": {
          "x": -370.0,
          "y": -105.0,
          "width": 108.0,
          "height": 14.0
        },
        "constraints": {
          "vertical": "TOP",
          "horizontal": "LEFT"
        },
        "fills": [{
          "blendMode": "NORMAL",
          "type": "SOLID",
          "color": {
            "r": 0.0,
            "g": 0.0,
            "b": 0.0,
            "a": 1.0
          }
        }],
        "strokes": [],
        "strokeWeight": 1.0,
        "strokeAlign": "OUTSIDE",
        "effects": [],
        "characters": "padding for headers",
        "style": {
          "fontFamily": "Roboto",
          "fontPostScriptName": null,
          "fontWeight": 400,
          "fontSize": 12.0,
          "textAlignHorizontal": "LEFT",
          "textAlignVertical": "TOP",
          "letterSpacing": 0.0,
          "lineHeightPx": 14.06250,
          "lineHeightPercent": 100.0,
          "lineHeightUnit": "INTRINSIC_%"
        },
        "characterStyleOverrides": [],
        "styleOverrideTable": {}
      }, {
        "id": "1:9",
        "name": "h2",
        "type": "FRAME",
        "blendMode": "PASS_THROUGH",
        "children": [{
          "id": "1:3",
          "name": "heading 2",
          "type": "TEXT",
          "blendMode": "PASS_THROUGH",
          "absoluteBoundingBox": {
            "x": -370.0,
            "y": -235.0,
            "width": 200.0,
            "height": 30.0
          },
          "constraints": {
            "vertical": "TOP",
            "horizontal": "LEFT"
          },
          "fills": [{
            "blendMode": "NORMAL",
            "type": "SOLID",
            "color": {
              "r": 0.0,
              "g": 0.0,
              "b": 0.0,
              "a": 1.0
            }
          }],
          "strokes": [],
          "strokeWeight": 1.0,
          "strokeAlign": "OUTSIDE",
          "effects": [],
          "characters": "heading 2",
          "style": {
            "fontFamily": "Major Mono Display",
            "fontPostScriptName": "MajorMonoDisplay-Regular",
            "fontWeight": 400,
            "fontSize": 30.0,
            "textAlignHorizontal": "LEFT",
            "textAlignVertical": "TOP",
            "letterSpacing": 0.0,
            "lineHeightPx": 35.156250,
            "lineHeightPercent": 100.0,
            "lineHeightUnit": "INTRINSIC_%"
          },
          "characterStyleOverrides": [],
          "styleOverrideTable": {}
        }],
        "absoluteBoundingBox": {
          "x": -370.0,
          "y": -235.0,
          "width": 200.0,
          "height": 30.0
        },
        "constraints": {
          "vertical": "TOP",
          "horizontal": "LEFT"
        },
        "clipsContent": false,
        "background": [{
          "blendMode": "NORMAL",
          "visible": false,
          "type": "SOLID",
          "color": {
            "r": 1.0,
            "g": 1.0,
            "b": 1.0,
            "a": 1.0
          }
        }],
        "backgroundColor": {
          "r": 0.0,
          "g": 0.0,
          "b": 0.0,
          "a": 0.0
        },
        "effects": []
      }, {
        "id": "1:4",
        "name": "Rectangle 1",
        "type": "RECTANGLE",
        "blendMode": "PASS_THROUGH",
        "absoluteBoundingBox": {
          "x": -370.0,
          "y": -85.0,
          "width": 296.0,
          "height": 61.0
        },
        "constraints": {
          "vertical": "TOP",
          "horizontal": "LEFT"
        },
        "fills": [{
          "blendMode": "NORMAL",
          "type": "SOLID",
          "color": {
            "r": 0.76862746477127075,
            "g": 0.76862746477127075,
            "b": 0.76862746477127075,
            "a": 1.0
          }
        }],
        "strokes": [],
        "strokeWeight": 1.0,
        "strokeAlign": "INSIDE",
        "effects": [{
          "type": "DROP_SHADOW",
          "visible": true,
          "color": {
            "r": 0.0,
            "g": 0.0,
            "b": 0.0,
            "a": 0.250
          },
          "blendMode": "NORMAL",
          "offset": {
            "x": -4.0,
            "y": 4.0
          },
          "radius": 4.0
        }],
        "cornerRadius": 20.0,
        "rectangleCornerRadii": [20.0, 20.0, 20.0, 20.0]
      }, {
        "id": "1:5",
        "name": "Rectangle 2",
        "type": "RECTANGLE",
        "blendMode": "PASS_THROUGH",
        "absoluteBoundingBox": {
          "x": -370.0,
          "y": -10.0,
          "width": 296.0,
          "height": 61.0
        },
        "constraints": {
          "vertical": "TOP",
          "horizontal": "LEFT"
        },
        "fills": [{
          "blendMode": "NORMAL",
          "type": "SOLID",
          "color": {
            "r": 0.76862746477127075,
            "g": 0.76862746477127075,
            "b": 0.76862746477127075,
            "a": 1.0
          }
        }],
        "strokes": [],
        "strokeWeight": 1.0,
        "strokeAlign": "INSIDE",
        "effects": []
      }],
      "backgroundColor": {
        "r": 0.89803922176361084,
        "g": 0.89803922176361084,
        "b": 0.89803922176361084,
        "a": 1.0
      },
      "prototypeStartNodeID": null
    }]
  },
  "components": {},
  "schemaVersion": 0,
  "styles": {},
  "name": "design-system",
  "lastModified": "2019-11-23T03:03:54.367455Z",
  "thumbnailUrl": "https://s3-alpha-sig.figma.com/thumbnails/51d74eb4-6a42-4791-a2c6-f23144f52421?Expires=1575244800&Signature=bBk0kALnd4g3ZCQxeP6D01-2ZuS93-QF2EIu1sptiKbC6B1jNn6lrV-UyQhxTjGCudqahKCnyLNi9IyB4JXKTxJz06iTVaTKjlfjfkFrPlVuL7fQ4odWIepWBAhgiNy7dn7jHYXLzAZ95MtGCLVCVGXm5eYSXWiP1Z4NhrOKv-4ce4dPL5ybgIJ45Ydo8S4PJCEAPnRaR8~ie5dQHT5lDoRwJPAXQ1lis8u-claGbZJ613~RI2vyKp8LhU6UP-yFMp1tYf1ZmVNaZVEzpUO0MGpHCAwuKxEJ~G9f2dmZoAtHLxv3tr4X0M60grqo0dDUhOTb-dYObguEH17RfFf7nQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  "version": "206344284",
  "role": "owner"
}