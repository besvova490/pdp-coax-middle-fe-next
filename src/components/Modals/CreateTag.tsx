import { useState } from "react";
import ReactDOM from "react-dom";

// components
import Modal from "../Modal/Modal";
import Input from "src/elements/Input";

// helpers
import tags from "src/helpers/api/tags";

// types
import ModalInterface from "src/types/components/Modal";


function CreateTag({ onConfirm }: { onConfirm?: () => void }) {
  const [tagName, setCategoryName] = useState("");

  const handleConfirm = () => {
    tags.postTag({ name: tagName })
      .then(() => onConfirm && onConfirm());
  }

  return (
    <Modal
      visible
      header="Create Category"
      onConfirm={handleConfirm}
    >
      <Input
        placeholder="Category Name"
        name="name"
        value={tagName}
        onChange={e => setCategoryName(e.target.value)}
      />
    </Modal>
  );
}

export const openCreateTagModal = (props: ModalInterface) => {
  ReactDOM.render(<CreateTag key={Date.now()} { ...props }/>, document.getElementById("modal"));
};

export default CreateTag;
