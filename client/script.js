//edit your code 
fetch('http://localhost:30002/user?name=yousra',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})

fetch('http://localhost:30002/user/you',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({message: "hello", name:'yousra'}),

}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})