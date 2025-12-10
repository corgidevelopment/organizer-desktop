export function dayToDayName(dayNoEn: number) {
  if (dayNoEn === 0) return 'Sonntag';
  if (dayNoEn === 1) return 'Montag';
  if (dayNoEn === 2) return 'Dienstag';
  if (dayNoEn === 3) return 'Mittwoch';
  if (dayNoEn === 4) return 'Donnerstag';
  if (dayNoEn === 5) return 'Freitag';
  if (dayNoEn === 6) return 'Samstag';
  return `<${dayNoEn}: Not a Weekday>`;
}