import { CalendarIcon } from './CalendarIcon.tsx';

export function DisplayDay() {
  return (
    <div>
      <CalendarIcon dayNo={8} dayName="Dienstag" />
      <div>Montag</div>
    </div>
  );
}
