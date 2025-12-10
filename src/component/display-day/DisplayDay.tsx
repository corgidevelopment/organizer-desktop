import './display-day.css';
import { CalendarIcon } from '../calendar-icon/CalendarIcon.tsx';

export function DisplayDay() {
  return (
    <div className="display-day display-day-container">
      <CalendarIcon dayNo={8} dayName="Dienstag" />
      <div className="display-day display-day-date-name">Montag</div>
    </div>
  );
}
