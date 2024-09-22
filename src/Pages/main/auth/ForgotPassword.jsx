import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const history = useHistory();

    const handleSumitMail = () => {
        console.log("Mail envoyé avec succés")
        history.push("/login")
    }

    return (
      <div className="forgotPassword">
        <div className="login flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Récupération du mot de passe
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSumitMail}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Votre email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                >
                  Récupérer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
 
export default ForgotPassword;