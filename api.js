const id=document.getElementById("name");
const username=document.getElementById("username");
const eamils=document.getElementById("email");


fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
.then((data)=>{
    for(let i=0;i<data.length;i++){
        let name=document.createElement("li");
        name.textContent=data[i].name;
        id.appendChild(name);

        let user=document.createElement("li");
        user.textContent=data[i].username;
        username.appendChild(user);

        let email=document.createElement("li");
        email.textContent=data[i].email;
        eamils.appendChild(email);

    }
})
.catch((error)=>console.log(error));


   
