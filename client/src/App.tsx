import React from 'react';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import TrainingPage from './components/TrainingPage/TrainingPage';
import DeckManagement from './components/DeckManagement/DeckDashboard';
import HomePage from './components/HomePage/HomePage';
import Translate from './components/TranslatePage/TranslatePage'
import FriendsPage from './components/FriendsPage/FriendsPage';
import NotFound from './components/NotFound/NotFound';
import UpdateProfilePage from './components/UpdateProfilePage/UpdateProfilePage';
import NewDeck from './components/NewDeck/NewDeck';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UpdateDeck from './components/DeckManagement/UpdateDeck';
import Success from './components/Success/Success';
import StartTraining from './components/StartTraining/StartTraining';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/starttraining" component={StartTraining} />
          <PrivateRoute exact path="/training" component={TrainingPage} />
          <PrivateRoute exact path="/friends" component={FriendsPage} />
          <PrivateRoute
            exact
            path="/deckmanagement"
            component={DeckManagement}
          />
          <PrivateRoute
            exact
            path="/update-profile"
            component={UpdateProfilePage}
          />
          <PrivateRoute exact path="/update-deck" component={UpdateDeck} />
          <PrivateRoute exact path="/newdeck" component={NewDeck} />
          <PrivateRoute path="/success" component={Success} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/translate" component={Translate} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
