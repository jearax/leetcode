const TICKET_REGEX = /^TICKET-\d+ - .+$/
const CONVENTIONAL_REGEX = /^(\w+)(\([^)]+\))?!?: .+$/

const headerTicketPlugin = {
	rules: {
		'header-ticket-or-conventional': (parsed) => {
			const header = parsed.header || ''
			const ok =
				TICKET_REGEX.test(header) || CONVENTIONAL_REGEX.test(header)
			return ok
				? true
				: [false, 'Header must match either "TICKET-<num> - <desc>" or conventional "<type>[(<scope>)][:!]: <desc>"']
		}
	}
}

const commitlintConfig = {
	extends: ['@commitlint/config-conventional'],
	plugins: [headerTicketPlugin],
	rules: {
		'header-ticket-or-conventional': [2, 'always']
	}
}

export default commitlintConfig
