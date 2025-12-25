import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="Brand">
        <h3>BAHAR EGHTERAFI</h3>
      </div>
      <nav>
        <div className="nav-links">
          <NavLink to="/Visual-dvelopment" end className="nav-link">
            Visual dvelopment
          </NavLink>

          <NavLink to="/Character-design" className="nav-link">
            Character design
          </NavLink>
          <NavLink to="/Illustration" className="nav-link">
            Illustration
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </div>
      </nav>
    </>
  );
}
