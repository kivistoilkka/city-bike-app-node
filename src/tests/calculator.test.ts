import calculator from '../calculator';
const multiplicator = calculator.multiplicator;

test('multiplication by 0', () => {
  const result = multiplicator(1, 0);

  expect(result).toBe(0);
});

test('multiplication by 1', () => {
  const result = multiplicator(1, 5);

  expect(result).toBe(5);
});

test('multiplicate 2 and 5', () => {
  const result = multiplicator(2, 5);

  expect(result).toBe(10);
});
