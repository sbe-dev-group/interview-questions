import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Calendar extends React.Component {
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        }, () => {
            this.props.filterReservations(this.state.startDate);
        });
    };

    render() {
        return (
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
            />
        );
    }
}

export default Calendar