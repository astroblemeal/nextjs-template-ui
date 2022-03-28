export function getQueryString(searchParams: [], { excludes = [] } = {}) {
  return Array.from(searchParams)
    .filter(param => !excludes.includes(param[0]))
    .map((param: any) => param.join('='))
    .join('&')
}
