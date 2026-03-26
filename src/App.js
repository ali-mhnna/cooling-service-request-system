import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Requests from './pages/Admin/Requests/Requests'; 
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ الرابط السري للأدمن */}
        <Route path="/safwa-admin-2024-secret" element={<Requests />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;