const inputbox= document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
function addTask(){
    if(inputbox.value === ''){
        alert("You must Write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    //when we write anything and press add it will be saved using saveData()
    saveData();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if( e.target.tagName==="SPAN"){
       e.target.parentElement.remove();
       saveData()
    }
},false);
function saveData(){//saves data even after refresh of website
    localStorage.setItem("data",listcontainer.innerHTML);
}

function show_Task(){//shows saved data after refresh 
listcontainer.innerHTML=localStorage.getItem("data");
}
show_Task();