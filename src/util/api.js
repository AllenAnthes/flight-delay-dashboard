export async function getAirportStatus(airportCode) {
    try {
        // const response = await fetch(`https://soa.smext.faa.gov/asws/api/airport/status/${airportCode}`);
        // const json = await response.json();
        // return formatAirportJson(json);
        return getFakeData(airportCode);
    } catch (ex) {
        console.warn("Exception in getAirportStatus:", ex);
        return {}
    }
}

function formatAirportJson(json) {
    return {
        name: json.Name,
        code: json.IATA,
        numDelays: json.DelayCount,
        status: json.Status
    }
}

function getFakeData(airportCode) {
    return {
        code: airportCode,
        ...fakeData[airportCode],
    }

}


export const airports = {
    BOS: {name: '', coords: [42.3656, -71.0096], numDelays: 0, status: []},
    LGA: {name: '', coords: [40.7769, -73.8740], numDelays: 0, status: []},
    TEB: {name: '', coords: [40.8583, -74.0615], numDelays: 0, status: []},
    EWR: {name: '', coords: [42.3656, -74.1745], numDelays: 0, status: []},
    JFK: {name: '', coords: [40.6413, -73.7781], numDelays: 0, status: []},
    PHL: {name: '', coords: [39.8744, -75.2424], numDelays: 0, status: []},
    PIT: {name: '', coords: [40.4958, -80.2413], numDelays: 0, status: []},
    IAD: {name: '', coords: [38.9531, -77.4565], numDelays: 0, status: []},
    BWI: {name: '', coords: [39.1774, -76.6684], numDelays: 0, status: []},
    DCA: {name: '', coords: [38.8512, -77.0402], numDelays: 0, status: []},
    RDU: {name: '', coords: [35.8801, -78.7880], numDelays: 0, status: []},
    CLT: {name: '', coords: [35.2144, -80.9473], numDelays: 0, status: []},
    ATL: {name: '', coords: [33.6407, -84.4277], numDelays: 0, status: []},
    TPA: {name: '', coords: [27.9835, -82.5371], numDelays: 0, status: []},
    MCO: {name: '', coords: [28.4312, -81.3081], numDelays: 0, status: []},
    FLL: {name: '', coords: [26.0742, -80.1506], numDelays: 0, status: []},
    MIA: {name: '', coords: [25.7959, -80.2870], numDelays: 0, status: []},
    DTW: {name: '', coords: [42.2162, -83.3554], numDelays: 0, status: []},
    CLE: {name: '', coords: [41.4058, -81.8539], numDelays: 0, status: []},
    MDW: {name: '', coords: [41.7868, -87.7522], numDelays: 0, status: []},
    ORD: {name: '', coords: [41.9742, -87.9073], numDelays: 0, status: []},
    IND: {name: '', coords: [39.7169, -86.2956], numDelays: 0, status: []},
    CVG: {name: '', coords: [39.0533, -84.6630], numDelays: 0, status: []},
    BNA: {name: '', coords: [36.1263, -86.6774], numDelays: 0, status: []},
    MEM: {name: '', coords: [35.0421, -89.9792], numDelays: 0, status: []},
    STL: {name: '', coords: [38.7503, -90.3755], numDelays: 0, status: []},
    MCI: {name: '', coords: [39.2991, -94.7108], numDelays: 0, status: []},
    MSP: {name: '', coords: [44.8848, -93.2223], numDelays: 0, status: []},
    DFW: {name: '', coords: [32.8998, -97.0403], numDelays: 0, status: []},
    IAH: {name: '', coords: [29.9902, -95.3368], numDelays: 0, status: []},
    DEN: {name: '', coords: [39.8561, -104.6737], numDelays: 0, status: []},
    SLC: {name: '', coords: [40.7899, -111.9791], numDelays: 0, status: []},
    PHX: {name: '', coords: [33.4373, -112.0078], numDelays: 0, status: []},
    LAS: {name: '', coords: [36.0840, -115.1537], numDelays: 0, status: []},
    SAN: {name: '', coords: [32.7338, -117.1933], numDelays: 0, status: []},
    LAX: {name: '', coords: [33.9416, -118.4085], numDelays: 0, status: []},
    SFO: {name: '', coords: [37.6213, -122.3790], numDelays: 0, status: []},
    SJC: {name: '', coords: [37.3639, -121.9289], numDelays: 0, status: []},
    PDX: {name: '', coords: [45.5898, -122.5951], numDelays: 0, status: []},
    SEA: {name: '', coords: [47.4502, -122.3088], numDelays: 0, status: []},
};


const fakeData = {
    "BOS": {
        "name": "Boston-Logan International",
        "coords": [
            42.3656,
            -71.0096
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "LGA": {
        "name": "New York Laguardia International",
        "coords": [
            40.7769,
            -73.874
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "TEB": {
        "name": "Teterboro International",
        "coords": [
            40.8583,
            -74.0615
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "EWR": {
        "name": "Newark International",
        "coords": [
            42.3656,
            -74.1745
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "JFK": {
        "name": "New York John F Kennedy International",
        "coords": [
            40.6413,
            -73.7781
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "PHL": {
        "name": "Philadelphia International",
        "coords": [
            39.8744,
            -75.2424
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "PIT": {
        "name": "Pittsburgh International",
        "coords": [
            40.4958,
            -80.2413
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "IAD": {
        "name": "Washington Dulles International",
        "coords": [
            38.9531,
            -77.4565
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "BWI": {
        "name": "Baltimore-Washington International",
        "coords": [
            39.1774,
            -76.6684
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "DCA": {
        "name": "Washington National Reagan International",
        "coords": [
            38.8512,
            -77.0402
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "RDU": {
        "name": "Raliegh-Durham International",
        "coords": [
            35.8801,
            -78.788
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "CLT": {
        "name": "Charlotte/Douglas International",
        "coords": [
            35.2144,
            -80.9473
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "ATL": {
        "name": "Hartsfield-Jackson International",
        "coords": [
            33.6407,
            -84.4277
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "TPA": {
        "name": "Tampa International",
        "coords": [
            27.9835,
            -82.5371
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "MCO": {
        "name": "Orlando International",
        "coords": [
            28.4312,
            -81.3081
        ],
        "numDelays": 1,
        "status": [
            {
                "Type": "Departure",
                "Reason": "WX:Thunderstorms",
                "MinDelay": "16 minutes",
                "Trend": "Increasing",
                "MaxDelay": "30 minutes"
            }
        ]
    },
    "FLL": {
        "name": "Fort Lauderdale/Hollywood International",
        "coords": [
            26.0742,
            -80.1506
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "MIA": {
        "name": "Miami International",
        "coords": [
            25.7959,
            -80.287
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "DTW": {
        "name": "Detroit Metropolitan Wayne County",
        "coords": [
            42.2162,
            -83.3554
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "CLE": {
        "name": "Cleveland-Hopkins International",
        "coords": [
            41.4058,
            -81.8539
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "MDW": {
        "name": "Chicago Midway",
        "coords": [
            41.7868,
            -87.7522
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "ORD": {
        "name": "Chicago O'Hare International",
        "coords": [
            41.9742,
            -87.9073
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "IND": {
        "name": "Indianapolis International",
        "coords": [
            39.7169,
            -86.2956
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "CVG": {
        "name": "Cincinnati/Northern Kentucky International",
        "coords": [
            39.0533,
            -84.663
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "BNA": {
        "name": "Nashville International",
        "coords": [
            36.1263,
            -86.6774
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "MEM": {
        "name": "Memphis International",
        "coords": [
            35.0421,
            -89.9792
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "STL": {
        "name": "St Louis Lambert-International",
        "coords": [
            38.7503,
            -90.3755
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "MCI": {
        "name": "Kansas City International",
        "coords": [
            39.2991,
            -94.7108
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "MSP": {
        "name": "Minneapolis-St. Paul International",
        "coords": [
            44.8848,
            -93.2223
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "DFW": {
        "name": "Dallas/Fort Worth International",
        "coords": [
            32.8998,
            -97.0403
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "IAH": {
        "name": "Houston George Bush Intercontinental",
        "coords": [
            29.9902,
            -95.3368
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "DEN": {
        "name": "Denver International",
        "coords": [
            39.8561,
            -104.6737
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "SLC": {
        "name": "Salt Lake City International",
        "coords": [
            40.7899,
            -111.9791
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "PHX": {
        "name": "Phoenix Sky Harbor International",
        "coords": [
            33.4373,
            -112.0078
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "LAS": {
        "name": "Las Vegas McCarran International",
        "coords": [
            36.084,
            -115.1537
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "SAN": {
        "name": "San Diego International Lindbergh Field",
        "coords": [
            32.7338,
            -117.1933
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "LAX": {
        "name": "Los Angeles International",
        "coords": [
            33.9416,
            -118.4085
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "SFO": {
        "name": "SFO",
        "coords": [
            37.6213,
            -122.379
        ],
        "numDelays": 1,
        "status": [
            {
                "Type": "Ground Delay",
                "Reason": "WEATHER / LOW CEILINGS",
                "AvgDelay": "34 minutes"
            }
        ]
    },
    "SJC": {
        "name": "San Jose International",
        "coords": [
            37.3639,
            -121.9289
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "PDX": {
        "name": "Portland International",
        "coords": [
            45.5898,
            -122.5951
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    },
    "SEA": {
        "name": "Seattle Tacoma International",
        "coords": [
            47.4502,
            -122.3088
        ],
        "numDelays": 0,
        "status": [
            {
                "Reason": "No known delays for this airport"
            }
        ]
    }
};