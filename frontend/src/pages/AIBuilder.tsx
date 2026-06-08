import { useState } from 'react'

function AIBuilder() {
  const [prompt, setPrompt] = useState('')

  return (
    <div style={{padding: '40px'}}>
      <div style={{textAlign: 'center', marginBottom: '40px'}}>
        <h1>🤖 AI Generátor Modů</h1>
        <p>Napiš, co chceš, a AI to vytvoří</p>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        <div style={{background: 'white', padding: '20px', borderRadius: '8px'}}>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Napiš svůj nápad... Např: hardcore survival mod"
            style={{width: '100%', height: '300px', padding: '12px', border: '2px solid #e0e0e0', borderRadius: '6px', fontFamily: 'inherit', fontSize: '14px', marginBottom: '15px'}}
          />
          <button style={{width: '100%', background: '#667eea', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontSize: '16px', cursor: 'pointer'}}>Generovat Mod</button>
        </div>
        <div style={{background: 'white', padding: '20px', borderRadius: '8px'}}>
          <h3>Náhled výstupu</h3>
          <div style={{height: '400px', background: '#f5f5f5', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999'}}>
            Vygenerovaný obsah se zobrazí zde...
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIBuilder
