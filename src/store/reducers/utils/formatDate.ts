export const formatDate = (date: Date) => {
  return date.toISOString().substring(0, 19).replace('T', ' ');
};
