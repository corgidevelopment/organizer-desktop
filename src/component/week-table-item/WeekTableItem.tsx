import './week-table-item.css';
import { CalendarIcon } from '../calendar-icon/CalendarIcon.tsx';
import { TypeAEditor } from '../TypeAEditor.tsx';
import { WeekTableAddTypeA } from '../week-table-add-type-a/WekkTableAddTypeA.tsx';

export type TypeA = {
  text: string
  id: string
}

export type WeekViewItemProps = {
  items: TypeA[]
  dayName: string
  dayOfDate: number
  maxElements: number
}

export function WeekTableItem({ items, dayOfDate, dayName, maxElements }: WeekViewItemProps) {

  const colStart = items.length
  const colEnd = maxElements + 2

  return (<>
    <div className="bg-white col-start-1 col-end-2 week-table week-table-item week-table-item-icon p-1">
      <CalendarIcon border={false} dayName={dayName} dayNo={dayOfDate} />
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
    <WeekTableAddTypeA end={colEnd} start={colStart}/>
  </>);
}