import { ReactNode } from "react";

//assets
import AuthFormIcon from "src/Icons/AuthFormIcon";
import AuthFormLayoutStyles, { AuthFormIconStyles, AuthFormLayoutMain } from "./AuthFormLayoutStyles";


function AuthFormLayout({ children, ...resp }: { children: ReactNode }) {

  return (
    <AuthFormLayoutStyles { ...resp }>
      <AuthFormLayoutMain>
        { children }
      </AuthFormLayoutMain>
      <div>
        <AuthFormIconStyles>
          <AuthFormIcon/>
        </AuthFormIconStyles>
      </div>
    </AuthFormLayoutStyles>
  );
}


export default AuthFormLayout;
