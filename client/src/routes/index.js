/** @format */

import StartupLogin from "../Startups/StartupLogin";

const Routes = [
  {
    path: "/startup/login",
    name: "login",
    exact: true,
    pageTitle: "Login",
    component: StartupLogin,
  },
];

export default Routes;
