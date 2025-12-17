import './week-table.css';
import { WeekTableItem } from '../week-table-item/WeekTableItem.tsx';

type WeekTableDayData = {
  date: number
  items: {
    id: string,
    text: string,
  }[]
}

type WeekTableData = {
  fromIsoDate: string;
  toIsoDate: string;
  monday: WeekTableDayData;
  tuesday: WeekTableDayData
  wednesday: WeekTableDayData
  thursday: WeekTableDayData
  friday: WeekTableDayData
  saturday: WeekTableDayData
  sunday: WeekTableDayData
}

const WeekData: WeekTableData = {
  fromIsoDate: '2025-12-15',
  toIsoDate: '2025-12-21',
  monday: {
    date: 15,
    items: [{
      id: '1',
      text: 'Sperrmüll',
    }, {
      id: '2',
      text: 'Post Bus',
    }, {
      id: '3',
      text: 'Post KTW',
    }, {
      id: '4',
      text: 'Uni Leipzig',
    }, {
      id: '5',
      text: 'Aufräumen',
    }, {
      id: '6',
      text: 'Redeem',
    }],
  },
  tuesday: {
    date: 16,
    items: [{
      id: '7',
      text: 'Sport',
    }, {
      id: '8',
      text: 'Haushalt',
    }],
  },
  wednesday: {
    date: 17,
    items: [{
      id: '9',
      text: 'Weihnachtsmarkt',
    }, {
      id: '10',
      text: 'Weihnachtsgeschenke',
    }, {
      id: '11',
      text: 'Arbeitshandschuhe',
    }, {
      id: '12',
      text: 'Zeitplanung',
    }],
  },
  thursday: {
    date: 18,
    items: [{
      id: '13',
      text: '09:15 Zahnarzt',
    }, {
      id: '14',
      text: 'Newsletter vorbereiten',
    }, {
      id: '15',
      text: 'Gaming Maus Keller',
    }],
  },
  friday: {
    date: 19,
    items: [{
      id: '16',
      text: '15:00 Arbeitseinsatz',
    }, {
      id: '19',
      text: 'Weihnachtsfeier',
    }],
  },
  saturday: {
    date: 20,
    items: [],
  },
  sunday: {
    date: 21,
    items: [],
  },
};

function maximumWeekDataElements(data: WeekTableData) {
  const lengths = [data.monday, data.tuesday, data.wednesday, data.thursday, data.friday, data.saturday, data.sunday].map(d => d.items.length);
  let maximum = 0;
  lengths.forEach(l => {
    if (l > maximum) {
      maximum = l;
    }
  });
  return maximum;
}

const colRepeat = maximumWeekDataElements(WeekData) + 2;

const gridStyle = {
  gridTemplateColumns: `repeat(${colRepeat},max-content 1px)`
}

export function WeekTable() {
  return (<div
    className={`grid items-center w-fit justify-items-start min-h-[300px] week-table week-table-grid min-w-[300px] m-2`} style={gridStyle}>
    <div className="separator col-span-full"></div>
    <WeekTableItem
      items={WeekData.monday.items}
      dayName="Montag"
      dayOfDate={WeekData.monday.date} />
    <div className="separator col-span-full"></div>
    <WeekTableItem
      items={WeekData.tuesday.items}
      dayName="Dienstag"
      dayOfDate={WeekData.tuesday.date} />
    <div className="separator col-span-full"></div>
    <WeekTableItem
      items={WeekData.wednesday.items}
      dayName="Mittwoch"
      dayOfDate={WeekData.wednesday.date} />
    <div className="separator col-span-full"></div>
    <WeekTableItem
      items={WeekData.thursday.items}
      dayName="Donnerstag"
      dayOfDate={WeekData.thursday.date} />
    <div className="separator col-span-full"></div>
    <WeekTableItem
      items={WeekData.friday.items}
      dayName="Freitag"
      dayOfDate={WeekData.friday.date} />
    <div className="separator col-span-full"></div>
    <WeekTableItem
      items={WeekData.saturday.items}
      dayName="Samstag"
      dayOfDate={WeekData.saturday.date} />
    <div className="separator col-span-full"></div>
    <WeekTableItem
      items={WeekData.sunday.items}
      dayName="Sonntag"
      dayOfDate={WeekData.sunday.date} />
    <div className="separator col-span-full"></div>
  </div>);
}