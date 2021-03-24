/** @format */

import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import StartupLogin from "./Startups/StartupLogin";
import StartupSignup from "./Startups/StartupSignup";
import StartupOnboard from "./Startups/StartupOnboard";
import StartupRegistrationSuccess from "./Startups/StartupRegistrationSuccess";
import StartupDashboard from "./Startups/StartupDashboard";
import StartupCheck from "./Startups/StartupCheck";

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
              component={() => <StartupLogin />}
            />
            <Route
              path='/startup/signup'
              exact
              component={() => <StartupSignup />}
            />
            <Route
              path='/startup/onboard'
              exact
              component={() => <StartupOnboard />}
            />
            <Route
              path='/startup/registrationSuccess'
              exact
              component={() => <StartupRegistrationSuccess />}
            />
            <Route
              path='/startup/dashboard'
              exact
              component={() => <StartupDashboard />}
            />
            <Route
              path='/startup/check'
              exact
              component={() => <StartupCheck />}
            />
          </Switch>
        </Router>
      </ProvideAuth>
    </div>
  );
}

export default App;
