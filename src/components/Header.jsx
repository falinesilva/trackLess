import NewRecord from "./NewRecord";
import logo from "./../assets/logo.png";

function Header({ showForm, setShowForm }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <img src={logo} alt="Liberty Logo" className="h-12 w-auto" />{" "}
        {/* Set height and maintain aspect ratio */}
        <NewRecord showForm={showForm} setShowForm={setShowForm} />{" "}
      </div>
    </>
  );
}

export default Header;
