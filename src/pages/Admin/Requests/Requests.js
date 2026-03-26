import { useState, useEffect } from "react";
import {
  Container,
  Table,
  Button,
  Alert,
  Spinner,
  Navbar,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import "../../../Styles/Requests.css";

// ✅ الرابط السري
const ADMIN_SECRET = "safwa-admin-2024-secret";

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const fetchRequests = async () => {
    try {
      setLoading(true);
      // ✅ تعديل: استخدام الرابط السري
      const response = await api.get(`/${ADMIN_SECRET}/requests`);
      setRequests(response.data.data);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch requests");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this request?")) {
      return;
    }

    try {
      // ✅ تعديل: استخدام الرابط السري
      await api.delete(`/${ADMIN_SECRET}/requests/${id}`);
      setRequests(requests.filter((req) => req.id !== id));
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete request");
    }
  };

  // ✅ تعديل: زر الخروج بيرجعك للصفحة الرئيسية
  const handleExit = () => {
    navigate("/");
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand>Admin Panel</Navbar.Brand>
          <Button variant="outline-light" onClick={handleExit}>
            خروج
          </Button>
        </Container>
      </Navbar>

      <Container>
        <h2 className="mb-4">Consultation Requests ({requests.length})</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        {loading ? (
          <div className="text-center my-5">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : requests.length === 0 ? (
          <Alert variant="info">No requests found</Alert>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Company</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Service Type</th>
                <th>Details</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
                <tr key={request.id}>
                  <td>{index + 1}</td>
                  <td>{request.full_name}</td>
                  <td>{request.company_name || "-"}</td>
                  <td>{request.phone || "-"}</td>
                  <td>{request.email || "-"}</td>
                  <td>{request.service_type}</td>
                  <td>{request.project_details.substring(0, 50)}...</td>
                  <td>{new Date(request.created_at).toLocaleDateString()}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(request.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
};

export default Requests;