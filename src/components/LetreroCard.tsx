import { Link } from 'react-router-dom';
import type { Letrero } from '../types/letrero';
import { getEstadoEfectivo } from '../types/letrero';
import { getImagePath } from '../utils/imagePath';

interface Props { letrero: Letrero; }

function ImgPlaceholder() {
  return (
    <div className="letrero-card-no-img">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={32} height={32}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span>Sin imagen</span>
    </div>
  );
}

export function LetreroCard({ letrero }: Props) {
  const imgPath = getImagePath(letrero.id);
  const estadoEfectivo = getEstadoEfectivo(letrero);
  const vigente = estadoEfectivo === 'Vigente';

  const fmtMonto = (v: number | null) =>
    v != null ? `$${v.toLocaleString('es-CL')}` : '—';

  const medidas = letrero.ancho && letrero.alto
    ? `${letrero.ancho}×${letrero.alto}m`
    : '—';

  return (
    <Link to={`/letrero/${letrero.id}`} className="letrero-card">
      <div className="letrero-card-img">
        {imgPath ? (
          <img
            src={imgPath}
            alt={`Letrero ${letrero.id}`}
            onError={e => {
              const el = e.target as HTMLImageElement;
              el.style.display = 'none';
              el.parentElement!.innerHTML = '<div class="letrero-card-no-img"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Sin imagen</span></div>';
            }}
          />
        ) : (
          <ImgPlaceholder />
        )}
      </div>
      <div className="letrero-card-body">
        <div className="letrero-card-top">
          <span className="letrero-card-id">LT-{String(letrero.id).padStart(3,'0')}</span>
          <span className={`badge ${vigente ? 'badge-vigente' : 'badge-novigente'}`}>
            {estadoEfectivo}
          </span>
        </div>
        <p className="letrero-card-ubic">{letrero.ubicacion || '—'}</p>
        <div className="letrero-card-meta">
          <span><strong>Ruta:</strong> {letrero.ruta || '—'}</span>
          <span><strong>Medidas:</strong> {medidas}</span>
          <span><strong>Proveedor:</strong> {letrero.proveedor || '—'}</span>
          <span><strong>Arriendo:</strong> {fmtMonto(letrero.monto_arriendo_2025)}</span>
          <span><strong>Comuna:</strong> {letrero.comuna || '—'}</span>
          <span><strong>Vigencia:</strong> {letrero.vigencia || '—'}</span>
        </div>
      </div>
    </Link>
  );
}
