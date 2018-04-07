import React, {Component} from 'react'
import PropTypes from 'prop-types'

import pin from '../img/pin.png'
import pinRetina from '../img/pin@2x.png'
import pinHover from '../img/pin-hover.png'
import pinHoverRetina from '../img/pin-hover@2x.png'
import delaysPin from '../img/delaysPin.png'
import delaysPinRetina from '../img/delaysPin@2x.png'
import delaysPinHover from '../img/delaysPin-hover.png'
import delaysPinHoverRetina from '../img/delaysPin-hover@2x.png'
import {Popover} from "antd";

const imageOffset = {
    left: 15,
    top: 31
};

export default class Marker extends Component {
    static propTypes = {
        // input, passed to events
        anchor: PropTypes.array.isRequired,
        payload: PropTypes.any,

        // optional modifiers
        hover: PropTypes.bool,

        // callbacks
        onClick: PropTypes.func,
        onContextMenu: PropTypes.func,
        onMouseOver: PropTypes.func,
        onMouseOut: PropTypes.func,

        // pigeon variables
        left: PropTypes.number,
        top: PropTypes.number,

        // pigeon functions
        latLngToPixel: PropTypes.func,
        pixelToLatLng: PropTypes.func,

        // added props
        airportCode: PropTypes.string,
        airport: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.state = {
            hover: false
        }
    }

    // what do you expect to get back with the event
    eventParameters = (event) => ({
        event,
        anchor: this.props.anchor,
        payload: this.props.payload
    });

    // controls
    isRetina() {
        return typeof window !== 'undefined' && window.devicePixelRatio >= 2
    }

    // modifiers
    isHover() {
        return typeof this.props.hover === 'boolean' ? this.props.hover : this.state.hover
    }

    image() {
        // TODO: Make this not absolutely horrible
        return this.isRetina()
            ? this.isHover()
                ? this.props.numDelays === 0
                    ? pinHoverRetina
                    : delaysPinHoverRetina
                : this.props.numDelays === 0
                    ? pinRetina
                    : delaysPinRetina
            : this.isHover()
                ? this.props.numDelays === 0
                    ? pinHover
                    : delaysPinHover
                : this.props.numDelays === 0
                    ? pin
                    : delaysPin
    }
    componentDidMount() {
        let images = this.isRetina()
            ? this.props.numDelays && this.props.numDelays > 0
                ? [delaysPinRetina, delaysPinHoverRetina]
                : [pinRetina, pinHoverRetina]
            : this.props.numDelays && this.props.numDelays > 0
                ? [delaysPin, delaysPinHover]
                : [pin, pinHover];

        images.forEach(image => {
            let img = new window.Image();
            img.src = image
        })
    }

    // delegators

    handleClick = () => {
        this.props.onClick && this.props.onClick(this.eventParameters())
    };

    handleContextMenu = () => {
        this.props.onContextMenu && this.props.onContextMenu(this.eventParameters())
    };

    handleMouseOver = () => {
        this.props.onMouseOver && this.props.onMouseOver(this.eventParameters());
        this.setState({hover: true})
    };

    handleMouseOut = () => {
        this.props.onMouseOut && this.props.onMouseOut(this.eventParameters());
        this.setState({hover: false})
    };

    render() {
        const {left, top, onClick, airport, airportCode} = this.props;
        const {numDelays, name, status} = airport;

        const style = {
            position: 'absolute',
            transform: `translate(${left - imageOffset.left}px, ${top - imageOffset.top}px)`,
            cursor: onClick ? 'pointer' : 'default'
        };
        const content = numDelays === 0
            ? <p>No reported delays</p>
            : (<div>
                {status.map(({Type, Reason, AvgDelay}, index) => {
                    return (
                        <div key={index} className={'popover-body'}>
                            {Type && <p>{`Type: ${Type}`}</p>}
                            {Reason && <p>{`Reason: ${Reason}`}</p>}
                            {AvgDelay && <p>{`Average Delay: ${AvgDelay}`}</p>}
                        </div>
                    )
                })}
            </div>);

        return (
            <div style={style}
                 className='pigeon-click-block'
                 onClick={this.handleClick}
                 onContextMenu={this.handleContextMenu}
                 onMouseOver={this.handleMouseOver}
                 onMouseOut={this.handleMouseOut}>
                <img src={this.image()} width={29} height={34} alt=''/>
                <Popover
                    key={airportCode + Math.random().toString()}
                    title={name}
                    visible={this.isHover()}
                    content={content}
                > </Popover>
            </div>
        )
    }
}
