const formatDate = (date: string) => {
  return new Date(date).toLocaleString('pt-Br', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });
};

export default formatDate;
