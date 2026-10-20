import React, { createContext, useContext } from "react";
import { linkHandler, routeHref, type Route } from "../lib/route";

export const NavigateContext = createContext<(route: Route) => void>(() => {});

export const useNavigate = () => useContext(NavigateContext);

type Props = { to: Route } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

/** An ordinary link (so it can be opened in a new tab) that navigates in-app on a plain click. */
export const Link: React.FC<Props> = ({ to, children, ...rest }) => {
  const navigate = useNavigate();
  return (
    <a href={routeHref(to)} onClick={linkHandler(navigate, to)} {...rest}>
      {children}
    </a>
  );
};
