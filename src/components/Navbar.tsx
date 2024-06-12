import { Link } from "react-router-dom";

export default function NavBar() {
    return (
    <header className="navbar navbar-expand-lg bg-light shadow-sm border-light rounded-3 fixed-top">
  <div className="container px-3">
    <Link to="/" className="navbar-brand pe-3">
     Discord.uno
    </Link>
    <div id="navbarNav" className="offcanvas offcanvas-end">
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/allbots" className="nav-link">All Bots</Link>
            </li>
        </ul>
    </div>
  </div>
  </div>
  </header>
  )
}