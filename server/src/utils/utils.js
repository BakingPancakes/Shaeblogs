export const createUUID = () => (211 + 12 * new Date().getTime()) % 100000000;

// console.log(createUUID());
