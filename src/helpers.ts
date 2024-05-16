export const convertToSlug = (str: string) =>
  str
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with a dash
    .replace(/^-+|-+$/g, '') // Remove leading and trailing dashes
    .replace(/-+/g, '-'); // Replace multiple dashes with a single dash
