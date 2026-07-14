import sortCharacters from '../sortCharacters';

test('sort heroes by different health', () => {
  const inputList = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expectedList = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortCharacters(inputList);
  expect(result).toEqual(expectedList);
});

test('sort empty array', () => {
  expect(sortCharacters([])).toEqual([]);
});
