/** @format */

import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

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
import StartupNavbar from "./Startups/StartupNavbar";
import StartupMessages from "./Startups/StartupMessages";
import StartupRequest from "./Startups/StartupRequest";
import StartupServices from "./Startups/StartupServices";
// mentors
import MentorLogin from "./Mentors/MentorLogin";
import MentorSignup from "./Mentors/MentorSignup";
import MentorCheck from "./Mentors/MentorCheck";
import MentorOnboard from "./Mentors/MentorOnboard";
import MentorRegistrationSuccess from "./Mentors/MentorRegistrationSuccess";
import MentorDashboard from "./Mentors/MentorDashboard";
import MentorProfile from "./Mentors/MentorProfile";
import MentorNavbar from "./Mentors/MentorNavbar";
import MentorMessages from "./Mentors/MentorMessages";
import MentorRequestPage from "./Mentors/MentorRequestPage";

import "./assets/style/common.css";
import { ProvideAuth } from "./utils/auth";

// logout component
import LogOut from "./components/LogOut";

// chat bot

import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className='App'>
      <Chatbot />
      <ProvideAuth>
        <Router>
          <Switch>
            <Route
              path='/'
              exact
              component={() => (
                <>
                  <Home />
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
                  <LogOut />
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
                  <LogOut />
                  <LogedNavbar />
                  <StartupNavbar />
                  <StartupDashboard />{" "}
                </>
              )}
            />
            <Route
              path='/startup/chat/:id'
              exact
              component={() => (
                <>
                  {" "}
                  <LogedNavbar /> <StartupNavbar /> <StartupMessages />{" "}
                </>
              )}
            />
            <Route
              path='/startup/request'
              exact
              component={() => (
                <>
                  {" "}
                  <LogOut />
                  <LogedNavbar /> <StartupNavbar /> <StartupRequest />{" "}
                </>
              )}
            />
            <Route
              path='/startup/services'
              exact
              component={() => (
                <>
                  <LogedNavbar /> <StartupNavbar /> <StartupServices />{" "}
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
                  <LogOut />
                  <LogedNavbar /> <MentorNavbar /> <MentorDashboard />{" "}
                </>
              )}
            />
            <Route
              path='/mentor/chat/:id'
              exact
              component={() => (
                <>
                  {" "}
                  <LogedNavbar /> <MentorNavbar /> <MentorMessages />{" "}
                </>
              )}
            />
            <Route
              path='/mentor/request'
              exact
              component={() => (
                <>
                  {" "}
                  <LogOut />
                  <LogedNavbar /> <MentorNavbar /> <MentorRequestPage />{" "}
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
