let size = 2;
const container = document.querySelector(".container");
container.setAttribute('style',`grid-template-columns: repeat(${size},1fr); grid-template-columns: repeat(${size},1fr);`);

for(var i = 0; i<size; i++){
    for(var j = 0; j<size; j++){
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
function start(){
    size = prompt('Enter the grid size number!',"Enter here");
}