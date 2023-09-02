const { promisify } = require('util')

function print(error, content) {
    if (error) {
        console.log(error)
        return
    }
    console.log(content)
}

function callback(cb) {
    console.log(cb)
    setTimeout(() => {
        console.log('something...')
        cb(null, 'success')
    }, 500)
}

// callback(print)

const promise = promisify(callback)
promise()
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
