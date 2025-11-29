namespace MiaTime {

    let _day = 1
    let _month = 1
    let _year = 2025

    export function setDate(day: number, month: number, year: number) {
        _day = day;
        _month = month;
        _year = year;
    }

    export function getDate() {
        return _day + '/' + _month + '/' + _year;
    }

}