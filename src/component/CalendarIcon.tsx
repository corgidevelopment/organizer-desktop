export type CalendarIconProps = {
    dayNo: number;
    dayName: string;
}

function twoDigitDayNo(dayNo: number) {
    return `${dayNo}`.padStart(2, '0');
}

function abbrevDayName(dayName: string) {
    return `${dayName.substring(0, 2)}.`;
}

export function CalendarIcon({dayName, dayNo}: CalendarIconProps) {
    return (
        <div>
            <div>{twoDigitDayNo(dayNo)}</div>
            <div>{abbrevDayName(dayName)}</div>
        </div>)
}