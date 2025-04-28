import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDashboard from './components/pages/UserDashboard';
import CreateTicketPage from './components/pages/CreateTicketPage';
import ViewTicketsPage from './components/pages/ViewTicketsPage';
import TicketDetailPage from './components/pages/TicketDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/create-ticket" element={<CreateTicketPage />} />
        <Route path="/view-tickets" element={<ViewTicketsPage />} />
        <Route path="/ticket/:id" element={<TicketDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
