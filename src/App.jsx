import "./App.css";
import Login from "./Pages/main/auth/Login";
import ForgotPassword from "./Pages/main/auth/ForgotPassword";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "./Pages/main/Dashboard";
import NotFound from "./Pages/Notfound";
import PropTypes from "prop-types";

function App() {
  return (
    <Router>
      <Switch>
        {/* Route pour la page de connexion */}
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/forgotPassword" component={ForgotPassword} />

        {/* Route protégée pour le dashboard */}
        <PrivateRoute path="/dashboard" component={Dashboard} />

        {/* Gestion des routes non trouvées */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Vérifier si l'utilisateur est connecté
  const isLoggedIn = !!localStorage.getItem("userRole");

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

// Ajouter la validation des props
PrivateRoute.propTypes = {
  // Valider que "component" est un composant React
  component: PropTypes.elementType.isRequired,
};

export default App;
