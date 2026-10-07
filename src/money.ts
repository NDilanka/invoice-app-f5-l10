export type Line = { amount: number };

// ISO 4217 currencies that do not use the default 2 minor-unit digits.
const CURRENCY_DECIMALS: Record<string, number> = {
  // 0 decimal places
  BIF: 0, CLP: 0, DJF: 0, GNF: 0, ISK: 0, JPY: 0, KMF: 0, KRW: 0,
  PYG: 0, RWF: 0, UGX: 0, VND: 0, VUV: 0, XAF: 0, XOF: 0, XPF: 0,
  // 3 decimal places
  BHD: 3, IQD: 3, JOD: 3, KWD: 3, LYD: 3, OMR: 3, TND: 3,
  // 4 decimal places
  CLF: 4, UYW: 4,
};

export function formatTotal(lines: Line[], currency: string): string {
  const decimals = CURRENCY_DECIMALS[currency.toUpperCase()] ?? 2;
  const sum = lines.reduce((total, line) => total + line.amount, 0);
  return sum.toFixed(decimals);
}
