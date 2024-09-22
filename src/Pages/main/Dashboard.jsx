import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import AdminDash from "../admin/Admindash";
import Users_Admin from "../admin/Users_Admin";
import Groupes from "../admin/Groupes_Admin";
import Modules_Admin from "../admin/Modules_Admin";
import Seances_Admin from "../admin/Seances_Admin";
import Rapport_Admin from "../admin/Rapport_Admin";
import TraqueurDash from "../traqueur/TraqueurDash";
import RapportsTraqueur from "../traqueur/RapportsTraqueur";
import SeancesTraqueur from "../traqueur/SeancesTraqueur";
import TuteursTraqueur from "../traqueur/TuteursTraqueur";
import GroupesTraqueur from "../traqueur/GroupesTraqueur";
import ModulesTraqueur from "../traqueur/ModulesTraqueur";
import TuteurDash from "../tuteur/TuteurDash";
import ProfilTuteur from "../tuteur/ProfilTuteur";
import GroupesTuteur from "../tuteur/GroupesTuteur";
import SeancesTuteur from "../tuteur/SeancesTuteur";
import ModulesTuteur from "../tuteur/ModulesTuteur";




const Dashboard = () => {
  const userRole = localStorage.getItem("userRole");

  return (
    <div className="wapper flex">
      <Sidebar className="" />
      <div className="main-content border">
        <Navbar />
        <div className="principal-content px-3 py-2">
          <Switch>
            {/* Redirection pour la route principale du dashboard */}
            <Route exact path="/dashboard/admin">
              <Redirect to={`/dashboard/${userRole}/AdminDash`} />
            </Route>
            <Route path="/dashboard/admin/AdminDash" component={AdminDash} />
            <Route path="/dashboard/admin/groupes" component={Groupes} />
            <Route path="/dashboard/admin/modules" component={Modules_Admin} />
            <Route path="/dashboard/admin/seances" component={Seances_Admin} />
            <Route path="/dashboard/admin/utilisateurs" component={Users_Admin} />
            <Route path="/dashboard/admin/rapports" component={Rapport_Admin} />

            {/* Redirection pour la route traqueur */}
            <Route exact path="/dashboard/traqueur">
                <Redirect to={`/dashboard/${userRole}/traqueurDash`} />
            </Route>
            <Route path="/dashboard/traqueur/traqueurDash" component={TraqueurDash} />
            <Route path="/dashboard/traqueur/groupes" component={GroupesTraqueur} />
            <Route path="/dashboard/traqueur/modules" component={ModulesTraqueur} />
            <Route path="/dashboard/traqueur/seances" component={SeancesTraqueur} />
            <Route path="/dashboard/traqueur/tuteurs" component={TuteursTraqueur} />
            <Route path="/dashboard/traqueur/rapports" component={RapportsTraqueur} />

            {/* Redirection pour la route tuteur */}
            <Route exact path="/dashboard/tuteur">
                <Redirect to={`/dashboard/${userRole}/tuteurDash`} />
            </Route>
            <Route path="/dashboard/tuteur/tuteurDash" component={TuteurDash} />
            <Route path="/dashboard/tuteur/modules" component={ModulesTuteur} />
            <Route path="/dashboard/tuteur/seances" component={SeancesTuteur} />
            <Route path="/dashboard/tuteur/profil" component={ProfilTuteur} />
            <Route path="/dashboard/tuteur/groupes" component={GroupesTuteur} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

// hhdf
export default Dashboard;
