import { useState, useRef } from "react";
import { Editor, EditorState, convertFromRaw, RichUtils, Modifier } from "draft-js";

//components
import EmojiPicker from "../EmojiPicker";

//styles
import ChatInputStyles, { ChatControls, ChatControlIcon } from "./ChatInputStyles";

const EDITOR_CONTROLS = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
  { label: "Monospace", style: "CODE" },
];

const emptyContentState = convertFromRaw({
  entityMap: {},
  blocks: [
    {
      text: "",
      key: "foo",
      type: "unstyled",
      entityRanges: [],
      depth: 1,
      inlineStyleRanges: [],
    },
  ],
});

function ChatInput() {
  const [editorState, setEditorState] = useState(() => EditorState.createWithContent(emptyContentState));

  const editor = useRef(null);

  const currentStyles = editorState.getCurrentInlineStyle();

  //methods
  const handleToggleStyles = (inlineStyle: string) => {
    const newState = RichUtils.toggleInlineStyle(editorState, inlineStyle);

    setEditorState(newState);
  }

  const handleEmojiPick = (emoji: string) => {
    const currentContent = editorState.getCurrentContent();
    const currentSelection = editorState.getSelection();

    const newContent = Modifier.replaceText(
      currentContent,
      currentSelection,
      emoji
    );

    const newEditorState = EditorState.push(editorState, newContent, "insert-characters");
    
    setEditorState(EditorState.forceSelection(newEditorState, newContent.getSelectionAfter()));
  };

  return (
    <ChatInputStyles>
      <ChatControls>
        {
          EDITOR_CONTROLS.map((item, index) => (
            <ChatControlIcon
              key={index}
              onClick={() => item.style && handleToggleStyles(item.style)}
              active={!!item.style && currentStyles.has(item.style)}
            >
              { item.label }
            </ChatControlIcon>
          ))
        }
        <ChatControlIcon>
          <EmojiPicker onSelect={handleEmojiPick}/>
        </ChatControlIcon>
      </ChatControls>
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Type you massage"
      />
    </ChatInputStyles>
  );
}

export default ChatInput;
