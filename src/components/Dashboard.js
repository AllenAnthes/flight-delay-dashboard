import React, {Component} from 'react'
import {getAirportStatus} from "../util/api";
import MapUS from "./MapUS";
import {getViewport} from "../util/getViewport";

const airports = {
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


class Dashboard extends Component {

    state = {
        showModal: false,
        airports: airports,
        viewport: '',
    };

    async componentDidMount() {
        const airports = this.state.airports;
        const statuses = await Promise.all(Object.keys(airports).map(async code => await getAirportStatus(code)));
        statuses.forEach(airport => {
            airports[airport.code].numDelays = airport.numDelays;
            airports[airport.code].status = airport.status;
            airports[airport.code].name = airport.name;
        });
        const viewport = getViewport();
        console.log(viewport);
        this.setState({airports, viewport})
    }


    handleClick = async (airportCode) => {
        const info = await getAirportStatus(airportCode);
        if (info) {
            this.setState({showModal: true, info});

            console.log(info)
        }
    };

    closeModal = () => {
        this.setState({showModal: false})
    };

    render() {
        const {airports, viewport} = this.state;
        return (
            <div>
                <MapUS
                    airports={airports}
                    viewport={viewport}
                />
                <div >
                    <p>{`Height: ${viewport.height} Width: ${viewport.width}`}</p>
                </div>
            </div>
        )
    }
}

export default Dashboard;