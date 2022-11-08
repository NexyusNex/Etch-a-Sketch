const container = document.querySelector(".container");
for(var i = 0; i<100; i++){
    for(var j = 0; j<100; j++){
        const div = document.createElement('div');
        div.classList.add("square");
        container.appendChild(div);
    }
}