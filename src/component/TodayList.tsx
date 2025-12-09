import {EditorContent, useEditor} from "@tiptap/react";
import {DisplayDay} from "./DisplayDay.tsx";
import {BulletList, ListItem} from "@tiptap/extension-list";
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import Paragraph from '@tiptap/extension-paragraph'

const ListOnlyDocument = Document.extend({
    content: 'bulletList'
})

export function TodayList() {

    const list = useEditor({
        content: '',
        extensions: [
            ListOnlyDocument,
            BulletList,
            ListItem,
            Text,
            Paragraph,
        ]
    })

    return (
        <div>
            <DisplayDay/>
            <EditorContent editor={list}/>
        </div>
    )
}