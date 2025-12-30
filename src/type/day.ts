import { WeekTableData } from './weekTableData.ts';

export type Day = keyof Omit<WeekTableData, 'toIsoDate' | 'fromIsoDate'>