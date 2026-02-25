import { useEffect, useState } from 'react';

type Program = {
  id: number;
  name: string;
};

function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadPrograms() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('https://your-api-url.com/programs');
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data: Program[] = await response.json();
      setPrograms(data);
    } catch (err) {
      console.error(err);
      setError('Failed to load programs. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPrograms();
  }, []);

  if (loading) {
    return <p>Loading programs...</p>;
  }

  if (error) {
    return (
      <div>
        <p style={{ color: 'red' }}>{error}</p>
        <button onClick={loadPrograms}>Retry</button>
      </div>
    );
  }

  if (programs.length === 0) {
    return <p>No programs found.</p>;
  }

  return (
    <div>
      <h1>Programs</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>{program.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProgramsPage;
