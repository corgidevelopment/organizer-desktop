import './week-table-item.css';
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

export function WeekTableItem({ typeAs, dayOfDate, dayName }: WeekViewItemProps) {
  return (<>
    <div className="bg-white col-start-1 col-end-2 week-table week-table-item week-table-item-icon p-1">
      <CalendarIcon border={false} dayName={dayName} dayNo={dayOfDate} />
    </div>
    <div className="separator vertical"></div>
    {typeAs.map(({ id, text }) => <>
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
        <span className="block">{text}</span>
      </div>
      <div className="separator vertical"></div>
    </>)}
  </>);
}