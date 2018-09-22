const round = float => (float + 0.5) | 0;

const randomInt = (min, max) => {
  return round(randomFloat(min, max));
};

const randomFloat = (min, max) => {
  return Math.random() * (max - min) + min;
};

export { randomInt, randomFloat };
