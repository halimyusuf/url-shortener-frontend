export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li id="nav-brand">
          <a>Shorly</a>
        </li>
        <li>
          <a href="#" className="nav-btn">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="nav-btn">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="nav-btn">
            Resources
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="#" className="nav-btn active">
            Login
          </a>
        </li>
        <li>
          <a href="#" className="nav-btn">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}
