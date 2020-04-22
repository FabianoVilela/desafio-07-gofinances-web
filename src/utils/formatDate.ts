const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
  timeZone: 'America/sao_paulo',
};

const formatDate = (value: Date): string =>
  Intl.DateTimeFormat('pt-BR', options).format(new Date(value));

export default formatDate;
