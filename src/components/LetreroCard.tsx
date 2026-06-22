import { Link } from 'react-router-dom';
import type { Letrero } from '../types/letrero';

interface Props {
  letrero: Letrero;
}

export function LetreroCard({ letrero }: Props) {
  const fmtMonto = (v: number | null) =>
    v != null ? `$${v.toLocaleString('es-CL')}` : '—';

  const fmtMedidas = () => {
    if (letrero.ancho != null && letrero.alto != null)
      return `${letrero.ancho} × ${letrero.alto} m`;
    return '—';
  };

  return (
    <Link
      to={`/letrero/${letrero.id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="letrero-card">
        <div className="letrero-card-img">
          {letrero.foto ? (
            <img
              src={`/imagenes/${letrero.foto}`}
              alt={`Letrero ${letrero.id}`}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          ) : (
            <div className="letrero-card-no-img">Sin imagen</div>
          )}
        </div>
        <div className="letrero-card-body">
          <div className="letrero-card-header">
            <span className="letrero-card-id">#{letrero.id}</span>
            <span className={`letrero-badge ${letrero.estado === 'Vigente' ? 'badge-vigente' : 'badge-novigente'}`}>
              {letrero.estado}
            </span>
          </div>
          <p className="letrero-card-ubic">{letrero.ubicacion || '—'}</p>
          <div className="letrero-card-grid">
            <span><strong>Proveedor:</strong> {letrero.proveedor || '—'}</span>
            <span><strong>Ruta:</strong> {letrero.ruta || '—'}</span>
            <span><strong>Comuna:</strong> {letrero.comuna || '—'}</span>
            <span><strong>Región:</strong> {letrero.region || '—'}</span>
            <span><strong>Medidas:</strong> {fmtMedidas()}</span>
            <span><strong>Arriendo 2025:</strong> {fmtMonto(letrero.monto_arriendo_2025)}</span>
            <span><strong>Vigencia:</strong> {letrero.vigencia || '—'}</span>
            <span><strong>Marca:</strong> {letrero.marca || '—'}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
