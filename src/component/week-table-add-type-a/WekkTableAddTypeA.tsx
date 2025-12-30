import './add-type-a.css';
import { TypeAEditor } from '../TypeAEditor.tsx';
import { KeyboardEvent, useCallback, useRef } from 'react';
import { Editor } from '@tiptap/react';

export type WeekTableAddTypeAProps = {
  start: number;
  end: number;
  onAdd: (text: string) => void;
}

export function WeekTableAddTypeA({ end, start, onAdd }: WeekTableAddTypeAProps) {

  const startClass = `col-start-${start}`;
  const endClass = `col-end-${end}`;
  const editorRef = useRef<Editor | null>(null);

  const handleContainerClick = useCallback(() => {
    if (editorRef !== undefined && editorRef.current !== null) {
      editorRef.current.commands.focus();
    }
  }, [editorRef]);

  const onEditorBlur = useCallback(() => {
    if (editorRef !== undefined && editorRef.current !== null) {
      const editor = editorRef.current;
      const text = editor.getText();
      if(text.trim() !== '') {
        onAdd(text);
        editor.commands.clearContent()
        editor.commands.focus();
      }
    }
  }, [editorRef, onAdd]);

  const handleContainerKeyUp = useCallback((evt: KeyboardEvent<HTMLDivElement>) => {
    if (editorRef !== undefined && editorRef.current !== null) {
      const editor = editorRef.current;
      if (evt.key === 'Escape' && editor.isFocused) {
        editor.commands.blur();
      }
    }
  }, [editorRef]);

  return <div className={`
      add-type-a 
      text-left 
      flex 
      flex-col 
      justify-center 
      min-h-12 
      px-2
      h-full 
      w-full ${startClass} ${endClass}`}
              onClick={handleContainerClick}
              onKeyUp={handleContainerKeyUp}>
    <TypeAEditor
      editorRef={editorRef}
      text=""
      onBlur={onEditorBlur}
    />
  </div>;
}