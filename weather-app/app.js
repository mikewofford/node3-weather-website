// console.log('Starting')

// setTimeout(() => {
//     console.log('2 second timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0 second timer')
// }, 0)

// console.log('Stopping')

const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const url = 'https://api.darksky.net/forecast/289f15b2809300ee8326602d954674cb/37.8267,-122.4233?units=us&lang=en'

// request({url: url}, (error, response) => {
//     const data = JSON.parse(response.body)
//     console.log(data.currently)
// })
// same as below except json: true auto parses

//MOVED TO OTHER FILE AND USED CALLBACK
// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//     //console.log(response.body.currently)
//     console.log(response.body.daily.data[0].summary)
//     console.log('It is currently ' + response.body.currently.temperature + ' degrees out.')
//     console.log('There is a ' + response.body.currently.precipProbability + '% chance of rain.')
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWlrZXdvZmZvcmQiLCJhIjoiY2p4cXQxeXpmMDFvbzNpcWZuazMwNzFkdCJ9.s65mLUD2M6ysKuNUaqRbRw&limit=1'

//MOVED TO OTHER FILE AND USED CALLBACK
// request({url: geocodeURL, json: true}, (error, response2) => {
//     if (error) {
//         console.log('Unable to connect')
//     } else if (response2.body.features.length === 0){
//         console.log('Unable to find location')
//     } else {    
//     const long = response2.body.features[0].center[0]
//     const lat = response2.body.features[0].center[1]
//     console.log(long, lat)
//     }
// })


// THIS WORKS, BUT MORE CONCISE BELOW
// const address = process.argv[2]
// if (!address) {
//     console.log('Provide address')
// } else if (address === '') {
//     address = place
//     return place
// }

// geocode(address, (error, data) => {
//     if (error) {
//         return console.log(error)
//     }
//     forecast(data.long, data.lat, (error, forecastData) => {
//         if (error) {
//             return console.log(error)
//         }

//         console.log(data.location)
//         console.log(forecastData)
//       })
// })

//SAME AS BELOW W/O DATA OBJECT REFACTORED
// const address = process.argv[2]
// if (!address) {
//     console.log('Provide address')
//     // This actually doesn't show up. Instead, second callback of geocode.js
// } else {
//     geocode(address, (error, data) => {
//         if (error) {
//             return console.log(error)
//         }
//         forecast(data.long, data.lat, (error, forecastData) => {
//             if (error) {
//                 return console.log(error)
//             }
//             console.log(data.location)
//             console.log(forecastData)
//           })
//     })
// }

const address = process.argv[2]
if (!address) {
    console.log('Provide address')
    // This actually doesn't show up. Instead, second callback of geocode.js
} else {
    geocode(address, (error, {long, lat, location}) => {
        if (error) {
            return console.log(error)
        }
        forecast(long, lat, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
          })
    })
}

