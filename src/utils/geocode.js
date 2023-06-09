const request = require('request')

const geocode = (address,callback)=>{
    const url = 'http://api.positionstack.com/v1/forward?access_key=6b17a3bfdb0998e6af4da61d56e76809&query='+address

    request({url},(error, response)=>{
        if(error){
            callback('Unable to reach location services')
        }
        else if(response === undefined){
            callback('place doesn\'t exist')
        }
        else{
            const loc = JSON.parse(response.body)
            // console.log(loc)
            callback({
                latitude: loc.data[0].latitude,
                longitude: loc.data[0].longitude,
                location: loc.data[0].label})
        }
    })
}

module.exports=geocode