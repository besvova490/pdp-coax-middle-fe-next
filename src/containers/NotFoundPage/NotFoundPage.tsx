// components
import { NotFoundPageStylesProvider } from "./NotFoundPage.styles";

// assets
import NotFoundIcon from "src/Icons/NotFoundIcon";


function NotFoundPage() {


  return (
    <NotFoundPageStylesProvider>
      <span className="not-found__icon">
        <NotFoundIcon/>

        <div className="not-found__text">
          <h1 className="not-found__title">404</h1>
          <h2 className="not-found__label">Oops! Page not found</h2>
        </div>
      </span>
      <div className="not-found__description">It looks like we couldn't find the page you were looking for..</div>
    </NotFoundPageStylesProvider>
  );
}


export default NotFoundPage;
