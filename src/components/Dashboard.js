import React, {Component} from 'react'
import {Modal} from 'antd'

import {getAirportStatus, airports} from "../util/api";
import {getViewport} from "../util/getViewport";
import MapUS from "./MapUS";
import Search from './Search'

class Dashboard extends Component {

    state = {
        showModal: false,
        details: null,
        airports: airports,
        viewportConfigs: null,
        dataSource: []
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
        const width = Math.min(viewport.width * .9, 1200);
        const height = Math.min(viewport.height * .8, 600);

        const zoom = viewport.width >= 600
            ? 4.7
            : (viewport.width / 600) * 4.7;
        const viewportConfigs = {height, width, zoom};
        this.setState({airports, viewportConfigs})
    }


    handleClick = (airportCode) => {
        this.setState({showModal: true, details: airportCode})
    };


    closeModal = () => {
        this.setState({showModal: false})
    };

    render() {
        const {airports, viewportConfigs} = this.state;
        return (
            <div className={'App'}>

                {viewportConfigs !== null && <MapUS
                    airports={airports}
                    viewportConfigs={viewportConfigs}
                />}
                <Search
                    dataSource={Object.keys(airports)}
                    handleSelect={this.handleClick}
                />


                {this.state.showModal
                    ? <Modal
                        visible={this.state.showModal}
                        title={`${airports[this.state.details].name} ${this.state.details}`}
                        onOk={this.closeModal}
                        onCancel={this.closeModal}
                    >
                        {airports[this.state.details].status.map(({Type, Reason}, index) => {
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

export default Dashboard;