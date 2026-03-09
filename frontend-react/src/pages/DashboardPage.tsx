function DashboardPage() {
  return (
    <div
      style={{
        maxWidth: 1000,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      <header style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
        <h1>Program Director Dashboard</h1>
        <p style={{ color: '#666', margin: 0 }}>
          High-level actions and summaries for managing transfers.
        </p>
      </header>

      {['Institutions', 'Programs', 'Courses', 'Knowledge units'].map(
        (section) => (
          <section
            key={section}
            style={{
              border: '1px dashed #ccc',
              borderRadius: '8px',
              padding: '1.5rem',
            }}
          >
            <h2
              style={{
                fontSize: '1.2rem',
                marginBottom: '1rem',
              }}
            >
              {section} section
            </h2>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              {/* Left column: form / controls */}
              <div style={{ flex: '1 1 220px', minWidth: 220 }}>
                <div
                  style={{
                    height: 32,
                    background: '#f0f0f0',
                    borderRadius: 4,
                    marginBottom: '0.5rem',
                  }}
                />
                <div
                  style={{
                    height: 36,
                    background: '#fafafa',
                    border: '1px solid #ddd',
                    borderRadius: 4,
                    marginBottom: '0.5rem',
                  }}
                />
                <div
                  style={{
                    height: 36,
                    background: '#fafafa',
                    border: '1px solid #ddd',
                    borderRadius: 4,
                  }}
                />
              </div>

              {/* Right column: list / table */}
              <div
                style={{
                  flex: '2 1 260px',
                  minHeight: 120,
                  borderRadius: 4,
                  border: '1px dashed #ddd',
                  background: '#fcfcfc',
                }}
              />
            </div>
          </section>
        ),
      )}
    </div>
  );
}

export default DashboardPage
