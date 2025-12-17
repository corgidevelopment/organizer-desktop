import './add-type-a.css'

export type WeekTableAddTypeAProps = {
  start: number;
  end: number;
}

export function WeekTableAddTypeA({end, start} : WeekTableAddTypeAProps) {

  const startClass = `col-start-${start}`
  const endClass = `col-end-${end}`


  return <div className={`add-type-a ${startClass} ${endClass}`}></div>
}