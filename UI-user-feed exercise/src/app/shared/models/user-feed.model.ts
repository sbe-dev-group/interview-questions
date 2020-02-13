export class UserFeedModel {
    user: string;
    value: string;
    id: string;
    timestamp: string;
    timeZoneOffset: string;
    likes: number;
    constructor(data) {
        this.user = data.user;
        this.value = data.value;
        this.id = data.id;
        this.timestamp = this.convertDate(new Date(parseInt(data.timestamp, 10)));
        this.timeZoneOffset = data.timeZoneOffset;
        this.likes = data.likes;
    }
    convertDate(currentDate) {

        const date = currentDate.getDate();
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();

        const dateString = `${date} - ${(month + 1)} - ${year}`;
        return dateString;
    }
}
