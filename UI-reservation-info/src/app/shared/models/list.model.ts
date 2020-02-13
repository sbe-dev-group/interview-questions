export class ListModel {
    primaryGuest: string;
    roomName: string;
    startDate: string;
    endDate: string;
    totalPrice: string;
    priceDetails: Array<any>;
    amenityNames: Array<any>;
    constructor(data) {
        this.primaryGuest = data.guestInfo.find(x => x.type === 'Primary').name;
        this.roomName = data.roomDetails.Name;
        this.startDate = this.dateFormat(new Date(data.startDate));
        this.endDate = this.dateFormat(new Date(data.endDate));
        this.totalPrice = data.price.perDay.map(x =>
            x.RoomPrice + x.RoomTax + x.RoomFees
        ).reduce((a, b) => a + b).toString();
        this.priceDetails = data.price.perDay;
        this.amenityNames = data.amenities;

    }
    dateFormat(dateInp) {
        return dateInp.getFullYear() + '-' + (dateInp.getMonth() + 1) + '-' + dateInp.getDate();
    }
}
