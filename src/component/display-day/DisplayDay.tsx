import './display-day.css';
import { CalendarIcon, CalendarIconProps } from '../calendar-icon/CalendarIcon.tsx';

export type DisplayDayProps = CalendarIconProps & {
  dayName: string
}

export function DisplayDay({ dayNo, dayName }: DisplayDayProps) {
  return (
    <div className="display-day display-day-container">
      <CalendarIcon dayNo={dayNo} dayName={dayName} />
      <div className="display-day display-day-date-name">{dayName}</div>
    </div>
  );
}
