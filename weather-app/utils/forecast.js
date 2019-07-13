const request = require('request')

// SAME AS BELOW W/O OBJECT RESTRUCTURING
// const forecast = (long, lat, callback) => {
//     const url = 'https://api.darksky.net/forecast/289f15b2809300ee8326602d954674cb/' + lat + ',' + long + '?units=us&lang=en'
// request({url: url, json: true}, (error, response) => {
//         if (error) {
//             callback('Unable to connect', undefined)
//         } else if (response.body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//         //console.log(response.body.currently)
//         callback(undefined, response.body.daily.data[0].summary + '. It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
//         }
//     })
// }    

const forecast = (long, lat, callback) => {
    const url = 'https://api.darksky.net/forecast/289f15b2809300ee8326602d954674cb/' + lat + ',' + long + '?units=us&lang=en'
request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
        //console.log(response.body.currently)
        callback(undefined, body.daily.data[0].summary + '. It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}    


module.exports = forecast