
import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import MatchPage from './pages/MatchPage'
import InstitutionsPage from './pages/InstitutionsPage'
import ProgramsPage from './pages/ProgramsPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    // Removed <BrowserRouter> from here
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* ... other routes */}
      </Route>
    </Routes>
  );
}

export default App;

