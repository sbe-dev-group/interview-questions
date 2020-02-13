import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'dateFilter',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        console.log(items, args);
        return items && items.filter(item => !args || item.startDate === this.dateFormat(args));
    }
    dateFormat(dateInp) {
        return dateInp.getFullYear() + '-' + (dateInp.getMonth() + 1) + '-' + dateInp.getDate();
    }
}
