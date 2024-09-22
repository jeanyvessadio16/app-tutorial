import { useHistory } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import { Link } from "lucide-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const alertMessage = (icon, titre, timer) => {
    Swal.fire({
      position: "top-end",
      icon: icon,
      title: titre,
      showConfirmButton: false,
      timer: timer,
      progressBar: true
    });
  }

  const handleLogin = (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page

    // Simuler une connexion avec un rôle
    const role = "admin";
    localStorage.setItem("userRole", role);

    alertMessage("success", "Connexion réussie avec succés", 2000);

    // Rediriger vers le Dashboard en fonction du rôle
    switch (role) {
      case "admin":
        history.push("/dashboard/admin/AdminDash");
        break;
      case "traqueur":
        history.push("/dashboard/traqueur/traqueurDash");
        break;
      case "tuteur":
        history.push("/dashboard/tuteur/tuteurDash");
        break;
      default:
        // Rediriger vers la page de connexion si le rôle est inconnu
        history.push("/login");
    }
  };

  return (
    <div className="login flex min-h-full flex-col justify-center">
      <div className="loginCard shadow border w-1/3 mx-auto py-10 px-8">
        <div className="">
          <h2 className="text-center mb-5 text-2xl font-bold leading-9 tracking-tight text-color">
            Connectez-vous
          </h2>
        </div>

        <div className="">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleLogin}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-color"
              >
                Votre adresse email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="monnom@gmail.com"
                  className="block px-3 w-full text-color rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-color"
              >
                Votre mot de passe
              </label>
              <div className="mt-2 mb-3">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="mot de passe"
                  className="block px-3 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                />

                <span className="mt-2">
                  <Link to="/forgotPassword">Mot de passe oublié ?</Link>
                </span>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md btnLogin py-2 px-4 text-sm font-semibold text-white shadow-sm focus:ring-2 focus:ring-inset "
              >
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
