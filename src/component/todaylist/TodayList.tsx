import './todaylist.css';
import { EditorContent, useEditor } from '@tiptap/react';
import { BulletList, ListItem } from '@tiptap/extension-list';
import Document from '@tiptap/extension-document';
import Text from '@tiptap/extension-text';
import Paragraph from '@tiptap/extension-paragraph';
import HardBreak from '@tiptap/extension-hard-break';
import { TodayListHeader } from '../todaylist-header/TodayListHeader.tsx';
import { KeyboardEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { dayToDayName } from '../../util/dayToDayName.ts';

const ListOnlyDocument = Document.extend({
  content: 'bulletList',
});

//WindowSize: width: 412, height: 576,

export function TodayList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, _] = useState(1);
  const [date, setDate] = useState(() => new Date());
  useEffect(() => {
    const cancel = setInterval(() => {
      setDate(new Date());
    }, 5000);
    return () => {
      clearInterval(cancel);
    };
  }, []);

  const dayNo = useMemo(() => {
    return date.getDate();
  }, [date]);

  const day = useMemo(() => {
    return dayToDayName(date.getDay());
  }, [date]);

  const list = useEditor({
    content: '',
    extensions: [
      ListOnlyDocument,
      BulletList.configure({
        keepMarks: true,
        keepAttributes: true,
      }), ListItem, Text,
      Paragraph.configure({
        HTMLAttributes: {
          class: 'list-paragraph',
        },
      }),
      HardBreak],
  });

  const handleNextPage = useCallback((nextPage: number) => {
    if (nextPage <= totalPages) {
      setCurrentPage(nextPage);
    }
  }, [totalPages, setCurrentPage]);

  const handlePreviousPage = useCallback((previousPage: number) => {
    if (previousPage > 0) {
      setCurrentPage(previousPage);
    }
  }, [setCurrentPage]);

  const handleContainerClick = useCallback(() => {
    if (list && !list.isFocused) {
      list.commands.focus();
    }
  }, [list]);

  const handleContainerKeyUp = useCallback((evt: KeyboardEvent<HTMLDivElement>) => {
    if (evt.key === 'Escape' && list.isFocused) {
      list.commands.blur();
    }
  }, [list]);

  return (
    <div className="today-list today-list-container">
      <TodayListHeader
        className="m-today-list-header"
        currentPage={currentPage}
        totalPages={totalPages}
        dayName={day}
        dayNo={dayNo}
        onPreviousPageClick={handlePreviousPage}
        onNextPageClick={handleNextPage} />
      <div className="today-list today-list-editor-container"
           onClick={handleContainerClick}
           onKeyUp={handleContainerKeyUp}>
        <EditorContent className="list-editor" editor={list} />
      </div>
    </div>
  );
}
