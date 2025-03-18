export class Random {
  /**
   * Returns **a random integer** between `min` and `max`.
   *
   * @param {number} min - Minimum integer.
   * @param {number} max - Maximum integer.
   * @returns {number} - Generated integer.
   */
  integer(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Returns **a random float** between `min` and `max`.
   *
   * @param {number} min - Minimum float.
   * @param {number} max - Maximum float.
   * @returns {number} - Generated float.
   */
  float(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  /**
   * Returns **a random string** with specified `length` and `type`.
   *
   * @param {number} length - String length.
   * @param {'latin' | 'cyrillic'} type - String type.
   * @returns {string} - Generated string.
   */
  string(length: number, type: 'latin' | 'cyrillic'): string {
    let result: string = '';

    const charSets: Record<'latin' | 'cyrillic', string[]> = {
      latin: [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
      ],
      cyrillic: [
        'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я',
        'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'
      ]
    }

    for (let i = 0; i < length; i++) {
      const setLength: number = charSets[type].length - 1;

      if (setLength === 0) break;

      result += charSets[type][this.integer(0, setLength)];
    }

    return result;
  }

  /**
   * Returns **a random boolean**.
   *
   * @returns {boolean} - Generated boolean.
   */
  boolean(): boolean {
    return this.integer(0, 1) === 1;
  }

  /**
   * Returns **a random value** in **the specified array**.
   *
   * @param {any} array - Array.
   * @returns {any} - Generated value.
   */
  array(array: any): any {
    const randomIndex: number = this.integer(0, array.length - 1);

    return array[randomIndex];
  }
}