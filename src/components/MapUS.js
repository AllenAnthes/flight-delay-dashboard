import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Map from 'pigeon-maps'
import Marker from './Marker'
import {getAirportStatus} from "../util/api";

const provider = (x, y, z) => {
    const s = String.fromCharCode(97 + (x + y + z) % 3);
    return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`
};

class MapUS extends Component {
    static propTypes = {
        airports: PropTypes.shape({
            coords: PropTypes.arrayOf(PropTypes.number),
            numDelays: PropTypes.number,
            statuses: PropTypes.array,
        })
    };

    state = {
        center: [38.6186, -95.8918],
        zoom: 4.7,
        zoomOnMouseWheel: true,
        statuses: {},
    };

    handleClick = async ({event, payload, anchor}) => {
        const info = await getAirportStatus(payload);
        if (info) {
            this.setState({showModal: true, info});
        }
    };

    handleBoundsChange = ({center, zoom, bounds, initial}) => {
        if (initial) {
            console.log('Got initial bounds: ', bounds)
        }
        this.setState({center, zoom})
    };

    handleMouseOver = (event) => {
    };

    render() {
        const {center} = this.state;
        const airports = this.props.airports;
        const {zoom, height, width} = this.props.viewportConfigs;


        return (
            <div style={{textAlign: 'center', marginTop: 50}}>
                <Map defaultCenter={center}
                     zoom={zoom}
                     provider={provider}
                     animate={false}
                     zoomOnMouseWheel={false}
                     width={width}
                     height={height}
                     attribution={false}
                     mouseWheelMetaText={null}>
                    {Object.keys(airports).map(key => (
                        <Marker
                            key={key}
                            anchor={airports[key].coords}
                            payload={key}
                            onClick={this.handleClick}
                            onMouseOver={this.handleMouseOver}
                            airportCode={key}
                            numDelays={airports[key].numDelays}
                            status={airports[key].status}
                            airport={airports[key]}/>
                    ))}
                </Map>
            </div>
        )
    }
}

export default MapUS;