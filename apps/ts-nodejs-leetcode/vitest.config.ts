import { defineConfig } from 'vitest/config'

const vitestConfig = defineConfig({
	resolve: {
		alias: {
			'@': new URL('./src', import.meta.url).pathname
		}
	},
	test: {
		include: ['src/**/*.test.ts', 'test/**/*.test.ts'],
		exclude: ['node_modules', 'dist', '.turbo', '**/_template/**'],
		coverage: {
			provider: 'v8',
			reporter: ['text', 'html'],
			exclude: ['**/_template/**', '**/_demo/**', 'vitest.config.ts']
		},
		watch: true
	}
})

export default vitestConfig
