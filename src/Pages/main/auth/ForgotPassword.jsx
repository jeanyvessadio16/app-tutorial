import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const history = useHistory();

    const handleSumitMail = () => {
        console.log("Mail envoyé avec succés")
        history.push("/login")
    }

    return (
      <div className="forgotPassword flex min-h-full flex-col justify-center">
        <div className="forgotCard shadow border w-1/3 mx-auto py-10 px-8">
          <div className="">
            <h2 className="text-center text-color mb-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Récupérer votre mot de passe
            </h2>
          </div>

          <div className="">
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
                  Votre adresse email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block px-3 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex mt-8 w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                >
                  Récupérer
                </button>
              </div>
            </form>

            <p className="text-center mt-10">
              Vous avez déja un compte ?{" "}
              <span className="font-medium text-color">
                <Link to="/login">Connectez-vous !</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
}
 
export default ForgotPassword;