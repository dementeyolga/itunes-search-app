export function formatMediaType(type: string) {
  if (typeof type !== 'string') return '';

  if (type.length === 0) return type;

  const formatted = type.split('-').join(' ');
  return formatted[0].toUpperCase() + formatted.slice(1);
}
