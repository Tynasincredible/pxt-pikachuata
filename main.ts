//% weight=20 color=#56C8C0 icon="\uf017" block="MiaTime"
namespace MiaTime {

    let _day = 1
    let _month = 1
    let _year = 2025

    //% block="setDate"
    //% day.min=1 day.max=31
    export function setDate(day: number, month: number, year: number) {
        _day = day;
        _month = month;
        _year = year;
    }

    export function getDate() {
        return _day + '/' + _month + '/' + _year;
    }

}
