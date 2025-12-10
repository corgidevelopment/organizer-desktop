import { DisplayDay, DisplayDayProps } from '../display-day/DisplayDay.tsx';
import { PageNav, PageNavProps } from '../pagenav/PageNav.tsx';
import './todaylist-header.css';

export type TodayListHeaderProps = PageNavProps & DisplayDayProps;

export function TodayListHeader({
                                  onNextPageClick,
                                  onPreviousPageClick,
                                  totalPages,
                                  currentPage,
                                  className, dayName, dayNo,
                                }: TodayListHeaderProps) {
  return (
    <div className={`${className ?? ''} today-list today-list-header`}>
      <DisplayDay dayNo={dayNo} dayName={dayName} />
      <PageNav className="today-list today-list-page-nav" currentPage={currentPage} totalPages={totalPages}
               onPreviousPageClick={onPreviousPageClick} onNextPageClick={onNextPageClick} />
    </div>
  );
}