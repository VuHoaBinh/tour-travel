export const formatNumber = (number?: number, fractionDigits?: number) => {
  return (number ?? 0).toLocaleString(undefined, {
    minimumFractionDigits: fractionDigits ?? 2,
    maximumFractionDigits: fractionDigits ?? 2,
  });
};
