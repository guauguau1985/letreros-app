import './App.css'

function App() {
  const letrero = {
    id_letrero: 'LT-001',
    proveedor: 'Anepco',
    marca: 'PF',
    contenido: 'Óvalo PF',
    tipo_ubicacion: 'Carretera',
    comuna: 'Talca',
    direccion: 'Ruta 5 Sur km 250',
    tipo_letrero: 'Paleta',
    medidas: '8x3 m',
    fecha_renovacion: '2026-04-01',
    estado_letrero: 'Bueno',
    estado_proceso: 'Normal',
    observacion: '',
    foto_oficial: 'LT-001_2026-04-08.jpg',
    fecha_foto_oficial: '2026-04-08',
  }

  return (
    <div
      style={{
        padding: '24px',
        fontFamily: 'Arial, sans-serif',
        background: '#f3f4f6',
        minHeight: '100vh',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1 style={{ margin: 0, fontSize: '48px', lineHeight: 1.05 }}>Control de letreros</h1>
          <p style={{ marginTop: '6px', color: '#666', fontSize: '16px' }}>
            Primera prueba con imagen local
          </p>
        </div>

        <div
          style={{
            background: '#fff',
            borderRadius: '18px',
            padding: '28px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '18px' }}>
            <h2 style={{ margin: 0, fontSize: '28px' }}>{letrero.id_letrero}</h2>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '14px', fontSize: '18px' }}>
            <strong>Dirección:</strong> {letrero.direccion}
          </div>

          <div style={{ textAlign: 'center', marginBottom: '22px', color: '#555', fontSize: '17px' }}>
            <strong>Fecha foto oficial:</strong> {letrero.fecha_foto_oficial}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
            <img
              src={`/imagenes/${letrero.foto_oficial}`}
              alt={letrero.id_letrero}
              style={{
                width: '100%',
                maxWidth: '520px',
                borderRadius: '12px',
                border: '1px solid #ddd',
                objectFit: 'cover',
              }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px 32px',
              fontSize: '18px',
            }}
          >
            <div><strong>Proveedor:</strong> {letrero.proveedor}</div>
            <div><strong>Marca:</strong> {letrero.marca}</div>
            <div><strong>Contenido:</strong> {letrero.contenido}</div>
            <div><strong>Tipo ubicación:</strong> {letrero.tipo_ubicacion}</div>
            <div><strong>Comuna:</strong> {letrero.comuna}</div>
            <div><strong>Tipo letrero:</strong> {letrero.tipo_letrero}</div>
            <div><strong>Medidas:</strong> {letrero.medidas}</div>
            <div><strong>Fecha renovación:</strong> {letrero.fecha_renovacion}</div>
            <div><strong>Estado letrero:</strong> {letrero.estado_letrero}</div>
            <div><strong>Estado proceso:</strong> {letrero.estado_proceso}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App