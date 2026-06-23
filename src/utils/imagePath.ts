const IMAGE_MAP: Record<number, string> = {
  1: 'LT-001_2026-04-08.jpg',
  2: 'LT-002_2026-04-08.jpeg',
  3: 'LT-003_2026-04-08.jpeg',
  4: 'LT-004_2026-04-08.jpeg',
  6: 'LT-006_2026-04-08.jpeg',
  7: 'LT-007_2026-04-08.jpeg',
  8: 'LT-008_2026-04-08.jpeg',
  9: 'LT-009_2026-04-08.jpeg',
  10: 'LT-010_2026-04-08.jpeg',
  11: 'LT-011_2026-04-09.jpeg',
  12: 'LT-012_2026-04-08.jpeg',
  13: 'LT-013_2026-04-08.jpeg',
  14: 'LT-014_2026-04-14.jpeg',
  16: 'LT-016_2026-04-08.jpeg',
};

export function getImagePath(id: number): string | null {
  const file = IMAGE_MAP[id];
  return file ? `/imagenes/${file}` : null;
}
