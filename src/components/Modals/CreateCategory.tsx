import { useState } from "react";
import ReactDOM from "react-dom";

// components
import Modal from "../Modal/Modal";
import Input from "src/elements/Input";

// helpers
import categories from "src/helpers/api/categories";

// types
import ModalInterface from "src/types/components/Modal";


function CreateCategory({ onConfirm }: { onConfirm?: () => void }) {
  const [categoryName, setCategoryName] = useState("");

  const handleConfirm = () => {
    categories.postCategory({ name: categoryName })
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
        value={categoryName}
        onChange={e => setCategoryName(e.target.value)}
      />
    </Modal>
  );
}

export const openCreateModal = (props: ModalInterface) => {
  ReactDOM.render(<CreateCategory key={Date.now()} { ...props }/>, document.getElementById("modal"));
};

export default CreateCategory;
