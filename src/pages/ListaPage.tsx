import { LetreroList } from '../components/LetreroList';

export function ListaPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Control de Letreros Camineros</h1>
        <p>Gestión y seguimiento de letreros publicitarios en rutas de Chile</p>
      </div>
      <LetreroList />
    </div>
  );
}
