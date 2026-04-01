function LandingPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* HERO SECTION */}
      <section
        style={{
          padding: '3rem 2rem',
          background: '#e8f5e9',
          borderRadius: '8px',
        }}
      >
        <div
          style={{
            maxWidth: 800,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <img
            src="/ru-banner.jpg"
            alt="Roosevelt University Banner"
            style={{
              width: '100%',
              height: 160,
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: '1.5rem',
            }}
          />

          <h1 style={{ marginBottom: '0.5rem' }}>
            Transfer to Roosevelt University
          </h1>

          <p style={{ margin: 0, color: '#555' }}>
            Explore how your completed coursework transfers into Roosevelt University programs.
          </p>
        </div>
      </section>

      {/* FEATURE SECTIONS */}
      <section
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}
      >

        {/* Learn */}
        <div style={cardStyle}>
          <img
            src="/learn.jpg"
            alt="Learn about Roosevelt"
            style={imageStyle}
          />

          <h3>Learn About RU</h3>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>
            Discover how transfer credits work and understand how Roosevelt evaluates your completed coursework.
          </p>

          <a href="/about" style={cardButtonStyle}>
            Learn More
          </a>
        </div>

        {/* Match */}
        <div style={cardStyle}>
          <img
            src="/transfer.jpg"
            alt="Transfer credit matching"
            style={imageStyle}
          />

          <h3>Search Transfer Credits</h3>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>
            Enter your courses and see how they match Roosevelt University requirements.
          </p>

          <a href="/match" style={cardButtonStyle}>
            Start Matching
          </a>
        </div>

        {/* Programs */}
        <div style={cardStyle}>
          <img
            src="/programs.jpg"
            alt="Browse programs"
            style={imageStyle}
          />

          <h3>Browse Programs</h3>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>
            Explore Roosevelt University degree programs and academic pathways.
          </p>

          <a href="/programs" style={cardButtonStyle}>
            View Programs
          </a>
        </div>

      </section>
    </div>
  )
}

export default LandingPage

// Styles
const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '1rem',
  background: '#fff',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
}

const imageStyle = {
  width: '100%',
  height: 140,
  objectFit: 'cover',
  borderRadius: '6px',
}

const cardButtonStyle = {
  marginTop: 'auto',
  padding: '0.5rem 1rem',
  background: '#178581',
  color: '#fff',
  borderRadius: '6px',
  textDecoration: 'none',
  display: 'inline-block',
  textAlign: 'center',
}