import React from 'react';

const ListView = ({ employees, onSelectEmployee }) => {
  return (
    <div className="list-group shadow-sm rounded-3 border-0">
      {employees.map((emp) => (
        <div
          key={emp.id}
          className="list-group-item list-group-item-action p-3 mb-2 rounded-3 border bg-white d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 shadow-xs"
        >
          {/* Left section: ID + Avatar + Name + Email */}
          <div className="d-flex align-items-center gap-3">
            {/* Field 1: ID */}
            <div className="text-center" style={{ minWidth: '60px' }}>
              <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-1.5 fw-bold fs-7">
                #{emp.id}
              </span>
            </div>

            {/* Avatar */}
            <div
              className="avatar-circle d-flex align-items-center justify-content-center text-white fw-bold shadow-sm flex-shrink-0"
              style={{
                backgroundColor: '#2563eb',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                fontSize: '1rem'
              }}
            >
              {emp.name ? emp.name.charAt(0).toUpperCase() : '?'}
            </div>

            {/* Details: Field 2: Name & Field 3: Email */}
            <div>
              <h6 className="mb-0 fw-bold text-dark">{emp.name}</h6>
              <div className="text-muted fs-7 d-flex align-items-center gap-1 mt-0.5">
                <i className="bi bi-envelope text-primary"></i>
                <a href={`mailto:${emp.email}`} className="text-decoration-none text-muted">
                  {emp.email}
                </a>
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-outline-primary btn-sm px-3 rounded-2"
              onClick={() => onSelectEmployee(emp)}
            >
              <i className="bi bi-eye me-1"></i> View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListView;
