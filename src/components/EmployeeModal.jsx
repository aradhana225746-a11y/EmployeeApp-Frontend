import React from 'react';

const EmployeeModal = ({ employee, onClose }) => {
  if (!employee) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(3px)' }}
      onClick={onClose}
    >
      <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          {/* Modal Header */}
          <div className="modal-header bg-dark text-white border-0 py-3 px-4">
            <div className="d-flex align-items-center gap-2">
              <span className="badge bg-primary rounded-pill px-2.5 py-1">ID #{employee.id}</span>
              <h5 className="modal-title fw-bold mb-0">Employee Profile</h5>
            </div>
            <button
              type="button"
              className="btn-close btn-close-white shadow-none"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body p-4">
            {/* Header with Avatar and Basic Info */}
            <div className="d-flex align-items-center gap-3 pb-3 border-bottom mb-3">
              <div
                className="d-flex align-items-center justify-content-center text-white fw-bold shadow-sm"
                style={{
                  backgroundColor: '#2563eb',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  fontSize: '1.5rem'
                }}
              >
                {employee.name ? employee.name.charAt(0).toUpperCase() : '?'}
              </div>
              <div>
                <h4 className="fw-bold mb-0 text-dark">{employee.name}</h4>
                <div className="text-muted fw-medium">{employee.designation || 'Employee'}</div>
              </div>
            </div>

            {/* Field Details Grid */}
            <div className="row g-3">
              {/* Field 1: ID */}
              <div className="col-6">
                <div className="p-3 bg-light rounded-3">
                  <div className="text-muted fs-8 text-uppercase fw-bold">Employee ID</div>
                  <div className="fw-bold text-dark fs-6 mt-1">#{employee.id}</div>
                </div>
              </div>

              {/* Company / Dept */}
              <div className="col-6">
                <div className="p-3 bg-light rounded-3">
                  <div className="text-muted fs-8 text-uppercase fw-bold">Company</div>
                  <div className="fw-bold text-dark fs-6 mt-1">{employee.companyName || 'Enterprise'}</div>
                </div>
              </div>

              {/* Field 2: Name */}
              <div className="col-12">
                <div className="p-3 bg-light rounded-3">
                  <div className="text-muted fs-8 text-uppercase fw-bold">
                    <i className="bi bi-person me-1"></i> Full Name
                  </div>
                  <div className="fw-bold text-dark fs-6 mt-1">{employee.name}</div>
                </div>
              </div>

              {/* Field 3: Email */}
              <div className="col-12">
                <div className="p-3 bg-light rounded-3">
                  <div className="text-muted fs-8 text-uppercase fw-bold">
                    <i className="bi bi-envelope me-1"></i> Email Address
                  </div>
                  <a
                    href={`mailto:${employee.email}`}
                    className="fw-bold text-primary text-decoration-none d-block mt-1 text-break"
                  >
                    {employee.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="col-12">
                <div className="p-3 bg-light rounded-3">
                  <div className="text-muted fs-8 text-uppercase fw-bold">
                    <i className="bi bi-geo-alt me-1"></i> City / Location
                  </div>
                  <div className="fw-bold text-dark mt-1">{employee.location || 'Headquarters'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer border-0 bg-light py-2 px-4">
            <button type="button" className="btn btn-secondary btn-sm px-4 rounded-2" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal;
