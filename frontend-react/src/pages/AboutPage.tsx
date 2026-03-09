function AboutPage() {
  return (
    <div
      style={{
        maxWidth: 900,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      {/* Header / banner similar to about.html */}
      <section
        style={{
          padding: '2.5rem 2rem',
          background: '#e9f5ff',
          borderRadius: '8px',
        }}
      >
        <h1 style={{ marginBottom: '0.75rem' }}>
          About Transfer Credit Match
        </h1>
        <p style={{ margin: 0, color: '#555' }}>
          High-level description and mission statement will go here.
        </p>
      </section>

      {/* Three-column content sections */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {['Mission', 'How it works', 'Who it is for'].map((title) => (
          <div
            key={title}
            style={{
              border: '1px dashed #ccc',
              borderRadius: '8px',
              padding: '1.5rem',
              minHeight: 160,
            }}
          >
            <h2
              style={{
                fontSize: '1.1rem',
                marginBottom: '1rem',
              }}
            >
              {title} section
            </h2>
            <div
              style={{
                height: 10,
                background: '#eee',
                marginBottom: 8,
                borderRadius: 4,
              }}
            />
            <div
              style={{
                height: 10,
                background: '#eee',
                marginBottom: 8,
                borderRadius: 4,
                width: '80%',
              }}
            />
            <div
              style={{
                height: 10,
                background: '#eee',
                borderRadius: 4,
                width: '60%',
              }}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default AboutPage
