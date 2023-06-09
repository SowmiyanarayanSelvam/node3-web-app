const request = require('request')

const forecast = (lat,long,callback)=>{
    
const url = 'http://api.weatherstack.com/current?access_key=943b22f2a797dfdac1ef48321ee1e02d&query='+lat+','+long

    request({url},(error,response)=>{
        if(error){
            callback('not connected to the internet',undefined)
    }
    else{
        const data = JSON.parse(response.body)
        callback(undefined,{temperature:data.current.temperature})
    }
})
}

module.exports = forecast
