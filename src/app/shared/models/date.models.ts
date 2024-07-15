import { DayType, MonthType, WeekDayType, YearType } from "./date.enums";

export interface DateOptions {
  weekday?: WeekDayType;
  year?: YearType;
  month?: MonthType;
  day?: DayType;
  timeZone?: string;
}
