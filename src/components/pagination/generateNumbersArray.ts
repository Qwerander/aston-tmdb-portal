export function generateNumbersArray(num: number): number[] {
  const numbersArray: number[] = [];
  for (let i = 1; i <= num; i++) {
    numbersArray.push(i);
  }
  return numbersArray;
}
