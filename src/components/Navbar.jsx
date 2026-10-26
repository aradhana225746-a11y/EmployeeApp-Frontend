import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useEmployees } from '../context/useEmployees';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { employees } = useEmployees();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm custom-navbar py-2">
      <div className="container">
        {/* Brand Logo & Name */}
        <Link className="navbar-brand d-flex align-items-center fw-bold" to="/" onClick={closeNavbar}>
          <div className="brand-icon-box me-2 d-flex align-items-center justify-content-center bg-primary text-white rounded-3 shadow-sm">
            <i className="bi bi-people-fill fs-5"></i>
          </div>
          <span>
            Employee<span className="text-primary">Hub</span>
          </span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Nav Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {/* Home / Dashboard Link */}
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link px-3 py-2 rounded-2 d-flex align-items-center gap-2 ${
                    isActive ? 'active bg-primary text-white fw-semibold' : 'text-light'
                  }`
                }
                onClick={closeNavbar}
              >
                <i className="bi bi-speedometer2"></i>
                <span>Home / Dashboard</span>
                {employees.length > 0 && (
                  <span className="badge bg-light text-dark rounded-pill ms-1 fs-7">
                    {employees.length}
                  </span>
                )}
              </NavLink>
            </li>

            {/* Employee Form Link */}
            <li className="nav-item">
              <NavLink
                to="/employee-form"
                className={({ isActive }) =>
                  `nav-link px-3 py-2 rounded-2 d-flex align-items-center gap-2 ${
                    isActive ? 'active bg-primary text-white fw-semibold' : 'text-light'
                  }`
                }
                onClick={closeNavbar}
              >
                <i className="bi bi-person-plus-fill"></i>
                <span>Employee Form</span>
              </NavLink>
            </li>
          </ul>

          {/* Quick Action Button */}
          <div className="ms-lg-3 mt-3 mt-lg-0">
            <Link
              to="/employee-form"
              className="btn btn-outline-light btn-sm d-flex align-items-center gap-2 rounded-pill px-3 shadow-sm"
              onClick={closeNavbar}
            >
              <i className="bi bi-plus-circle"></i>
              <span>Add Employee</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
