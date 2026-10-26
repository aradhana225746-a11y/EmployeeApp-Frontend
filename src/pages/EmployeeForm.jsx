import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const EmployeeForm = () => {
  const navigate = useNavigate();

  // Form State: Exactly the 4 requested fields: Name, Designation, Location, Salary
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Quick suggestions for easy filling
  const designationSuggestions = [
    'Software Engineer',
    'Frontend Developer',
    'Backend Engineer',
    'UI/UX Designer',
    'Product Manager',
    'HR Specialist'
  ];

  const locationSuggestions = [
    'New York, NY',
    'San Francisco, CA',
    'Bangalore, India',
    'London, UK',
    'Remote / Anywhere'
  ];

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Quick suggestion click handler
  const handleSelectSuggestion = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  // Validation for the 4 fields
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.designation.trim()) {
      newErrors.designation = 'Designation is required';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.salary) {
      newErrors.salary = 'Salary is required';
    } else if (Number(formData.salary) <= 0) {
      newErrors.salary = 'Salary must be a positive number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit: NO POST REQUEST FROM FRONTEND
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Capture submitted data strictly on client-side (no HTTP POST)
    const payload = {
      name: formData.name.trim(),
      designation: formData.designation.trim(),
      location: formData.location.trim(),
      salary: Number(formData.salary),
      submittedAt: new Date().toLocaleTimeString()
    };

    console.log('Employee Form Submitted (Client-side only - No HTTP POST made):', payload);

    setSubmittedData(payload);
    setIsSubmitting(false);

    // Reset form inputs
    setFormData({
      name: '',
      designation: '',
      location: '',
      salary: ''
    });
    setErrors({});
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      name: '',
      designation: '',
      location: '',
      salary: ''
    });
    setErrors({});
    setSubmittedData(null);
  };

  return (
    <div className="container py-4">
      {/* Navigation Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none">
              <i className="bi bi-house-door me-1"></i> Home / Dashboard
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Employee Form
          </li>
        </ol>
      </nav>

      {/* Notice Banner */}
      <div className="alert alert-info d-flex align-items-center gap-2 py-2 px-3 rounded-3 shadow-xs mb-4">
        <i className="bi bi-info-circle-fill text-primary fs-5"></i>
        <div className="fs-7">
          <strong>Frontend Only Form:</strong> Data submitted here is handled locally on the client (no HTTP POST request is dispatched to external servers).
        </div>
      </div>

      {/* Success Notification Alert */}
      {submittedData && (
        <div className="alert alert-success alert-dismissible fade show rounded-3 shadow-sm mb-4 border-success-subtle p-4" role="alert">
          <div className="d-flex align-items-start gap-3">
            <div className="p-2 bg-success text-white rounded-circle">
              <i className="bi bi-check-lg fs-4"></i>
            </div>
            <div className="flex-grow-1">
              <h5 className="alert-heading fw-bold mb-1">Employee Details Captured Successfully!</h5>
              <p className="mb-2 text-secondary">
                The employee form has been submitted locally with no backend POST request:
              </p>
              <div className="row g-2 mb-3 bg-white p-3 rounded-3 border">
                <div className="col-sm-6 col-md-3">
                  <span className="text-muted fs-8 text-uppercase d-block">Name</span>
                  <strong className="text-dark">{submittedData.name}</strong>
                </div>
                <div className="col-sm-6 col-md-3">
                  <span className="text-muted fs-8 text-uppercase d-block">Designation</span>
                  <strong className="text-dark">{submittedData.designation}</strong>
                </div>
                <div className="col-sm-6 col-md-3">
                  <span className="text-muted fs-8 text-uppercase d-block">Location</span>
                  <strong className="text-dark">{submittedData.location}</strong>
                </div>
                <div className="col-sm-6 col-md-3">
                  <span className="text-muted fs-8 text-uppercase d-block">Salary</span>
                  <strong className="text-success">${submittedData.salary.toLocaleString()}</strong>
                </div>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-success btn-sm px-3"
                  onClick={() => navigate('/')}
                >
                  <i className="bi bi-speedometer2 me-1"></i> Return to Dashboard
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success btn-sm px-3"
                  onClick={() => setSubmittedData(null)}
                >
                  <i className="bi bi-plus-lg me-1"></i> Fill Another Entry
                </button>
              </div>
            </div>
            <button
              type="button"
              className="btn-close shadow-none"
              onClick={() => setSubmittedData(null)}
              aria-label="Close"
            ></button>
          </div>
        </div>
      )}

      <div className="row g-4 justify-content-center">
        {/* Form Column */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
            <div className="card-header bg-dark text-white p-4 border-0">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h4 className="fw-bold mb-1">
                    <i className="bi bi-person-lines-fill text-primary me-2"></i>
                    Employee Form
                  </h4>
                  <p className="text-white-50 mb-0 fs-7">
                    Enter the employee's Name, Designation, Location, and Salary.
                  </p>
                </div>
                <span className="badge bg-primary rounded-pill px-3 py-2 fs-8">
                  4 Fields
                </span>
              </div>
            </div>

            <div className="card-body p-4 p-md-5">
              <form onSubmit={handleSubmit} noValidate>
                {/* 1. Field: Name */}
                <div className="mb-4">
                  <label htmlFor="name" className="form-label fw-bold text-dark">
                    <i className="bi bi-person me-1 text-primary"></i> Name <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light text-muted">
                      <i className="bi bi-person"></i>
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`form-control form-control-lg fs-6 ${errors.name ? 'is-invalid' : ''}`}
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                </div>

                {/* 2. Field: Designation */}
                <div className="mb-4">
                  <label htmlFor="designation" className="form-label fw-bold text-dark">
                    <i className="bi bi-briefcase me-1 text-primary"></i> Designation <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light text-muted">
                      <i className="bi bi-briefcase"></i>
                    </span>
                    <input
                      type="text"
                      id="designation"
                      name="designation"
                      className={`form-control form-control-lg fs-6 ${errors.designation ? 'is-invalid' : ''}`}
                      placeholder="e.g. Software Engineer"
                      value={formData.designation}
                      onChange={handleChange}
                      required
                    />
                    {errors.designation && <div className="invalid-feedback">{errors.designation}</div>}
                  </div>

                  {/* Suggestions Chips */}
                  <div className="mt-2 d-flex flex-wrap gap-1">
                    <span className="text-muted fs-8 me-1 align-self-center">Suggestions:</span>
                    {designationSuggestions.map((role) => (
                      <button
                        type="button"
                        key={role}
                        className="btn btn-xs btn-outline-secondary rounded-pill py-0 px-2 fs-8"
                        onClick={() => handleSelectSuggestion('designation', role)}
                      >
                        + {role}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Field: Location */}
                <div className="mb-4">
                  <label htmlFor="location" className="form-label fw-bold text-dark">
                    <i className="bi bi-geo-alt me-1 text-primary"></i> Location <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light text-muted">
                      <i className="bi bi-geo-alt"></i>
                    </span>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      className={`form-control form-control-lg fs-6 ${errors.location ? 'is-invalid' : ''}`}
                      placeholder="e.g. New York"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                    {errors.location && <div className="invalid-feedback">{errors.location}</div>}
                  </div>

                  {/* Location Suggestions */}
                  <div className="mt-2 d-flex flex-wrap gap-1">
                    <span className="text-muted fs-8 me-1 align-self-center">Suggestions:</span>
                    {locationSuggestions.map((loc) => (
                      <button
                        type="button"
                        key={loc}
                        className="btn btn-xs btn-outline-secondary rounded-pill py-0 px-2 fs-8"
                        onClick={() => handleSelectSuggestion('location', loc)}
                      >
                        + {loc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Field: Salary */}
                <div className="mb-4">
                  <label htmlFor="salary" className="form-label fw-bold text-dark">
                    <i className="bi bi-currency-dollar me-1 text-primary"></i> Salary <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light text-muted">$</span>
                    <input
                      type="number"
                      id="salary"
                      name="salary"
                      min="0"
                      step="500"
                      className={`form-control form-control-lg fs-6 ${errors.salary ? 'is-invalid' : ''}`}
                      placeholder="e.g. 75000"
                      value={formData.salary}
                      onChange={handleChange}
                      required
                    />
                    {errors.salary && <div className="invalid-feedback">{errors.salary}</div>}
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="d-flex flex-wrap gap-2 pt-3 border-top">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg px-4 d-flex align-items-center gap-2 shadow-sm rounded-3"
                    disabled={isSubmitting}
                  >
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Submit</span>
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg px-3 rounded-3"
                    onClick={handleReset}
                  >
                    <i className="bi bi-arrow-counterclockwise me-1"></i> Reset
                  </button>

                  <Link
                    to="/"
                    className="btn btn-light btn-lg px-3 ms-auto rounded-3 text-secondary"
                  >
                    Back to Home / Dashboard
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
