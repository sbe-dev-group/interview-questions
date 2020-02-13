export class ListModel {
    index: number;
    totalPrice: number;
    roomPrice: number;
    roomTax: number;
    roomFees: number;
    constructor(data) {
        this.index = data.guestInfo.find(x => x.type === 'Primary').name;
        this.totalPrice = data.roomDetails.Name;
        this.roomPrice = 16;
        this.roomTax = 15;
        this.roomFees = 15;

    }

}
