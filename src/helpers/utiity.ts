export const arrayToggle = (arr: string[], value: string) => (
  arr.includes(value) ? arr.filter(q => q !== value) : [...arr, value]
);
