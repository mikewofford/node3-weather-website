const request = require('request')

// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWlrZXdvZmZvcmQiLCJhIjoiY2p4cXQxeXpmMDFvbzNpcWZuazMwNzFkdCJ9.s65mLUD2M6ysKuNUaqRbRw&limit=1'
//     request({url: url, json: true}, (error, response) => {
//         if (error) {
//             callback('Cannot connect', undefined)
//         } else if (response.body.features.length === 0) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, {
//                 lat: response.body.features[0].center[1],
//                 long: response.body.features[0].center[0],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })
// }


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWlrZXdvZmZvcmQiLCJhIjoiY2p4cXQxeXpmMDFvbzNpcWZuazMwNzFkdCJ9.s65mLUD2M6ysKuNUaqRbRw&limit=1'
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Cannot connect', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                long: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}


module.exports = geocode