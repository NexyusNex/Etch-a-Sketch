const container = document.querySelector(".container");
for(var i = 0; i<2; i++){
    for(var j = 0; j<2; j++){
        const div = document.createElement('div');
        div.classList.add("square");
        div.setAttribute("id","sqid");
        container.appendChild(div);
    }
}
const divs = document.querySelectorAll('.square');
divs.forEach(div =>{
    div.addEventListener('mouseover',function(){
        div.style.backgroundColor='blue';
    })
    }     
)
