const mapping: Record<string, string> = {
  businesses: 'business',
  costs: 'cost',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
