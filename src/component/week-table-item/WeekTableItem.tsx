import './week-table-item.css'
import { CalendarIcon } from '../calendar-icon/CalendarIcon.tsx';

export type TypeA = {
  text: string
  id: string
}

export type WeekViewItemProps = {
  typeAs: TypeA[]
  dayName: string
  dayOfDate: number
}

export function WeekTableItem({typeAs, dayOfDate, dayName}: WeekViewItemProps) {
  return (<>
    <div className="col-start-1 col-end-2 week-table week-table-item week-table-item-icon">
      <CalendarIcon dayName={dayName} dayNo={dayOfDate} />
    </div>
    {typeAs.map(({id, text}) => <div
      className="col-span-1 text-left mr-2 min-h-12 h-auto flex flex-col justify-center week-table week-table-item week-table-item-element" key={id}>
      <span className="block">{text}</span>
    </div>)}
  </>)
}