import React, { Component } from 'react'
import Calendar from '../Calendar/Calendar';
import './Home.css';
import reservationInfo from '../../mock-data/data.json';
import PriceBreakDown from '../PriceBreakDown/PriceBreakDown';
var moment = require('moment');

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reservationInfo: [],
            selectedDay: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            reservationInfo: reservationInfo
        })
    }

    componentWillReceiveProps(newProps) {
        //console.log("newProps", newProps);
    }

    ShowPrimaryGuest = (data, index) => {
        const guestInfo = data && data.guestInfo;
        const guestName = [];
        guestInfo.forEach(data => {
            if (data.type === 'Primary') {
                guestName.push(data.name)
            }
        });
        return guestName;
    }

    aggregateRoomPriceForAllDays = (data) => {
        let result = [data.reduce((acc, n) => {
            for (var prop in n) {
                if (acc.hasOwnProperty(prop)) acc[prop] += n[prop];
                else acc[prop] = n[prop];
            }
            return acc;
        }, {})]

        return result
    }

    showTotalPrice = (data) => {
        const roomPrice = data.price.perDay;
        const totalPricePerDay = [];
        let totalRoomPrice = 0;
        const aggregatedTotal = this.aggregateRoomPriceForAllDays(roomPrice);

        aggregatedTotal.forEach(data => {
            totalRoomPrice = data.RoomPrice + data.RoomTax + data.RoomFees;
            totalPricePerDay.push(totalRoomPrice)
        });

        return totalPricePerDay;
    }

    showAmenities = (data) => {
        const amenity = data.amenities;
        const amenityName = [];
        amenity.forEach(data => {
            amenityName.push(data.name)
        });
        return amenityName;
    }

    showModal = (data, index) => {
        this.setState({
            showModal: !this.state.showModal,
            userData: data,
            index: index
        })
    }

    filterReservations = (data) => {
        let filteredReservations = [];
        this.setState({
            selectedDay: data
        }, () => {
            const { selectedDay, reservationInfo } = this.state;
            const currentDate = moment(selectedDay).format('MM-DD-YYYY');

            reservationInfo.forEach((data, index) => {
                //console.log("data before", data);
                const userStartDate = moment(data.startDate).format('MM-DD-YYYY');
                const userEndDate = moment(data.endDate).format('MM-DD-YYYY');
                //console.log("Date Range", currentDate, userStartDate, userEndDate);
                if (currentDate === userStartDate || currentDate === userEndDate) {
                    filteredReservations.push(data);
                } else if (currentDate >= userStartDate && currentDate <= userEndDate) {
                    filteredReservations.push(data);
                } else {
                    this.setState({
                        reservationInfo: reservationInfo
                    })
                }
            })

            this.setState({
                reservationInfo: filteredReservations
            })
        })
    }

    handleClick = () => {
        window.location.reload();
    }

    render() {
        const { reservationInfo, showModal, userData, index } = this.state;
        return (
            <div>
                <div>
                    <span className="btn-padding">
                        <button className="btn btn-info" onClick={this.handleClick}>
                            Refresh
                            </button>
                    </span>
                    <div className="calendar-main">
                        Show Reservations For: <Calendar filterReservations={this.filterReservations} />

                    </div>
                    <div>
                        {showModal && <PriceBreakDown userData={userData} index={index} />}
                    </div>

                </div>
                <div>
                    <table id="t01" className="user-table">
                        <tr>
                            <th>Primary Guest</th>
                            <th>Room Name</th>
                            <th>Dates</th>
                            <th>Total Price</th>
                            <th>Amenity Names</th>
                        </tr>

                        {
                            reservationInfo && reservationInfo.map((data, index) => (

                                <tr key={index}>

                                    <td>{this.ShowPrimaryGuest(data, index)}</td>
                                    <td>{data.roomDetails.Name}</td>
                                    <td>{data.startDate} - {data.endDate}</td>
                                    <td
                                    >
                                        <u onClick={() => this.showModal(data, index)} className="total-price-styling">{this.showTotalPrice(data)}</u>
                                    </td>
                                    < td > {this.showAmenities(data).join(', ')}</td>
                                </tr>
                            ))
                        }

                    </table>
                </div >
            </div >
        )
    }
}

export default Home