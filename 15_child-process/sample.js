setInterval(() => {
	console.log('working')
}, 1000)

setTimeout(() => {
	process.exit()
}, 5000)
