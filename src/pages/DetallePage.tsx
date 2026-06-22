import { useParams, Link } from 'react-router-dom';
import { letreros } from '../data/letreros';

export function DetallePage() {
  const { id } = useParams<{ id: string }>();
  const letrero = letreros.find(l => l.id === Number(id));

  if (!letrero) {
    return (
      <div className="page-container" style={{ textAlign: 'center', paddingTop: '80px' }}>
        <h2>Letrero no encontrado</h2>
        <Link to="/" className="back-link">← Volver a la lista</Link>
      </div>
    );
  }

  const fmtMonto = (v: number | null) =>
    v != null ? `$${v.toLocaleString('es-CL')}` : '—';

  const Campo = ({ label, value }: { label: string; value: React.ReactNode }) => (
    <div className="detalle-campo">
      <span className="detalle-label">{label}</span>
      <span className="detalle-value">{value || '—'}</span>
    </div>
  );

  return (
    <div className="page-container">
      <Link to="/" className="back-link">← Volver a la lista</Link>

      <div className="detalle-card">
        <div className="detalle-header">
          <div>
            <h2>Letrero #{letrero.id}</h2>
            <p className="detalle-ubicacion">{letrero.ubicacion}</p>
          </div>
          <span className={`letrero-badge ${letrero.estado === 'Vigente' ? 'badge-vigente' : 'badge-novigente'}`} style={{ fontSize: '16px', padding: '6px 14px' }}>
            {letrero.estado}
          </span>
        </div>

        {letrero.foto && (
          <div className="detalle-img-container">
            <img
              src={`/imagenes/${letrero.foto}`}
              alt={`Letrero ${letrero.id}`}
              className="detalle-img"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
        )}

        <div className="detalle-seccion">
          <h3>Ubicación</h3>
          <div className="detalle-grid">
            <Campo label="Ruta" value={letrero.ruta} />
            <Campo label="KM referencia" value={letrero.km_referencia} />
            <Campo label="Localidad" value={letrero.localidad} />
            <Campo label="Comuna" value={letrero.comuna} />
            <Campo label="Región" value={letrero.region} />
            <Campo label="Tránsito" value={letrero.transito} />
          </div>
        </div>

        <div className="detalle-seccion">
          <h3>Letrero</h3>
          <div className="detalle-grid">
            <Campo label="Tipo" value={letrero.tipo} />
            <Campo label="Tema" value={letrero.tema} />
            <Campo label="Marca" value={letrero.marca} />
            <Campo label="Eslogan" value={letrero.eslogan} />
            <Campo label="Ancho (m)" value={letrero.ancho} />
            <Campo label="Alto (m)" value={letrero.alto} />
            <Campo label="Troquel" value={letrero.troquel} />
            <Campo label="Detalles" value={letrero.detalles} />
            <Campo label="N° letrero proveedor" value={letrero.n_letrero_proveedor} />
          </div>
        </div>

        <div className="detalle-seccion">
          <h3>Proveedor y Contrato</h3>
          <div className="detalle-grid">
            <Campo label="Proveedor" value={letrero.proveedor} />
            <Campo label="RUT proveedor" value={letrero.rut_proveedor} />
            <Campo label="Registro caminero" value={letrero.registro_caminero} />
            <Campo label="OC" value={letrero.oc} />
            <Campo label="Desde" value={letrero.desde} />
            <Campo label="Hasta" value={letrero.hasta} />
            <Campo label="Renovación automática" value={letrero.renovacion_automatica} />
            <Campo label="Vigencia" value={letrero.vigencia} />
            <Campo label="Aviso de término (días)" value={letrero.aviso_termino_dias} />
            <Campo label="Fecha aviso término" value={letrero.fecha_aviso_termino} />
          </div>
        </div>

        <div className="detalle-seccion">
          <h3>Valores</h3>
          <div className="detalle-grid">
            <Campo label="Arriendo mensual 2025" value={fmtMonto(letrero.monto_arriendo_2025)} />
            <Campo label="Arriendo en UF" value={letrero.arriendo_uf != null ? `${letrero.arriendo_uf} UF` : null} />
          </div>
        </div>

        {letrero.imagen_georreferencia && (
          <div className="detalle-seccion">
            <h3>Georreferencia</h3>
            <p style={{ wordBreak: 'break-all' }}>
              <a href={letrero.imagen_georreferencia} target="_blank" rel="noopener noreferrer">
                Ver en Google Maps
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
