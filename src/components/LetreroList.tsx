import { useState, useMemo } from 'react';
import { letreros } from '../data/letreros';
import { LetreroCard } from './LetreroCard';

export function LetreroList() {
  const [filtroEstado, setFiltroEstado] = useState('');
  const [filtroComuna, setFiltroComuna] = useState('');
  const [filtroProveedor, setFiltroProveedor] = useState('');
  const [busqueda, setBusqueda] = useState('');

  const comunas = useMemo(() =>
    [...new Set(letreros.map(l => l.comuna).filter(Boolean))].sort() as string[],
    []
  );
  const proveedores = useMemo(() =>
    [...new Set(letreros.map(l => l.proveedor).filter(Boolean))].sort() as string[],
    []
  );

  const filtrados = useMemo(() => {
    return letreros.filter(l => {
      if (filtroEstado && l.estado !== filtroEstado) return false;
      if (filtroComuna && l.comuna !== filtroComuna) return false;
      if (filtroProveedor && l.proveedor !== filtroProveedor) return false;
      if (busqueda) {
        const q = busqueda.toLowerCase();
        const haystack = [l.ubicacion, l.comuna, l.ruta, l.marca, l.proveedor, l.region]
          .join(' ').toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [filtroEstado, filtroComuna, filtroProveedor, busqueda]);

  return (
    <div>
      <div className="filtros">
        <input
          className="filtro-input"
          type="text"
          placeholder="Buscar por ubicación, ruta, marca..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
        <select
          className="filtro-select"
          value={filtroEstado}
          onChange={e => setFiltroEstado(e.target.value)}
        >
          <option value="">Todos los estados</option>
          <option value="Vigente">Vigente</option>
          <option value="No vigente">No vigente</option>
        </select>
        <select
          className="filtro-select"
          value={filtroComuna}
          onChange={e => setFiltroComuna(e.target.value)}
        >
          <option value="">Todas las comunas</option>
          {comunas.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select
          className="filtro-select"
          value={filtroProveedor}
          onChange={e => setFiltroProveedor(e.target.value)}
        >
          <option value="">Todos los proveedores</option>
          {proveedores.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        <button
          className="filtro-reset"
          onClick={() => { setFiltroEstado(''); setFiltroComuna(''); setFiltroProveedor(''); setBusqueda(''); }}
        >
          Limpiar filtros
        </button>
      </div>
      <p className="resultados-count">{filtrados.length} letrero{filtrados.length !== 1 ? 's' : ''} encontrado{filtrados.length !== 1 ? 's' : ''}</p>
      <div className="letrero-grid">
        {filtrados.map(l => (
          <LetreroCard key={l.id} letrero={l} />
        ))}
      </div>
    </div>
  );
}
