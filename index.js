const colors = ["green", "red", "blue", "yellow", "Purple" , "white", "black"]
const color = document.querySelector(".color")
const btn = document.getElementById("btn")
btn.addEventListener ("click", function(){
    
document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
color.textContent = document.body.style.backgroundColor
})