let title=document.getElementById("title").value;
let author=document.getElementById("author").value;
let category=document.getElementById("selectCategory").value;
let bookObj={title,author,category}

let postBtn=document.createElement("button");
    postBtn.textContent = "Post Product";
    document.body.appendChild(postBtn);
    postBtn.addEventListener("click",async function(){
        let res=await fetch("https://assorted-buttoned-pike.glitch.me/books",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({});
        })
    })