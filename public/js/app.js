console.log('Client side javascript file is loaded!')

// fetch('https://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })

// fetch('http://localhost:3000/weather?address=?').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error)
//         {
//             console.log(data.error)
//         }
//         console.log(data.temperature)
//         console.log(data.location)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const response1 = document.querySelector('#response1')
const response2 = document.querySelector('#response2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    // console.log(location)
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            response1.textContent = data.error
        }
        response1.textContent = data.temperature
        response2.textContent = data.location
        console.log(data.location)
    })
}) 
})