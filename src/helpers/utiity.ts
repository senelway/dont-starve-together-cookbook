export const arrayToggle = <T>(arr: T[], value: T) => (
  arr.includes(value) ? arr.filter(q => q !== value) : [...arr, value]
);
