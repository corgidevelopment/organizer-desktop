import './calendar-icon.css'

export type CalendarIconProps = {
  dayNo: number;
  dayName: string;
};

function twoDigitDayNo(dayNo: number) {
  return `${dayNo}`.padStart(2, '0');
}

function abbrevDayName(dayName: string) {
  return `${dayName.substring(0, 2)}.`;
}

export function CalendarIcon({ dayName, dayNo }: CalendarIconProps) {
  return (
    <div className="cal-icon cal-icon-container">
      <div className="cal-icon cal-icon-dayno">{twoDigitDayNo(dayNo)}</div>
      <div className="cal-icon cal-icon-day-abbrev">{abbrevDayName(dayName)}</div>
    </div>
  );
}
