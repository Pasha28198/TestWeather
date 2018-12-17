export default function (name = 'Kiev') {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=8dab97e7587431e1ce62148b464378d6`, {
        method: 'GET'
    }).then(res => res.json())
}