console.log('Helloo')
let form = document.getElementById('myForm')
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    getData()
    form.reset()
    // console.log(document.getElementById('address').value)
})

// async --> function return promise
// await --> make wait till promise finish
let getData = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/weather?address='+address) // json
        const data =  await res.json() // object
        console.log(data)
        if(data.error){
            document.getElementById('error').innerText=data.error
            document.getElementById('forecast').innerText = ''
            document.getElementById('location').innerText = ''
        }
        else{
            document.getElementById('forecast').innerText = data.forecast
            document.getElementById('location').innerText = data.location
            document.getElementById('error').innerText= ''
        }
    }
    catch(e){
        console.log(e)
    }
}