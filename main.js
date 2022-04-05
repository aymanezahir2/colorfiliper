// the all of h3
const title = document.querySelectorAll(".type-color h3");
const flipe = document.getElementById("echange");

title.forEach(function (item){
    item.addEventListener('click',function(curr){
        
        if(!item.classList.contains("left"))
        {
            if(            item.parentElement.getElementsByClassName("left")[0] == null           ){
                item.classList.add("left")
            }else{
                item.parentElement.getElementsByClassName("left")[0].classList.remove("left")
                item.classList.add("left")
            }
            
            
        }
    
    })
})
const color = ["red","green","#000","rgb(250,45,68)","teal"]
console.log(document.getElementById("aymane"));

const change = document.getElementById("echange");
const button = document.getElementsByClassName("btn-change")[0];


function simple(){
    const randomNumber = Math.floor(Math.random() * (color.length ))
    change.textContent=color[randomNumber]
    document.body.style.backgroundColor=color[randomNumber]
}
function hex(){
    const hexRandom = Math.floor(Math.random() * 10e6).toString(16)
    change.textContent=`#${hexRandom}`
    document.body.style.backgroundColor=`#${hexRandom}`
}
document.getElementById("s").addEventListener("click",function(){
    button.addEventListener("click",function(){
        simple()
    })
})
document.getElementById("h").addEventListener("click",function(){
    button.addEventListener("click",function(){
        hex()
    })
})