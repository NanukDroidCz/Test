function Mods() {
  return (
    <div style={{padding: '40px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
        <h1>Moje Mody</h1>
        <button style={{background: '#667eea', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer'}}>+ Nový Mod</button>
      </div>
      <div style={{textAlign: 'center', padding: '60px 20px', color: '#999'}}>
        <p>Zatím jsi nevytvořil žádný mod. Pojď začít!</p>
      </div>
    </div>
  )
}

export default Mods
