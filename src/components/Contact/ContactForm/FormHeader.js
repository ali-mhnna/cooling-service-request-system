import React from 'react';
import { Alert } from 'react-bootstrap';

const FormHeader = ({ success, error, clearSuccess, clearError }) => {
  return (
    <>
      <div className="form-header text-center mb-5">
        <span className="badge-pill">أرسل لنا رسالة</span>
        <br />
        <h2 className="form-main-title mt-3">كيف يمكننا مساعدتك؟</h2>
        <p className="text-muted">
          املأ النموذج أدناه وسيتواصل معك أحد مهندسينا خلال 24 ساعة
        </p>
      </div>

      {success && (
        <Alert variant="success" onClose={clearSuccess} dismissible className="mb-4">
          <Alert.Heading>تم إرسال طلبك بنجاح! 🎉</Alert.Heading>
          <p className="mb-0">شكراً لتواصلك معنا. سيقوم فريقنا بالرد عليك في أقرب وقت ممكن.</p>
        </Alert>
      )}

      {error && (
        <Alert variant="danger" onClose={clearError} dismissible className="mb-4">
          {error}
        </Alert>
      )}
    </>
  );
};

export default FormHeader;