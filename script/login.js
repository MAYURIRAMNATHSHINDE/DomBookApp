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
getData();
let loginDataArray=[];
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
    }
    else{
        alert("Invalid email")
    }
    
}

//
//

