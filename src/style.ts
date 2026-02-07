import type { StyleSpecification } from 'maplibre-gl';

const style: StyleSpecification = {
  "version": 8,
  "name": "gsi-style-maniawase",
  "metadata": { "maputnik:renderer": "mbgljs" },
  "sources": {
    "gsibv-vectortile-source-1-4-16": {
      "type": "vector",
      "tiles": [
        "https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf"
      ],
      "maxzoom": 16
    }
  },
  "sprite": "https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/sprite/std",
  "glyphs": "https://maps.gsi.go.jp/xyz/noto-jp/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "water",
      "type": "fill",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "waterarea",
      "paint": { "fill-color": "#d0ebff" }
    },
    {
      "id": "landforma",
      "type": "fill",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "landforma",
      "paint": {
        "fill-color": [
          "match",
          ["get", "ftCode"],
          7401, "#ebfbee",
          7402, "#edf2ff",
          7403, "#fff9db",
          "#f8f9fa"
        ]
      }
    },
    {
      "id": "contour",
      "type": "line",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "contour",
      "minzoom": 11,
      "paint": {
        "line-color": ["match", ["get", "altiFlag"], 0, "#ba9f89", "#d9c8b6"],
        "line-width": ["match", ["get", "altiFlag"], 0, 1.4, 0.7],
        "line-opacity": [
          "interpolate", ["linear"], ["zoom"],
          13.5, 1,
          14, 0.25,
          16.5, 1
        ]
      }
    },
    {
      "id": "contour-label",
      "type": "symbol",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "contour",
      "layout": {
        "text-allow-overlap": true,
        "text-ignore-placement": true,
        "symbol-placement": "line",
        "text-max-width": 999,
        "text-size": [
          "interpolate", ["linear"], ["zoom"],
          14, 10,
          17, 13
        ],
        "text-max-angle": 360,
        "text-anchor": "center",
        "text-pitch-alignment": "viewport",
        "text-rotation-alignment": "map",
        "icon-pitch-alignment": "auto",
        "icon-rotation-alignment": "auto",
        "text-field": "{alti}",
        "text-font": ["NotoSansCJKjp-Regular"],
        "icon-allow-overlap": true,
        "text-keep-upright": true
      },
      "paint": {
        "text-color": ["match", ["get", "altiFlag"], 0, "#ba9f89", "#d9c8b6"],
        "text-opacity": [
          "interpolate", ["linear"], ["zoom"],
          14, 0.25,
          16.5, 1
        ],
        "text-halo-color": "#ffffff",
        "text-halo-width": 2
      }
    },
    {
      "id": "structurel",
      "type": "fill",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "structurel",
      "filter": ["all", ["in", "ftCode", 5501, 5511, 5514, 5515, 5532, 5501]],
      "paint": { "fill-color": "#adb5bd" }
    },
    {
      "id": "wstructurea",
      "type": "fill",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "wstructurea",
      "paint": { "fill-color": "#ffffff" }
    },
    {
      "id": "coastline",
      "type": "line",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "coastline",
      "paint": { "line-color": "#364fc7", "line-width": 1 }
    },
    {
      "id": "lake",
      "type": "line",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "lake",
      "paint": { "line-color": "#a5d8ff" }
    },
    {
      "id": "river",
      "type": "line",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "river",
      "paint": { "line-color": "#a5d8ff" }
    },
    {
      "id": "boundary",
      "type": "line",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "boundary",
      "filter": ["any", ["!in", "ftCode", 1211, 1212, 51211, 51212]],
      "paint": {
        "line-color": "#dee2e6",
        "line-width": 1
      }
    },
    {
      "id": "boundary-country",
      "type": "line",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "boundary",
      "filter": ["any", ["in", "ftCode", 1211, 1212, 51211, 51212]],
      "paint": {
        "line-color": "#be4bdb",
        "line-width": ["match", ["get", "ftCode"], 1211, 3, 1212, 2, 1],
        "line-dasharray": [7, 2, 1, 2]
      }
    },
    {
      "id": "searoute",
      "type": "line",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "searoute",
      "paint": {
        "line-color": "#bbbbd7",
        "line-dasharray": [10, 10],
        "line-width": 1
      }
    },
    {
      "id": "road",
      "type": "line",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "road",
      "maxzoom": 14,
      "filter": ["all", [">=", "ftCode", 2700], ["<=", "ftCode", 2799]],
      "layout": {
        "line-cap": "square",
        "line-join": "round",
        "line-sort-key": [
          "+",
          ["match", ["get", "rdCtg"], 0, 30, 1, 20, 3, 40, 10],
          ["to-number", ["get", "rnkWidth"]]
        ]
      },
      "paint": {
        "line-color": [
          "case",
          ["==", ["get", "motorway"], 1],
          "#20c997",
          [
            "match",
            ["get", "rdCtg"],
            0, "#ff922b",
            1, "#fcc419",
            3, "#20c997",
            "#dee2e6"
          ]
        ],
        "line-width": [
          "case",
          ["all", ["has", "rnkWidth"], ["<=", ["get", "rnkWidth"], 4]],
          ["+", ["get", "rnkWidth"], 1],
          1
        ],
        "line-opacity": ["match", ["get", "ftCode"], [2704, 2714], 0.5, 1]
      }
    },
    {
      "id": "road-boundary-z16",
      "type": "line",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "road",
      "minzoom": 16,
      "filter": [
        "any",
        ["all", [">=", "ftCode", 2200], ["<=", "ftCode", 2209]],
        ["all", [">=", "ftCode", 2230], ["<=", "ftCode", 2299]]
      ],
      "paint": { "line-color": "#ced4da", "line-width": 2 }
    },
    {
      "id": "road-boundary-dash-z16",
      "type": "line",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "road",
      "minzoom": 16,
      "filter": ["all", [">=", "ftCode", 2220], ["<=", "ftCode", 2229]],
      "paint": {
        "line-color": "#ced4da",
        "line-width": 2,
        "line-dasharray": [1, 1]
      }
    },
    {
      "id": "road-footway",
      "type": "line",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "road",
      "filter": ["all", ["==", "ftCode", 2721]],
      "paint": {
        "line-color": [
          "interpolate", ["linear"], ["zoom"],
          15, "#dee2e6",
          16, "#664d3c"
        ],
        "line-width": [
          "interpolate", ["linear"], ["zoom"],
          15, 1,
          16, 2
        ],
        "line-dasharray": [6, 1]
      }
    },
    {
      "id": "road-z14-boundary",
      "type": "line",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "road",
      "minzoom": 14,
      "maxzoom": 16.25,
      "filter": [
        "all",
        [">=", "ftCode", 2700],
        ["<=", "ftCode", 2799],
        ["!=", "ftCode", 2721]
      ],
      "layout": {
        "line-cap": "square",
        "line-join": "round",
        "line-sort-key": [
          "+",
          ["match", ["get", "rdCtg"], 0, 30, 1, 20, 3, 40, 10],
          ["to-number", ["get", "rnkWidth"]]
        ]
      },
      "paint": {
        "line-color": [
          "case",
          ["==", ["get", "motorway"], 1],
          "#20c997",
          [
            "match",
            ["get", "rdCtg"],
            0, "#ff922b",
            1, "#fcc419",
            3, "#20c997",
            "#adb5bd"
          ]
        ],
        "line-opacity": ["match", ["get", "ftCode"], [2704, 2714], 0.5, 1],
        "line-width": 1,
        "line-gap-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          14, ["+", ["to-number", ["get", "rnkWidth"]], 1],
          16, [
            "match",
            ["to-number", ["get", "rnkWidth"]],
            0, 4,
            1, 8,
            2, 12,
            3, 18,
            28
          ]
        ]
      }
    },
    {
      "id": "road-z14",
      "type": "line",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "road",
      "minzoom": 14,
      "maxzoom": 16.25,
      "filter": [
        "all",
        [">=", "ftCode", 2700],
        ["<=", "ftCode", 2799],
        ["!=", "ftCode", 2721]
      ],
      "layout": {
        "line-cap": "square",
        "line-join": "round",
        "line-sort-key": [
          "+",
          ["match", ["get", "rdCtg"], 0, 30, 1, 20, 3, 40, 10],
          ["to-number", ["get", "rnkWidth"]]
        ]
      },
      "paint": {
        "line-color": [
          "case",
          ["==", ["get", "motorway"], 1],
          "#b2f2bb",
          [
            "match",
            ["get", "rdCtg"],
            0, "#ffd8a8",
            1, "#ffec99",
            3, "#b2f2bb",
            "#ffffff"
          ]
        ],
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          14, ["+", ["to-number", ["get", "rnkWidth"]], 1],
          16, [
            "match",
            ["to-number", ["get", "rnkWidth"]],
            0, 4,
            1, 8,
            2, 12,
            3, 18,
            28
          ]
        ],
        "line-opacity": ["match", ["get", "ftCode"], [2704, 2714], 0.5, 1]
      }
    },
    {
      "id": "railway",
      "type": "line",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "railway",
      "maxzoom": 16,
      "filter": ["all", ["==", "ftCode", 8201]],
      "paint": {
        "line-color": [
          "match",
          ["floor", ["/", ["to-number", ["get", "rtCode"]], 1000000]],
          [40201, 40216],
          "#343a40",
          "#495057"
        ],
        "line-width": [
          "interpolate", ["linear"], ["zoom"],
          8, 1,
          12, 3
        ],
        "line-opacity": ["match", ["get", "railState"], [2, 3, 100], 0.5, 1]
      }
    },
    {
      "id": "railway-z16",
      "type": "line",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "railway",
      "filter": ["any", ["!has", "ftCode"], ["!=", "ftCode", 8201]],
      "paint": {
        "line-color": "#495057",
        "line-opacity": [
          "case",
          ["any", ["==", ["get", "ftCode"], 2804]],
          0.5,
          1
        ],
        "line-width": 2
      }
    },
    {
      "id": "building",
      "type": "fill",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "building",
      "minzoom": 15,
      "paint": {
        "fill-color": "#f1f3f5",
        "fill-outline-color": "#ced4da"
      }
    },
    {
      "id": "railway-station",
      "type": "line",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "railway",
      "filter": ["all", ["has", "staCode"], ["!=", "staCode", "0"]],
      "paint": {
        "line-color": [
          "match",
          ["get", "railState"],
          [2, 3], "#ff8787",
          "#c92a2a"
        ],
        "line-width": 5
      }
    },
    {
      "id": "transp",
      "type": "symbol",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "transp",
      "layout": {
        "icon-image": [
          "match",
          ["get", "ftCode"],
          2901, "国道番号-20",
          2903, "都市高速道路番号-20",
          2904, "高速道路番号-20",
          ""
        ],
        "icon-size": 0.5,
        "text-size": 10,
        "text-offset": [0, -0.1],
        "text-pitch-alignment": "viewport",
        "text-rotation-alignment": "viewport",
        "icon-pitch-alignment": "viewport",
        "icon-rotation-alignment": "viewport",
        "text-field": [
          "case",
          ["all", ["has", "eRNo"], ["!=", ["get", "eRNo"], 0]], ["get", "eRNo"],
          ["all", ["has", "nRNo"], ["!=", ["get", "nRNo"], 0]], ["get", "nRNo"],
          ["get", "uRNo"]
        ],
        "text-font": ["NotoSansCJKjp-Regular"],
        "symbol-placement": "point",
        "icon-allow-overlap": true,
        "text-keep-upright": true,
        "text-allow-overlap": false,
        "symbol-z-order": "auto",
        "text-max-width": 100,
        "visibility": "visible"
      },
      "paint": { "text-color": "#ffffff" }
    },
    {
      "id": "symbol-icon",
      "type": "symbol",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "symbol",
      "filter": ["in", "ftCode", 3201, 3202, 3203, 3204, 3205, 3206, 3211, 3212, 3213, 3214, 3215, 3216, 3217, 3218, 3221, 3231, 3232, 3241, 3242, 3243, 3244, 3261, 4101, 4102, 4103, 4104, 4105, 6301, 6311, 6312, 6313, 6314, 6321, 6322, 6323, 6324, 6325, 6326, 6327, 6331, 6332, 6341, 6342, 6351, 6361, 6362, 6371, 6381, 8103, 8105],
      "layout": {
        "icon-size": [
          "interpolate", ["linear"], ["zoom"],
          14, 0.33,
          15, 0.5,
          17, 1
        ],
        "icon-image": [
          "match",
          ["get", "ftCode"],
          3201, "官公署",
          3202, "裁判所",
          3203, "税務署",
          3204, "外国公館",
          3205, "市役所・東京都の区役所",
          3206, "町村役場・政令指定都市の区役所",
          3211, "交番",
          3212, "高等学校・中等教育学校",
          3213, "小学校",
          3214, "小学校",
          3215, "老人ホーム",
          3216, "博物館法の登録博物館・博物館相当施設",
          3217, "図書館",
          3218, "郵便局",
          3221, "灯台",
          3231, "神社",
          3232, "寺院",
          3241, "警察署",
          3242, "消防署",
          3243, "病院",
          3244, "保健所",
          3261, "工場",
          4101, "煙突",
          4102, "風車",
          4103, "油井・ガス井",
          4104, "記念碑",
          4105, "自然災害伝承碑",
          6301, "墓地",
          6311, "田",
          6312, "畑",
          6313, "畑",
          6314, "畑",
          6321, "広葉樹林",
          6322, "針葉樹林",
          6323, "竹林",
          6324, "ヤシ科樹林",
          6325, "ハイマツ地",
          6326, "笹地",
          6327, "荒地",
          6331, "温泉",
          6332, "噴火口・噴気口",
          6341, "史跡・名勝・天然記念物",
          6342, "城跡",
          6351, "採鉱地",
          6361, "港湾",
          6362, "漁港",
          6371, "国際空港",
          6381, "自衛隊",
          8103, "発電所等",
          8105, "電波塔",
          ""
        ],
        "icon-pitch-alignment": "viewport",
        "icon-rotation-alignment": "viewport",
        "symbol-placement": "point",
        "icon-allow-overlap": true,
        "symbol-z-order": "auto"
      }
    },
    {
      "id": "symbol-triangulation-benchmark",
      "type": "symbol",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "symbol",
      "minzoom": 16.25,
      "filter": ["in", "ftCode", 7101, 7102, 7103],
      "layout": {
        "text-field": ["to-string", ["case", ["!", ["has", "alti"]], ["to-string", ""], ["==", ["get", "alti"], ""], ["to-string", ""], ["in", ".", ["to-string", ["/", ["round", ["*", ["to-number", ["get", "alti"]], 10]], 10]]], ["to-string", ["/", ["round", ["*", ["to-number", ["get", "alti"]], 10]], 10]], ["concat", ["to-string", ["/", ["round", ["*", ["to-number", ["get", "alti"]], 10]], 10]], ".0"]]],
        "text-size": 10,
        "text-font": ["NotoSansCJKjp-Regular"],
        "text-anchor": "left",
        "text-offset": [0.8, -0.1],
        "icon-size": 0.75,
        "icon-image": [
          "match",
          ["get", "ftCode"],
          7101, "電子基準点",
          7102, "標高点（測点）",
          7103, "水準点",
          ""
        ],
        "icon-pitch-alignment": "viewport",
        "icon-rotation-alignment": "viewport",
        "symbol-placement": "point",
        "icon-allow-overlap": true,
        "symbol-z-order": "auto"
      }
    },
    {
      "id": "label",
      "type": "symbol",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "label",
      "filter": ["all", ["!in", "annoCtg", 333, 334, 411, 421]],
      "layout": {
        "text-field": "{knj}",
        "text-font": ["NotoSansCJKjp-Regular"],
        "text-size": ["match", ["get", "annoCtg"], [412, 422], 14, 10],
        "symbol-sort-key": ["case", ["==", ["get", "annoCtg"], 422], 1, 10]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 2,
        "icon-color": "#212529",
        "text-color": [
          "match",
          ["get", "annoCtg"],
          [412, 422], "#2f9e44",
          [321, 322, 323, 343, 344, 345, 347, 348], "#4263eb",
          [311, 312, 313, 314, 315, 316, 333], "#664d3c",
          "#212529"
        ]
      }
    },
    {
      "id": "label-transportway",
      "type": "symbol",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "label",
      "filter": ["any", ["in", "annoCtg", 411, 421]],
      "layout": {
        "text-field": "{knj}",
        "text-font": ["NotoSansCJKjp-Regular"],
        "text-size": [
          "interpolate", ["linear"], ["zoom"],
          10, 12,
          13, 15
        ],
        "text-allow-overlap": true,
        "text-rotate": [
          "case",
          ["==", ["get", "arrng"], 2],
          ["*", ["+", ["to-number", ["get", "arrngAgl"]], 90], -1],
          ["*", ["to-number", ["get", "arrngAgl"]], -1]
        ],
        "text-pitch-alignment": "viewport",
        "text-rotation-alignment": "viewport",
        "icon-pitch-alignment": "auto",
        "icon-rotation-alignment": "auto"
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 2,
        "text-color": [
          "match",
          ["get", "annoCtg"],
          [411, 421], "#2f9e44",
          "#212529"
        ]
      }
    },
    {
      "id": "label-country",
      "type": "symbol",
      "source": "gsibv-vectortile-source-1-4-16",
      "source-layer": "label",
      "filter": ["any", ["in", "annoCtg", 140, 110, 210]],
      "layout": {
        "text-field": "{knj}",
        "text-font": ["NotoSansCJKjp-Bold"],
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6, 20,
          14, ["match", ["get", "annoCtg"], 210, 14, 20],
          16, 20
        ],
        "text-allow-overlap": true,
        "text-rotate": 0
      },
      "paint": { "text-halo-color": "#ffffff", "text-halo-width": 2 }
    }
  ],
};

export default style;
