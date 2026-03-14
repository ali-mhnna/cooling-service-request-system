import React from 'react';
import { Container, Form } from 'react-bootstrap';
import useContactForm from '../Contact/ContactForm/useContactForm';
import FormHeader from '../Contact/ContactForm/FormHeader';
import FormFields from '../Contact/ContactForm/FormFields';
import '../../Styles/ContactForm.css';

const ContactForm = () => {
  const {
    formData,
    loading,
    success,
    error,
    validationErrors,
    handleChange,
    handleSubmit,
    clearSuccess,
    clearError
  } = useContactForm();

  return (
    <section className="form-section-wrapper" dir="rtl">
      <Container>
        <FormHeader
          success={success}
          error={error}
          clearSuccess={clearSuccess}
          clearError={clearError}
        />

        <div className="custom-form-card shadow-sm">
          <Form onSubmit={handleSubmit}>
            <FormFields
              formData={formData}
              validationErrors={validationErrors}
              loading={loading}
              handleChange={handleChange}
            />
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;