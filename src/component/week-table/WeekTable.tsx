import './week-table.css';
import { WeekTableItem } from '../week-table-item/WeekTableItem.tsx';

export function WeekTable() {
  return (<div
    className="
      grid
      items-center
      w-fit
      justify-items-start
      min-h-[300px]
      week-table week-table-grid
      min-w-[300px]
      m-2
      "
  >
    <div className="separator col-span-full"></div>
    <WeekTableItem
      typeAs={[{ id: '1', text: 'Schießstand' }, { id: '2', text: 'Homeoffice' }]}
      dayName="Montag"
      dayOfDate={1} />
    <div className="separator col-span-full"></div>
    <WeekTableItem
      typeAs={[{ id: '3', text: 'Sport' }, { id: '4', text: 'Office' }, {
        id: '14',
        text: 'Zahnarzttermin vereinbaren',
      }]}
      dayName="Dienstag"
      dayOfDate={2} />
    <div className="separator col-span-full"></div>
    <WeekTableItem
      typeAs={[{ id: '5', text: 'Fotos K3' }, { id: '6', text: 'Homeoffice' }]}
      dayName="Mittwoch"
      dayOfDate={3} />
    <div className="separator col-span-full"></div>
    <WeekTableItem
      typeAs={[{ id: '7', text: 'Weihnachtsfeier' }, { id: '8', text: 'Office' }]}
      dayName="Donnerstag"
      dayOfDate={4} />
    <div className="separator col-span-full"></div>
    <WeekTableItem
      typeAs={[{ id: '9', text: 'Hemden bügeln' }, { id: '10', text: 'Office' }]}
      dayName="Freitag"
      dayOfDate={5} />
    <div className="separator col-span-full"></div>
    <WeekTableItem
      typeAs={[{ id: '11', text: 'Kreisversammlung' }]}
      dayName="Samstag"
      dayOfDate={6} />
    <div className="separator col-span-full"></div>
    <WeekTableItem
      typeAs={[{ id: '13', text: 'Sport' }]}
      dayName="Sonntag"
      dayOfDate={7} />
    <div className="separator col-span-full"></div>
  </div>);
}