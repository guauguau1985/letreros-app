import { useParams, Link } from 'react-router-dom';
import { letreros } from '../data/letreros';
import { getImagePath } from '../utils/imagePath';

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={12} height={12}>
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={12} height={12}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={12} height={12}>
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={12} height={12}>
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  );
}

function NoteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function PrintIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={15} height={15}>
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={13} height={13}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function RulerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
      <path d="M21.3 8.7l-1.4-1.4L6.1 21.1l1.4 1.4L21.3 8.7z" />
      <path d="M2.7 15.3l1.4 1.4L17.9 2.9l-1.4-1.4L2.7 15.3z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
      <path d="M5 17H3v-5l2.5-7h11l2.5 7v5h-2" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

const fmt = (v: string | number | null | undefined, fallback = '—') =>
  v != null && v !== '' ? String(v) : fallback;

const fmtDate = (d: string | null) => {
  if (!d) return '—';
  const [y, m, day] = d.split('-');
  return `${day}/${m}/${y}`;
};

const fmtMonto = (v: number | null) =>
  v != null ? `$${v.toLocaleString('es-CL')}` : '—';

export function DetallePage() {
  const { id } = useParams<{ id: string }>();
  const letrero = letreros.find(l => l.id === Number(id));

  if (!letrero) {
    return (
      <div style={{ textAlign: 'center', paddingTop: 80 }}>
        <h2 style={{ color: '#374151' }}>Letrero no encontrado</h2>
        <Link to="/" style={{ color: '#2563eb', fontSize: 14, marginTop: 12, display: 'inline-block' }}>
          ← Volver a la lista
        </Link>
      </div>
    );
  }

  const imgPath = getImagePath(letrero.id);
  const vigente = letrero.estado === 'Vigente';
  const medidas = letrero.ancho && letrero.alto
    ? `${letrero.ancho} × ${letrero.alto} m`
    : '—';
  const mapQuery = encodeURIComponent(
    letrero.imagen_georreferencia || letrero.ubicacion || `Ruta ${letrero.ruta}`
  );
  const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&output=embed&hl=es`;
  const contratoNum = letrero.n_letrero_proveedor
    ? `N°-${String(letrero.n_letrero_proveedor).padStart(3, '0')}`
    : letrero.oc || '—';

  const totalImgs = imgPath ? 3 : 0;

  return (
    <div>
      {/* ── Top bar ── */}
      <div className="detalle-topbar">
        <nav className="breadcrumb">
          <Link to="/">Letreros</Link>
          <span className="breadcrumb-sep"><ChevronIcon /></span>
          <span>Letrero #{String(letrero.id).padStart(3, '0')}</span>
        </nav>
        <div className="detalle-topbar-actions">
          <button className="btn btn-outline" onClick={() => window.print()}>
            <PrintIcon /> Imprimir
          </button>
          <div style={{ position: 'relative' }}>
            <button className="btn btn-primary">
              Acciones ▾
            </button>
          </div>
        </div>
      </div>

      {/* ── Hero card ── */}
      <div className="detalle-hero">
        <div className="detalle-hero-img">
          {imgPath ? (
            <>
              <img
                src={imgPath}
                alt={`Letrero ${letrero.id}`}
                onError={e => { (e.target as HTMLImageElement).parentElement!.classList.add('no-img-fallback'); (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              {totalImgs > 1 && (
                <span className="detalle-hero-badge">1 / {totalImgs}</span>
              )}
            </>
          ) : (
            <div className="detalle-hero-no-img">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={48} height={48}>
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span>Sin imagen disponible</span>
            </div>
          )}
        </div>

        <div className="detalle-hero-body">
          <div className="detalle-hero-row">
            <div>
              <div className="detalle-hero-title">Letrero #{String(letrero.id).padStart(3, '0')}</div>
              <div className="detalle-hero-subtitle">{fmt(letrero.ubicacion)}</div>
            </div>
            <div className="detalle-hero-tags">
              <span className={`badge ${vigente ? 'badge-vigente' : 'badge-novigente'}`}>
                {letrero.estado}
              </span>
              <span className="detalle-contract">{contratoNum}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Info general ── */}
      <div className="detalle-section">
        <div className="detalle-section-header">
          <span className="detalle-section-icon"><PinIcon /></span>
          <span className="detalle-section-title">Información general</span>
        </div>
        <div className="detalle-section-body">
          <div className="info-grid">
            <div className="info-item">
              <div className="info-item-label"><PinIcon /> Ubicación</div>
              <div className="info-item-value">{fmt(letrero.ubicacion)}</div>
            </div>
            <div className="info-item">
              <div className="info-item-label"><CalIcon /> Fecha inicio</div>
              <div className="info-item-value">{fmtDate(letrero.desde)}</div>
            </div>
            <div className="info-item">
              <div className="info-item-label"><PinIcon /> Ruta / KM</div>
              <div className="info-item-value">
                {fmt(letrero.ruta)}{letrero.km_referencia != null ? ` · km ${letrero.km_referencia}` : ''}
              </div>
            </div>
            <div className="info-item">
              <div className="info-item-label"><CalIcon /> Fecha término</div>
              <div className="info-item-value">{fmtDate(letrero.hasta)}</div>
            </div>
            <div className="info-item">
              <div className="info-item-label"><TagIcon /> Tipo</div>
              <div className="info-item-value">{fmt(letrero.tipo)}</div>
            </div>
            <div className="info-item">
              <div className="info-item-label"><UserIcon /> Proveedor</div>
              <div className="info-item-value">{fmt(letrero.proveedor)}</div>
            </div>
            <div className="info-item">
              <div className="info-item-label"><PinIcon /> Región / Comuna</div>
              <div className="info-item-value">
                {fmt(letrero.region)}{letrero.comuna ? ` · ${letrero.comuna}` : ''}
              </div>
            </div>
            <div className="info-item">
              <div className="info-item-label"><CalIcon /> Vigencia hasta</div>
              <div className="info-item-value">{fmtDate(letrero.vigencia)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Características ── */}
      <div className="detalle-section">
        <div className="detalle-section-header">
          <span className="detalle-section-icon"><RulerIcon /></span>
          <span className="detalle-section-title">Características</span>
        </div>
        <div className="detalle-section-body">
          <div className="metricas-grid">
            <div className="metrica-card">
              <div className="metrica-value">{medidas}</div>
              <div className="metrica-label"><RulerIcon /> Medidas</div>
            </div>
            <div className="metrica-card">
              <div className="metrica-value">{fmt(letrero.transito)}</div>
              <div className="metrica-label"><EyeIcon /> Visibilidad</div>
            </div>
            <div className="metrica-card">
              <div className="metrica-value">
                {letrero.arriendo_uf != null ? `${letrero.arriendo_uf} UF` : '—'}
              </div>
              <div className="metrica-label"><CarIcon /> Arriendo UF</div>
            </div>
            <div className="metrica-card">
              <div className="metrica-value">{fmt(letrero.tema)}</div>
              <div className="metrica-label"><CompassIcon /> Tema</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mapa ── */}
      <div className="detalle-section">
        <div className="detalle-section-header">
          <span className="detalle-section-icon"><MapIcon /></span>
          <span className="detalle-section-title">Ubicación en mapa</span>
        </div>
        <div className="detalle-section-body" style={{ padding: '20px 24px' }}>
          <div className="mapa-container">
            <iframe
              title="Mapa de ubicación"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {letrero.imagen_georreferencia && (
            <p style={{ marginTop: 10, fontSize: 12, color: '#64748b' }}>
              Referencia: {letrero.imagen_georreferencia}
            </p>
          )}
        </div>
      </div>

      {/* ── Contrato y valores ── */}
      <div className="detalle-section">
        <div className="detalle-section-header">
          <span className="detalle-section-icon"><NoteIcon /></span>
          <span className="detalle-section-title">Contrato y valores</span>
        </div>
        <div className="detalle-section-body">
          <div className="info-grid">
            <div className="info-item">
              <div className="info-item-label"><TagIcon /> N° proveedor</div>
              <div className="info-item-value">{fmt(letrero.n_letrero_proveedor)}</div>
            </div>
            <div className="info-item">
              <div className="info-item-label"><TagIcon /> OC</div>
              <div className="info-item-value">{fmt(letrero.oc)}</div>
            </div>
            <div className="info-item">
              <div className="info-item-label"><UserIcon /> RUT proveedor</div>
              <div className="info-item-value">{fmt(letrero.rut_proveedor)}</div>
            </div>
            <div className="info-item">
              <div className="info-item-label"><TagIcon /> Renovación automática</div>
              <div className="info-item-value">{fmt(letrero.renovacion_automatica)}</div>
            </div>
            <div className="info-item">
              <div className="info-item-label"><CalIcon /> Aviso de término</div>
              <div className="info-item-value">
                {letrero.aviso_termino_dias != null ? `${letrero.aviso_termino_dias} días` : '—'}
                {letrero.fecha_aviso_termino ? ` · ${fmtDate(letrero.fecha_aviso_termino)}` : ''}
              </div>
            </div>
            <div className="info-item">
              <div className="info-item-label"><CalIcon /> Registro caminero</div>
              <div className="info-item-value">{fmt(letrero.registro_caminero)}</div>
            </div>
          </div>
        </div>

        {/* Footer de detalle */}
        <div className="detalle-footer">
          <span className="detalle-footer-item">
            <strong>Arriendo mensual 2025:</strong> {fmtMonto(letrero.monto_arriendo_2025)}
          </span>
          <span className="detalle-footer-item">
            <strong>Arriendo UF:</strong> {letrero.arriendo_uf != null ? `${letrero.arriendo_uf} UF` : '—'}
          </span>
          <span className="detalle-footer-item">
            <strong>Marca:</strong> {fmt(letrero.marca)}
          </span>
          <span className="detalle-footer-item">
            <strong>Troquel:</strong> {fmt(letrero.troquel)}
          </span>
        </div>
      </div>

      {/* ── Notas internas ── */}
      {letrero.detalles && (
        <div className="detalle-section">
          <div className="detalle-section-header">
            <span className="detalle-section-icon"><NoteIcon /></span>
            <span className="detalle-section-title">Notas internas</span>
          </div>
          <div className="detalle-section-body">
            <div className="notas-box">{letrero.detalles}</div>
          </div>
        </div>
      )}
    </div>
  );
}
