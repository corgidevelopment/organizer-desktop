import { WeekTableDayData } from './weekTableDayData.ts';

export type WeekTableData = {
  fromIsoDate: string;
  toIsoDate: string;
  monday: WeekTableDayData;
  tuesday: WeekTableDayData
  wednesday: WeekTableDayData
  thursday: WeekTableDayData
  friday: WeekTableDayData
  saturday: WeekTableDayData
  sunday: WeekTableDayData
}