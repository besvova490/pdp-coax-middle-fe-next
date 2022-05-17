/* eslint-disable @next/next/no-html-link-for-pages */
import { ReactNode } from "react";
import Cookies from "universal-cookie";
import { MdOutlinePreview } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";

//container
import Header from "src/components/Header/Header";

//styles
import AuthLayoutStyled from "./AuthLayoutStyled";


function AuthLayout({ children, isPreview }: { children: ReactNode, isPreview?: boolean }) {
  const cookies = new Cookies();


  return (
    <AuthLayoutStyled>
      {
        isPreview || cookies.get("__next_preview_data")
          ? (
            <div className="rate-it__preview-alert">
              <MdOutlinePreview className="rate-it__preview-alert-icon"/>
              <p>You are in preview mode</p>
              <a className="rate-it__preview-alert-link" href="/api/exit-preview">
                <span>Close</span>
                <RiCloseLine className="rate-it__preview-alert-icon"/>
              </a>
            </div>
          )
          : null
      }
      <Header/>
      <main className="rate-it__page-content">
        { children }
      </main>
    </AuthLayoutStyled>
  );
}

export default AuthLayout;
