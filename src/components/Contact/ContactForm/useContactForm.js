import { useState } from 'react';
import { submitConsultationRequest } from '../../../services/api';

const useContactForm = () => {
  const initialFormData = {
    full_name: '',
    company_name: '',
    phone: '',
    email: '',
    service_type: '',
    project_details: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  //  handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');
    setSuccess(false);
    setValidationErrors({});

    const result = await submitConsultationRequest(formData);

    if (result.success) {
      setSuccess(true);
      setFormData(initialFormData);
      setTimeout(() => setSuccess(false), 5000);
    } else {
      setError(result.message);
      setValidationErrors(result.errors);
    }

    setLoading(false);
  };

  const clearSuccess = () => setSuccess(false);
  const clearError = () => setError('');

  return {
    formData,
    loading,
    success,
    error,
    validationErrors,
    handleChange,
    handleSubmit,
    clearSuccess,
    clearError
  };
};

export default useContactForm;