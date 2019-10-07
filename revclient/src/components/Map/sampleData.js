
export const gpsCoordinates = [
    {
        "center":[-122.402373, 37.79228],
        "context":[],
        "geometry":{
            "type":"Point",
            "coordinates":[-122.402373, 37.79228]
        },
        "id": "poi.3092376521263",
        "type":"Feature",
        "place_type":["poi"],
        "relevance": 1,
        "properties":{landmark: true, address: "315 Montgomery St", category: "tech startup, office"},
        "text_en-US":"Ripple",
        "place_name_en-US":"Ripple, 315 Montgomery St, San Francisco, California 94104, United States of America",
        "text":"Ripple",
        "language":"en-US",
        "place_name":"Ripple, 315 Montgomery St, San Francisco, California 94104, United States of America",
    }
]


export const sampleSearchResultObject = {
    "id":"poi.2576980450733",
    "center":[-122.417254,37.776507],
    "geometry":{"coordinates":[-122.417254,37.776507],"type":"Point"},
    "type":"Feature",
    "place_type":["poi"],
    "relevance":1,
    "properties":{
        "landmark":true,
        "address":"1355 Market St",
        "category":"poke,hawaiian,food"
    },
    "text_en-US":"Poké Bar",
    "place_name_en-US":"Poké Bar,1355 Market St,San Francisco,California 94103,United States of America",
    "text":"Poké Bar",
    "place_name":"Poké Bar,1355 Market St,San Francisco,California 94103,United States of America",
    "context":[
        {
            "id":"neighborhood.293577",
            "text_en-US":"South of Market",
            "text":"South of Market"
        },
        {
            "id":"postcode.13892342768265050",
            "text_en-US":"94103",
            "text":"94103"
        },
        {
            "id":"place.15734669613361910",
            "wikidata":"Q62",
            "text_en-US":"San Francisco",
            "language_en-US":"en",
            "text":"San Francisco",
            "language":"en"
        },
        {
            "id":"region.11319063928738010",
            "short_code":"US-CA",
            "wikidata":"Q99",
            "text_en-US":"California",
            "language_en-US":"en",
            "text":"California",
            "language":"en"
        },
        {"id":"country.9053006287256050","short_code":"us","wikidata":"Q30","text_en-US":"United States of America","language_en-US":"en","text":"United States of America","language":"en"}
    ]
}


// {
//     "type":"FeatureCollection",
//     "query":["poke","bar","san","francisco"],
//     "features":[
//         {
//             "id":"poi.2576980450733",
//             "type":"Feature",
//             "place_type":["poi"],
//             "relevance":1,
//             "properties":{
//                 "landmark":true,
//                 "address":"1355 Market St",
//                 "category":"poke,hawaiian,food"
//             },
//             "text_en-US":"Poké Bar",
//             "place_name_en-US":"Poké Bar,1355 Market St,San Francisco,California 94103,United States of America",
//             "text":"Poké Bar",
//             "place_name":"Poké Bar,1355 Market St,San Francisco,California 94103,United States of America",
//             "center":[-122.417254,37.776507],
//             "geometry":{"coordinates":[-122.417254,37.776507],"type":"Point"},
//             "context":[
//                 {
//                     "id":"neighborhood.293577",
//                     "text_en-US":"South of Market",
//                     "text":"South of Market"
//                 },
//                 {
//                     "id":"postcode.13892342768265050",
//                     "text_en-US":"94103",
//                     "text":"94103"
//                 },
//                 {
//                     "id":"place.15734669613361910",
//                     "wikidata":"Q62",
//                     "text_en-US":"San Francisco",
//                     "language_en-US":"en",
//                     "text":"San Francisco",
//                     "language":"en"
//                 },
//                 {
//                     "id":"region.11319063928738010",
//                     "short_code":"US-CA",
//                     "wikidata":"Q99",
//                     "text_en-US":"California",
//                     "language_en-US":"en",
//                     "text":"California",
//                     "language":"en"
//                 },
//                 {"id":"country.9053006287256050","short_code":"us","wikidata":"Q30","text_en-US":"United States of America","language_en-US":"en","text":"United States of America","language":"en"}
//             ]
//         },
//     {
//         "id":"poi.2972117446647",
//         "type":"Feature",
//         "place_type":["poi"],
//         "relevance":1,
//         "properties":{
//             "landmark":true,
//             "address":"555 California St",
//             "category":"poke,hawaiian,food"
//         },
//         "text_en-US":"Poke Bar",
//         "place_name_en-US":"Poke Bar,555 California St,San Francisco,California 94104,United States of America",
//         "text":"Poke Bar",
//         "place_name":"Poke Bar,555 California St,San Francisco,California 94104,United States of America",
//         "center":[-122.403725,37.79199],
//         "geometry":{
//             "coordinates":[-122.403725,37.79199],
//             "type":"Point"
//         },
//         "context":[
//             {
//                 "id":"neighborhood.293350",
//                 "text_en-US":"Financial District",
//                 "text":"Financial District"
//             },
//             {
//                 "id":"postcode.15213718465422650",
//                 "text_en-US":"94104",
//                 "text":"94104"
//             },
//             {
//                 "id":"place.15734669613361910",
//                 "wikidata":"Q62",
//                 "text_en-US":"San Francisco",
//                 "language_en-US":"en",
//                 "text":"San Francisco",
//                 "language":"en"
//             },
//             {
//                 "id":"region.11319063928738010",
//                 "short_code":"US-CA",
//                 "wikidata":"Q99",
//                 "text_en-US":"California",
//                 "language_en-US":"en",
//                 "text":"California",
//                 "language":"en"
//             },
//             {
//                 "id":"country.9053006287256050",
//                 "short_code":"us",
//                 "wikidata":"Q30",
//                 "text_en-US":"United States of America",
//                 "language_en-US":"en",
//                 "text":"United States of America",
//                 "language":"en"
//             }
//         ]
//     },
//     {
//         "id":"place.6734635062361910",
//         "type":"Feature",
//         "place_type":["place"],
//         "relevance":0.5,
//         "properties":{"wikidata":"Q16628330"},
//         "text_en-US":"San Francisco",
//         "language_en-US":"es",
//         "place_name_en-US":"San Francisco,Zulia,Venezuela",
//         "text":"San Francisco",
//         "language":"es",
//         "place_name":"San Francisco,Zulia,Venezuela",
//         "bbox":[-71.758432,10.519168,-71.608914,10.615895],
//         "center":[-71.67651,10.54875],
//         "geometry":{"type":"Point",
//         "coordinates":[-71.67651,10.54875]},
//         "context":[
//             {"id":"region.12747981326619380",
//             "short_code":"VE-V",
//             "wikidata":"Q43269",
//             "text_en-US":"Zulia",
//             "language_en-US":"en",
//             "text":"Zulia",
//             "language":"en"},
//             {"id":"country.5958724522570350",
//             "short_code":"ve",
//             "wikidata":"Q717",
//             "text_en-US":"Venezuela",
//             "language_en-US":"en",
//             "text":"Venezuela",
//             "language":"en"}
//         ]
//     },
//     {
//         "id":"place.8466279564022150",
//         "type":"Feature",
//         "place_type":["place"],
//         "relevance":0.5,
//         "properties":{"wikidata":"Q681999"},
//         "text_en-US":"San Francisco de Macorís",
//         "language_en-US":"en",
//         "place_name_en-US":"San Francisco de Macorís,Duarte Province,Dominican Republic",
//         "text":"San Francisco de Macorís",
//         "language":"en",
//         "place_name":"San Francisco de Macorís,Duarte Province,Dominican Republic",
//         "bbox":[-70.371665,19.156196,-70.012997,19.523369],
//         "center":[-70.25,19.3],
//         "geometry":{"type":"Point",
//         "coordinates":[-70.25,19.3]},
//         "context":[{"id":"region.14043437673430870",
//         "short_code":"DO-06",
//         "wikidata":"Q1262745",
//         "text_en-US":"Duarte Province",
//         "language_en-US":"en",
//         "text":"Duarte Province",
//         "language":"en"},
//         {"id":"country.3283200600650900",
//         "short_code":"do",
//         "wikidata":"Q786",
//         "text_en-US":"Dominican Republic",
//         "language_en-US":"en",
//         "text":"Dominican Republic",
//         "language":"en"}]
//     },
//     {
//         "id":"place.3753555000368070",
//         "type":"Feature",
//         "place_type":["place"],
//         "relevance":0.5,
//         "properties":{"wikidata":"Q986536"},
//         "text_en-US":"São Francisco do Sul",
//         "language_en-US":"en",
//         "place_name_en-US":"São Francisco do Sul,Santa Catarina,Brazil",
//         "text":"São Francisco do Sul",
//         "language":"en",
//         "place_name":"São Francisco do Sul,Santa Catarina,Brazil",
//         "bbox":[-48.7840769020001,-26.4691346007534,-48.475717534,-26.1271722647466],
//         "center":[-48.6308,-26.2495],
//         "geometry":{"type":"Point",
//         "coordinates":[-48.6308,-26.2495]},
//         "context":[
//             {
//                 "id":"region.6555850234176350","short_code":"BR-SC","wikidata":"Q41115","text_en-US":"Santa Catarina","language_en-US":"en","text":"Santa Catarina","language":"en"
//             },
//             {
//                 "id":"country.12447454793682710",
//                 "short_code":"br",
//                 "wikidata":"Q155",
//                 "text_en-US":"Brazil",
//                 "language_en-US":"en",
//                 "text":"Brazil",
//                 "language":"en"
//             }
//         ]   
//     }
//     ],
//     "attribution":"NOTICE: © 2019 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained. POI(s) provided by Foursquare."
// }
