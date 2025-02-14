var APP_DATA = {
  "scenes": [
    {
      "id": "0-001-cmpc-entrance",
      "name": "001-CMPC Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.0361333797437009,
        "pitch": -0.14720274758199992,
        "fov": 1.2682428287914278
      },
      "linkHotspots": [
        {
          "yaw": 0.07689612639711463,
          "pitch": 0.2579124968048667,
          "rotation": 0,
          "target": "1-002-cmpc-gather-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5556801924239441,
          "pitch": -0.3127126948688783,
          "title": "CMPC",
          "text": "Catholic Memorial and Pilgrimage Centre,Singai"
        }
      ]
    },
    {
      "id": "1-002-cmpc-gather-hall",
      "name": "002-CMPC Gather Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.23931215368721404,
          "pitch": 0.13211118139685496,
          "rotation": 0,
          "target": "2-003-cmpc-start-point"
        },
        {
          "yaw": -3.033724774850768,
          "pitch": 0.5252409700296354,
          "rotation": 0,
          "target": "0-001-cmpc-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-003-cmpc-start-point",
      "name": "003-CMPC Start Point",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.29687992102269334,
          "pitch": -0.04013071779742816,
          "rotation": 0,
          "target": "3-004-station-1-pondok"
        },
        {
          "yaw": 2.9968242378441943,
          "pitch": 0.1375826029735343,
          "rotation": 0,
          "target": "1-002-cmpc-gather-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-004-station-1-pondok",
      "name": "004-Station 1 Pondok",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.5384531102617203,
        "pitch": 0.12121782892070421,
        "fov": 1.2674161024634862
      },
      "linkHotspots": [
        {
          "yaw": -0.2603774806007113,
          "pitch": 0.15701824726727942,
          "rotation": 0,
          "target": "4-005-station-1"
        },
        {
          "yaw": 2.9437526050397747,
          "pitch": 0.20997491936135226,
          "rotation": 0,
          "target": "2-003-cmpc-start-point"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-005-station-1",
      "name": "005-Station 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.156848005197541,
        "pitch": 0.08725363053370572,
        "fov": 1.2674161024634862
      },
      "linkHotspots": [
        {
          "yaw": 2.331611268406675,
          "pitch": 0.01810053722703664,
          "rotation": 0,
          "target": "5-006-staiton-2"
        },
        {
          "yaw": -0.9152123968814063,
          "pitch": 0.08059058989320889,
          "rotation": 0,
          "target": "3-004-station-1-pondok"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-006-staiton-2",
      "name": "006-Staiton 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.41683640525745247,
        "pitch": 0.1268451557322514,
        "fov": 1.2674161024634862
      },
      "linkHotspots": [
        {
          "yaw": -0.725414837004335,
          "pitch": 0.009913010748212159,
          "rotation": 0,
          "target": "6-007-station-3"
        },
        {
          "yaw": 2.335866335595526,
          "pitch": 0.11952179741494717,
          "rotation": 0,
          "target": "4-005-station-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-007-station-3",
      "name": "007-Station 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.13207438019406226,
          "pitch": -0.3183533921883246,
          "rotation": 0,
          "target": "7-008-staiton-4"
        },
        {
          "yaw": -2.2980651326175607,
          "pitch": 0.09227136046580497,
          "rotation": 0,
          "target": "5-006-staiton-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-008-staiton-4",
      "name": "008-Staiton 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.12317654063826211,
          "pitch": -0.02764284607101075,
          "rotation": 0,
          "target": "8-009-stairs-to-station-5"
        },
        {
          "yaw": 2.8539999600732564,
          "pitch": 0.3135759764108741,
          "rotation": 4.71238898038469,
          "target": "6-007-station-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-009-stairs-to-station-5",
      "name": "009-Stairs to Station 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8917153294224587,
          "pitch": 0.516683344049774,
          "rotation": 0,
          "target": "7-008-staiton-4"
        },
        {
          "yaw": -0.3428573440306071,
          "pitch": -0.5529220085267958,
          "rotation": 0,
          "target": "9-010-station-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-010-station-5",
      "name": "010-Station 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1726708158137118,
          "pitch": -0.2900542845239471,
          "rotation": 0,
          "target": "10-011-walkway-to-station-6"
        },
        {
          "yaw": -2.964945688255586,
          "pitch": 0.5904354171636292,
          "rotation": 0.7853981633974483,
          "target": "8-009-stairs-to-station-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-011-walkway-to-station-6",
      "name": "011-Walkway to Station 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5586429138518163,
          "pitch": -0.03944147833815492,
          "rotation": 0,
          "target": "11-012-stairs-to-station-6"
        },
        {
          "yaw": 2.8317091063555324,
          "pitch": 0.3168633155570184,
          "rotation": 0,
          "target": "9-010-station-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-012-stairs-to-station-6",
      "name": "012-Stairs to Station 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2747947872614773,
          "pitch": -0.45388204850023506,
          "rotation": 0,
          "target": "12-013-station-6"
        },
        {
          "yaw": 2.831028438821601,
          "pitch": 0.3367616395696107,
          "rotation": 5.497787143782138,
          "target": "10-011-walkway-to-station-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-013-station-6",
      "name": "013-Station 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5109696852368764,
          "pitch": -0.20083379371607357,
          "rotation": 0,
          "target": "13-014-stairs-to-station-7"
        },
        {
          "yaw": 3.1287618985472987,
          "pitch": 0.5586835046475436,
          "rotation": 1.5707963267948966,
          "target": "11-012-stairs-to-station-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-014-stairs-to-station-7",
      "name": "014-Stairs to Station 7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.013456271738857,
          "pitch": 0.4136398586930419,
          "rotation": 0,
          "target": "12-013-station-6"
        },
        {
          "yaw": -0.13678939468125328,
          "pitch": -0.17421008942555183,
          "rotation": 0,
          "target": "14-015-station-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-015-station-7",
      "name": "015-Station 7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4247532562814822,
          "pitch": -0.3602571201182254,
          "rotation": 0,
          "target": "15-016-stairs-to-station-8"
        },
        {
          "yaw": 2.6802438377325837,
          "pitch": 0.3990620145931274,
          "rotation": 0,
          "target": "13-014-stairs-to-station-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-016-stairs-to-station-8",
      "name": "016-Stairs to Station 8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.012184436401124543,
        "pitch": -0.4165851652446406,
        "fov": 1.2674161024634862
      },
      "linkHotspots": [
        {
          "yaw": -0.10258677993004461,
          "pitch": -0.5124261178388458,
          "rotation": 0,
          "target": "16-017-station-8"
        },
        {
          "yaw": 3.0515834689334316,
          "pitch": 0.6212223061161399,
          "rotation": 0,
          "target": "14-015-station-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-017-station-8",
      "name": "017-Station 8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.29189542079834396,
        "pitch": -0.14755456891302288,
        "fov": 1.2674161024634862
      },
      "linkHotspots": [
        {
          "yaw": -0.781310812377523,
          "pitch": -0.22092703130775782,
          "rotation": 0,
          "target": "17-018-stairs-to-station-9"
        },
        {
          "yaw": 2.38704389346735,
          "pitch": 0.4810386890382894,
          "rotation": 0.7853981633974483,
          "target": "15-016-stairs-to-station-8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-018-stairs-to-station-9",
      "name": "018-Stairs to Station 9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.04353015243691516,
          "pitch": -0.39632379469339973,
          "rotation": 0,
          "target": "18-019-station-9"
        },
        {
          "yaw": -2.883544721720499,
          "pitch": 0.6095706071060469,
          "rotation": 0,
          "target": "16-017-station-8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-019-station-9",
      "name": "019-Station 9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03936377712559391,
          "pitch": -0.13798651243073579,
          "rotation": 0,
          "target": "19-020-stairs-to-toilet"
        },
        {
          "yaw": -3.1243264847806778,
          "pitch": 0.30430994730517114,
          "rotation": 0,
          "target": "17-018-stairs-to-station-9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-020-stairs-to-toilet",
      "name": "020-Stairs to Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.4980783372670485,
        "pitch": -0.23675404644683162,
        "fov": 1.2674161024634862
      },
      "linkHotspots": [
        {
          "yaw": 1.4619340850754252,
          "pitch": -0.13801204969819203,
          "rotation": 0,
          "target": "20-021-toilet"
        },
        {
          "yaw": -1.7053823186886827,
          "pitch": 0.3495356956554776,
          "rotation": 0,
          "target": "18-019-station-9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-021-toilet",
      "name": "021-Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.233101292299759,
        "pitch": -0.010447256515623948,
        "fov": 1.2674161024634862
      },
      "linkHotspots": [
        {
          "yaw": 2.3407830236811584,
          "pitch": -0.1173253532059757,
          "rotation": 0,
          "target": "21-022-station-10"
        },
        {
          "yaw": -1.0101208226341143,
          "pitch": 0.4508459007609744,
          "rotation": 0,
          "target": "19-020-stairs-to-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-022-station-10",
      "name": "022-Station 10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8882618239995246,
          "pitch": 0.17881312231694046,
          "rotation": 0,
          "target": "20-021-toilet"
        },
        {
          "yaw": 0.008997448993941504,
          "pitch": -0.1751342161841727,
          "rotation": 0,
          "target": "22-023-stairs-to-station-11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-023-stairs-to-station-11",
      "name": "023-Stairs to Station 11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.08675914883681735,
          "pitch": -0.12778150874564886,
          "rotation": 0,
          "target": "23-024-station-11"
        },
        {
          "yaw": 3.059069995761222,
          "pitch": 0.26899131473611604,
          "rotation": 0,
          "target": "21-022-station-10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-024-station-11",
      "name": "024-Station 11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7939159636363691,
          "pitch": 0.05700140344392324,
          "rotation": 0,
          "target": "24-025-lookout-point-walkway"
        },
        {
          "yaw": 2.78526704513137,
          "pitch": 0.20219248638147924,
          "rotation": 0,
          "target": "22-023-stairs-to-station-11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-025-lookout-point-walkway",
      "name": "025-Lookout Point Walkway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3132517017070011,
          "pitch": 0.2832108362849013,
          "rotation": 0,
          "target": "25-026-lookout-point"
        },
        {
          "yaw": 1.6827612194216623,
          "pitch": -0.10627180017057469,
          "rotation": 0.7853981633974483,
          "target": "26-027-stairs-to-station-12"
        },
        {
          "yaw": -1.9926142579287252,
          "pitch": 0.1378469253407406,
          "rotation": 0,
          "target": "23-024-station-11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-026-lookout-point",
      "name": "026-Lookout Point",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 3.0164012183268776,
        "pitch": 0.22849574879177403,
        "fov": 1.2674161024634862
      },
      "linkHotspots": [
        {
          "yaw": 2.476561242533899,
          "pitch": 0.05682671687123175,
          "rotation": 4.71238898038469,
          "target": "26-027-stairs-to-station-12"
        },
        {
          "yaw": -2.700936471670863,
          "pitch": 0.08960601355363096,
          "rotation": 0,
          "target": "24-025-lookout-point-walkway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-027-stairs-to-station-12",
      "name": "027-Stairs to Station 12",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.00599837838871764,
          "pitch": -0.24397241665590563,
          "rotation": 0,
          "target": "27-028-station-12"
        },
        {
          "yaw": -2.842950031234526,
          "pitch": 0.1909863490804149,
          "rotation": 0,
          "target": "25-026-lookout-point"
        },
        {
          "yaw": -3.1121571045399286,
          "pitch": 0.19090646832452052,
          "rotation": 0,
          "target": "24-025-lookout-point-walkway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-028-station-12",
      "name": "028-Station 12",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 909.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.13415444454962788,
          "pitch": -0.1735990013618327,
          "rotation": 0,
          "target": "28-029-konjac"
        },
        {
          "yaw": -3.0965970853741744,
          "pitch": 0.2475867777722236,
          "rotation": 0,
          "target": "26-027-stairs-to-station-12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-029-konjac",
      "name": "029-Konjac",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8251928753762456,
          "pitch": -0.22426398539073844,
          "rotation": 0,
          "target": "29-030-stairs-to-station-13"
        },
        {
          "yaw": 1.921936463213049,
          "pitch": 0.27154618619516313,
          "rotation": 0,
          "target": "27-028-station-12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-030-stairs-to-station-13",
      "name": "030-Stairs to Station 13",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0808027254361825,
          "pitch": -0.23191629544833425,
          "rotation": 7.853981633974483,
          "target": "30-031-station-13"
        },
        {
          "yaw": 3.117283245312473,
          "pitch": 0.4848410435636197,
          "rotation": 0,
          "target": "28-029-konjac"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-031-station-13",
      "name": "031-Station 13",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9047300664193685,
          "pitch": -0.1477066219557841,
          "rotation": 0,
          "target": "31-032-walkway-to-station-14"
        },
        {
          "yaw": -2.643708502100571,
          "pitch": 0.3987139139131539,
          "rotation": 0.7853981633974483,
          "target": "29-030-stairs-to-station-13"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-032-walkway-to-station-14",
      "name": "032-Walkway to Station 14",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.9837212842755516,
        "pitch": 0.3211895123460806,
        "fov": 1.2674161024634862
      },
      "linkHotspots": [
        {
          "yaw": 2.841533090398743,
          "pitch": 0.06675107640934286,
          "rotation": 0,
          "target": "32-033-station-14"
        },
        {
          "yaw": -0.05979506327503259,
          "pitch": 0.6340033584969884,
          "rotation": 0,
          "target": "30-031-station-13"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-033-station-14",
      "name": "033-Station 14",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5134373259764233,
          "pitch": 0.036520310510848475,
          "rotation": 4.71238898038469,
          "target": "31-032-walkway-to-station-14"
        },
        {
          "yaw": 0.6474937743738192,
          "pitch": 0.18338892222292102,
          "rotation": 1.5707963267948966,
          "target": "33-034-st-maria"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-034-st-maria",
      "name": "034-St Maria",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.843742633126455,
          "pitch": 0.026509994319248165,
          "rotation": 0,
          "target": "32-033-station-14"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "CMPC Singai",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
