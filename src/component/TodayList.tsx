import { EditorContent, useEditor } from '@tiptap/react';
import { DisplayDay } from './display-day/DisplayDay.tsx';
import { BulletList, ListItem } from '@tiptap/extension-list';
import Document from '@tiptap/extension-document';
import Text from '@tiptap/extension-text';
import Paragraph from '@tiptap/extension-paragraph';
import HardBreak from '@tiptap/extension-hard-break';

const ListOnlyDocument = Document.extend({
  content: 'bulletList',
});

export function TodayList() {
  const list = useEditor({
    content: '',
    extensions: [ListOnlyDocument, BulletList.configure({
      keepMarks: true,
      keepAttributes: true,
    }), ListItem, Text,
      Paragraph.configure({
        HTMLAttributes: {
          class: 'list-paragraph',
        },
      }), HardBreak],
  });

  return (
    <div className="today-list today-list-container">
      <DisplayDay />
      <EditorContent editor={list} />
    </div>
  );
}
