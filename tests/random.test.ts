import {beforeAll, describe, expect, test} from "vitest";
import {Random} from "../src";

describe('Random class', () => {
  let random: Random;

  beforeAll(() => {
    random = new Random();
  });

  test('Should output random number which is 0~5 25 times', () => {
    let randomNumber: number;

    for (let i = 0; i < 25; i++) {
      randomNumber = random.integer(0, 5);
      console.log(randomNumber);

      expect(randomNumber).toBeLessThanOrEqual(5);
      expect(randomNumber).toBeGreaterThanOrEqual(0);
    }
  });

  test('Should output random float number which is 0~5 25 times', () => {
    let randomNumber: number;

    for (let i = 0; i < 25; i++) {
      randomNumber = random.float(0.0, 5.0);
      console.log(randomNumber);

      expect(randomNumber).toBeLessThanOrEqual(5);
      expect(randomNumber).toBeGreaterThanOrEqual(0);
    }
  });

  test('Should output random string with specified length', () => {
    const result1: string = random.string(30, 'latin');
    const result2: string = random.string(40, 'cyrillic');
    const result3: string = random.string(50, 'greek');

    console.log(result1);
    console.log(result2);
    console.log(result3);
    expect(result1.length).toBe(30);
    expect(result2.length).toBe(40);
    expect(result3.length).toBe(50);
  });

  test('Should output random boolean', () => {
    for (let i = 0; i < 10; i++) {
      const result: boolean = random.boolean();

      console.log(result);
      expect(result === true || result === false).toBeTruthy;
    }
  });

  test('Should output random array element', () => {
    const array1: string[] = ['a', 'b', 'c'];
    const array2: number[] = [0, 1, 2, 3, 4, 5];

    for (let i = 0; i < 50; i++) {
      let result1: string = random.array(array1);
      let result2: number = random.array(array2);
      console.log(result1);
      console.log(result2);

      expect(result1 === 'a' || result1 === 'b' || result1 === 'c').toBeTruthy;
      expect(result2 === 0 || result2 === 1 || result2 === 2 || result2 === 3 || result2 === 4 || result2 === 5).toBeTruthy;
    }
  });
});