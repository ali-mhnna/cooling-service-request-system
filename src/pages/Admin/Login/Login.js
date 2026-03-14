import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../../context/AuthContext';
import '../../../Styles/Login.css';

const Login = () => {
  const [accessToken, setAccessToken] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(accessToken);

    if (result.success) {
      navigate('/secure-admin-panel/requests');
    } else {
      setError(result.message);
    }
    
    setLoading(false);
  };

  return (
    <div className="login-page">
      <Container>
        <Card className="login-card">
          <Card.Body>
            <h3 className="text-center mb-4">Admin Login</h3>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Access Token</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter access token"
                  value={accessToken}
                  onChange={(e) => setAccessToken(e.target.value)}
                  required
                />
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                className="w-100"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Login;