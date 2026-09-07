# Problem template (TS)

Each problem lives in `src/problems/<id>-<slug>/` with this shape:

```ts
// solution.ts
export function solve(input: Input): Output {
	// ...
}
```

```ts
// solution.test.ts
import { describe, it, expect } from 'vitest'
import { solve } from './solution'

describe('<id>-<slug>', () => {
	it('example 1', () => {
		expect(solve(/* input */)).toEqual(/* expected */)
	})
})
```
