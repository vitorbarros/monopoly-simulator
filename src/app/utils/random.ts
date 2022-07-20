export const boolRandom = (percentage: number) => {
  const total = 100;

  const result = Math.floor(Math.random() * total) + 1;

  return result > percentage;
};
