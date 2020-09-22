import { editorOptions } from "./editor-options";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";

interface IProps {
    initialContent?: string;
    getContent?: (value: string) => void;
}

export const UniversalEditor = React.memo((props: IProps) => {
    const [, setContent] = useState<string>(props.initialContent || "");

    return (
        <Editor
            value={props.initialContent || ""}
            init={{
                ...editorOptions,
                init_instance_callback: (editor: any) => {
                    editor.on("Change", (event: any) => {
                        // eslint-disable-next-line no-console
                        console.log(event);
                        setContent(event);
                    });
                },
            }}
            onSaveContent={() => {
                // eslint-disable-next-line no-console
                console.log("SaveContent");
            }}
            id={"test-tiny-mce"}
        />
    );
});
