// src/components/layout/AppLayout.tsx
import { Outlet, Link } from 'react-router-dom';

function AppLayout() {
  const linkStyle: React.CSSProperties = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '0.95rem',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Global Navigation mirroring legacy HTML structure */}
      <nav
        style={{
          padding: '0.75rem 1.5rem',
          background: '#000',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        <div style={{ fontWeight: 600, fontSize: '1rem' }}>Transfer Credit Match</div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
          <Link to="/match" style={linkStyle}>
            Match
          </Link>
          <Link to="/dashboard" style={linkStyle}>
            Director View
          </Link>
          <Link to="/institutions" style={linkStyle}>
            Institutions
          </Link>
          <Link to="/programs" style={linkStyle}>
            Programs
          </Link>
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', gap: '16px' }}>
          <Link to="/login" style={linkStyle}>
            Login
          </Link>
          <Link to="/register" style={linkStyle}>
            Register
          </Link>
        </div>
      </nav>

      {/* Main Content Area (Pages will render here) */}
      <main style={{ flex: 1, padding: '2rem' }}>
        <Outlet />
      </main>

      {/* Global Footer */}
      <footer
        style={{
          padding: '0.75rem 1.5rem',
          background: '#178581',
          color: 'white',
          textAlign: 'center',
          fontSize: '0.85rem',
        }}
      >
        © {new Date().getFullYear()} Transfer Credit Match. All rights reserved.
      </footer>
    </div>
  );
}

export default AppLayout;
