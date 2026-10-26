import React from 'react';

const CardView = ({ employees, onSelectEmployee }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {employees.map((emp) => (
        <div key={emp.id} className="col">
          <div className="card h-100 border-0 shadow-sm custom-employee-card position-relative overflow-hidden bg-white">
            {/* Top accent bar */}
            <div
              className="card-accent-bar"
              style={{ height: '4px', backgroundColor: '#2563eb' }}
            ></div>

            <div className="card-body p-4 d-flex flex-column">
              {/* Field 1: ID Badge */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3 py-1.5 fw-bold fs-7">
                  <i className="bi bi-hash"></i> ID: {emp.id}
                </span>
                <span className="badge bg-light text-muted border rounded-pill px-2.5 py-1 fs-8">
                  API Record
                </span>
              </div>

              {/* Field 2: Name with Avatar */}
              <div className="d-flex align-items-center mb-3">
                <div
                  className="avatar-circle me-3 d-flex align-items-center justify-content-center text-white fw-bold shadow-sm flex-shrink-0"
                  style={{
                    backgroundColor: '#2563eb',
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    fontSize: '1.25rem'
                  }}
                >
                  {emp.name ? emp.name.charAt(0).toUpperCase() : '?'}
                </div>
                <div className="overflow-hidden">
                  <h5 className="card-title mb-0 fw-bold text-dark text-truncate" title={emp.name}>
                    {emp.name}
                  </h5>
                  <small className="text-secondary fw-medium text-truncate d-block">
                    {emp.designation || 'Employee'}
                  </small>
                </div>
              </div>

              {/* Field 3: Email */}
              <div className="p-3 bg-light rounded-3 mb-3 border border-light-subtle mt-auto">
                <div className="text-muted fs-8 text-uppercase fw-semibold mb-1">
                  <i className="bi bi-envelope me-1"></i> Email Address
                </div>
                <a
                  href={`mailto:${emp.email}`}
                  className="text-primary text-decoration-none fw-medium text-truncate d-block fs-7"
                  title={emp.email}
                >
                  {emp.email}
                </a>
              </div>

              {/* Card Footer Action */}
              <div className="pt-2 border-top">
                <button
                  className="btn btn-outline-primary btn-sm w-100 rounded-2"
                  onClick={() => onSelectEmployee(emp)}
                >
                  <i className="bi bi-info-circle me-1"></i> View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardView;
