export interface DropDownListRowInterface {
  timeZone: number,
  scheduleMode: 0|1|2,
  week: 0|1|2|3,
  changeTimeZone: Function,
  changeScheduleMode: Function,
  changeWeek: Function,
  changeUserMode: Function,
}
