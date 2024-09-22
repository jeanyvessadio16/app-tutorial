import { Link} from "react-router-dom";
import { menuService } from "../core/services/menuService";

const Sidebar = () => {
  // Récupère le rôle depuis le localStorage
  const role = localStorage.getItem("userRole");

  // Si pas de rôle défini, pas de sidebar
  if (!role || !menuService[role]) return null;

  return (
    <div className="sidebar">
      <div className="nomApp">
        <p className="text-center font-bold">App-Tutorat</p>
      </div>
      <nav className="my-10">
        <ul>
          {menuService[role].map((menu, index) => (
            <li
              key={index}
              className={`border px-3 py-2 my-2 ${
                location.pathname === menu.path
                  ? "activeLink text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              <Link to={menu.path}>
                {" "}
                <i className={menu.icon}></i> {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footerSide mb-5">
        <img
          src="/src/assets/images/footSide-UNCHK.png"
          alt="logo unchk"
          className="my-5"
        />
        <p className="text-center font-medium m-0">
          <Link to="/login">
            <i className="bi bi-box-arrow-right mr-2 "></i>Se deconnecter
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
 
export default Sidebar;