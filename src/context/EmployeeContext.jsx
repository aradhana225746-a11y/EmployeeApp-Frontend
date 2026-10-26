import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { EmployeeContext } from './EmployeeContextInstance';

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch employees from external API: https://jsonplaceholder.typicode.com/users
  const fetchEmployees = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');

      // Map API users to standard fields: id, name, email + contextual fields
      const formattedApiUsers = response.data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        designation: user.company?.bs || 'Software Specialist',
        location: user.address?.city || 'Headquarters',
        phone: user.phone,
        companyName: user.company?.name || 'Enterprise'
      }));

      setEmployees(formattedApiUsers);
    } catch (err) {
      console.error('Error fetching employees from API:', err);
      setError(err.message || 'Failed to fetch employee data. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let ignore = false;
    const loadInitialData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        if (!ignore) {
          const formattedApiUsers = response.data.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            designation: user.company?.bs || 'Software Specialist',
            location: user.address?.city || 'Headquarters',
            phone: user.phone,
            companyName: user.company?.name || 'Enterprise'
          }));

          setEmployees(formattedApiUsers);
          setLoading(false);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message || 'Failed to fetch employee data. Please try again.');
          setLoading(false);
        }
      }
    };

    loadInitialData();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        loading,
        error,
        fetchEmployees
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
