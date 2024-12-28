let title=document.getElementById("title").value;
let author=document.getElementById("author").value;
let category=document.getElementById("selectCategory").value;
let bookObj={title,author,category}

let selectCategory=document.getElementById("selectCategory");
selectCategory.addEventListener("change",function(){
    fetch('https://assorted-buttoned-pike.glitch.me/books',{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(bookObj)
})
})