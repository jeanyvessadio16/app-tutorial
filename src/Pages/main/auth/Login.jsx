import { useHistory } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
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
    <div className="login flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleLogin}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <span><a href="/forgotPassword">Mot de passe oublié</a></span>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
