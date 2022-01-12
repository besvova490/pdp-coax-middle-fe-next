import { ReactNode } from "react";

//container
import Header from "src/components/Header/Header";

//styles
import AuthLayoutStyled from "./AuthLayoutStyled";


function AuthLayout({ children }: { children: ReactNode }) {


  return (
    <AuthLayoutStyled>
      <Header/>
      <main>
        { children }
      </main>
    </AuthLayoutStyled>
  );
}

export default AuthLayout;
