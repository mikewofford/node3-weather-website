// THIS SHOWS HOW TO MAKE A REQUEST W/O THE REQUEST MODULE
// DO NOT USE
const https = require('https')

const url = 'https://api.darksky.net/forecast/289f15b2809300ee8326602d954674cb/40,-75?units=us&lang=en'

const request = https.request(url, () => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()