function InstitutionsPage() {
  return (
    <div
      style={{
        maxWidth: 900,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      <header>
        <h1>Institutions</h1>
        <p style={{ color: '#666', margin: 0 }}>
          Filters and a list or table of institutions will live here.
        </p>
      </header>

      {/* Filters / controls */}
      <section
        style={{
          border: '1px dashed #ccc',
          borderRadius: '8px',
          padding: '1rem',
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            flex: '1 1 200px',
            height: 36,
            borderRadius: 4,
            border: '1px solid #ddd',
            background: '#fafafa',
          }}
        />
        <div
          style={{
            flex: '1 1 160px',
            height: 36,
            borderRadius: 4,
            border: '1px solid #ddd',
            background: '#fafafa',
          }}
        />
        <div
          style={{
            width: 120,
            height: 36,
            borderRadius: 999,
            border: '1px solid #999',
            background: '#f5f5f5',
          }}
        />
      </section>

      {/* Institutions list / table */}
      <section
        style={{
          border: '1px dashed #ccc',
          borderRadius: '8px',
          padding: '1rem',
          minHeight: 220,
        }}
      >
        <div
          style={{
            height: 24,
            background: '#f0f0f0',
            borderRadius: 4,
            marginBottom: '0.75rem',
            width: '40%',
          }}
        />
        {[1, 2, 3, 4].map((row) => (
          <div
            key={row}
            style={{
              height: 40,
              borderRadius: 4,
              border: '1px solid #eee',
              background: '#fafafa',
              marginBottom: '0.5rem',
            }}
          />
        ))}
      </section>
    </div>
  );
}

export default InstitutionsPage
