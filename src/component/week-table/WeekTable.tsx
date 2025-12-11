import './week-table.css';
import { WeekTableItem } from '../week-table-item/WeekTableItem.tsx';

export function WeekTable() {
  return (<div
    className="grid grid-cols-[repeat(4,_max-content)] gap-[1px] auto-rows-fr items-center justify-items-start min-h-[300px] min-w-[300px] pr-4 pl-1 py-2">
    <WeekTableItem
      typeAs={[{ id: '1', text: 'Schießstand' }, { id: '2', text: 'Homeoffice' }]}
      dayName="Montag"
      dayOfDate={1} />
    <WeekTableItem
      typeAs={[{ id: '3', text: 'Sport' }, { id: '4', text: 'Office' }, {
      id: '14',
      text: 'Zahnarzttermin vereinbaren',
    }]}
      dayName="Dienstag"
      dayOfDate={2} />
    <WeekTableItem
      typeAs={[{ id: '5', text: 'Fotos K3' }, { id: '6', text: 'Homeoffice' }]}
      dayName="Mittwoch"
      dayOfDate={3} />
    <WeekTableItem
      typeAs={[{ id: '7', text: 'Weihnachtsfeier' }, { id: '8', text: 'Office' }]}
      dayName="Donnerstag"
      dayOfDate={4} />
    <WeekTableItem
      typeAs={[{ id: '9', text: 'Hemden bügeln' }, { id: '10', text: 'Office' }]}
      dayName="Freitag"
      dayOfDate={5} />
    <WeekTableItem
      typeAs={[{ id: '11', text: 'Kreisversammlung' }]}
      dayName="Samstag"
      dayOfDate={6} />
    <WeekTableItem
      typeAs={[{ id: '13', text: 'Sport' }]}
      dayName="Sonntag"
      dayOfDate={7} />
  </div>);
}