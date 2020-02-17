import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class PriceBreakDown extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: true
        }
    }

    componentDidMount() {
        this.setState({
            userData: this.props && this.props.userData,
            index: this.props && this.props.index
        })
    }

    componentWillReceiveProps(newProps) {
        if (newProps) {
            this.setState({
                userData: newProps.userData,
                index: newProps.index
            })
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        const { modal } = this.state;
        const { userData } = this.props;
        const perDayPrice = userData && userData.price && userData.price.perDay;
        return (
            <div>
                <Modal isOpen={modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Price Breakdown</ModalHeader>
                    <ModalBody>
                        <div>
                            <table id="t01" className="user-table">
                                <tr>
                                    <th>Day</th>
                                    <th>Room Price</th>
                                    <th>Room Tax</th>
                                    <th>Room Fees</th>
                                </tr>
                                {
                                    perDayPrice.map((data, index) => (
                                        <tr key={index}>
                                            <td>Day {index + 1}</td>
                                            <td>{data.RoomPrice}</td>
                                            <td>{data.RoomTax}</td>
                                            <td>{data.RoomFees}</td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" className="btn btn-success" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default PriceBreakDown

