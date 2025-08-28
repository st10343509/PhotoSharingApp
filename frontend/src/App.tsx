import './App.css';

function App() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, "Helvetica Neue", Arial',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: 560, width: '100%', textAlign: 'center' }}>
        <img
          src="/me.jpg"
          alt="Portrait of Thabang Madisha"
          style={{ width: 180, height: 180, borderRadius: '50%', objectFit: 'cover', marginBottom: 16 }}
        />
        <h1 style={{ margin: 0 }}>Thabang Madisha</h1>
        <p style={{ marginTop: 8, color: '#555' }}>
          Vite + React + TypeScript (SWC) base app deployed on Netlify.
        </p>
      </div>
    </main>
  );
}

export default App;
