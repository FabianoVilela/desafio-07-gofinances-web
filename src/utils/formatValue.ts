const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-PR', { style: 'currency', currency: 'BRL' }).format(
    value || 0,
  );

export default formatValue;
