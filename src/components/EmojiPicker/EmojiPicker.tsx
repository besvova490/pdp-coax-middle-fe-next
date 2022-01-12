/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import dynamic from "next/dynamic";
const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

//helpers
import useClickOutside from "src/hooks/useClickOutSide";

//styles
import EmojiPickerStyled from "./EmojiPickerStyled";


function EmojiPicker({ onSelect }: { onSelect?: (emoji: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  useClickOutside(ref, () => setIsOpen(false));

  
  return (
    <div ref={ref}>
      <BsEmojiLaughing onClick={() => setIsOpen(true)}/>
      {
        isOpen
          ? (
            <EmojiPickerStyled>
              <Picker
                native
                disableAutoFocus={true}
                onEmojiClick={(_, emojiObject) => onSelect && onSelect(emojiObject.emoji)}
              />
            </EmojiPickerStyled>
          )
          : null
      }
    </div>
  );
}

export default EmojiPicker;
