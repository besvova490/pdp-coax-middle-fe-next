//types
import InterfaceAuthFormLayout from "src/types/layout/AuthFormLayout";

//assets
import AuthFormIcon from "src/Icons/AuthFormIcon";
import { AuthFormIconStyles, AuthFormLayoutMain } from "./AuthFormLayoutStyles";


function AuthFormLayout({ children, ...resp }: InterfaceAuthFormLayout) {

  return (
    <form { ...resp }>
      <AuthFormLayoutMain>
        { children }
      </AuthFormLayoutMain>
      <div>
        <AuthFormIconStyles>
          <AuthFormIcon/>
        </AuthFormIconStyles>
      </div>
    </form>
  );
}


export default AuthFormLayout;
