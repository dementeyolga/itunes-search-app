export function formatMediaType(type: string) {
  const formatted = type.split('-').join(' ');
  return formatted[0].toUpperCase() + formatted.slice(1);
}
