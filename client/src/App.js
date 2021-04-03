/** @format */

import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

// startus
import StartupLogin from "./Startups/StartupLogin";
import StartupSignup from "./Startups/StartupSignup";
import StartupOnboard from "./Startups/StartupOnboard";
import StartupRegistrationSuccess from "./Startups/StartupRegistrationSuccess";
import StartupDashboard from "./Startups/StartupDashboard";
import StartupCheck from "./Startups/StartupCheck";
import LogedNavbar from "./components/LogedNavbar";
import StartupError from "./Startups/StartupError";
import StartupProfile from "./Startups/StartupProfile";
// mentors
import MentorLogin from "./Mentors/MentorLogin";
import MentorSignup from "./Mentors/MentorSignup";
import MentorCheck from "./Mentors/MentorCheck";
import MentorOnboard from "./Mentors/MentorOnboard";
import MentorRegistrationSuccess from "./Mentors/MentorRegistrationSuccess";
import MentorDashboard from "./Mentors/MentorDashboard";
import MentorProfile from "./Mentors/MentorProfile";

import "./assets/style/common.css";
import { ProvideAuth } from "./utils/auth";

function App() {
  return (
    <div className='App'>
      <ProvideAuth>
        <Router>
          <Switch>
            <Route
              path='/'
              exact
              component={() => (
                <>
                  <Navbar /> <Home />
                </>
              )}
            />
            <Route
              path='/startup/login'
              exact
              component={() => (
                <>
                  <LogedNavbar /> <StartupLogin />{" "}
                </>
              )}
            />
            <Route
              path='/startup/signup'
              exact
              component={() => (
                <>
                  <LogedNavbar /> <StartupSignup />{" "}
                </>
              )}
            />
            <Route
              path='/startup/onboard'
              exact
              component={() => (
                <>
                  {" "}
                  <LogedNavbar />
                  <StartupOnboard />{" "}
                </>
              )}
            />
            <Route
              path='/startup/registrationSuccess'
              exact
              component={() => (
                <>
                  {" "}
                  <LogedNavbar /> <StartupRegistrationSuccess />{" "}
                </>
              )}
            />
            <Route
              path='/startup/dashboard'
              exact
              component={() => (
                <>
                  {" "}
                  <LogedNavbar />
                  <StartupDashboard />{" "}
                </>
              )}
            />
            <Route
              path='/startup/profile/:handle'
              exact
              component={() => (
                <>
                  {" "}
                  <LogedNavbar />
                  <StartupProfile />{" "}
                </>
              )}
            />
            <Route
              path='/startup/check'
              exact
              component={() => <StartupCheck />}
            />
            <Route
              path='/startup/error'
              exact
              component={() => <StartupError />}
            />

            <Route
              path='/mentor/login'
              exact
              component={() => (
                <>
                  {" "}
                  <LogedNavbar /> <MentorLogin />{" "}
                </>
              )}
            />
            <Route
              path='/mentor/signup'
              exact
              component={() => (
                <>
                  {" "}
                  <LogedNavbar /> <MentorSignup />
                </>
              )}
            />
            <Route
              path='/mentor/check'
              exact
              component={() => <MentorCheck />}
            />
            <Route
              path='/mentor/onboard'
              exact
              component={() => <MentorOnboard />}
            />
            <Route
              path='/mentor/dashboard'
              exact
              component={() => (
                <>
                  {" "}
                  <LogedNavbar /> <MentorDashboard />{" "}
                </>
              )}
            />

            <Route
              path='/mentor/registrationSuccess'
              exact
              component={() => <MentorRegistrationSuccess />}
            />
            <Route
              path='/mentor/profile/:handle'
              exact
              component={() => (
                <>
                  {" "}
                  <LogedNavbar />
                  <MentorProfile />{" "}
                </>
              )}
            />
          </Switch>
        </Router>
      </ProvideAuth>
    </div>
  );
}

export default App;
