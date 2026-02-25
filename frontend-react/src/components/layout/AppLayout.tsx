// src/components/layout/AppLayout.tsx
import { Outlet, Link } from 'react-router-dom';

function AppLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Global Navigation */}
      <nav style={{ padding: '1rem', background: '#f4f4f4', display: 'flex', gap: '15px' }}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/institutions">Institutions</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/match">Match</Link>
        <Link to="/about">About</Link>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '15px' }}>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      {/* Main Content Area (Pages will render here) */}
      <main style={{ flex: 1, padding: '2rem' }}>
        <Outlet />
      </main>

      {/* Global Footer */}
      <footer style={{ padding: '1rem', background: '#333', color: 'white', textAlign: 'center' }}>
        &copy; {new Date().getFullYear()} My Application. All rights reserved.
      </footer>
    </div>
  );
}

export default AppLayout;
