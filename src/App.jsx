import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { EmployeeProvider } from './context/EmployeeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import EmployeeForm from './pages/EmployeeForm';
import './App.css';

// 404 Not Found Page Component
const NotFound = () => (
  <div className="container py-5 text-center my-5">
    <div className="py-5">
      <i className="bi bi-compass text-primary display-1"></i>
      <h2 className="fw-bold mt-3">404 - Page Not Found</h2>
      <p className="text-muted lead">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary px-4 py-2 rounded-3 shadow-sm mt-2">
        <i className="bi bi-house-door-fill me-2"></i> Return to Dashboard
      </Link>
    </div>
  </div>
);

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100 bg-body-tertiary">
          {/* Main Top Navigation */}
          <Navbar />

          {/* Main Content Area with Routes */}
          <main className="flex-grow-1">
            <Routes>
              {/* Home & Dashboard Routes (Both are same) */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/home" element={<Dashboard />} />

              {/* Employee Form Route */}
              <Route path="/employee-form" element={<EmployeeForm />} />

              {/* Catch-all 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </EmployeeProvider>
  );
}

export default App;
