export interface Letrero {
  id: number;
  n_foto: number | null;
  foto: string | null;
  ubicacion: string | null;
  n_letrero_proveedor: number | null;
  imagen_georreferencia: string | null;
  tipo: string | null;
  tema: string | null;
  eslogan: string | null;
  marca: string | null;
  localidad: string | null;
  transito: string | null;
  detalles: string | null;
  ancho: number | null;
  alto: number | null;
  troquel: string | null;
  km_referencia: number | null;
  ruta: string | null;
  comuna: string | null;
  region: string | null;
  proveedor: string | null;
  rut_proveedor: string | null;
  desde: string | null;
  hasta: string | null;
  renovacion_automatica: string | null;
  vigencia: string | null;
  aviso_termino_dias: number | null;
  fecha_aviso_termino: string | null;
  monto_arriendo_2025: number | null;
  arriendo_uf: number | null;
  oc: string | null;
  registro_caminero: string | null;
  estado: 'Vigente' | 'No vigente';
}

export function getEstadoEfectivo(letrero: Letrero): 'Vigente' | 'No vigente' {
  if (letrero.renovacion_automatica?.toUpperCase() === 'SI') {
    return 'Vigente';
  }
  return letrero.estado;
}
