export function useFormatNumber(value: number): string {
  if (value < 10000) {
    return value.toString();
  }

  const tier = Math.floor(Math.log10(value) / 3);
  const divisor = Math.pow(10, tier * 3);
  const roundedDownValue = Math.floor(value / divisor) * divisor;

  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
  })
    .format(roundedDownValue)
    .toLowerCase();
}
