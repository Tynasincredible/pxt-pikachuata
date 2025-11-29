//% weight=20 color=#56C8C0 icon="\uf017" block="MiaTime"
namespace MiaTime {

    let _day = 1
    let _month = 1
    let _year = 2025


    /**
    * set Date
    * @param day is the Day will be set, eg: 15
    * @param month is the Month will be set, eg: 2
    * @param year is the Year will be set, eg: 2018
    */
    //% blockId="MiaTime_SET_DATETIME" block="set day %day|month %month|year %year"
    //% weight=60 blockGap
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
