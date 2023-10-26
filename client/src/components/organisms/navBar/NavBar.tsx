import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="px-4 py-3 navbar navbar-light bg-light">
      <Link to="/">
        <img
          src="./src/assets/logo/appLogo.png"
          alt="Forever in heart logo"
          width="240"
        />
      </Link>

      <div className="navbar-items ">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Home</span>
        </Link>
        <Link to="/addMemory">
          <button type="button" className="btn btn-primary btn-md">
            Add a memory
          </button>
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
