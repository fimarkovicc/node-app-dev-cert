class OddError extends Error {
	constructor(message = '') {
		super()
		this.code = 'ERROR_NOT_EVEN'
		this.message = message
	}
	get name() {
		return 'OddError ' + this.code
	}
}

function fn() {
	let a = 3
	let b = 4

	let sum = a + b

	if (sum % 2) {
		throw new OddError('the number is not even')
	}
}
// fn()

function fn2() {
	// throw Error('error')
	try {
		throw newError('some error')
	} catch (e) {
		console.log(e)
	}

	console.log('end')
}
// fn2()

function fn3() {
	return new Promise((resolve, reject) => {
		// resolve('resolved')
		reject('error')
	})
}

// fn3()
// 	.then((res) => console.log(res))
// 	.catch((err) => console.log(err))
// console.log('end')

async function fn4() {
	try {
		// const res = await fetch('https://google.com')
	} catch (e) {
		throw new Error()
	}
}
fn4()
	.then((res) => console.log('response'))
	.catch((e) => console.log('error'))

fn4()
