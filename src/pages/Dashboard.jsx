import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEmployees } from '../context/useEmployees';
import TableView from '../components/TableView';
import CardView from '../components/CardView';
import ListView from '../components/ListView';
import EmployeeModal from '../components/EmployeeModal';

const Dashboard = () => {
  const { employees, loading, error, fetchEmployees } = useEmployees();

  // View toggle state: 'table' | 'card' | 'list'
  const [viewMode, setViewMode] = useState('table');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Filter employees based on search query (name, email, or id)
  const filteredEmployees = employees.filter((emp) => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;
    return (
      String(emp.id).includes(term) ||
      (emp.name && emp.name.toLowerCase().includes(term)) ||
      (emp.email && emp.email.toLowerCase().includes(term))
    );
  });

  return (
    <div className="container py-4">
      {/* Hero / Header Section */}
      <div className="dashboard-hero bg-primary text-white p-4 p-md-5 rounded-4 mb-4 shadow-sm position-relative overflow-hidden">
        <div className="row align-items-center position-relative z-1">
          <div className="col-lg-8">
            <div className="d-inline-flex align-items-center gap-2 bg-white bg-opacity-20 px-3 py-1 rounded-pill text-white fs-7 mb-3">
              <i className="bi bi-shield-check"></i>
              <span>Live API: https://jsonplaceholder.typicode.com/users</span>
            </div>
            <h1 className="fw-bold display-6 mb-2">Employee Directory Dashboard</h1>
            <p className="lead text-white-50 mb-4 mb-lg-0 fs-6">
              Listing of employee data fetched from external JSONPlaceholder API with id, name, and email.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end">
            <Link
              to="/employee-form"
              className="btn btn-light btn-lg text-primary fw-bold shadow px-4 py-2.5 rounded-3 d-inline-flex align-items-center gap-2"
            >
              <i className="bi bi-person-lines-fill"></i>
              <span>Go to Employee Form</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="row g-3 mb-4">
        {/* Total Employees */}
        <div className="col-sm-6 col-lg-3">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white h-100">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <span className="text-muted fs-7 text-uppercase fw-semibold">Total Employees</span>
                <h3 className="fw-bold mb-0 text-dark mt-1">{employees.length}</h3>
              </div>
              <div className="p-3 bg-primary-subtle text-primary rounded-3">
                <i className="bi bi-people fs-4"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Display Fields */}
        <div className="col-sm-6 col-lg-3">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white h-100">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <span className="text-muted fs-7 text-uppercase fw-semibold">Display Fields</span>
                <h5 className="fw-bold mb-0 text-dark mt-1">id, name, email</h5>
              </div>
              <div className="p-3 bg-success-subtle text-success rounded-3">
                <i className="bi bi-card-checklist fs-4"></i>
              </div>
            </div>
          </div>
        </div>

        {/* API Source */}
        <div className="col-sm-6 col-lg-3">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white h-100">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <span className="text-muted fs-7 text-uppercase fw-semibold">Data Source</span>
                <h6 className="fw-bold mb-0 text-dark mt-1 text-truncate" title="jsonplaceholder.typicode.com">
                  JSONPlaceholder
                </h6>
              </div>
              <div className="p-3 bg-info-subtle text-info rounded-3">
                <i className="bi bi-cloud-arrow-down fs-4"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Active Layout */}
        <div className="col-sm-6 col-lg-3">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white h-100">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <span className="text-muted fs-7 text-uppercase fw-semibold">Active Layout</span>
                <h5 className="fw-bold mb-0 text-capitalize text-dark mt-1">
                  {viewMode === 'table' ? 'Tabular View' : viewMode === 'card' ? 'Card View' : 'List View'}
                </h5>
              </div>
              <div className="p-3 bg-warning-subtle text-warning-emphasis rounded-3">
                <i
                  className={`bi ${
                    viewMode === 'table' ? 'bi-table' : viewMode === 'card' ? 'bi-grid-fill' : 'bi-list-ul'
                  } fs-4`}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar: Search & View Mode Switcher */}
      <div className="card border-0 shadow-sm rounded-3 p-3 mb-4 bg-white">
        <div className="row g-3 align-items-center justify-content-between">
          {/* Search Box */}
          <div className="col-md-6 col-lg-5">
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0 text-muted">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control bg-light border-start-0 ps-0 shadow-none"
                placeholder="Search by ID, name, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  className="btn btn-light border-start-0 text-muted"
                  type="button"
                  onClick={() => setSearchTerm('')}
                >
                  <i className="bi bi-x-circle"></i>
                </button>
              )}
            </div>
          </div>

          {/* View Mode Buttons (Tabular / Card / List) & Refresh */}
          <div className="col-md-6 col-lg-6 d-flex justify-content-md-end align-items-center gap-2">
            <span className="text-muted fs-7 d-none d-sm-inline fw-semibold">View Mode:</span>

            <div className="btn-group shadow-xs" role="group" aria-label="Layout View Modes">
              {/* Tabular View Button */}
              <button
                type="button"
                className={`btn btn-sm d-flex align-items-center gap-1.5 px-3 py-1.5 ${
                  viewMode === 'table' ? 'btn-primary' : 'btn-outline-secondary'
                }`}
                onClick={() => setViewMode('table')}
                title="Tabular View"
              >
                <i className="bi bi-table"></i>
                <span>Tabular</span>
              </button>

              {/* Card View Button */}
              <button
                type="button"
                className={`btn btn-sm d-flex align-items-center gap-1.5 px-3 py-1.5 ${
                  viewMode === 'card' ? 'btn-primary' : 'btn-outline-secondary'
                }`}
                onClick={() => setViewMode('card')}
                title="Card View"
              >
                <i className="bi bi-grid-fill"></i>
                <span>Cards</span>
              </button>

              {/* List View Button */}
              <button
                type="button"
                className={`btn btn-sm d-flex align-items-center gap-1.5 px-3 py-1.5 ${
                  viewMode === 'list' ? 'btn-primary' : 'btn-outline-secondary'
                }`}
                onClick={() => setViewMode('list')}
                title="List View"
              >
                <i className="bi bi-list-ul"></i>
                <span>List</span>
              </button>
            </div>

            {/* Refresh Button */}
            <button
              className="btn btn-outline-primary btn-sm rounded-2 d-flex align-items-center gap-1 px-3 py-1.5"
              onClick={fetchEmployees}
              disabled={loading}
              title="Refresh API Data"
            >
              <i className={`bi bi-arrow-clockwise ${loading ? 'spin-icon' : ''}`}></i>
              <span className="d-none d-sm-inline">Refresh</span>
            </button>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-5 bg-white rounded-3 shadow-sm border my-4">
          <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading employees...</span>
          </div>
          <h5 className="mt-3 fw-bold text-dark">Fetching Employee Directory...</h5>
          <p className="text-muted fs-7">Accessing live records from https://jsonplaceholder.typicode.com/users</p>
        </div>
      )}

      {/* Error Alert */}
      {!loading && error && (
        <div className="alert alert-danger d-flex align-items-center justify-content-between rounded-3 shadow-sm my-4" role="alert">
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-exclamation-triangle-fill fs-4"></i>
            <div>
              <strong>Failed to load data:</strong> {error}
            </div>
          </div>
          <button className="btn btn-danger btn-sm" onClick={fetchEmployees}>
            <i className="bi bi-arrow-clockwise me-1"></i> Retry
          </button>
        </div>
      )}

      {/* Data Views (Tabular / Card / List) */}
      {!loading && !error && (
        <>
          {filteredEmployees.length === 0 ? (
            <div className="text-center py-5 bg-white rounded-3 shadow-sm border my-4">
              <i className="bi bi-person-x text-muted display-4"></i>
              <h5 className="mt-3 fw-bold text-dark">No Employees Found</h5>
              <p className="text-muted">
                {searchTerm
                  ? `No records match "${searchTerm}". Try adjusting your search term.`
                  : 'The directory is currently empty.'}
              </p>
              {searchTerm && (
                <button className="btn btn-outline-secondary btn-sm" onClick={() => setSearchTerm('')}>
                  Clear Search
                </button>
              )}
            </div>
          ) : (
            <div>
              {/* Display Fields Summary Header */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted fs-7">
                  Showing <strong>{filteredEmployees.length}</strong> records from external API with fields <code>id</code>, <code>name</code>, and <code>email</code>.
                </span>
                <span className="badge bg-secondary-subtle text-secondary fs-8">
                  Layout: {viewMode.toUpperCase()}
                </span>
              </div>

              {/* Render Selected View */}
              {viewMode === 'table' && (
                <TableView
                  employees={filteredEmployees}
                  onSelectEmployee={setSelectedEmployee}
                />
              )}

              {viewMode === 'card' && (
                <CardView
                  employees={filteredEmployees}
                  onSelectEmployee={setSelectedEmployee}
                />
              )}

              {viewMode === 'list' && (
                <ListView
                  employees={filteredEmployees}
                  onSelectEmployee={setSelectedEmployee}
                />
              )}
            </div>
          )}
        </>
      )}

      {/* Employee Details Modal */}
      {selectedEmployee && (
        <EmployeeModal employee={selectedEmployee} onClose={() => setSelectedEmployee(null)} />
      )}
    </div>
  );
};

export default Dashboard;
