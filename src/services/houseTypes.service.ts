const houseTypes = [
  { id: 'apartment', label: 'Appartement' },
  { id: 'townhouse', label: 'Tussenwoning' },
  { id: 'corner-house', label: 'Hoekwoning' },
  { id: 'two-under-one-roof', label: '2 onder 1 Kap' },
  { id: 'detached-house', label: 'Vrijstaand' },
];

/* We know this could return synchronously... Please leave it as an async Promise :) */
export const getHouseTypes = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(houseTypes.map((type) => ({ ...type })));
    }, 500);
  });
};
