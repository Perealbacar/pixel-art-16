const canvasCont = document.querySelector(".canvas-container")

let paintLogic = false;
let color = colorSelection();

let canvasSize = getCanvasSize();

function getCanvasSize(){
   let size = prompt("What is the canvas size?");

   if(size > 64){
    return 64
   }

   return size;
   
}

function getMatrice(){
    
    for(a = 0; a < canvasSize; a++){

        canvasCont.appendChild(getLineDiv());
    }
}

function getBoxDiv(){
    const boxDiv = document.createElement("div");
    boxDiv.className = "box";

    return boxDiv;
}

function getLineDiv(){
    const boxLine = document.createElement("div");    
    boxLine.className = "line";

    for(i = 0; i < canvasSize; i++){
        boxLine.appendChild(getBoxDiv());
    }

    return boxLine;
}


function colorSelection(){

    return "black";
}

canvasCont.addEventListener("mousedown", function(e){
    
    e.preventDefault();    
    e.target.style.backgroundColor = color;
    paintLogic = true;
    

});

canvasCont.addEventListener("mouseover", function (e){   
    
    if(paintLogic == true){
        e.target.style.backgroundColor = color;
    }
    
})

canvasCont.addEventListener("mouseup", function(e){
    
    paintLogic = false;
    
});

getMatrice();