import './pagenav.css';

export type PageNavProps = {
  currentPage: number
  totalPages: number
  onNextPageClick: (nextPage: number) => void;
  onPreviousPageClick: (previousPage: number) => void;
  className?: string
}

export function PageNav({ currentPage, totalPages, className, onNextPageClick, onPreviousPageClick }: PageNavProps) {
  return <div className={`${className} page-nav page-nav-container`}>
    <div className="page-nav page-nav-action page-nav-prev"
         onClick={() => onPreviousPageClick(currentPage - 1)}>&lt;</div>
    <div>
      <span>
      <span>{currentPage}</span>/<span>{totalPages}</span>
    </span>
    </div>
    <div className="page-nav page-nav-action page-nav-next" onClick={() => onNextPageClick(currentPage + 1)}>&gt;</div>
  </div>;
}