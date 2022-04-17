//types
import InterfaceTag from "src/types/components/Tag";

//styles
import TagStyled from "./TagStyled";


function Tag({ label, children }: InterfaceTag) {


  return (
    <TagStyled>
      { children || label }
    </TagStyled>
  );
}

export default Tag;
