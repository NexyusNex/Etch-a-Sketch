let size = 50;
let click = false;
const container = document.querySelector(".container");
function removeGrid(){
        const divs = document.querySelectorAll('.square');
        divs.forEach(div =>{
            div.remove();
        })
}
let rgbColor;
let percent = 0;
function randomBgColor(){
    let x = Math.floor(Math.random()*256);
    let y = Math.floor(Math.random()*256);
    let z = Math.floor(Math.random()*256);
    x=(x-((x/100)*percent));
    y=(y-((y/100)*percent));
    z=(z-((z/100)*percent));
    rgbColor = "rgb("+ x +","+ y +","+ z +")";
    percent+=10;
}

function createGrid(){
        
        container.setAttribute('style',`grid-template-columns: repeat(${size},1fr); grid-template-rows: repeat(${size},1fr);`);
        percent=0;
        for(var i = 0; i<size; i++){
            for(var j = 0; j<size; j++){
                const div = document.createElement('div');
                div.classList.add("square");
                container.appendChild(div);
            }
        }
        const divs = document.querySelectorAll('.square');
        divs.forEach(div =>{
        div.addEventListener('mouseover',colorSquare);
        }     
)
}
function colorSquare(){
    if(click){
        randomBgColor();
       this.style.background=rgbColor;
    }
}
createGrid();
function start(){
    do{
    size = prompt('Enter the grid size number!(Max is 100)',"Enter here");
    }while(size<0 || size>100 || isNaN(size)==true);
    removeGrid();
    createGrid();
}

container.addEventListener('mousedown',function(e){
    e.preventDefault();
    click = true;
});
container.addEventListener('mouseup',function(e){
    e.preventDefault();
    click = false;
});