function MatchPage() {
  return (
    <div
      style={{
        maxWidth: 720,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      {/* Header / banner similar to match.html */}
      <section
        style={{
          padding: '2.5rem 2rem',
          background: '#e9f5ff',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ marginBottom: '0.5rem' }}>Course Matching</h1>
        <p style={{ color: '#555', margin: 0 }}>
          Blueprint for comparing two courses and viewing a match result.
        </p>
      </section>

      {/* Form layout */}
      <section
        style={{
          border: '1px dashed #ccc',
          borderRadius: '8px',
          padding: '1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
        }}
      >
        {['From course', 'To course', 'Authentication'].map((title) => (
          <div key={title} style={{ minHeight: 100 }}>
            <h2
              style={{
                fontSize: '1rem',
                marginBottom: '0.75rem',
              }}
            >
              {title} area
            </h2>
            <div
              style={{
                height: 32,
                background: '#fafafa',
                borderRadius: 4,
                border: '1px solid #ddd',
                marginBottom: '0.5rem',
              }}
            />
            <div
              style={{
                height: 32,
                background: '#fafafa',
                borderRadius: 4,
                border: '1px solid #ddd',
              }}
            />
          </div>
        ))}
      </section>

      {/* Result area */}
      <section
        style={{
          border: '1px dashed #ccc',
          borderRadius: '8px',
          padding: '1.5rem',
        }}
      >
        <h2
          style={{
            fontSize: '1rem',
            marginBottom: '0.75rem',
          }}
        >
          Match result area
        </h2>
        <div
          style={{
            height: 80,
            borderRadius: 4,
            background: '#f7f7f7',
          }}
        />
      </section>
    </div>
  );
}

export default MatchPage
