<div align=center>
  <h1><b>Randix</b></h1>
  <p><b>Randix</b> is <i>a lightweight random</i> library.</p>
</div>

# 🚀 Installation
- Requires **Node.js** version **>=18.0.0** (**18.0.0** or **above**)
```shell
# npm
npm install @axuata/randix

# yarn
yarn add @axuata/randix

# pnpm
pnpm install @axuata/randix
```

# 📝 Example
```typescript
import {Random} from '@axuata/randix';

const random = new Random();
const arr: string[] = ['apple', 'banana']

random.integer(1, 5);      // -> returns a random integer between 1 and 5.
random.float(0, 5);        // -> returns a random float between 0 and 5.
random.string(30, 'latin') // -> returns a random string with specified length and character type.
random.boolean();          // -> returns a random boolean.
random.array(arr);         // -> returns a random element in the specified array.
```

# ⚙️ Functions
### `integer(min: number, max: number): number`
- Returns **a random integer** between `min` and `max`.
### `float(min: number, max: number): number`
- Returns **a random float** between `min` and `max`.
### `string(length: number, type: 'latin' | 'cyrillic' | 'greek'): string`
- Returns **a random string** with specified `length` and `type`.
### `boolean(): boolean`
- Returns **a random boolean**.
### `array(array: any): any`
- Returns **a random value** in **the specified array**.

# 📜 Changelog
## 0.1.0
- Initial Version
## 0.2.0
- Add: Greek to string function