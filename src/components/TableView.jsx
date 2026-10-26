import React from 'react';

const TableView = ({ employees, onSelectEmployee }) => {
  return (
    <div className="table-responsive bg-white rounded-3 shadow-sm border">
      <table className="table table-hover align-middle mb-0">
        <thead className="table-light border-bottom">
          <tr>
            <th scope="col" className="ps-4 text-secondary text-uppercase fs-7 fw-bold" style={{ width: '100px' }}>
              <i className="bi bi-hash me-1"></i> ID
            </th>
            <th scope="col" className="text-secondary text-uppercase fs-7 fw-bold">
              <i className="bi bi-person me-1"></i> Name
            </th>
            <th scope="col" className="text-secondary text-uppercase fs-7 fw-bold">
              <i className="bi bi-envelope me-1"></i> Email
            </th>
            <th scope="col" className="text-end pe-4 text-secondary text-uppercase fs-7 fw-bold" style={{ width: '120px' }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} className="transition-row">
              {/* Field 1: ID */}
              <td className="ps-4">
                <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-1.5 fw-bold fs-7">
                  #{emp.id}
                </span>
              </td>

              {/* Field 2: Name */}
              <td>
                <div className="d-flex align-items-center">
                  <div
                    className="avatar-circle me-3 d-flex align-items-center justify-content-center text-white fw-bold shadow-sm"
                    style={{
                      backgroundColor: '#2563eb',
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      fontSize: '0.875rem'
                    }}
                  >
                    {emp.name ? emp.name.charAt(0).toUpperCase() : '?'}
                  </div>
                  <div>
                    <span className="fw-bold text-dark fs-6">{emp.name}</span>
                    {emp.designation && (
                      <small className="text-muted d-block fs-8">{emp.designation}</small>
                    )}
                  </div>
                </div>
              </td>

              {/* Field 3: Email */}
              <td>
                <a
                  href={`mailto:${emp.email}`}
                  className="text-decoration-none text-primary fw-medium d-inline-flex align-items-center gap-2"
                >
                  <i className="bi bi-envelope-at text-muted"></i>
                  <span>{emp.email}</span>
                </a>
              </td>

              {/* Action: Details */}
              <td className="text-end pe-4">
                <button
                  className="btn btn-outline-primary btn-sm rounded-2"
                  title="View Details"
                  onClick={() => onSelectEmployee(emp)}
                >
                  <i className="bi bi-eye me-1"></i> View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
