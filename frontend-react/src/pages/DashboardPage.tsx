const statCards = [
  { label: 'Institutions', value: 12 },
  { label: 'Programs', value: 34 },
  { label: 'Courses', value: 186 },
  { label: 'Knowledge Units', value: 92 },
];

const recentUpdates = [
  'New course equivalency submitted for CST261.',
  'Program mapping updated for Cybersecurity diploma.',
  'Institution profile approved for Northern Tech.',
];

function DashboardPage() {
  return (
    <div
      style={{
        maxWidth: 980,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}
    >
      <section
        style={{
          border: '1px solid #e5e7eb',
          borderRadius: 12,
          background: '#ffffff',
          padding: '1.25rem',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '1.75rem' }}>Director Dashboard</h1>
        <p style={{ margin: '0.5rem 0 0 0', color: '#4b5563' }}>
          Overview of transfer credit activity and quick access to management areas.
        </p>
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '0.75rem',
        }}
      >
        {statCards.map((card) => (
          <div
            key={card.label}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              background: '#fff',
              padding: '1rem',
            }}
          >
            <p style={{ margin: 0, color: '#6b7280', fontSize: '0.9rem' }}>{card.label}</p>
            <p style={{ margin: '0.25rem 0 0 0', fontSize: '1.5rem', fontWeight: 700 }}>
              {card.value}
            </p>
          </div>
        ))}
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '0.75rem',
        }}
      >
        <div
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: 12,
            background: '#fff',
            padding: '1rem',
          }}
        >
          <h2 style={{ marginTop: 0 }}>Management Shortcuts</h2>
          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#374151', lineHeight: 1.8 }}>
            <li>Review institution profiles</li>
            <li>Maintain program equivalencies</li>
            <li>Validate course-to-course mappings</li>
            <li>Approve knowledge unit alignments</li>
          </ul>
        </div>

        <div
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: 12,
            background: '#fff',
            padding: '1rem',
          }}
        >
          <h2 style={{ marginTop: 0 }}>Recent Updates</h2>
          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#374151', lineHeight: 1.6 }}>
            {recentUpdates.map((update) => (
              <li key={update}>{update}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default DashboardPage;
