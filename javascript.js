let size = 2;
const container = document.querySelector(".container");
function removeGrid(){
        const divs = document.querySelectorAll('.square');
        divs.forEach(div =>{
            div.remove();
        })
}
let rgbColor;
function randomBgColor(){
    let x = Math.floor(Math.random()*256);
    let y = Math.floor(Math.random()*256);
    let z = Math.floor(Math.random()*256);
    rgbColor = "rgb("+ x +","+ y +","+ z +")";
}

function createGrid(){
        
        container.setAttribute('style',`grid-template-columns: repeat(${size},1fr); grid-template-rows: repeat(${size},1fr);`);

        for(var i = 0; i<size; i++){
            for(var j = 0; j<size; j++){
                const div = document.createElement('div');
                div.classList.add("square");
                container.appendChild(div);
            }
        }
        const divs = document.querySelectorAll('.square');
        divs.forEach(div =>{
        div.addEventListener('mouseover',function(){
            randomBgColor();
            div.style.background=rgbColor;
        })
        }     
)
}

createGrid();
function start(){
    do{
    size = prompt('Enter the grid size number!(Max is 100)',"Enter here");
    }while(size<0 || size>100 || isNaN(size)==true);
    removeGrid();
    createGrid();
}