getData();
async function getData(){
    try{
        console.log("clicked")
        let res=await fetch("https://sequoia-clover-porch.glitch.me/login");
        console.log("succ")
        let data=await res.json();
        return data;
        //console.log(data)

    }
    catch(err)
    {
        console.log("Error occured:",err)
    }

}

let loginDataArray=JSON.parse(localStorage.getItem("userLogin"))||[];
let loginData=[];
getData().then((data)=>{
    loginDataArray=[...data];
    console.log(loginDataArray)
    let form=document.getElementById("form");
    form.addEventListener("submit",function(e){
        e.preventDefault();
        let emailInput=document.getElementById("email").value;
        let passwordInput=document.getElementById("password").value;
        handleLogin(emailInput,passwordInput);
    })

})

function handleLogin(){
    let user=loginDataArray.find((ele)=>ele.email==email&&ele.password==password);
    if(user==true)
    {
        alert("Logged in as Admin.")
        window.location.href="./admin.html"
        let loginData=localStorage.setItem("userLogin",JSON.stringify(loginData))
    }
    else{
        alert("Invalid email")
    }
    
}



