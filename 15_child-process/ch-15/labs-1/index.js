'use strict'
const { spawn } = require('child_process')
function exercise(myEnvVar) {
	const cleanEnv = Object.assign({}, process.env)
	for (const key of Object.keys(cleanEnv)) {
		if (key !== 'MY_ENV_VAR') {
			delete cleanEnv[key]
		}
	}
	cleanEnv.MY_ENV_VAR = myEnvVar
	return spawn(process.argv[0], ['child.js'], {
		stdio: 'inherit',
		env: cleanEnv,
	})
}

module.exports = exercise
