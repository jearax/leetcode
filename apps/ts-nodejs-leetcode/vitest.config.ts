import { defineConfig } from 'vitest/config'

const vitestConfig = defineConfig({
	resolve: {
		alias: {
			'@': new URL('./src', import.meta.url).pathname
		}
	},
	test: {
		include: ['test/**/*.test.ts'],
		coverage: {
			provider: 'v8',
			reporter: ['text', 'html'],
			exclude: ['**/_template/**', '**/_demo/**', 'vitest.config.ts']
		},
		watch: true
	}
})

export default vitestConfig
