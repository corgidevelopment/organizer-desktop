import './calendar-icon.css';

export type CalendarIconProps = {
  dayNo: number;
  dayName: string;
  border?: boolean;
};

function twoDigitDayNo(dayNo: number) {
  return `${dayNo}`.padStart(2, '0');
}

function abbrevDayName(dayName: string) {
  return `${dayName.substring(0, 2)}.`;
}

export function CalendarIcon({ dayName, dayNo, border = true }: CalendarIconProps) {
  return (
    <div className={`cal-icon cal-icon-container ${border ? 'bordered' : ''}`}>
      <div className="cal-icon cal-icon-dayno">{twoDigitDayNo(dayNo)}</div>
      <div className="cal-icon cal-icon-day-abbrev">{abbrevDayName(dayName)}</div>
    </div>
  );
}
