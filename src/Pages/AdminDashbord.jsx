import {
  LayoutDashboard,
  Users,
  User,
  Book,
  CalendarDays,
  CircleUser,
  UserRoundPlus,
  GraduationCap,
} from "lucide-react";

function Menu({ icone, nom }) {
  return (
    <div className="pl-3 my-5">
      <button className="flex items-center gap-3">
        <i>{icone}</i>
        <span>{nom}</span>
      </button>
    </div>
  );
}

function ProfilDisplay({ profil, username }) {
  return (
    <header className="flex justify-end items-center gap-3 p-3 mb-6 bg-white">
      <button className="flex items-center gap-3 px-4 py-2 rounded shadow">
        <i>{profil}</i>
        <span className="font-bold text-black">{username}</span>
      </button>
    </header>
  );
}

function CreateCards({ icone, nom }) {
  return (
    <div
      className="card md:max-w-52 flex items-center gap-3 p-5 bg-white rounded shadow-md 
      hover:cursor-pointer"
    >
      <i> {icone} </i>
      <h2 className="text-lg font-bold"> {nom} </h2>
    </div>
  );
}

const Admindashbord = () => {
  return (
    <section className="dashbord">
      <div className="dashbord-container flex">
        <div className="menuNavbar">
          {/* logo */}
          <div className="logo flex items-center gap-3 pl-3 my-8">
            <GraduationCap size={40} />
            <h4 className="font-bold">Suivi tutorat</h4>
          </div>
          {/* menu */}
          <div className="menu w-52">
            <Menu icone={<LayoutDashboard />} nom={"Dashbord"} />
            <Menu icone={<Users />} nom={"Utilisateur"} />
            <Menu icone={<User />} nom={"Tuteur"} />
            <Menu icone={<Users />} nom={"Groupe"} />
            <Menu icone={<CalendarDays />} nom={"Séances"} />
            <Menu icone={<Book />} nom={"Modules"} />
          </div>
        </div>
        {/* section pour fonctionnalités */}
        <section className="dashbordData w-full px-3 bg-zinc-50">
          <ProfilDisplay profil={<CircleUser />} username={"Profil"} />
          <div>
            <div className="md:grid md:grid-cols-4 gap-10">
              <CreateCards icone={<UserRoundPlus />} nom={"Ajouter user"} />
              <CreateCards icone={<UserRoundPlus />} nom={"Ajouter user"} />
              <CreateCards icone={<UserRoundPlus />} nom={"Ajouter user"} />
              <CreateCards icone={<UserRoundPlus />} nom={"Ajouter user"} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Admindashbord;
