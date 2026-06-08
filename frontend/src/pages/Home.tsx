function Home() {
  return (
    <div className="page" style={{padding: '40px'}}>
      <div style={{textAlign: 'center', marginBottom: '50px', padding: '40px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', borderRadius: '10px'}}>
        <h1 style={{fontSize: '48px', margin: '0 0 10px 0'}}>DayZ Mod Studio 🎮</h1>
        <p style={{fontSize: '20px', margin: '0'}}>Vytvárej profesionální DayZ mody bez kódování</p>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
        <div style={{background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
          <h3 style={{color: '#667eea'}}>📦 Item Database</h3>
          <p>Spravuj všechny itemy, zbraně, jídlo a vozidla</p>
        </div>
        <div style={{background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
          <h3 style={{color: '#667eea'}}>⚙️ Mod Builder</h3>
          <p>Klikací editor bez ručního kódování</p>
        </div>
        <div style={{background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
          <h3 style={{color: '#667eea'}}>🤖 AI Generátor</h3>
          <p>Nech AI vygenerovat celý mod za tebe</p>
        </div>
        <div style={{background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
          <h3 style={{color: '#667eea'}}>📤 Export</h3>
          <p>Exportuj připravený mod pro DayZ Workshop</p>
        </div>
      </div>
    </div>
  )
}

export default Home
