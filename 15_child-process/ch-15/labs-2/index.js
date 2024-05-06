'use strict'

const { spawn } = require('child_process')

function exercise(command, args) {
	const opts = { stdio: ['ignore', process.stdout, 'pipe'] }
	return spawn(command, args, opts)
}

module.exports = exercise
