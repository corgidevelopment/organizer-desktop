import './week-table-item.css';
import { CalendarIcon } from '../calendar-icon/CalendarIcon.tsx';
import { TypeAEditor } from '../TypeAEditor.tsx';
import { WeekTableAddTypeA } from '../week-table-add-type-a/WekkTableAddTypeA.tsx';
import { useCallback } from 'react';
import { Day } from '../../type/day.ts';

export type TypeA = {
  text: string
  id: string
}

export type WeekViewItemProps = {
  items: TypeA[]
  day: Day
  dayOfDate: number
  maxElements: number
  onAddItem: (itemText: string, day: Day) => void
}

function dayToDayName(day: Day): string {
  switch (day) {
    case 'sunday':
      return 'Sonntag';
    case 'monday':
      return 'Montag';
    case 'tuesday':
      return 'Dienstag';
    case 'wednesday':
      return 'Mittwoch';
    case 'thursday':
      return 'Donnerstag';
    case 'friday':
      return 'Freitag';
    case 'saturday':
      return 'Samstag';
  }
}

export function WeekTableItem({ items, dayOfDate, day, maxElements, onAddItem }: WeekViewItemProps) {

  const colStart = items.length;
  const colEnd = maxElements + 2;

  const onAdd = useCallback((text: string) => {
    onAddItem(text, day);
  }, [onAddItem]);

  return (<>
    <div className="bg-white col-start-1 col-end-2 week-table week-table-item week-table-item-icon p-1">
      <CalendarIcon border={false} dayName={dayToDayName(day)} dayNo={dayOfDate} />
    </div>
    <div className="separator vertical"></div>
    {items.map(({ id, text }) => <>
      <div
        className="
        col-span-1
        text-left
        min-h-12
        bg-white
        h-full
        w-full
        flex
        flex-col
        justify-center
        week-table
        week-table-item
        week-table-item-element
        px-2
        "
        key={id}>
        <TypeAEditor text={text} />
      </div>
      <div className="separator vertical"></div>
    </>)}
    <WeekTableAddTypeA end={colEnd} start={colStart} onAdd={onAdd} />
  </>);
}