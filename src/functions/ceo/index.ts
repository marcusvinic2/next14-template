export const transformSlug = (str: string): string => {
  if (str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u03ef]/, '')
      .replace(/[^a-zA-Z0-9]/g, '-')
      .replace(/^-+/g, '')
      .replace(/-+$/g, '')
      .replace(/-{2,}/g, '');
  }
  return str;
};
