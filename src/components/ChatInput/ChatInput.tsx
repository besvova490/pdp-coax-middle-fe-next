/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import {
  Editor,
  EditorState,
  convertFromRaw,
  RichUtils,
  Modifier,
  ContentState,
  convertFromHTML
} from "draft-js";
import { FiSend } from "react-icons/fi";
import { stateToHTML } from "draft-js-export-html";

//components
import EmojiPicker from "../EmojiPicker";

//types
import InterfaceChatInput from "src/types/components/ChatInput";

//styles
import ChatInputStyles, { ChatControls, ChatControlIcon, ChatSendButton } from "./ChatInputStyles";


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

function ChatInput(props: InterfaceChatInput) {
  const { onSendMessage, onBlur, onFocus, onChange, showSendIcon = true, value } = props;

  const [editorState, setEditorState] = useState(() => EditorState.createWithContent(emptyContentState));

  const editor = useRef(null);

  useEffect(() => {
    if (typeof value !== "string" || editorState.getCurrentContent().hasText()) return;

    const blocksFromHTML = convertFromHTML(value || "");

    setEditorState(EditorState.createWithContent(
      ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
      )
    ));
  }, [value]);

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
      ` ${emoji} `
    );

    const newEditorState = EditorState.push(editorState, newContent, "insert-characters");
    
    setEditorState(EditorState.forceSelection(newEditorState, newContent.getSelectionAfter()));
  };

  const handleSendMessage = () => {
    const content = stateToHTML(editorState.getCurrentContent());

    const editorStateClear = EditorState.push(editorState, ContentState.createFromText(""), "delete-character");

    onSendMessage && onSendMessage(`${content}`);
    setEditorState(editorStateClear);
  }

  const handleChange = (e: EditorState) => {
    setEditorState(e);

    const content = stateToHTML(e.getCurrentContent());
    onChange && onChange(content);
  }

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
        onChange={handleChange}
        placeholder="Type you massage"
        onFocus={() => onFocus && onFocus()}
        onBlur={() => onBlur && onBlur()}
      />
      {
        showSendIcon
          ? <ChatSendButton onClick={handleSendMessage}>
            <FiSend/>
          </ChatSendButton>
          : null
      }
    </ChatInputStyles>
  );
}

export default ChatInput;
