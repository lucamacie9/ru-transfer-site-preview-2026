function RegisterPage() {
  return (
    <div style={{ maxWidth: 520, margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1>Create an account</h1>
        <p style={{ color: '#666', margin: 0 }}>
          Layout for the registration form will go here.
        </p>
      </header>

      <div
        style={{
          border: '1px dashed #ccc',
          borderRadius: '8px',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {['Name field', 'Email field', 'Password field', 'Role selector'].map(
          (label) => (
            <div
              key={label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <div
                style={{
                  width: '45%',
                  height: 10,
                  background: '#eee',
                  borderRadius: 4,
                }}
              />
              <div
                style={{
                  height: 36,
                  borderRadius: 4,
                  border: '1px solid #ddd',
                  background: '#fafafa',
                }}
              />
            </div>
          ),
        )}

        <div
          style={{
            height: 40,
            borderRadius: 20,
            border: '1px solid #999',
            background: '#f5f5f5',
            marginTop: '0.5rem',
          }}
        />
      </div>
    </div>
  );
}

export default RegisterPage
