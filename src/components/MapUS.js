import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Map from 'pigeon-maps'
import Marker from './Marker'
import {getAirportStatus} from "../util/api";
import {Modal} from "antd";

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

    closeModal = () => {
        this.setState({showModal: false})
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
        const {center, zoom} = this.state;
        const airports = this.props.airports;

        return (
            <div style={{textAlign: 'center', marginTop: 50}}>
                <Map center={center}
                     zoom={zoom}
                     provider={provider}
                     onBoundsChanged={this.handleBoundsChange}
                     // width={1200}
                     // height={600}
                     width={Math.min(this.props.viewport.width, 1200)}
                     height={Math.min(this.props.viewport.height, 600)}
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
                {this.state.showModal
                    ? <Modal
                        visible={this.state.showModal}
                        title={`${this.state.info.name} ${this.state.info.code}`}
                        onOk={this.closeModal}
                        onCancel={this.closeModal}
                    >
                        {this.state.info.status.map(({Type, Reason}, index) => {
                            return (
                                <div key={index}>
                                    {Type && <p>{Type}</p>}
                                    {Reason && <p>{Reason}</p>}
                                </div>
                            )
                        })}
                    </Modal>
                    : null
                }
            </div>
        )
    }
}

export default MapUS;