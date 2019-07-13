console.log('Client, bitch!')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#one')
const messageTwo = document.querySelector('#two')


weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch('http://localhost:3000/weather?address=' + encodeURIComponent(location)).then((response) => {
        response.json().then((weather) => {
            if (weather.error) {
                messageOne.textContent = weather.error
            } else {
            messageOne.textContent = weather.location
            messageTwo.textContent = weather.forecast
            }
        })
    })
    
})