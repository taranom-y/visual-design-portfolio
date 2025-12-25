import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="Brand">
        <h3>BAHAR EGHTERAFI</h3>
      </div>
      <nav>
        <div className="nav-links">
          <NavLink to="/" end className="nav-link">
            Visual development
          </NavLink>

          <NavLink to="/Character-design" className="nav-link">
            Character design
          </NavLink>
          <NavLink to="/Illustration" className="nav-link">
            Illustration
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About me
          </NavLink>
        </div>
      </nav>
    </>
  );
}
