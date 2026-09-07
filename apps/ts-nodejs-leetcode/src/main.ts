/**
 * LeetCode practice entry point.
 *
 * Run with hot reload via:
 *   pnpm dev:run
 *
 * Each problem lives in its own folder under `src/problems/<id>-<slug>/`
 * with `solution.ts` and `solution.test.ts`. This file is the entry point
 * for ad-hoc demos — point it at any problem you want to inspect.
 */
import { solve as solveTwoSum } from './problems/_demo/solution.js'

const input = [2, 7, 11, 15]
const target = 9

console.log('two-sum input:', input, 'target:', target)
console.log('two-sum output:', solveTwoSum(input, target))

console.log(918)
