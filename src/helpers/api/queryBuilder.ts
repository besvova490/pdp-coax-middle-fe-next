export function queryBuilder(params?: Record<string, string | number | null | boolean | undefined | string[]>) {
  if (!params) return "";

  const query = new URLSearchParams();

  for (const key in params) {
    // eslint-disable-next-line no-undefined
    if (params[key]) {
      query.set(key, `${params[key]}`);
    }
  }

  return query.toString();
}
