import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white-50 py-4 mt-auto border-top border-secondary">
      <div className="container">
        <div className="row align-items-center gy-3">
          <div className="col-md-6 text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-1">
              <i className="bi bi-people-fill text-primary"></i>
              <span className="text-white fw-bold">EmployeeHub Portal</span>
            </div>
            <p className="mb-0 fs-8">
              Built with React, React Router, Bootstrap 5, and JSONPlaceholder REST API.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3 fs-7">
              <Link to="/" className="text-white-50 text-decoration-none hover-white">
                Dashboard
              </Link>
              <span className="text-secondary">•</span>
              <Link to="/employee-form" className="text-white-50 text-decoration-none hover-white">
                Employee Form
              </Link>
              <span className="text-secondary">•</span>
              <a
                href="https://jsonplaceholder.typicode.com/users"
                target="_blank"
                rel="noreferrer"
                className="text-white-50 text-decoration-none hover-white"
              >
                API Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
