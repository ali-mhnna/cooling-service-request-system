import React from 'react';
import { Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { serviceTypes } from '../../../services/api';


const FormFields = ({ formData, validationErrors, loading, handleChange }) => {
  return (
    <>
   
      <Row className="mb-3">
        <Col md={6} className="mb-3 mb-md-0">
          <Form.Group controlId="fullName">
            <Form.Label className="fw-bold">
              الاسم الكامل <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="full_name"
              placeholder="أدخل اسمك"
              className="custom-input"
              value={formData.full_name}
              onChange={handleChange}
              isInvalid={!!validationErrors.full_name}
              required
            />
            <Form.Control.Feedback type="invalid">
              {validationErrors.full_name?.[0]}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="companyName">
            <Form.Label className="fw-bold">اسم الشركة</Form.Label>
            <Form.Control
              type="text"
              name="company_name"
              placeholder="اسم شركتك أو مؤسستك"
              className="custom-input"
              value={formData.company_name}
              onChange={handleChange}
              isInvalid={!!validationErrors.company_name}
            />
            <Form.Control.Feedback type="invalid">
              {validationErrors.company_name?.[0]}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

   
      <Row className="mb-2">
        <Col md={6} className="mb-3 mb-md-0">
          <Form.Group controlId="phoneNumber">
            <Form.Label className="fw-bold">رقم الهاتف</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              placeholder="01xxxxxxxxx"
              className="custom-input"
              value={formData.phone}
              onChange={handleChange}
              isInvalid={!!validationErrors.phone}
              dir="ltr"
            />
            <Form.Control.Feedback type="invalid">
              {validationErrors.phone?.[0]}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="email">
            <Form.Label className="fw-bold">البريد الإلكتروني</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="example@company.com"
              className="custom-input"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!validationErrors.email}
              dir="ltr"
            />
            <Form.Control.Feedback type="invalid">
              {validationErrors.email?.[0]}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <div className="mb-4 text-end">
        <Form.Text className="text-muted small-note">
          * أدخل رقم الهاتف أو البريد الإلكتروني (لا يشترط الإثنين).
        </Form.Text>
      </div>

    
      <Row className="mb-4">
        <Col md={12}>
          <Form.Group controlId="serviceType">
            <Form.Label className="fw-bold">
              نوع الخدمة المطلوبة <span className="text-danger">*</span>
            </Form.Label>
            <Form.Select
              name="service_type"
              className="custom-input custom-select"
              value={formData.service_type}
              onChange={handleChange}
              isInvalid={!!validationErrors.service_type}
              required
            >
              {serviceTypes.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {validationErrors.service_type?.[0]}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

  
      <Row className="mb-4">
        <Col md={12}>
          <Form.Group controlId="projectDetails">
            <Form.Label className="fw-bold">
              تفاصيل المشروع <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="project_details"
              placeholder="اشرح لنا المزيد عن تفاصيل مشروعك..."
              className="custom-input textarea-input"
              value={formData.project_details}
              onChange={handleChange}
              isInvalid={!!validationErrors.project_details}
              required
            />
            <Form.Control.Feedback type="invalid">
              {validationErrors.project_details?.[0]}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

    
      <div className="d-flex justify-content-start">
        <Button
          variant="primary"
          type="submit"
          className="submit-btn"
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-2"
              />
              جاري الإرسال...
            </>
          ) : (
            'ارسال الطلب'
          )}
        </Button>
      </div>
    </>
  );
};

export default FormFields;