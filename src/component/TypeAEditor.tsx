import { Editor, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { FocusEventHandler, RefObject, useEffect } from 'react';

export type TypeAEditorProps = {
  text: string
  editorRef?: RefObject<Editor | null> | undefined
  onBlur?: FocusEventHandler<HTMLDivElement>
}

export function TypeAEditor({ text, editorRef, onBlur }: TypeAEditorProps) {
  const editor = useEditor({
    content: text,
    extensions: [StarterKit],
  });

  useEffect(() => {
    if (editorRef !== null && editorRef !== undefined) {
      editorRef.current = editor;
    }
  }, [editor, editorRef]);

  return (
    <span className="block"><EditorContent onBlur={onBlur} editor={editor} /></span>
  );
}