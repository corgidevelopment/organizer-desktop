import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export type TypeAEditorProps = {
  text: string
}

export function TypeAEditor({ text }: TypeAEditorProps) {
  const editor = useEditor({
    content: text,
    extensions: [StarterKit]
  });

  return (
    <span className="block"><EditorContent editor={editor}/></span>
  );
}