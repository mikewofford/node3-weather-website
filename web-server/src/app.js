const express = require('express')
const path = require('path')
//const weather = require('./weather-app/forecast')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000


console.log(__dirname)

// Define paths for express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('views', viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)

// Setup static dir to serve
app.use(express.static(publicDir))

// html should live in its own file
// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>')
// })

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Mike'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Mike W'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'HELP, Bitch!',
        title: 'Help',
        name: 'Mike'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Enter address'
        })
    }

    geocode(req.query.address, (error, {long, lat, location} = {}) => {
        if (error) {
            return res.send({error})
        }
        forecast(long, lat, (error, forecastData) => {
            if (error) {
                return res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'Enter search term'
        })
    } // could also add else instead of return
    console.log(req.query)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        title: '404 Boyz',
        error: 'Fuck yo help'
    })
})

app.get('*', (req, res) => {
    res.render('error', {
        title: '404 Error',
        error: 'No fuckin page, bitch'
    })
})

app.listen(port, () => {
    console.log('Server started on port ' + port)
})
