function Items() {
  return (
    <div style={{padding: '40px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
        <h1>Item Database</h1>
        <button style={{background: '#667eea', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer'}}>+ Nový Item</button>
      </div>
      <div style={{textAlign: 'center', padding: '60px 20px', color: '#999'}}>
        <p>Žádné itemy zatím nejsou. Přidej si první item!</p>
      </div>
    </div>
  )
}

export default Items
